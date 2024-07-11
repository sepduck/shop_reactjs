import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import NavbarAdmin from "../compoment/NavbarAdmin";
import NavbarAdminSecond from "../compoment/NavbarAdminSecond";
import {getFindByIdSupplier, getListGroupSupplier, getListProduct} from "../api/ApiGet";
import {boxStyle, buttonTheme, buttonThemeClose, gridStyle, styleNewProduct} from "../../reusable/ReusableStyles";
import {Box, Button, Container, Grid, Input, Tooltip, Typography} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {ReusableSelect} from "../../reusable/ReusableSelect";
import {putSupplier} from "../api/ApiPut";


function FormEditSupplier() {
    // Hàm khởi tạo
    const [supplierEdit, setSupplierEdit] = useState({
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
    const [listGroupSupplier, setListGroupSupplier] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    let {id} = useParams()

    const navigate = useNavigate();

    useEffect(() => {
        onFindBySupplierId()
        onListProduct()
        onListGroupSupplier()
    }, []);

    const onFindBySupplierId = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getFindByIdSupplier(id, token);
            setSupplierEdit(data)
        } catch (err) {
            navigate('/supplier');
        }
    }
    const onListGroupSupplier = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getListGroupSupplier(token);
            setListGroupSupplier(data)
        } catch (err) {
            console.log(err)
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
    const onEditSupplier = async () => {
        const token = localStorage.getItem('token');
        try {
            await putSupplier(id, supplierEdit, token)
            navigate('/supplier');
        } catch (err) {
            navigate('/supplier');
        }
    }

    const inputDataEditSupplier = (e) => {
        setSupplierEdit({...supplierEdit, [e.target.name]: e.target.value})
    }
    return (<div className='customDiv' style={{height: '950px'}}>
        <NavbarAdmin></NavbarAdmin>
        <NavbarAdminSecond></NavbarAdminSecond>
        <Container maxWidth={'xl'}>
            <Box sx={styleNewProduct} className={'rounded-5'}
                 boxSizing='content-box'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Sửa nhà cung cấp
                </Typography>
                <Typography id="modal-modal-description" mt={5}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Grid container>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={7}>
                                        <Grid container>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Tên nhà cung cấp</b>
                                                    <Tooltip
                                                        title="Tên nhà cung cấp hàng hóa"
                                                        placement="right-start">
                                                        <InfoOutlinedIcon
                                                            fontSize='small'
                                                            className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth
                                                       name={'supplierName'}
                                                       value={supplierEdit.supplierName}
                                                       onChange={inputDataEditSupplier}
                                                       type='text'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}>
                                        <Grid container>
                                            <Grid item md={1}/>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Email</b>
                                                    <Tooltip
                                                        title="Thông tin liên hệ email"
                                                        placement="right-start">
                                                        <InfoOutlinedIcon
                                                            fontSize='small'
                                                            className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth
                                                       name={'email'}
                                                       value={supplierEdit.email}
                                                       onChange={inputDataEditSupplier}
                                                       type='email'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={7}>
                                        <Grid container>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Điện thoại</b>
                                                    <Tooltip
                                                        title="Số điện thoại của nhà cung cấp"
                                                        placement="right-start">
                                                        <InfoOutlinedIcon fontSize='small'
                                                                          className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth name={'phoneNumber'}
                                                       value={supplierEdit.phoneNumber}
                                                       onChange={inputDataEditSupplier}

                                                       type='tel'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}>
                                        <Grid container>
                                            <Grid item md={1}/>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Công ty</b></Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth name={'company'}
                                                       value={supplierEdit.company}
                                                       onChange={inputDataEditSupplier}
                                                       type='text'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={7}>
                                        <Grid container>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Địa chỉ</b>
                                                    <Tooltip
                                                        title="Địa chỉ nhà cung cấp"
                                                        placement="right-start">
                                                        <InfoOutlinedIcon fontSize='small'
                                                                          className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth name={'address'}
                                                       value={supplierEdit.address}
                                                       onChange={inputDataEditSupplier}
                                                       type='text'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}>
                                        <Grid container>
                                            <Grid item md={1}/>
                                            <Grid item md={4} mt={1}>
                                                <Typography
                                                    variant="subtitle1"><b>Mã số thuế</b>
                                                    <Tooltip
                                                        title="Mã số thuế cần phải nộp về nhà nước"
                                                        placement="right-start">
                                                        <InfoOutlinedIcon fontSize='small'
                                                                          className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth name={'taxCode'}
                                                       value={supplierEdit.taxCode}
                                                       onChange={inputDataEditSupplier}
                                                       type='text'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={7}>
                                        <Grid container>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Nhóm NCC</b>
                                                    <Tooltip
                                                        title="Nhóm các nhà cung cấp"
                                                        placement="right-start">
                                                        <InfoOutlinedIcon fontSize='small'
                                                                          className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Box sx={boxStyle}>
                                                    <ReusableSelect
                                                        id='groupSupplierId'
                                                        name='groupSupplierId'
                                                        key={supplierEdit.groupSupplierId}
                                                        value={supplierEdit.groupSupplierId}
                                                        inputChange={inputDataEditSupplier}
                                                        options={listGroupSupplier}
                                                        optionValueField='groupSupplierId'
                                                        optionLabelField='groupSupplierName'
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}/>
                                    <Grid item xs={6} md={7}>
                                        <Grid container>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Tên hàng hóa</b>
                                                    <Tooltip
                                                        title="Tên hàng hóa là tên của sản phẩm"
                                                        placement="right-start">
                                                        <InfoOutlinedIcon fontSize='small'
                                                                          className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Box sx={boxStyle}>
                                                    <ReusableSelect
                                                        id='productId'
                                                        name='productId'
                                                        key={supplierEdit.productId}
                                                        value={supplierEdit.productId}
                                                        inputChange={inputDataEditSupplier}
                                                        options={listProduct}
                                                        optionValueField='product_id'
                                                        optionLabelField='product_name'
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Typography>
                <Typography>
                    <Grid mt={5} mb={4}
                          sx={gridStyle}>
                        <Grid>
                            <Button variant='contained'
                                    color='success'
                                    onClick={onEditSupplier}
                                    sx={buttonTheme}
                            ><b>Lưu</b></Button>
                            <Button className={'text-end ms-2'}
                                    variant='contained'
                                    sx={buttonThemeClose}>
                                <b>Bỏ qua</b>
                            </Button>
                        </Grid>
                    </Grid>
                </Typography>
            </Box>
        </Container>
    </div>)
}

export default FormEditSupplier;