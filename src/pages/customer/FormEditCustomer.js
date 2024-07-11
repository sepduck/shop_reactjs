import NavbarAdmin from "../compoment/NavbarAdmin";
import NavbarAdminSecond from "../compoment/NavbarAdminSecond";
import {Box, Button, Container, FormControlLabel, Grid, Input, Radio, RadioGroup, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {putCustomer} from "../api/ApiPut";
import {getFindByIdCustomer} from "../api/ApiGet";
import {buttonThemeClose, gridStyle, styleLarge} from "../../reusable/ReusableStyles";

function FormEditCustomer() {
    useEffect(() => {
        onFindByCustomerId();
    }, []);

    let {id} = useParams();
    const [customerEdit, setCustomerEdit] = useState({
        userId: '',
        phoneNumber: '',
        idCard: '',
        genderId: '',
        facebook: '',
        email: '',
        address: '',
        fullName: '',
        birthday: '',
        fileUser: null
    });

    const navigate = useNavigate();

    const onFindByCustomerId = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getFindByIdCustomer(id, token);
            setCustomerEdit(data);
        } catch (err) {
            navigate('/customer');
        }
    };
    const onEditCustomer = async () => {
        const formEdit = new FormData();
        for (const key in customerEdit) {
            formEdit.append(key, customerEdit[key]);
        }
        const token = localStorage.getItem('token')
        try {
            await putCustomer(id, formEdit, token)
            alert("Sửa thông tin khách hàng thành công");
            navigate('/customer');
        } catch (error) {
            alert("Lỗi khi thêm khách hàng!");
            navigate('/customer');
        }
    };

    const inputDataEditCustomer = (e) => {
        const {name, value} = e.target;
        setCustomerEdit({...customerEdit, [name]: value});
    }
    const inputDataFileCustomer = (e) => {
        setCustomerEdit({...customerEdit, fileUser: e.target.files[0]});
    };

    return (
        <div className='customDiv' style={{height: '950px'}}>
            <NavbarAdmin/>
            <NavbarAdminSecond/>
            <Container maxWidth={'xl'}>
                <Box sx={styleLarge} className={'rounded-5'} boxSizing='content-box'>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Sửa thông tin khách hàng
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={6}>
                                <Grid container>
                                    <Grid item md={4} className=" mt-1">
                                        <Typography variant="subtitle1"><b>Họ và tên</b></Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Input
                                            fullWidth
                                            name={'fullName'}
                                            value={customerEdit.fullName}
                                            onChange={inputDataEditCustomer}
                                            type='text'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Grid container>
                                    <Grid item md={1}/>
                                    <Grid item md={4} className="mt-1">
                                        <Typography variant="subtitle1"><b>Ngày sinh</b></Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Input
                                            fullWidth
                                            name={'birthday'}
                                            value={customerEdit.birthday}
                                            onChange={inputDataEditCustomer}
                                            type='date'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Grid container>
                                    <Grid item md={4} className="mt-1">
                                        <Typography variant="subtitle1"><b>Điện thoại</b></Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Input
                                            fullWidth
                                            name={'phoneNumber'}
                                            value={customerEdit.phoneNumber}
                                            onChange={inputDataEditCustomer}
                                            type='tel'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Grid container>
                                    <Grid item md={1}/>
                                    <Grid item md={4} className="mt-1">
                                        <Typography variant="subtitle1"><b>Email</b></Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Input
                                            fullWidth
                                            name={'email'}
                                            value={customerEdit.email}
                                            onChange={inputDataEditCustomer}
                                            type='email'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Grid container>
                                    <Grid item md={4} className="mt-1">
                                        <Typography variant="subtitle1"><b>Địa chỉ</b></Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Input
                                            fullWidth
                                            name={'address'}
                                            value={customerEdit.address}
                                            onChange={inputDataEditCustomer}
                                            type='text'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Grid container>
                                    <Grid item md={1}/>
                                    <Grid item md={4} className="mt-1">
                                        <Typography variant="subtitle1"><b>CMND/CCCD</b></Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Input
                                            fullWidth
                                            name={'idCard'}
                                            value={customerEdit.idCard}
                                            onChange={inputDataEditCustomer}
                                            type='text'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Grid container>
                                    <Grid item md={4} className="mt-1">
                                        <Typography variant="subtitle1"><b>Facebook</b></Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Input
                                            fullWidth
                                            name={'facebook'}
                                            value={customerEdit.facebook}
                                            onChange={inputDataEditCustomer}
                                            type='url'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={6}/>
                            <Grid item xs={6} md={6}>
                                <Grid container>
                                    <Grid item md={4} className="mt-1">
                                        <Typography variant="subtitle1"><b>Giới tính</b></Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <RadioGroup
                                            row
                                            name="genderId"
                                            value={customerEdit.genderId}
                                            onChange={inputDataEditCustomer}
                                        >
                                            <FormControlLabel
                                                name={'genderId'}
                                                value={1}
                                                control={<Radio/>}
                                                label="Nam"
                                            />
                                            <FormControlLabel
                                                name={'genderId'}
                                                value={2}
                                                control={<Radio/>}
                                                label="Nữ"
                                            />
                                            <FormControlLabel
                                                name={'genderId'}
                                                value={3}
                                                control={<Radio/>}
                                                label="Khác"
                                            />
                                        </RadioGroup>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={7}>
                                <Input fullWidth
                                       name={'fileUser'}
                                       onChange={inputDataFileCustomer}
                                       color='success'
                                       type='file'/>
                            </Grid>
                        </Grid>
                    </Typography>
                    <Typography>
                        <Grid className='mt-4 mb-3' sx={gridStyle}>
                            <Button
                                color='success'
                                variant='contained'
                                onClick={onEditCustomer}
                                className='me-2'
                                style={{textTransform: 'none'}}
                            >
                                Lưu
                            </Button>
                            <Button
                                variant='contained'
                                sx={buttonThemeClose}
                            >
                                Bỏ qua
                            </Button>
                        </Grid>
                    </Typography>
                </Box>
            </Container>
        </div>
    );
}

export default FormEditCustomer;
