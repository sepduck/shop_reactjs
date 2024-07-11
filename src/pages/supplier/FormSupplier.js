import {useEffect, useState} from "react";
import '../../Custom.css'
import * as React from 'react';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver';
import {
    Box, Button, Container, FormControl, Grid, Input, MenuItem, Modal, TextField,
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {DataGrid} from "@mui/x-data-grid";
import NavbarAdmin from "../compoment/NavbarAdmin";
import NavbarAdminSecond from "../compoment/NavbarAdminSecond";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import {
    buttonTheme, gridStyle
} from "../../reusable/ReusableStyles";
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from "@mui/material/Paper";
import {
    getListCategory,
    getListGroupProduct,
    getListGroupSupplier,
    getListLocation,
    getListProduct,
    getListProperties,
    getListSupplier,
    getListTrademark,
    getListUnit,
    getSearchGroupSupplier,
    getSearchSupplierActive,
    getSearchSupplierId,
    getSearchSupplierName,
    getSearchSupplierPhoneNumber,
    getSearchSupplierTaxCode
} from "../api/ApiGet";
import {
    postSaveGroupProduct,
    postSaveGroupSupplier,
    postSaveLocation,
    postSaveProduct,
    postSaveProperties,
    postSaveSupplier,
    postSaveTrademark,
    postSaveUnit
} from "../api/ApiPost";
import {
    ReusableRadioFour, ReusableRadioThree
} from "../../reusable/ReusableRadio";
import {ReusableSelect} from "../../reusable/ReusableSelect";
import {deleteSupplier} from "../api/ApiDelete";
import EditIcon from "@mui/icons-material/Edit";
import {ModalProductSave} from "../../reusable/ModalProductSave";
import {ModalCreateSupplier} from "../../reusable/ModalCreateSupplier";
import {ModalGroupSupplier} from "../../reusable/ModalGroupSupplier";
import {ModalFormSmall} from "../../reusable/ModalFormSmall";


function FormSupplier() {
    useEffect(() => {
        onListSupplier()
        onListGroupSupplier()
        onListProduct()
        onListGroupProduct()
        onListTrademark()
        onListLocation()
        onListProperties()
        onListUnit()
        onListCategory()
    }, []);

    const columns = [{
        field: 'id',
        headerName: 'Mã NCC',
        width: 100,
        align: 'center',
        headerAlign: 'center',
        headerClassName: 'header-column',
        renderCell: (params) => `NCC00${params.value}`
    }, {
        field: 'supplier_name',
        headerName: 'Tên nhà cung cấp',
        width: 230,
        headerAlign: 'center',
        headerClassName: 'header-column'
    }, {
        field: 'phone_number',
        headerName: 'Số điện thoại',
        width: 150,
        align: 'right',
        headerAlign: 'center',
        headerClassName: 'header-column'
    }, {
        field: 'address',
        headerName: 'Địa chỉ',
        width: 150,
        align: 'right',
        headerAlign: 'center',
        headerClassName: 'header-column'
    }, {
        field: 'email',
        headerName: 'Email',
        width: 90,
        align: 'right',
        headerAlign: 'center',
        headerClassName: 'header-column'
    }, {
        field: 'company',
        headerName: 'Công ty',
        minWidth: 130,
        align: 'center',
        headerAlign: 'center',
        headerClassName: 'header-column'
    }, {
        field: 'tax_code',
        headerName: 'Mã số thuế',
        minWidth: 130,
        align: 'center',
        headerAlign: 'center',
        headerClassName: 'header-column'
    }, {
        field: 'group_supplier_name',
        headerName: 'Nhóm NCC',
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
            <Link to={`/supplier/edit/${params.id}`}><EditIcon/></Link>

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
            <DeleteIcon sx={{color: '#b71c1c'}} onClick={() => onDeleteSupplier(params.id)}/>
        </strong>),
    },

    ];

    const [imageProduct, setImageProduct] = useState(null);
    const [listSupplier, setListSupplier] = useState([]);
    const [listGroupSupplier, setListGroupSupplier] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [listGroupProduct, setListGroupProduct] = useState([]);
    const [listTrademark, setListTrademark] = useState([]);
    const [listLocation, setListLocation] = useState([]);
    const [listProperties, setListProperties] = useState([]);
    const [listUnit, setListUnit] = useState([]);
    const [listCategory, setListCategory] = useState([]);
    const [value, setValue] = React.useState('1');
    const [anchorElSupplier, setAnchorElSupplier] = useState(null);
    const openSupplier = Boolean(anchorElSupplier);
    const [supplierSave, setSupplierSave] = useState({
        supplierId: '',
        supplierName: '',
        phoneNumber: '',
        address: '',
        email: '',
        company: '',
        taxCode: '',
        groupSupplierId: '',
        productId: ''
    })
    const [groupSupplierSave, setGroupSupplierSave] = useState({
        groupSupplierName: '', note: ''
    })
    const [productSave, setProductSave] = useState({
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
    })
    const [groupProductSave, setGroupProductSave] = useState({
        groupProductName: ''
    })
    const [trademarkSave, setTrademarkSave] = useState({
        trademarkId: '', trademarkName: ''
    })
    const [locationSave, setLocationSave] = useState({
        locationId: '', locationName: ''
    })
    const [propertiesSave, setPropertiesSave] = useState({
        propertiesId: '', propertiesName: ''
    })
    const [unitSave, setUnitSave] = useState({
        unitId: '', unitName: ''
    })
    const [searchSupplierPhoneNumber, setSearchSupplierPhoneNumber] = useState({
        phoneNumber: ''
    })
    const [searchActive, setSearchActive] = useState({
        activeId: ''
    })
    const [searchSupplierTaxCode, setSearchSupplierTaxCode] = useState({
        taxCode: ''
    })
    const [searchSupplierId, setSearchSupplierId] = useState({
        supplierId: ''
    })
    const [searchSupplierName, setSearchSupplierName] = useState({
        supplierName: ''
    })
    const [searchGroupSupplier, setSearchGroupSupplier] = useState({
        groupSupplierId: '',
    })

    const navigate = useNavigate()

    const onDeleteSupplier = async (supplierId) => {
        const token = localStorage.getItem('token')
        try {
            await deleteSupplier(supplierId, token)
            onListSupplier()
        } catch (err) {
            console.log(err)
            navigate('/supplier')
        }
    }
    const onListSupplier = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getListSupplier(token);
            setListSupplier(data);
        } catch (error) {
            navigate("/");
        }
    }
    const onListGroupSupplier = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getListGroupSupplier(token);
            setListGroupSupplier(data);
        } catch (error) {
            navigate("/supplier");
        }
    }
    const onListProduct = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListProduct(token);
            setListProduct(data);
        } catch (error) {
            console.log(error)
            navigate("/supplier");
        }
    };
    const onListGroupProduct = async () => {
        const token = localStorage.getItem('token')

        try {
            const data = await getListGroupProduct(token);
            setListGroupProduct(data);
        } catch (error) {
            navigate("/supplier");
        }
    }
    const onListTrademark = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListTrademark(token);
            setListTrademark(data)
        } catch (error) {
            navigate('/supplier')
        }
    }
    const onListLocation = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getListLocation(token);
            setListLocation(data)
        } catch (error) {
            navigate('/supplier')
        }
    }
    const onListProperties = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListProperties(token);
            setListProperties(data)
        } catch (error) {
            navigate('/supplier')
        }
    }
    const onListUnit = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListUnit(token);
            setListUnit(data);
        } catch (error) {
            navigate('/supplier')
        }
    }
    const onListCategory = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListCategory(token);
            setListCategory(data);
        } catch (error) {
            navigate('/supplier')
        }
    }
    const onSaveSupplier = async () => {
        const token = localStorage.getItem('token');
        try {
            await postSaveSupplier(supplierSave, token)
            onListSupplier()
            handleCloseNewSupplier()
        } catch (err) {
            console.log(err)
            navigate('/supplier')
        }
    }
    const onGroupSupplierSave = async () => {
        const token = localStorage.getItem('token');
        try {
            await postSaveGroupSupplier(groupSupplierSave, token)
            onListGroupSupplier()
            handleCloseNewGroupSupplier()
        } catch (err) {
            navigate('/supplier')
        }
    }
    const onProductSave = async () => {
        const token = localStorage.getItem('token');
        try {
            await postSaveProduct(productSave, token)
            onListProduct()
            handleCloseNewProduct()
        } catch (error) {
            navigate('/supplier')
        }
    }
    const onGroupProductSave = async () => {
        const token = localStorage.getItem('token');
        try {
            await postSaveGroupProduct(groupProductSave, token)
            onListGroupProduct()
            handleCloseNewGroupProduct()
        } catch (error) {
            navigate('/supplier')
        }
    }
    const onTradeMarkSave = async () => {
        const token = localStorage.getItem('token')
        try {
            await postSaveTrademark(trademarkSave, token)
            onListTrademark()
            handleCloseNewTrademark()
        } catch (error) {
            navigate('/supplier')
        }
    }
    const onLocationSave = async () => {
        const token = localStorage.getItem('token')
        try {
            await postSaveLocation(locationSave, token)
            onListLocation()
            handleCloseNewLocation()
        } catch (error) {
            navigate('/supplier')
        }
    }
    const onPropertiesSave = async () => {
        const token = localStorage.getItem('token')
        try {
            await postSaveProperties(propertiesSave, token)
            onListProperties()
            handleCloseNewProperties()
        } catch (error) {
            navigate('/supplier')
        }
    }
    const onUnitSave = async () => {
        const token = localStorage.getItem('token')
        try {
            await postSaveUnit(unitSave, token)
            onListUnit()
            handleCloseNewUnit()
        } catch (error) {
            navigate('/supplier')
        }
    }
    const onSearchSupplierPhoneNumber = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchSupplierPhoneNumber(searchSupplierPhoneNumber.phoneNumber, token)
            setListSupplier(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onSearchActive = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchSupplierActive(searchActive.activeId, token)
            setListSupplier(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onSearchSupplierTaxCode = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchSupplierTaxCode(searchSupplierTaxCode.taxCode, token)
            setListSupplier(data)
        } catch (err) {
            console.log(err)
        }

    }
    const onSearchSupplierId = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchSupplierId(searchSupplierId.supplierId, token)
            setListSupplier(data)
        } catch (err) {
            console.log(err)
        }
    }
    const onSearchSupplierName = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchSupplierName(searchSupplierName.supplierName, token)
            setListSupplier(data)
        } catch (err) {
            console.log(err)
        }
    }
    const onSearchGroupSupplier = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchGroupSupplier(searchGroupSupplier.groupSupplierId, token)
            setListSupplier(data)
        } catch (err) {
            console.log(err)
        }
    }

    const inputDataSupplierSave = (e) => {
        setSupplierSave({...supplierSave, [e.target.name]: e.target.value})
    }
    const inputDataGroupSupplierSave = (e) => {
        setGroupSupplierSave({...groupSupplierSave, [e.target.name]: e.target.value})
    }
    const inputDataProductSave = (e) => {
        const {name, value} = e.target;
        setProductSave({...productSave, [name]: value});
    }
    const inputDataFileProduct = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProductSave({ ...productSave, file });
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
    const inputDataSearchSupplierId = (e) => {
        setSearchSupplierId({...searchSupplierId, [e.target.name]: e.target.value})
    }
    const inputDataSearchSupplierName = (e) => {
        setSearchSupplierName({...searchSupplierName, [e.target.name]: e.target.value})
    }
    const inputDataSearchGroupSupplier = (e) => {
        setSearchGroupSupplier({...searchGroupSupplier, [e.target.name]: e.target.value})
    }
    const inputDataSearchSupplierTaxCode = (e) => {
        setSearchSupplierTaxCode({...searchSupplierTaxCode, [e.target.name]: e.target.value})
    }
    const inputDataSearchSupplierPhoneNumber = (e) => {
        setSearchSupplierPhoneNumber({...searchSupplierPhoneNumber, [e.target.name]: e.target.value})
    }
    const inputDataSearchActive = (e) => {
        setSearchActive({...searchActive, [e.target.name]: e.target.value})
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(listSupplier)
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        const wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'array'});
        const blob = new Blob([wbout], {type: 'application/octet-stream'});
        saveAs(blob, 'DanhSachNhaCungCap.xlsx');
    };

    const handleMenuItemClick = (action) => {
        console.log(action);
    };
    const resetFormSaveSupplier = () => setSupplierSave({
        supplierName: '',
        phoneNumber: '',
        address: '',
        email: '',
        company: '',
        taxCode: '',
        groupSupplierId: '',
        productId: ''
    })
    const resetFormSaveGroupSupplier = () => setGroupSupplierSave({
        groupSupplierName: '', note: ''
    })
    const resetFormSaveProduct = () => setProductSave({
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

    const [openNewSupplier, setOpenNewSupplier] = React.useState(false);
    const [openNewGroupSupplier, setOpenNewGroupSupplier] = React.useState(false);
    const [openNewProduct, setOpenNewProduct] = React.useState(false);
    const [openNewGroupProduct, setOpenNewGroupProduct] = React.useState(false);
    const [openNewTrademark, setOpenNewTrademark] = React.useState(false);
    const [openNewLocation, setOpenNewLocation] = React.useState(false);
    const [openNewProperties, setOpenNewProperties] = React.useState(false);
    const [openNewUnit, setOpenNewUnit] = React.useState(false);

    const handleOpenNewSupplier = () => setOpenNewSupplier(true);
    const handleOpenNewGroupSupplier = () => setOpenNewGroupSupplier(true);
    const handleOpenNewProduct = () => setOpenNewProduct(true);
    const handleOpenNewGroupProduct = () => setOpenNewGroupProduct(true);
    const handleOpenNewTrademark = () => setOpenNewTrademark(true);
    const handleOpenNewLocation = () => setOpenNewLocation(true);
    const handleOpenNewProperties = () => setOpenNewProperties(true);
    const handleOpenNewUnit = () => setOpenNewUnit(true);

    const handleClickSupplier = (event) => {
        setAnchorElSupplier(event.currentTarget);
    };
    const handleCloseSupplier = () => {
        setAnchorElSupplier(null);
    };
    const handleCloseNewSupplier = () => {
        setOpenNewSupplier(false);
        resetFormSaveSupplier()
    }
    const handleCloseNewGroupSupplier = () => {
        setOpenNewGroupSupplier(false);
        resetFormSaveGroupSupplier()
    }
    const handleCloseNewProduct = () => {
        setOpenNewProduct(false);
        resetFormSaveProduct()
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

    return (<div className='customDiv'>
        <NavbarAdmin></NavbarAdmin>
        <NavbarAdminSecond></NavbarAdminSecond>
        <Container maxWidth='xl'>
            <Grid container spacing={2}>
                <Grid item md={2} className='mt-3'>
                    <Typography variant="h5"
                                color="black">
                        <b>Nhà cung cấp</b>
                    </Typography>
                </Grid>
                <Grid item md={10} className="mt-3">
                    <Grid container spacing={2}>
                        <Grid item md={5}>
                            <Box>
                                <FormControl fullWidth variant="standard">
                                    <Button
                                        id="basic-button"
                                        aria-controls={openSupplier ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openSupplier ? 'true' : undefined}
                                        onClick={handleClickSupplier}
                                        className='form-control text-dark bg-white d-flex justify-content-start border border-dark'
                                    ><SearchIcon className='me-2'/>
                                        Tìm kiếm theo mã, tên nhà cung cấp, mã số thuế
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorElSupplier}
                                        open={openSupplier}
                                        onClose={handleCloseSupplier}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                        PaperProps={{
                                            style: {
                                                width: anchorElSupplier ? anchorElSupplier.clientWidth : undefined,
                                            },
                                        }}
                                    >
                                        <Container>
                                            <Grid container spacing={2}>
                                                <Grid item md={8} className="mt-4">
                                                    <MenuItem onClick={() => handleMenuItemClick('Mã nhà cung cấp')}>
                                                        <TextField
                                                            fullWidth
                                                            type="search"
                                                            variant='standard'
                                                            color="success"
                                                            className={"mt-3"}
                                                            placeholder='Theo mã nhà cung cấp'
                                                            name={"supplierId"}
                                                            value={searchSupplierId.supplierId}
                                                            onChange={inputDataSearchSupplierId}

                                                        />
                                                    </MenuItem>
                                                </Grid>
                                                <Grid item md={4} sx={gridStyle}>
                                                    <Button
                                                        color='success'
                                                        variant='contained'
                                                        sx={buttonTheme}
                                                        className='mt-5 mb-4 form-control'
                                                        onClick={onSearchSupplierId}>
                                                        Tìm kiếm
                                                    </Button>
                                                </Grid>
                                                <Grid item md={8}>
                                                    <MenuItem onClick={() => handleMenuItemClick('Tên nhà cung cấp')}>
                                                        <TextField
                                                            fullWidth
                                                            type="search"
                                                            variant='standard'
                                                            color="success"
                                                            placeholder='Theo tên nhà cung cấp'
                                                            name={"supplierName"}
                                                            value={searchSupplierName.supplierName}
                                                            onChange={inputDataSearchSupplierName}

                                                        />
                                                    </MenuItem>

                                                </Grid>
                                                <Grid item md={4} sx={gridStyle}>
                                                    <Button
                                                        color='success'
                                                        className='form-control mb-4'
                                                        variant='contained'
                                                        sx={buttonTheme}
                                                        onClick={onSearchSupplierName}>
                                                        Tìm kiếm
                                                    </Button>
                                                </Grid>
                                                <Grid item md={8}>
                                                    <MenuItem onClick={() => handleMenuItemClick('Số điện thoại')}>
                                                        <TextField
                                                            fullWidth
                                                            type="text"
                                                            variant='standard'
                                                            placeholder='Theo số điện thoại'
                                                            name={"phoneNumber"}
                                                            value={searchSupplierPhoneNumber.phoneNumber}
                                                            onChange={inputDataSearchSupplierPhoneNumber}
                                                            color='success'
                                                        />
                                                    </MenuItem>

                                                </Grid>
                                                <Grid item md={4} sx={gridStyle}>
                                                    <Button
                                                        color='success'
                                                        className='form-control mb-4'
                                                        variant='contained'
                                                        sx={buttonTheme}
                                                        onClick={onSearchSupplierPhoneNumber}>
                                                        Tìm kiếm
                                                    </Button>
                                                </Grid>
                                                <Grid item md={8}>
                                                    <MenuItem onClick={() => handleMenuItemClick('Số điện thoại')}>
                                                        <TextField
                                                            fullWidth
                                                            className="mb-5"
                                                            type="text"
                                                            variant='standard'
                                                            name={"taxCode"}
                                                            value={searchSupplierTaxCode.taxCode}
                                                            onChange={inputDataSearchSupplierTaxCode}
                                                            placeholder='Theo mã số thuế'
                                                            color='success'
                                                        />
                                                    </MenuItem>

                                                </Grid>
                                                <Grid item md={4} sx={gridStyle}>
                                                    <Button
                                                        color='success'
                                                        className='form-control mb-5'
                                                        variant='contained'
                                                        sx={buttonTheme}
                                                        onClick={onSearchSupplierTaxCode}>
                                                        Tìm kiếm
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </Menu>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item md={7} sx={gridStyle}>
                            <Grid item className='text-end me-3'>
                                <Button
                                    color='success'
                                    variant='contained'
                                    className='me-2'
                                    onClick={handleOpenNewSupplier}
                                    style={buttonTheme}>
                                    <b>Thêm mới</b>
                                </Button>
                                <Button
                                    color='success'
                                    variant='contained'
                                    className='me-2'
                                    style={buttonTheme}>
                                    <b>Import</b>
                                </Button>
                                <Button
                                    color='success'
                                    variant='contained'
                                    onClick={exportToExcel}
                                    style={buttonTheme}
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
                                <Typography variant="h6"><b>Nhóm nhà cung cấp</b></Typography>
                                <ReusableSelect
                                    id='groupSupplierId'
                                    name='groupSupplierId'
                                    key={searchGroupSupplier.groupSupplierId}
                                    value={searchGroupSupplier.groupSupplierId}
                                    inputChange={inputDataSearchGroupSupplier}
                                    onClick={onSearchGroupSupplier}
                                    options={listGroupSupplier}
                                    optionValueField='groupSupplierId'
                                    optionLabelField='groupSupplierName'
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className="w-100 p-3 shadow mb-3 bg-white rounded-4">
                                <Typography variant="h6"><b>Tổng mua</b></Typography>
                                <ReusableRadioFour
                                    name='number'
                                    id='number'
                                    labelFirst="Tất cả"
                                    labelSecond="Trên 10tr"
                                    labelThird="5tr đến 10tr"
                                    labelFour="Dưới 5tr"
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className="w-100 p-3 shadow mb-3 bg-white rounded-4">
                                <Typography variant="h6"><b>Trạng thái</b></Typography>
                                <ReusableRadioThree
                                    name='activeId'
                                    id='activeId'
                                    labelFirst="Tất cả"
                                    labelSecond="Đang hoạt động"
                                    labelThird="Ngưng hoạt động"
                                    inputChange={inputDataSearchActive}
                                    onClick={onSearchActive}
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
                                    rows={listSupplier}
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
        <ModalCreateSupplier
            open={openNewSupplier}
            close={handleCloseNewSupplier}
            valueSupperName={supplierSave.supplierName}
            valueEmail={supplierSave.email}
            valuePhoneNumber={supplierSave.phoneNumber}
            valueCompany={supplierSave.company}
            valueAddress={supplierSave.address}
            valueTaxCode={supplierSave.taxCode}
            valueGroupSupplierId={supplierSave.groupSupplierId}
            valueProductId={supplierSave.productId}
            inputChange={inputDataSupplierSave}
            optionsGroupSuppier={listGroupSupplier}
            optionsProduct={listProduct}
            openNewSupplier={openNewSupplier}
            openProduct={handleOpenNewProduct}
            openGroupSupplier={handleOpenNewGroupSupplier}
            onSaveSupplier={onSaveSupplier}
        />

        <ModalProductSave
            openNewProduct={openNewProduct}
            value={value}
            handleChange={handleChange}
            valueProductName={productSave.productName}
            valuePrice={productSave.price}
            valueCapitalPrice={productSave.capitalPrice}
            valueInventory={productSave.inventory}
            valueGroupProductId={productSave.groupProductId}
            valueTrademarkId={productSave.trademarkId}
            valueWeight={productSave.weight}
            valueLocationId={productSave.locationId}
            valuePropertiesId={productSave.propertiesId}
            valueUnitId={productSave.unitId}
            valueDirectSales={productSave.directSales}
            valueCategoryId={productSave.categoryId}
            inputChangeFile={inputDataFileProduct}
            optionGroupProduct={listGroupProduct}
            optionTrademark={listTrademark}
            optionUnit={listUnit}
            optionLocation={listLocation}
            optionCategory={listCategory}
            optionProperties={listProperties}
            inputChange={inputDataProductSave}
            handleOpenNewGroupProduct={handleOpenNewGroupProduct}
            handleOpenNewTrademark={handleOpenNewTrademark}
            handleOpenNewLocation={handleOpenNewLocation}
            handleOpenNewProperties={handleOpenNewProperties}
            handleOpenNewUnit={handleOpenNewUnit}
            handleCloseNewProduct={handleCloseNewProduct}
            onSave={onProductSave}
            handleImageUpload={inputDataFileProduct}
            imageProduct={imageProduct}
        />

        <ModalGroupSupplier
            open={openNewGroupSupplier}
            close={handleCloseNewGroupSupplier}
            valueGroupSupplierName={groupSupplierSave.groupSupplierName}
            valueNote={groupSupplierSave.note}
            inputChange={inputDataGroupSupplierSave}
            onSave={onGroupSupplierSave}
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

export default FormSupplier


