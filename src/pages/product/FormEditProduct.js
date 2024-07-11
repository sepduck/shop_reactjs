import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import NavbarAdmin from "../compoment/NavbarAdmin";
import NavbarAdminSecond from "../compoment/NavbarAdminSecond";
import {
    boxStyle,
    buttonTheme,
    buttonThemeClose,
    gridStyle,
    InfoOutlinedIconStyle,
    styleNewProduct
} from "../../reusable/ReusableStyles";
import {
    Box, Button,
    Container,
    FormControlLabel,
    Grid,
    Input,
    Switch,
    Tooltip,
    Typography
} from "@mui/material";
import {
    getFindByIdProduct,
    getListCategory,
    getListGroupProduct,
    getListLocation,
    getListProperties,
    getListTrademark,
    getListUnit
} from "../api/ApiGet";
import {ReusableSelect} from "../../reusable/ReusableSelect";
import {putProduct} from "../api/ApiPut";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function FormEditProduct() {
    useEffect(() => {
        onFindByProductId()
        onListGroupProduct()
        onListTrademark()
        onListLocation()
        onListProperties()
        onListUnit()
        onListCategory()
    }, []);

    const [listGroupProduct, setListGroupProduct] = useState([]);
    const [listTrademark, setListTrademark] = useState([]);
    const [listLocation, setListLocation] = useState([]);
    const [listProperties, setListProperties] = useState([]);
    const [listUnit, setListUnit] = useState([]);
    const [listCategory, setListCategory] = useState([]);
    const [productEdit, setProductEdit] = useState({
        productId: '',
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
    })

    const navigate = useNavigate();

    let {id} = useParams()

    const onFindByProductId = async () => {
        const token = localStorage.getItem("token");
        try {
            const data = await getFindByIdProduct(id, token)
            setProductEdit(data)
        } catch (err) {
            navigate('/product')
        }

    }
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
    const onProductEdit = async () => {
        const formEdit = new FormData();
        for (const key in productEdit) {
            formEdit.append(key, productEdit[key]);
        }
        const token = localStorage.getItem('token');
        try {
            await putProduct(id, formEdit, token)
            alert('Sửa sản phẩm thành công');
            navigate('/product');
        } catch (error) {
            console.error('Error adding product', error);
            alert('Lỗi khi thêm sản phẩm!');
            navigate('/product');
        }
    }

    const [imageProduct, setImageProduct] = useState(null);

    const inputDataEditProduct = (e) => {
        const {name, value} = e.target;
        setProductEdit({...productEdit, [name]: value});
    }
    const inputDataFileEditProduct = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProductEdit({ ...productEdit, file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageProduct(reader.result);
            };
            reader.readAsDataURL(file);
        }

    };

    return (<div className='customDiv' style={{height: '950px'}}>
            <NavbarAdmin></NavbarAdmin>
            <NavbarAdminSecond></NavbarAdminSecond>
            <Container maxWidth={'xl'}>
                <Box sx={styleNewProduct} className={'rounded-5'}
                     boxSizing='content-box'>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <b>Sửa hàng</b>
                    </Typography>
                    <Typography id="modal-modal-description" mt={5}>
                        <Container>
                            <Grid container spacing={5}>
                                <Grid item md={2}>
                                    <Grid container spacing={2}>
                                        <Grid item md={12}>
                                            <Box
                                                mt={2}
                                                sx={{
                                                    width: '100%',
                                                    paddingTop: '100%',
                                                    position: 'relative',
                                                    border: '1px dashed #ccc',
                                                    borderRadius: '5%',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                {imageProduct ? (
                                                    <img
                                                        src={imageProduct}
                                                        alt="Selected"
                                                        style={{
                                                            position: 'absolute',
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            top: 0,
                                                            left: 0,
                                                        }}
                                                    />
                                                ) : (
                                                    <Box
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        style={{
                                                            position: 'absolute',
                                                            width: '100%',
                                                            height: '100%',
                                                            top: 0,
                                                            left: 0,
                                                        }}
                                                    >
                                                        <CameraAltIcon style={{color: '#ccc'}}/>
                                                    </Box>
                                                )}
                                            </Box>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Button
                                                fullWidth
                                                component="label"
                                                variant="contained"
                                                color="success"
                                                htmlFor="upload-file"
                                            >
                                                Chọn ảnh
                                                <input
                                                    id="upload-file"
                                                    name="file"
                                                    type="file"
                                                    style={{display: 'none'}}
                                                    onChange={inputDataFileEditProduct}
                                                />
                                            </Button>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                <Grid item md={10}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={6} md={7}>
                                            <Grid container alignItems="center">
                                                <Grid item md={4}>
                                                    <Typography variant="subtitle1"><b>Tên
                                                        hàng</b>
                                                        <Tooltip
                                                            title="Tên hàng là tên của sản phẩm"
                                                            placement="right-start">
                                                            <InfoOutlinedIconStyle
                                                                fontSize='small'
                                                                sx={{color: '#757575'}}
                                                                className={'ms-2'}/>
                                                        </Tooltip>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={7}>
                                                    <Input fullWidth
                                                           name={'productName'}
                                                           id={'productName'}
                                                           value={productEdit.productName}
                                                           onChange={inputDataEditProduct}
                                                           color='success'
                                                           type='text'/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} md={5}>
                                            <Grid container alignItems="center">
                                                <Grid item md={1}/>
                                                <Grid item md={4}>
                                                    <Typography variant="subtitle1"><b>Giá
                                                        vốn</b>
                                                        <Tooltip
                                                            title="Giá vốn dùng để tính lợi nhuận cho sản phẩm (sẽ tự động thay đổi khi thay đổi phương pháp giá tính vốn)"
                                                            placement="right-start">
                                                            <InfoOutlinedIconStyle
                                                                fontSize='small'
                                                                sx={{color: '#757575'}}
                                                                className={'ms-2'}/>
                                                        </Tooltip>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={7}>
                                                    <Input fullWidth
                                                           name={'capitalPrice'}
                                                           value={productEdit.capitalPrice}
                                                           onChange={inputDataEditProduct}
                                                           color='success'
                                                           type='number'/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} md={7}>
                                            <Grid container alignItems="center">
                                                <Grid item md={4} mt={1}>
                                                    <Typography variant="subtitle1"><b>Nhóm
                                                        hàng</b>
                                                        <Tooltip
                                                            title="Lựa chọn nhóm hàng cho sản phẩm"
                                                            placement="right-start">
                                                            <InfoOutlinedIconStyle fontSize='small'
                                                                                   sx={{color: '#757575'}}
                                                                                   className={'ms-2'}/>
                                                        </Tooltip>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={7}>
                                                    <Box sx={boxStyle}>
                                                        <ReusableSelect
                                                            id='groupProductId'
                                                            name='groupProductId'
                                                            key={productEdit.groupProductId}
                                                            value={productEdit.groupProductId}
                                                            inputChange={inputDataEditProduct}
                                                            options={listGroupProduct}
                                                            optionValueField='groupProductId'
                                                            optionLabelField='groupProductName'

                                                        />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} md={5}>
                                            <Grid container alignItems="center">
                                                <Grid item md={1}/>
                                                <Grid item md={4} mt={1}>
                                                    <Typography variant="subtitle1"><b>Giá
                                                        bán</b></Typography>
                                                </Grid>
                                                <Grid item md={7}>
                                                    <Input fullWidth
                                                           name={'price'}
                                                           value={productEdit.price}
                                                           onChange={inputDataEditProduct}
                                                           color='success'
                                                           type='number'/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} md={7}>
                                            <Grid container alignItems="center">
                                                <Grid item md={4} mt={1}>
                                                    <Typography variant="subtitle1"><b>Thương
                                                        hiệu</b>
                                                        <Tooltip
                                                            title="Thương hiệu, nhãn hiệu của sản phẩm"
                                                            placement="right-start">
                                                            <InfoOutlinedIconStyle fontSize='small'
                                                                                   sx={{color: '#757575'}}
                                                                                   className={'ms-2'}/>
                                                        </Tooltip>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={7}>
                                                    <Box sx={boxStyle}>
                                                        <ReusableSelect
                                                            id='trademarkId'
                                                            name='trademarkId'
                                                            key={productEdit.trademarkId}
                                                            value={productEdit.trademarkId}
                                                            inputChange={inputDataEditProduct}
                                                            options={listTrademark}
                                                            optionValueField='trademarkId'
                                                            optionLabelField='trademarkName'
                                                        />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} md={5}>
                                            <Grid container alignItems="center">
                                                <Grid item md={1}/>
                                                <Grid item md={4} mt={1}>
                                                    <Typography
                                                        variant="subtitle1"><b>Tồn
                                                        kho</b>
                                                        <Tooltip
                                                            title="Số lượng tồn kho của sản phẩm"
                                                            placement="right-start">
                                                            <InfoOutlinedIconStyle fontSize='small'
                                                                                   sx={{color: '#757575'}}
                                                                                   className={'ms-2'}/>
                                                        </Tooltip>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={7}>
                                                    <Input fullWidth
                                                           name={'inventory'}
                                                           value={productEdit.inventory}
                                                           onChange={inputDataEditProduct}
                                                           color='success'
                                                           type='number'/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} md={7}>
                                            <Grid container alignItems="center">
                                                <Grid item md={4} mt={1}>
                                                    <Typography variant="subtitle1"><b>Vị
                                                        trí</b>
                                                        <Tooltip
                                                            title="Sự dụng để ghi lại vị trí mà hàng hóa được cất giữ hoặc trưng bày. Ví dụ: kệ số 1, số 2 ..."
                                                            placement="right-start">
                                                            <InfoOutlinedIconStyle fontSize='small'
                                                                                   sx={{color: '#757575'}}
                                                                                   className={'ms-2'}/>
                                                        </Tooltip>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={7}>
                                                    <Box sx={boxStyle}>
                                                        <ReusableSelect
                                                            id='locationId'
                                                            name='locationId'
                                                            key={productEdit.locationId}
                                                            value={productEdit.locationId}
                                                            inputChange={inputDataEditProduct}
                                                            options={listLocation}
                                                            optionValueField='locationId'
                                                            optionLabelField='locationName'
                                                        />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} md={5}>
                                            <Grid container alignItems="center">
                                                <Grid item md={1}/>
                                                <Grid item md={4} mt={1}>
                                                    <Typography variant="subtitle1"><b>Trọng
                                                        lượng</b>
                                                        <Tooltip
                                                            title="Sử dụng để tính trọng lượng khi giao hàng"
                                                            placement="right-start">
                                                            <InfoOutlinedIconStyle fontSize='small'
                                                                                   sx={{color: '#757575'}}
                                                                                   className={'ms-2'}/>
                                                        </Tooltip>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={7}>
                                                    <Input fullWidth
                                                           name={'weight'}
                                                           value={productEdit.weight}
                                                           onChange={inputDataEditProduct}
                                                           color='success'
                                                           type='number'/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} md={7}>
                                            <Grid container alignItems="center">
                                                <Grid item md={4} mt={1}>
                                                    <Typography variant="subtitle1"><b>Thuộc
                                                        tính</b></Typography>
                                                </Grid>
                                                <Grid item md={7}>
                                                    <Box sx={boxStyle}>
                                                        <ReusableSelect
                                                            id='propertiesId'
                                                            name='propertiesId'
                                                            key={productEdit.propertiesId}
                                                            value={productEdit.propertiesId}
                                                            inputChange={inputDataEditProduct}
                                                            options={listProperties}
                                                            optionValueField='propertiesId'
                                                            optionLabelField='propertiesName'
                                                        />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} md={5}>
                                            <Grid container alignItems="center">
                                                <Grid item md={1}/>
                                                <Grid item md={11}>
                                                    <FormControlLabel
                                                        id="directSales"
                                                        name="directSales"
                                                        value={productEdit.directSales ? 1 : 0}
                                                        control={
                                                            <Switch
                                                                checked={productEdit.directSales}
                                                                onChange=
                                                                    {(e) => inputDataEditProduct({
                                                                        target: {
                                                                            name: 'directSales',
                                                                            value: e.target.checked
                                                                        }
                                                                    })}
                                                                sx={{
                                                                    '& .MuiSwitch-switchBase.Mui-checked': {
                                                                        color: 'green',
                                                                    },
                                                                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                                        backgroundColor: 'green',
                                                                    }
                                                                }}
                                                            />}
                                                        label="Bán trực tiếp"
                                                    />

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} md={7}>
                                            <Grid container alignItems="center">
                                                <Grid item md={4} mt={1}>
                                                    <Typography variant="subtitle1"><b>Đơn vị cơ
                                                        bản</b>
                                                        <Tooltip
                                                            title="Đơn vị của hàng hóa như: hộp, lốc, thùng..."
                                                            placement="right-start">
                                                            <InfoOutlinedIconStyle fontSize='small'
                                                                                   sx={{color: '#757575'}}
                                                                                   className={'ms-2'}/>
                                                        </Tooltip>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={7}>
                                                    <Box sx={boxStyle}>
                                                        <ReusableSelect
                                                            id='unitId'
                                                            name='unitId'
                                                            key={productEdit.unitId}
                                                            value={productEdit.unitId}
                                                            inputChange={inputDataEditProduct}
                                                            options={listUnit}
                                                            optionValueField='unitId'
                                                            optionLabelField='unitName'
                                                        />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} md={5}/>
                                        <Grid item xs={6} md={7}>
                                            <Grid container alignItems="center">
                                                <Grid item md={4} mt={1}>
                                                    <Typography variant="subtitle1"><b>Loại
                                                        hàng</b>
                                                        <Tooltip
                                                            title="Lựa chọn loại hàng cho sản phẩm"
                                                            placement="right-start">
                                                            <InfoOutlinedIconStyle fontSize='small'
                                                                                   sx={{color: '#757575'}}
                                                                                   className={'ms-2'}/>
                                                        </Tooltip>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={7}>
                                                    <ReusableSelect
                                                        id='categoryId'
                                                        name='categoryId'
                                                        key={productEdit.categoryId}
                                                        value={productEdit.categoryId}
                                                        inputChange={inputDataEditProduct}
                                                        options={listCategory}
                                                        optionValueField='categoryId'
                                                        optionLabelField='categoryName'
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </Typography>
                    <Typography>
                        <Grid mt={5} mb={3}
                              sx={gridStyle}>
                            <Grid>
                                <Button variant='contained'
                                        sx={buttonTheme}
                                        color='success'
                                        onClick={onProductEdit}
                                        type={"button"}>
                                    <b>Lưu</b>
                                </Button>
                                <Button variant='contained'
                                        component={Link} to={'/product'}
                                        sx={buttonThemeClose}
                                        className={'text-end ms-2'}>
                                    <b>Bỏ qua</b>
                                </Button>
                            </Grid>
                        </Grid>
                    </Typography>
                </Box>
            </Container>
        </div>
    )
}

export default FormEditProduct;