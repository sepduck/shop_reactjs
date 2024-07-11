import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import {
    Checkbox,
    Fade, FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    Input, InputAdornment,
    Modal,
    useTheme
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import {gridStyle, styleSquare} from "../../reusable/ReusableStyles";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import {postRegister} from "../api/ApiPost";
import {ModalCreateUser} from "../../reusable/ModalCreateUser";


function Login() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const [usersSave, setUsersSave] = useState({
        username: '',
        password: '',
        phoneNumber: '',
        idCard: 0,
        genderId: '',
        facebook: '',
        email: '',
        address: '',
        fullName: '',
        birthday: '',
        fileUser: null
    })
    const [anchorEl, setAnchorEl] = useState(null);
    const [showPassword, setShowPassword] = React.useState(false);
    const [openLogin, setOpenLogin] = React.useState(false);
    const [openRegister, setOpenRegister] = React.useState(false);
    const theme = useTheme();

    const navigate = useNavigate();

    const onLogin = async () => {
        let data = {
            username: user.username,
            password: user.password
        }
        axios.post('/login', data)
            .then(resp => {
                localStorage.setItem('token', resp.data.data)
                navigate('/sale')
            })
            .catch(() => {
                window.alert("Đăng nhập không thành công")
                navigate('/')
                handleCloseLogin()
            })
    }
    const onUserSave = async () => {
        const formData = new FormData();
        for (const key in usersSave) {
            formData.append(key, usersSave[key]);
        }
        try {
            await postRegister(formData)
            navigate('/')
            alert("Đăng ký thành công")
            handleCloseRegister()
        } catch (error) {
            alert("Đăng ký không thành công! Vui lòng thử lại")
            handleCloseRegister()

        }
    }

    const inputDataLogin = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const inputDataRegister = (e) => {
        const {name, value} = e.target;
        setUsersSave({...usersSave, [name]: value});
    }
    const [imageUser, setImageUser] = useState(null);

    const inputDataFileUser = (e) => {
        const fileUser = e.target.files[0];
        if (fileUser) {
            setUsersSave({ ...usersSave, fileUser });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUser(reader.result);
            };
            reader.readAsDataURL(fileUser);
        }
    };
    const resetLogin = () => setUser({
        username: '',
        password: ''
    })
    const resetRegister = () => setUsersSave({
        username: '',
        password: '',
        phoneNumber: '',
        idCard: 0,
        genderId: '',
        facebook: '',
        email: '',
        address: '',
        fullName: '',
        birthday: '',
        fileUser: null
    })
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onLogin();
        }
    };
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleOpenRegister = () => setOpenRegister(true);
    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => {
        setOpenLogin(false);
        resetLogin()
    }
    const handleCloseRegister = () => {
        setOpenRegister(false);
        resetRegister();
        setImageUser(null)
    }
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className='background-container'>
            <AppBar position="static" sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={gridStyle} mt={3}>
                            <Button component={Link} to="/ve-chung-toi" className={'text-white fw-bold btn-transparent'}
                                    sx={{textTransform: 'none'}}>
                                Sản phẩm
                            </Button>
                            <Button component={Link} to="/ve-chung-toi" className={'text-white fw-bold btn-transparent'}
                                    sx={{textTransform: 'none'}}>
                                Giải pháp
                            </Button>
                            <Button
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleMenuOpen}
                                className={'text-white fw-bold btn-transparent'}
                                sx={{textTransform: 'none'}}
                            >
                                Khách hàng
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                TransitionComponent={Fade}
                            >
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText className={'mt-3 ms-3 mx-3'}>
                                        <Link to="https://www.kiotviet.vn/khach-hang">Khách hàng NhungShop</Link>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText className={'mt-3 ms-3 mb-3'}>
                                        <Link to="https://www.kiotviet.vn/gioithieukhachhang/">Giới thiệu khách
                                            hàng</Link>
                                    </ListItemText>
                                </MenuItem>
                            </Menu>
                            <Button component={Link} to="/ve-chung-toi" className={'text-white fw-bold btn-transparent'}
                                    sx={{textTransform: 'none'}}>
                                Phí dịch vụ
                            </Button>
                            <Button component={Link} to="/ve-chung-toi" className={'text-white fw-bold btn-transparent'}
                                    sx={{textTransform: 'none'}}>
                                Hỗ trợ
                            </Button>
                            <Button
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleMenuOpen}
                                className={'text-white fw-bold btn-transparent'}
                                sx={{textTransform: 'none'}}
                            >
                                Tin tức
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                TransitionComponent={Fade}
                            >
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText className={'mt-3 ms-3'}>
                                        <Link to="https://www.kiotviet.vn/blog/">Tin tức</Link>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText className={'mt-3 ms-3'}>
                                        <Link to="https://www.kiotviet.vn/t/kinh-nghiem-kinh-doanh/">Kinh nghiệm kinh
                                            doanh</Link>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText className={'mt-3 ms-3'}>
                                        <Link to="https://www.kiotviet.vn/t/cau-chuyen-thanh-cong/">Câu chuyện thành
                                            công</Link>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText className={'mt-3 ms-3'}>
                                        <Link to="https://www.kiotviet.vn/t/meo-hay/">Mẹo hay</Link>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText className={'mt-3 ms-3'}>
                                        <Link to="https://www.kiotviet.vn/t/khuyen-mai/">Khuyến mãi</Link>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText className={'mt-3 ms-3'}>
                                        <Link to="https://www.kiotviet.vn/t/tin-tuc-ve-ki-ot-viet/">Tin tức về
                                            NhungShop</Link>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText className={'mt-3 ms-3 mx-3'}>
                                        <Link to="https://www.kiotviet.vn/noi-dung-cap-nhat-sap-toi/">Thông tin cập nhật
                                            về NhungShop</Link>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText className={'mt-3 ms-3 mb-3'}>
                                        <Link to="https://connect.kiotviet.vn/">Về sàn TMĐT NhungShop Connect</Link>
                                    </ListItemText>
                                </MenuItem>
                            </Menu>
                            <Button component={Link} to="https://about.kiotviet.vn/ve-chung-toi/"
                                    className={'text-white fw-bold btn-transparent'}
                                    sx={{textTransform: 'none'}}>
                                Về NhungShop
                            </Button>
                            <Button
                                onClick={handleOpenLogin}
                                variant="outlined"
                                color="inherit"
                                size='large'
                                className={'text-white fw-bold ms-3 rounded-9'}
                                sx={{textTransform: 'none'}}
                            >
                                Đăng nhập
                            </Button>
                            <Button
                                onClick={handleOpenRegister}
                                variant="contained"
                                size='large'
                                className={'d-flex justify-content-end text-dark fw-bold ms-3 float-end rounded-9'}
                                sx={{textTransform: 'none', backgroundColor: 'white'}}
                            >
                                Đăng ký
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Modal
                open={openLogin}
                onClose={handleCloseLogin}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleSquare} className={'rounded-6'}>
                    <Typography id="modal-modal-title" className='text-center' variant="h6"
                                component="h2">
                        Đăng nhập
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        <Container>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    <FormControl variant="filled" fullWidth>
                                        <Input
                                            name={'username'}
                                            value={user.username}
                                            onChange={inputDataLogin}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Tên đăng nhập"
                                            sx={{
                                                padding: theme.spacing(1), // Thêm padding theo kích thước của theme
                                            }}
                                            startAdornment={
                                                <PersonIcon className={'me-2'}/>
                                            }
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <FormControl variant="filled" fullWidth>
                                        <Input

                                            onKeyPress={handleKeyPress}
                                            name={'password'}
                                            value={user.password}
                                            onChange={inputDataLogin}
                                            placeholder="Mật khẩu"
                                            sx={{
                                                padding: theme.spacing(1), // Thêm padding theo kích thước của theme
                                            }}
                                            type={showPassword ? 'text' : 'password'}
                                            startAdornment={
                                                <KeyIcon className={'me-2'}/>
                                            }
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff/> :
                                                            <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <FormControlLabel
                                        required
                                        control={<Checkbox/>}
                                        label="Ghi nhớ đăng nhập"/>
                                </Grid>
                                <Grid item xs={6} md={6} className="text-end mt-3 mb-3">
                                    <Link
                                        to={'https://www.youtube.com/watch?v=OE57pr7sPE4&list=RDMMcaXS47CiDN8&index=25'}>Quên
                                        mật khẩu</Link>
                                </Grid>
                                <Grid item xs={6} md={12}>
                                    <Button variant="contained"
                                            onClick={onLogin}
                                            className='form-control rounded-2'
                                    >
                                        Đăng nhập
                                    </Button>
                                </Grid>
                                <Grid item xs={6} md={12}>
                                    <Button variant="outlined"
                                            onClick={handleCloseLogin}
                                            className='form-control rounded-2 mb-5'
                                    >
                                        Thoát
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Typography>
                </Box>
            </Modal>
            <ModalCreateUser
                title={"Tạo tài khoản mới"}
                buttonTitle={"Tạo tài khoản"}
                open={openRegister}
                close={handleCloseRegister}
                valueFullName={usersSave.fullName}
                valueBirthday={usersSave.birthday}
                valuePhoneNumber={usersSave.phoneNumber}
                valueEmail={usersSave.email}
                valueAddress={usersSave.address}
                valueGender={usersSave.genderId}
                valueIdCard={usersSave.idCard}
                valueFacebook={usersSave.facebook}
                valueUsername={usersSave.username}
                valuePassword={usersSave.password}
                inputChange={inputDataRegister}
                inputChangeFile={inputDataFileUser}
                onSave={onUserSave}
                imageUser={imageUser}
                handleImageUpload={inputDataFileUser}
            />
        </div>
    );
}

export default Login;
