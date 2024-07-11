import React, {useEffect, useState} from "react";
import {Container, MenuItem, Select} from "@mui/material";
import NavbarUser from "../compoment/NavbarUser";
import NavbarUserSecond from "../compoment/NavbarUserSecond";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Checkbox,
    Button,
    IconButton,
    TextField
} from '@mui/material';
import {Add, Remove, Close, ArrowBack} from '@mui/icons-material';
import Scrollbars from 'react-scrollbars-custom';
import NavbarUserEnd from "../compoment/NavbarUserEnd";
import {getListCart, getListCustomerInfo} from "../api/ApiGet";
import {postCustomerInfo, postSellCart} from "../api/ApiPost";
import {Link, useNavigate} from "react-router-dom";
import {delCart} from "../api/ApiDelete";
import {ModalCustomerInfo} from "../../reusable/ModalCustomerInfo";

function FormCart() {
    const [listCart, setListCart] = useState([]);
    const [listCustomer, setListCustomer] = useState([]);
    const [customerInfo, setCustomerInfo] = useState({
        customerId: '',
        customerName: '',
        phone: '',
        address: ''
    });
    const [cartSell, setCartSell] = useState({
        cartId: '',
        customerId: ''
    })
    const [totalPrice, setTotalPrice] = useState(0);
    const [openAddressCustomer, setOpenAddressCustomer] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        onListCart();
        onListCustomer();
    }, []);
    useEffect(() => {
        calculateTotalPrice();
    }, [listCart]);

    const onDelCart = async (cartId) => {
        const token = localStorage.getItem('token')
        try {
            await delCart(cartId, token)
            onListCart()
        } catch (err) {
            navigate('/cart')
        }
    }
    const onListCart = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListCart(token);
            setListCart(data);
        } catch (err) {
            console.log("Lỗi khi gọi API danh sách giỏ hàng:", err);
        }
    };
    const onListCustomer = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListCustomerInfo(token);
            setListCustomer(data);
        } catch (err) {
            console.log("Lỗi khi gọi API danh sách khách hàng:", err);
        }
    };
    const onSaveCustomerInfo = async () => {
        const token = localStorage.getItem('token');
        try {
            await postCustomerInfo(customerInfo, token);
            onListCustomer();
            handleCloseAddressCustomer();
        } catch (err) {
            console.log("Lỗi khi lưu thông tin khách hàng:", err);
        }
    };
    const onSellCart = async () => {
        const token = localStorage.getItem('token');
        try {
            await postSellCart(cartSell.cartId, cartSell.customerId, token)
            alert("Đặt hàng thành công")
            onListCart()
            navigate('/cart')
        } catch (err) {
            console.log(err)
        }
    }
    const calculateTotalPrice = () => {
        let total = 0;
        listCart.forEach((cartItem) => {
            total += cartItem.price * cartItem.quantity;
        });
        setTotalPrice(total);
    };

    const inputDataSell = (e) => {
        setCartSell({...cartSell, [e.target.name]: e.target.value})
    }
    const handleCustomerInfoChange = (e) => {
        setCustomerInfo({...customerInfo, [e.target.name]: e.target.value});
    };
    const handleOpenAddressCustomer = () => setOpenAddressCustomer(true);
    const handleCloseAddressCustomer = () => setOpenAddressCustomer(false);


    return (<div className='customDiv'>
            <NavbarUser></NavbarUser>
            <NavbarUserSecond></NavbarUserSecond>
            <Container maxWidth={'xl'} className={'mt-3'}>
                <section className="h-100 h-custom">
                    <Grid container justifyContent="center" alignItems="center" className="h-100 ">
                        <Grid item xs={12}>
                            <Card>
                                <CardContent className="p-0">
                                    <Grid container spacing={0}>
                                        <Grid item lg={8}>
                                            <Box className="p-5">
                                                <Box className="d-flex justify-content-between align-items-center mb-5">
                                                    <Typography variant="h5" className="fw-bold text-black">
                                                        Giỏ hàng
                                                    </Typography>
                                                    <Typography variant="h6" className="text-dark">
                                                        <b>Có {listCart.length} sản phẩm</b>
                                                    </Typography>
                                                </Box>
                                                <hr className="my-4"/>
                                                <Scrollbars style={{height: 500}}>
                                                    {listCart.map((cartItem) => (
                                                        <Grid
                                                            container
                                                            className="mb-4 d-flex justify-content-between align-items-center"
                                                            key={cartItem.cartId}
                                                        >
                                                            <Grid item md={1}>
                                                                <Checkbox
                                                                    value={cartItem.cartId}
                                                                    onChange={inputDataSell}
                                                                    name='cartId'
                                                                />
                                                            </Grid>
                                                            <Grid item xs={2} md={2}>
                                                                <CardMedia
                                                                    component="img"
                                                                    image={`data:image/jpeg;base64,${cartItem.fileBase64}`}
                                                                    style={{width: '100%', aspectRatio: '1/1'}}
                                                                    className="rounded-5"
                                                                    alt="Cotton T-shirt"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={3} md={3}>
                                                                <Typography variant="h6" className="text-black">
                                                                    <b>{cartItem.productName}
                                                                    </b>
                                                                </Typography>
                                                                <Typography className="text-muted">
                                                                    Cotton T-shirt
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={2} md={2}
                                                                  className="d-flex align-items-center">
                                                                <IconButton>
                                                                    <Remove fontSize='small'/>
                                                                </IconButton>
                                                                <TextField
                                                                    type="number"
                                                                    min="0"
                                                                    value={cartItem.quantity}
                                                                    size="small"
                                                                />
                                                                <IconButton>
                                                                    <Add fontSize='small'/>
                                                                </IconButton>
                                                            </Grid>
                                                            <Grid item xs={1} md={1} className="text-end">
                                                                <Typography variant="h6" className="mb-0"
                                                                            value={cartItem.price}>
                                                                    {(cartItem.price * cartItem.quantity)
                                                                        .toLocaleString('de-DE', {
                                                                            style: 'currency',
                                                                            currency: 'VND'
                                                                        })
                                                                        .replace('VNĐ', '')
                                                                    }
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={1} md={1} className="text-end">
                                                                <IconButton className="text-muted"
                                                                            onClick={() => onDelCart(cartItem.cartId)}>
                                                                    <Close/>
                                                                </IconButton>
                                                            </Grid>
                                                        </Grid>
                                                    ))}
                                                </Scrollbars>
                                                <hr className="my-4"/>
                                                <Box>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={12}
                                                              className="d-flex justify-content-end">
                                                            <Typography variant="h5"><b>Tổng
                                                                giá: {totalPrice.toLocaleString('de-DE', {
                                                                    style: 'currency',
                                                                    currency: 'VND'
                                                                }).replace('VNĐ', '')}</b></Typography>
                                                        </Grid>
                                                        <Grid item xs={8} md={6}>
                                                            <Button component={Link} to="/sale"
                                                                    className={'fw-bold btn-transparent'}
                                                                    sx={{textTransform: 'none'}}>
                                                                <ArrowBack className="me-2"/>
                                                                Quay lại cửa hàng
                                                            </Button>
                                                        </Grid>
                                                        <Grid item xs={4} md={6} className="d-flex justify-content-end">
                                                            <Button variant="contained" color="success" size="large"
                                                                    onClick={onSellCart}
                                                            >
                                                                Đặt hàng
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Box className="p-5">
                                                <Typography variant="h5" className="fw-bold mb-5">
                                                    Thông tin
                                                </Typography>
                                                <hr className="my-4"/>
                                                <Typography variant="h6" className="bold mb-3">
                                                    Địa chỉ nhận hàng
                                                </Typography>
                                                <Box className="mb-4 pb-2">
                                                    <Select fullWidth required variant="standard"
                                                            id={cartSell.customerId}
                                                            name='customerId'
                                                            key={cartSell.customerId}
                                                            onChange={inputDataSell}
                                                    >
                                                        {listCustomer.map((customer) => (
                                                            <MenuItem key={customer.customerId}
                                                                      value={customer.customerId}>
                                                                <div>
                                                                    <div>{customer.customerName}</div>
                                                                    <div>{customer.phone}</div>
                                                                    <div>{customer.address}</div>
                                                                </div>
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </Box>
                                                <Button variant="outlined" color="primary" fullWidth size="large"
                                                        onClick={handleOpenAddressCustomer}>
                                                    Thêm địa chỉ
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </section>
            </Container>
            <NavbarUserEnd></NavbarUserEnd>

            <ModalCustomerInfo
                open={openAddressCustomer}
                close={handleCloseAddressCustomer}
                valueCustomerName={customerInfo.customerName}
                valueAddress={customerInfo.address}
                valuePhone={customerInfo.phone}
                inputChange={handleCustomerInfoChange}
                onSave={onSaveCustomerInfo}
            />
        </div>
    )
}

export default FormCart

