import {CardMedia, Fade, Input, Tooltip} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {getAccountInfo, getListCart} from "../api/ApiGet";
import {postLogout} from "../api/ApiPost";
import {putPassword} from "../api/ApiPut";
import {ModalUserInfo} from "../../reusable/ModalUserInfo";
import {ModalEditPassword} from "../../reusable/ModalEditPassword";

function NavbarUser() {
    useEffect(() => {
        onAccountInfo()
        onListCart()
    }, []);
    // useEffect(() => {
    //     onListCart()
    // },);

    const navigate = useNavigate();

    const [itemUsername, setItemUsername] = React.useState(null);
    const openUsername = Boolean(itemUsername);
    const [openUserInfo, setOpenUserInfo] = React.useState(false);
    const [passwordHidden, setPasswordHidden] = useState(true);
    const [listCart, setListCart] = useState([]);
    const [userInfo, setUserInfo] = useState('');
    const [editPassword, setEditPassword] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    })

    const onListCart = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListCart(token);
            setListCart(data);

        } catch (err) {
            console.log("Lỗi khi gọi API danh sách giỏ hàng:", err);
        }
    }
    const onAccountInfo = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getAccountInfo(token);
            console.log(data)
            setUserInfo(data)
        } catch (err) {
            throw err
        }
    }

    const inputDataEditPassword = (e) => {
        setEditPassword({...editPassword, [e.target.name]: e.target.value})
    }
    const [openEditPassword, setOpenEditPassword] = React.useState(false);
    const handleOpenEditPassword = () => setOpenEditPassword(true);
    const handleCloseEditPassword = () => setOpenEditPassword(false);
    const onEditPassword = async () => {
        const token = localStorage.getItem('token')
        try {
            await putPassword(editPassword, token)
            alert("Đổi mật khẩu thành công")
            handleCloseEditPassword()
        } catch (err) {
            alert("Đổi mật khẩu không thành công")
            handleCloseEditPassword()
            console.log(err)
        }
    }
    const handleLogout = async () => {
        const token = localStorage.getItem('token')
        try {
            await postLogout(token)
            navigate('/')
            localStorage.removeItem('token'); // Xóa token sau khi đăng xuất
            window.alert("Đăng xuất thành công")
        } catch (err) {
            navigate('/')
            console.log("Lỗi đăng xuất")
        }
    };

    const handleClickUsername = (event) => {
        setItemUsername(event.currentTarget);
    };
    const handleCloseUsername = () => {
        setItemUsername(null);
    };
    const handleOpenUserInfo = () => setOpenUserInfo(true);
    const handleCloseUserInfo = () => setOpenUserInfo(false);
    const togglePasswordVisibility = () => {
        setPasswordHidden(!passwordHidden);
    };

    return (
        <AppBar position="static" sx={{backgroundColor: 'white'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%'}}>
                        <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, color: 'black', mr: 1}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/DashBoard"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            SHOPPHONE
                        </Typography>
                        <Input type={'search'}
                               sx={{display: 'flex', justifyContent: 'flex-center', alignItems: 'center', width: '20%'}}
                               className={'rounded-9'}
                               placeholder={'Bạn tìm gì ...'}
                        />
                        <Box sx={{ml: 'auto', display: 'flex', alignItems: 'center'}}>
                            <Button component={Link} to="/cart"
                                    sx={{color: 'black', textDecoration: 'none', textTransform: 'capitalize'}}>
                                <Badge badgeContent={listCart.length} max={99} color="success">
                                    <ShoppingCartIcon color="action"/>
                                </Badge>
                            </Button>

                            <Button component={Link} to=""
                                    sx={{color: 'black', textDecoration: 'none', textTransform: 'capitalize'}}>
                                24h công nghệ
                            </Button>
                            <Button component={Link} to=""
                                    sx={{color: 'black', textDecoration: 'none', textTransform: 'capitalize'}}>
                                Hỏi đáp
                            </Button>
                            <Button component={Link} to=""
                                    sx={{color: 'black', textDecoration: 'none', textTransform: 'capitalize'}}>
                                Game App
                            </Button>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleClickUsername} sx={{p: 0, ml: 2}}>
                                    <MenuItem className='text-dark'><b>{userInfo.fullName}</b></MenuItem>
                                    <CardMedia
                                        image={`data:image/jpeg;base64,${userInfo.fileUser}`}
                                        style={{width: 50, height: 50}}
                                        className="rounded-9"
                                        alt="Cotton T-shirt"
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={itemUsername}
                                open={openUsername}
                                onClose={handleCloseUsername}
                                className={'mt-2'}
                                TransitionComponent={Fade}
                            >
                                <MenuItem onClick={handleOpenUserInfo} className={'mt-2'}>
                                    <ListItemText className={'me-5'}>
                                        <AccountCircleOutlinedIcon fontSize="small" className={'me-3'}/>
                                        Thông tin
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleOpenEditPassword} className={'mt-2'}>
                                    <ListItemText className={'me-5'}>
                                        <KeyOutlinedIcon fontSize="small" className={'me-3'}/>
                                        Thay đổi mật khẩu
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem component="a" href={''} onClick={handleCloseUsername} className={'mt-2 mb-2'}>
                                    <ListItemText className={'me-5'} onClick={handleLogout}>
                                        <LogoutOutlinedIcon fontSize="small" className={'me-3'}/>
                                        Đăng xuất
                                    </ListItemText>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>

                </Toolbar>
            </Container>
            <ModalEditPassword
                open={openEditPassword}
                close={handleCloseEditPassword}
                valueOldPassword={editPassword.oldPassword}
                valueNewPassword={editPassword.newPassword}
                valueConfirmPassword={editPassword.confirmPassword}
                inputChange={inputDataEditPassword}
                onEdit={onEditPassword}
            />
            <ModalUserInfo
                open={openUserInfo}
                nameUsername={userInfo.username}
                namePassword={userInfo.password}
                nameFullname={userInfo.fullName}
                nameGender={userInfo.genderName}
                nameFile={userInfo.fileUser}
                nameBirthday={userInfo.birthday}
                namePhoneNumber={userInfo.phoneNumber}
                nameEmail={userInfo.email}
                nameAddress={userInfo.address}
                nameIdCard={userInfo.idCard}
                nameFacebook={userInfo.facebook}
                nameStartDay={userInfo.startDay}
                close={handleCloseUserInfo}
                onPasswordVisibility={togglePasswordVisibility}
                passwordHidden={passwordHidden}
            />
        </AppBar>
    );
}

export default NavbarUser