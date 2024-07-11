import {useEffect, useState} from "react";
import '../../Custom.css'
import * as React from 'react';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver';
import {DataGrid} from "@mui/x-data-grid";
import {Link, useNavigate} from "react-router-dom";
import {
    Box,
    Button,
    Container, FormControl,
    Grid,
    MenuItem,
    TextField,

} from "@mui/material";
import NavbarAdmin from "../compoment/NavbarAdmin";
import NavbarAdminSecond from "../compoment/NavbarAdminSecond";
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Paper from "@mui/material/Paper";
import {
    buttonTheme,
    gridStyle,
} from "../../reusable/ReusableStyles";

import {
    getListCategory,
    getListGroupProduct,
    getListLocation,
    getListProduct,
    getListProperties,
    getListTrademark,
    getListUnit, getSearchCategory,
    getSearchDirectSales, getSearchGroupProduct,
    getSearchInventory, getSearchLocation,
    getSearchProductActive,
    getSearchProductId,
    getSearchProductName, getSearchTrademark
} from "../api/ApiGet";
import {
    postSaveGroupProduct,
    postSaveLocation,
    postSaveProduct,
    postSaveProperties,
    postSaveTrademark, postSaveUnit
} from "../api/ApiPost";
import {ReusableRadioFive, ReusableRadioFour, ReusableRadioThree} from "../../reusable/ReusableRadio";
import {ReusableSelect} from "../../reusable/ReusableSelect";
import {deleteProduct} from "../api/ApiDelete";
import DeleteIcon from "@mui/icons-material/Delete";
import {ModalProductSave} from "../../reusable/ModalProductSave";
import {ModalFormSmall} from "../../reusable/ModalFormSmall";

function FormProduct() {
    useEffect(() => {
        onListProduct();
        onListGroupProduct();
        onListTrademark();
        onListLocation();
        onListProperties();
        onListUnit();
        onListCategory();
    }, []);

    const navigate = useNavigate()

    const columns = [
        {
            field: 'product_id',
            headerName: 'Mã hàng',
            width: 100,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column',
            renderCell: (params) => `HH00${params.value}`
        }, {
            field: 'file',
            headerName: 'Ảnh',
            width: 100,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column',
            renderCell: (params) => (
                <img src={`data:image/jpeg;base64,${params.value}`} alt="Product"
                     style={{width: 50, height: 50, borderRadius: '30%'}}/>
            ),
        }, {
            field: 'product_name',
            headerName: 'Tên hàng',
            width: 230,
            headerAlign: 'center',
            headerClassName: 'header-column'
        }, {
            field: 'price',
            headerName: 'Giá bán',
            width: 150,
            align: 'right',
            headerAlign: 'center',
            headerClassName: 'header-column'
        }, {
            field: 'capital_price',
            headerName: 'Giá vốn',
            width: 150,
            align: 'right',
            headerAlign: 'center',
            headerClassName: 'header-column'
        }, {
            field: 'inventory',
            headerName: 'Tồn kho',
            width: 90,
            align: 'right',
            headerAlign: 'center',
            headerClassName: 'header-column'
        }, {
            field: 'group_product_name',
            headerName: 'Nhóm hàng',
            minWidth: 130,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column'
        }, {
            field: 'trademark_name',
            headerName: 'Thương hiệu',
            minWidth: 130,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column'
        }, {
            field: 'location_name',
            headerName: 'Vị trí',
            minWidth: 130,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column'
        }, {
            field: 'weight',
            headerName: 'Trọng lượng',
            minWidth: 130,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column'
        }, {
            field: 'properties_name',
            headerName: 'Thuộc tính',
            minWidth: 130,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column'
        }, {
            field: 'unit_name',
            headerName: 'Đơn vị',
            minWidth: 130,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column'
        }, {
            field: 'edit',
            headerName: 'Edit',
            sortable: false,
            width: 100,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column',
            renderCell: (params) => (<strong>
                <Link to={`/edit/${params.id}`}><EditIcon/></Link>
            </strong>),

        }, {
            field: 'delete',
            headerName: 'Delete',
            sortable: false,
            width: 100,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column',
            renderCell: (params) => (<strong>
                <DeleteIcon sx={{color: '#b71c1c'}}
                            onClick={() => onDeleteProduct(params.id)}
                />
            </strong>),
        },];
    const [errors, setErrors] = useState([])
    const [value, setValue] = React.useState('1');
    const [anchorElProduct, setAnchorElProduct] = useState(null);
    const openProduct = Boolean(anchorElProduct);
    const [openNewProduct, setOpenNewProduct] = React.useState(false);
    const [openNewGroupProduct, setOpenNewGroupProduct] = React.useState(false);
    const [openNewTrademark, setOpenNewTrademark] = React.useState(false);
    const [openNewLocation, setOpenNewLocation] = React.useState(false);
    const [openNewProperties, setOpenNewProperties] = React.useState(false);
    const [openNewUnit, setOpenNewUnit] = React.useState(false);
    const [listProduct, setListProduct] = useState([]);
    const [listGroupProduct, setListGroupProduct] = useState([]);
    const [listTrademark, setListTrademark] = useState([]);
    const [listLocation, setListLocation] = useState([]);
    const [listProperties, setListProperties] = useState([]);
    const [listUnit, setListUnit] = useState([]);
    const [listCategory, setListCategory] = useState([]);
    const [productData, setProductData] = useState({
        productName: '',
        price: 0,
        capitalPrice: 0,
        inventory: 0,
        groupProductId: '',
        trademarkId: '',
        locationId: '',
        weight: 0,
        propertiesId: '',
        categoryId: '',
        unitId: '',
        directSales: false,
        file: null
    });
    const [groupProductSave, setGroupProductSave] = useState({
        groupProductName: ''
    })
    const [trademarkSave, setTrademarkSave] = useState({
        trademarkName: ''
    })
    const [locationSave, setLocationSave] = useState({
        locationName: ''
    })
    const [propertiesSave, setPropertiesSave] = useState({
        propertiesName: ''
    })
    const [unitSave, setUnitSave] = useState({
        unitName: ''
    })
    const [searchProductId, setSearchProductId] = useState({
        productId: ''
    })
    const [searchProductName, setSearchProductName] = useState({
        productName: ''
    })
    const [searchInventory, setSearchInventory] = useState({
        inventoryId: ''
    })
    const [searchDirectSales, setSearchDirectSales] = useState({
        directSalesId: ''
    })
    const [searchActive, setSearchActive] = useState({
        activeId: ''
    })
    const [searchGroupProduct, setSearchGroupProduct] = useState({
        groupProductId: ''
    })
    const [searchTrademark, setSearchTrademark] = useState({
        trademarkId: ''
    })
    const [searchLocation, setSearchLocation] = useState({
        locationId: ''
    })
    const [searchCategory, setSearchCategory] = useState({
        categoryId: ''
    })

    const onListProduct = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListProduct(token);
            setListProduct(data);
        } catch (error) {
            navigate("/");
        }
    };
    const onListGroupProduct = async () => {
        const token = localStorage.getItem('token')

        try {
            const data = await getListGroupProduct(token);
            setListGroupProduct(data);
        } catch (error) {
            navigate("/");
        }
    }
    const onListTrademark = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListTrademark(token);
            setListTrademark(data)
        } catch (error) {
            navigate('/')
        }
    }
    const onListLocation = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getListLocation(token);
            setListLocation(data)
        } catch (error) {
            navigate('/')
        }
    }
    const onListProperties = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListProperties(token);
            setListProperties(data)
        } catch (error) {
            navigate('/')
        }
    }
    const onListUnit = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListUnit(token);
            setListUnit(data);
        } catch (error) {
            navigate('/')
        }
    }
    const onListCategory = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListCategory(token);
            setListCategory(data);
        } catch (error) {
            navigate('/')
        }
    }
    const onDeleteProduct = async (productId) => {
        const token = localStorage.getItem("token")
        try {
            await deleteProduct(productId, token)
            onListProduct()
        } catch (error) {
            navigate('/product')
        }
    }
    const onProductSave = async () => {
        try {
            const formData = new FormData();
            for (const key in productData) {
                formData.append(key, productData[key]);
            }
            const token = localStorage.getItem('token');
            await postSaveProduct(formData, token)
            onListProduct()
            handleCloseNewProduct()
            alert('Thêm sản phẩm thành công');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                // Lấy thông tin lỗi từ response
                setErrors([error.response.data]);
                console.log(error.response.data)
            } else {
                console.error('Đã xảy ra lỗi:', error.message);
            }
        }
    };
    const onGroupProductSave = async () => {
        const token = localStorage.getItem('token');
        try {
            await postSaveGroupProduct(groupProductSave, token)
            onListGroupProduct()
            handleCloseNewGroupProduct()
        } catch (error) {
            navigate('/product')
        }
    }
    const onTradeMarkSave = async () => {
        const token = localStorage.getItem('token')
        try {
            await postSaveTrademark(trademarkSave, token)
            onListTrademark()
            handleCloseNewTrademark()
        } catch (error) {
            navigate('/product')
        }
    }
    const onLocationSave = async () => {
        const token = localStorage.getItem('token')
        try {
            await postSaveLocation(locationSave, token)
            onListLocation()
            handleCloseNewLocation()
        } catch (error) {
            navigate('/product')
        }
    }
    const onPropertiesSave = async () => {
        const token = localStorage.getItem('token')
        try {
            await postSaveProperties(propertiesSave, token)
            onListProperties()
            handleCloseNewProperties()
        } catch (error) {
            navigate('/product')
        }
    }
    const onUnitSave = async () => {
        const token = localStorage.getItem('token')
        try {
            await postSaveUnit(unitSave, token)
            onListUnit()
            handleCloseNewUnit()
        } catch (error) {
            navigate('/product')
        }
    }
    const onSearchProductId = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchProductId(searchProductId.productId, token)
            setListProduct(data)
        } catch (error) {
            console.log(error)
        }

    }
    const onSearchProductName = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchProductName(searchProductName.productName, token)
            setListProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onSearchInventory = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchInventory(searchInventory.inventoryId, token)
            setListProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onSearchDirectSales = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchDirectSales(searchDirectSales.directSalesId, token)
            setListProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onSearchActive = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchProductActive(searchActive.activeId, token)
            setListProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onSearchGroupProduct = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchGroupProduct(searchGroupProduct.groupProductId, token)
            setListProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onSearchTrademark = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchTrademark(searchTrademark.trademarkId, token)
            setListProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onSearchLocation = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchLocation(searchLocation.locationId, token)
            setListProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onSearchCategory = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchCategory(searchCategory.categoryId, token)
            setListProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    const exportToExcel = () => {
        // Loại bỏ thuộc tính hình ảnh từ mỗi đối tượng trong listProduct
        const dataToExport = listProduct.map(({ file, ...rest }) => rest);
        const ws = XLSX.utils.json_to_sheet(dataToExport);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbout], { type: 'application/octet-stream' });
        saveAs(blob, 'DanhSachSanPham.xlsx');
    };

    const [imageProduct, setImageProduct] = useState(null);

    const inputDataProduct = (e) => {
        const {name, value} = e.target;
        setProductData({...productData, [name]: value});
    }
    const inputDataFileProduct = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProductData({ ...productData, file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageProduct(reader.result);
            };
            reader.readAsDataURL(file);
        }

    };
    const inputDataGroupProductSave = (e) => {
        setGroupProductSave({...groupProductSave, [e.target.name]: e.target.value})
    }
    const inputDataTrademarkSave = (e) => {
        setTrademarkSave({...trademarkSave, [e.target.name]: e.target.value})
    }
    const inputDataLocationSave = (e) => {
        setLocationSave({...locationSave, [e.target.name]: e.target.value})
    }
    const inputDataPropertiesSave = (e) => {
        setPropertiesSave({...propertiesSave, [e.target.name]: e.target.value})
    }
    const inputDataUnitSave = (e) => {
        setUnitSave({...unitSave, [e.target.name]: e.target.value})
    }
    const inputDataSearchProductId = (e) => {
        setSearchProductId({...searchProductId, [e.target.name]: e.target.value})
    }
    const inputDataSearchProductName = (e) => {
        setSearchProductName({...searchProductName, [e.target.name]: e.target.value})
    }
    const inputDataSearchLocation = (e) => {
        setSearchLocation({...searchLocation, [e.target.name]: e.target.value})
    }
    const inputDataSearchCategory = (e) => {
        setSearchCategory({...searchCategory, [e.target.name]: e.target.value})
    }
    const inputDataSearchGroupProduct = (e) => {
        setSearchGroupProduct({...searchGroupProduct, [e.target.name]: e.target.value})
    }
    const inputDataSearchTrademark = (e) => {
        setSearchTrademark({...searchTrademark, [e.target.name]: e.target.value})
    }
    const inputDataSearchInventory = (e) => {
        setSearchInventory({...searchInventory, [e.target.name]: e.target.value})
    }
    const inputDataSearchDirectSales = (e) => {
        setSearchDirectSales({...searchDirectSales, [e.target.name]: e.target.value})
    }
    const inputDataSearchActive = (e) => {
        setSearchActive({...searchActive, [e.target.name]: e.target.value})
        onSearchActive(e.target.value)
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleMenuItemClick = (action) => {
        console.log(action);
    };
    const handleOpenNewProduct = () => setOpenNewProduct(true);
    const handleOpenNewGroupProduct = () => setOpenNewGroupProduct(true);
    const handleOpenNewTrademark = () => setOpenNewTrademark(true);
    const handleOpenNewLocation = () => setOpenNewLocation(true);
    const handleOpenNewProperties = () => setOpenNewProperties(true);
    const handleOpenNewUnit = () => setOpenNewUnit(true);
    const handleOpenSearchProduct = (event) => {
        setAnchorElProduct(event.currentTarget);
    };

    const resetFormSaveProduct = () => setProductData({
        productId: '',
        productName: '',
        price: '',
        capitalPrice: '',
        inventory: '',
        groupProductId: '',
        trademarkId: '',
        locationId: '',
        weight: '',
        propertiesId: '',
        unitId: '',
        categoryId: '',
        directSales: '',
        file: null
    });
    const resetFormSaveGroupProduct = () => setGroupProductSave({
        groupProductName: ''
    })
    const resetFormSaveTrademark = () => setTrademarkSave({
        trademarkName: ''
    })
    const resetFormSaveLocation = () => setLocationSave({
        locationName: ''
    })
    const resetFormSaveProperties = () => setPropertiesSave({
        propertiesName: ''
    })
    const resetFormSaveUnits = () => setUnitSave({
        unitName: ''
    })
    const resetFormSearchProductId = () => setSearchProductId({
        productId: ''
    })
    const resetFormSearchProductName = () => setSearchProductName({
        productName: ''
    })

    const handleCloseNewProduct = () => {
        setOpenNewProduct(false);
        resetFormSaveProduct()
        setImageProduct(null)
        setErrors({})
    }
    const handleCloseNewGroupProduct = () => {
        setOpenNewGroupProduct(false);
        resetFormSaveGroupProduct()
    }
    const handleCloseNewTrademark = () => {
        setOpenNewTrademark(false);
        resetFormSaveTrademark()
    };
    const handleCloseNewLocation = () => {
        setOpenNewLocation(false);
        resetFormSaveLocation()
    }
    const handleCloseNewProperties = () => {
        setOpenNewProperties(false);
        resetFormSaveProperties()
    }
    const handleCloseNewUnit = () => {
        setOpenNewUnit(false);
        resetFormSaveUnits()
    }
    const handleCloseSearchProduct = () => {
        setAnchorElProduct(null);
        resetFormSearchProductId()
        resetFormSearchProductName()
    };

    return (<div className='customDiv'>
        <NavbarAdmin></NavbarAdmin>
        <NavbarAdminSecond></NavbarAdminSecond>

        <Container maxWidth='xl'>
            <Grid container spacing={2}>
                <Grid item md={2} className='mt-3'>
                    <Typography variant="h5"
                                color="black">
                        <b>Hàng hóa</b>
                    </Typography>
                </Grid>
                <Grid item md={10} className="mt-3">
                    <Grid container spacing={2}>
                        <Grid item md={5}>
                            <Box>
                                <FormControl fullWidth variant="standard">
                                    <Button
                                        id="basic-button"
                                        aria-controls={openProduct ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openProduct ? 'true' : undefined}
                                        onClick={handleOpenSearchProduct}
                                        className='form-control text-dark bg-white d-flex justify-content-start border border-dark'
                                    ><SearchIcon className='me-2'/>
                                        Tìm kiếm theo mã, tên hàng
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorElProduct}
                                        open={openProduct}
                                        onClose={handleCloseSearchProduct}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                        PaperProps={{
                                            style: {
                                                width: anchorElProduct ? anchorElProduct.clientWidth : undefined,
                                            },
                                        }}
                                    >
                                        <Container>
                                            <Grid container spacing={2}>
                                                <Grid item md={8} className="mt-4">
                                                    <MenuItem onClick={() => handleMenuItemClick('Mã hàng hóa')}>
                                                        <TextField
                                                            fullWidth
                                                            className="mt-3"
                                                            type="number"
                                                            variant='standard'
                                                            name={"productId"}
                                                            value={searchProductId.productId}
                                                            onChange={inputDataSearchProductId}
                                                            placeholder="Theo mã hàng"
                                                            color="success"

                                                        />

                                                    </MenuItem>
                                                </Grid>
                                                <Grid item md={4} sx={gridStyle}>
                                                    <Button
                                                        color='success'
                                                        variant='contained'
                                                        sx={buttonTheme}
                                                        className='mt-5 mb-4 form-control'
                                                        onClick={onSearchProductId}>
                                                        Tìm kiếm
                                                    </Button>
                                                </Grid>

                                                <Grid item md={8}>
                                                    <MenuItem onClick={() => handleMenuItemClick('Tên hàng hóa')}>
                                                        <TextField
                                                            fullWidth
                                                            type="text"
                                                            variant='standard'
                                                            name={"productName"}
                                                            value={searchProductName.productName}
                                                            onChange={inputDataSearchProductName}
                                                            placeholder="Theo tên hàng hóa"
                                                            color="success"

                                                        />
                                                    </MenuItem>

                                                </Grid>
                                                <Grid item md={4} sx={gridStyle}>
                                                    <Button
                                                        color='success'
                                                        className='form-control mb-5'
                                                        variant='contained'
                                                        sx={buttonTheme}
                                                        onClick={onSearchProductName}>
                                                        Tìm kiếm
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </Menu>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item md={7}>
                            <Grid item className='text-end'>
                                <Button
                                    color='success'
                                    variant='contained'
                                    className='me-2'
                                    onClick={handleOpenNewProduct}
                                    sx={buttonTheme}
                                >
                                    <b>Thêm mới</b>
                                </Button>
                                <Button
                                    color='success'
                                    variant='contained'
                                    className='me-2'
                                    sx={buttonTheme}
                                >
                                    <b>Import</b>
                                </Button>
                                <Button
                                    color='success'
                                    variant='contained'
                                    onClick={exportToExcel}
                                    sx={buttonTheme}
                                >
                                    <b>Export</b>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={2}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper className="w-100 p-3 shadow mb-3 bg-white rounded-4">
                                <Typography variant="h6"><b>Loại hàng</b></Typography>
                                <ReusableRadioFour
                                    name='categoryId'
                                    id='categoryId'
                                    labelFirst="Tất cả"
                                    labelSecond="Hàng hóa"
                                    labelThird="Dịch vụ"
                                    labelFour="Combo - Đóng gói"
                                    inputChange={inputDataSearchCategory}
                                    onClick={onSearchCategory}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className="w-100 p-3 shadow mb-3 bg-white rounded-4">
                                <Typography variant="h6"><b>Nhóm hàng</b></Typography>
                                <ReusableSelect
                                    id='groupProductId'
                                    name='groupProductId'
                                    key={searchGroupProduct.groupProductId}
                                    inputChange={inputDataSearchGroupProduct}
                                    onClick={onSearchGroupProduct}
                                    options={listGroupProduct}
                                    optionValueField='groupProductId'
                                    optionLabelField='groupProductName'
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className="w-100 p-3 shadow mb-3 bg-white rounded-4">
                                <Typography variant="h6"><b>Tồn kho</b></Typography>
                                <ReusableRadioFive
                                    name='inventoryId'
                                    id='inventoryId'
                                    labelFirst="Tất cả"
                                    labelSecond="Dưới định mức tồn"
                                    labelThird="Vượt định mức tồn"
                                    labelFour="Còn hàng trong kho"
                                    labelFive="Hết hàng trong kho"
                                    inputChange={inputDataSearchInventory}
                                    onClick={onSearchInventory}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className="w-100 p-3 shadow mb-3 bg-white rounded-4">
                                <Typography variant="h6"><b>Thương hiệu</b></Typography>
                                <ReusableSelect
                                    id='trademarkId'
                                    name='trademarkId'
                                    key={searchTrademark.trademarkId}
                                    inputChange={inputDataSearchTrademark}
                                    onClick={onSearchTrademark}
                                    options={listTrademark}
                                    optionValueField='trademarkId'
                                    optionLabelField='trademarkName'
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className="w-100 p-3 shadow mb-3 bg-white rounded-4">
                                <Typography variant="h6"><b>Bán trực tiếp</b></Typography>
                                <ReusableRadioThree
                                    name='directSalesId'
                                    id='directSalesId'
                                    labelFirst="Tất cả"
                                    labelSecond="Được bán trực tiếp"
                                    labelThird="Không bán trực tiếp"
                                    inputChange={inputDataSearchDirectSales}
                                    onClick={onSearchDirectSales}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className="w-100 p-3 shadow mb-3 bg-white rounded-4">
                                <Typography variant="h6"><b>Vị trí</b></Typography>
                                <ReusableSelect
                                    id='locationId'
                                    name='locationId'
                                    key={searchLocation.locationId}
                                    inputChange={inputDataSearchLocation}
                                    onClick={onSearchLocation}
                                    options={listLocation}
                                    optionValueField='locationId'
                                    optionLabelField='locationName'
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className="w-100 p-3 shadow mb-3 bg-white rounded-4">
                                <Typography variant="h6"><b>Lựa chọn hiển thị</b></Typography>
                                <ReusableRadioThree
                                    name='activeId'
                                    id='activeId'
                                    labelFirst="Tất cả"
                                    labelSecond="Hàng ngừng bán"
                                    labelThird="Hàng đang bán"
                                    inputChange={inputDataSearchActive}
                                    // onClick={onSearchActive}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={10}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div style={{height: 750, width: '100%'}}>
                                <DataGrid
                                    rows={listProduct}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: {page: 0, pageSize: 15},
                                        },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    style={{backgroundColor: '#f7f8f9', borderColor: "#9fbcd8"}}
                                    className='customDataGrid'
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>

        <ModalProductSave
            openNewProduct={openNewProduct}
            value={value}
            handleChange={handleChange}
            valueProductName={productData.productName}
            valuePrice={productData.price}
            valueCapitalPrice={productData.capitalPrice}
            valueInventory={productData.inventory}
            valueGroupProductId={productData.groupProductId}
            valueTrademarkId={productData.trademarkId}
            valueWeight={productData.weight}
            valueLocationId={productData.locationId}
            valuePropertiesId={productData.propertiesId}
            valueUnitId={productData.unitId}
            valueDirectSales={productData.directSales}
            valueCategoryId={productData.categoryId}
            inputChangeFile={inputDataFileProduct}
            optionGroupProduct={listGroupProduct}
            optionTrademark={listTrademark}
            optionUnit={listUnit}
            optionLocation={listLocation}
            optionCategory={listCategory}
            optionProperties={listProperties}
            inputChange={inputDataProduct}
            handleOpenNewGroupProduct={handleOpenNewGroupProduct}
            handleOpenNewTrademark={handleOpenNewTrademark}
            handleOpenNewLocation={handleOpenNewLocation}
            handleOpenNewProperties={handleOpenNewProperties}
            handleOpenNewUnit={handleOpenNewUnit}
            handleCloseNewProduct={handleCloseNewProduct}
            onSave={onProductSave}
            errors={errors}
            handleImageUpload={inputDataFileProduct}
            imageProduct={imageProduct}
        />

        <ModalFormSmall
            open={openNewGroupProduct}
            handleClose={handleCloseNewGroupProduct}
            title="Thêm nhóm hàng"
            inputLabel="Tên nhóm"
            inputValue={groupProductSave.groupProductName}
            inputName="groupProductName"
            inputChange={inputDataGroupProductSave}
            onSave={onGroupProductSave}
        />

        <ModalFormSmall
            open={openNewTrademark}
            handleClose={handleCloseNewTrademark}
            title="Thêm thương hiệu"
            inputLabel="Tên thương hiệu"
            inputValue={trademarkSave.trademarkName}
            inputName="trademarkName"
            inputChange={inputDataTrademarkSave}
            onSave={onTradeMarkSave}
        />

        <ModalFormSmall
            open={openNewLocation}
            handleClose={handleCloseNewLocation}
            title="Thêm vị trí"
            inputLabel="Tên vị trí"
            inputValue={locationSave.locationName}
            inputName="locationName"
            inputChange={inputDataLocationSave}
            onSave={onLocationSave}
        />

        <ModalFormSmall
            open={openNewProperties}
            handleClose={handleCloseNewProperties}
            title="Thêm thuộc tính"
            inputLabel="Tên thuộc tính"
            inputValue={propertiesSave.propertiesName}
            inputName="propertiesName"
            inputChange={inputDataPropertiesSave}
            onSave={onPropertiesSave}
        />

        <ModalFormSmall
            open={openNewUnit}
            handleClose={handleCloseNewUnit}
            title="Thêm đơn vị"
            inputLabel="Tên đơn vị"
            inputValue={unitSave.unitName}
            inputName="unitName"
            inputChange={inputDataUnitSave}
            onSave={onUnitSave}
        />
    </div>)
}

export default FormProduct


