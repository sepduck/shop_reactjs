import * as React from 'react';
import {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {CardMedia, Fade, Tooltip} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import QueuePlayNextOutlinedIcon from '@mui/icons-material/QueuePlayNextOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import {postLogout} from "../api/ApiPost";
import {getAccountInfo, getListGender} from "../api/ApiGet";
import {putPassword} from "../api/ApiPut";
import {ModalUserInfo} from "../../reusable/ModalUserInfo";
import {ModalEditPassword} from "../../reusable/ModalEditPassword";

function NavbarAdmin() {
    useEffect(() => {
        onAccountInfo()
        onListGender()
    }, []);

    const navigate = useNavigate()

    const [, setListGender] = useState([])
    const [userInfo, setUserInfo] = useState({});
    const [itemSupport, setItemSupport] = React.useState(null);
    const [itemUsername, setItemUsername] = React.useState(null);
    const [editPassword, setEditPassword] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    const [openEditPassword, setOpenEditPassword] = React.useState(false);
    const [openUserInfo, setOpenUserInfo] = React.useState(false);
    const [passwordHidden, setPasswordHidden] = useState(true);

    const onListGender = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getListGender(token)
            setListGender(data)
        } catch (err) {
            throw err;
        }
    }
    const onAccountInfo = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getAccountInfo(token)
            setUserInfo(data)
        } catch (err) {
            throw err
        }
    }
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

    const handleClickSupport = (event) => {
        setItemSupport(event.currentTarget);
    };
    const handleClickUsername = (event) => {
        setItemUsername(event.currentTarget);
    };

    const openSupport = Boolean(itemSupport);
    const openUsername = Boolean(itemUsername);

    const handleCloseSupport = () => {
        setItemSupport(null);
    };
    const handleCloseUsername = () => {
        setItemUsername(null);
    };

    const inputDataEditPassword = (e) => {
        setEditPassword({...editPassword, [e.target.name]: e.target.value})
    }

    const handleOpenEditPassword = () => setOpenEditPassword(true);
    const handleCloseEditPassword = () => setOpenEditPassword(false);
    const handleOpenUserInfo = () => setOpenUserInfo(true);
    const handleCloseUserInfo = () => setOpenUserInfo(false);
    const togglePasswordVisibility = () => {
        setPasswordHidden(!passwordHidden);
    };

    const date = new Date(userInfo.birthday);
    const formattedDate = !isNaN(date) ? date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }) : '';

    const buttonSx = {
        color: 'black',
        textDecoration: 'none',
        textTransform: 'capitalize'
    }

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
                        <Box sx={{ml: 'auto', display: 'flex', alignItems: 'center'}}>
                            <Button
                                id="fade-button"
                                aria-haspopup="true"
                                className={'me-2'}
                                sx={buttonSx}
                            ><InvertColorsOutlinedIcon className={'me-2'} color='primary'/>
                                Nguồn giá tốt
                            </Button>
                            <Button
                                id="fade-button"
                                aria-haspopup="true"
                                className={'me-2'}
                                sx={buttonSx}
                            ><ColorLensOutlinedIcon className={'me-2'} fontSize='small'/>
                                Chủ đề
                            </Button>
                            <Button
                                id="fade-button"
                                aria-controls={openSupport ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openSupport ? 'true' : undefined}
                                onClick={handleClickSupport}
                                className={'me-2'}
                                sx={buttonSx}
                            ><ContactSupportOutlinedIcon className={'me-2'} fontSize='small'/>
                                Hỗ trợ
                            </Button>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={itemSupport}
                                open={openSupport}
                                onClose={handleCloseSupport}
                                className={'mt-2'}
                                TransitionComponent={Fade}
                            >
                                <MenuItem component="a" href={''} onClick={handleCloseSupport} className={'mt-2'}>
                                    <ListItemText className={'me-5'}>
                                        <InfoOutlinedIcon fontSize="small" className={'me-3'}/>
                                        Hướng dẫn sử dụng
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem component="a" href={''} onClick={handleCloseSupport} className={'mt-2'}>
                                    <ListItemText className={'me-5'}>
                                        <ScreenShareOutlinedIcon color='primary' fontSize="small" className={'me-3'}/>
                                        Tải TeamViewer
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem component="a" href={''} onClick={handleCloseSupport} className={'mt-2'}>
                                    <ListItemText className={'me-5'}>
                                        <QueuePlayNextOutlinedIcon color='primary' fontSize="small" className={'me-3'}/>
                                        Tải UltraViewer
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem component="a"
                                          href={''}
                                          onClick={handleCloseSupport}
                                          className={'mt-2'}>
                                    <ListItemText className={'me-5'}>
                                        <ApiOutlinedIcon color='secondary' fontSize="small" className={'me-3'}/>
                                        Tải AnyDesk
                                    </ListItemText>
                                </MenuItem>
                            </Menu>
                            <Button component={Link} to=""
                                    sx={buttonSx}>
                                <FeedbackOutlinedIcon
                                    className={'me-2'}
                                    fontSize='small'/>
                                Góp ý
                            </Button>
                            <Button component={Link} to="">
                                <IconButton>
                                    <SettingsIcon/>
                                </IconButton>
                            </Button>
                            <Tooltip title="">
                                <IconButton onClick={handleClickUsername} sx={{p: 0, ml: 2}}>
                                    <MenuItem className={'fw-bold text-dark'}>{userInfo.fullName}</MenuItem>
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
                                <MenuItem className={'mt-2 mb-2'}>
                                    <ListItemText className={'me-5'} onClick={handleLogout}>
                                        <LogoutOutlinedIcon fontSize="small" className={'me-3'}/>
                                        Đăng xuất
                                    </ListItemText>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
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
                        nameBirthday={formattedDate}
                        namePhoneNumber={userInfo.phoneNumber}
                        nameEmail={userInfo.email}
                        nameAddress={userInfo.address}
                        nameIdCard={userInfo.idCard}
                        nameFacebook={userInfo.facebook}
                        nameStartDay={userInfo.startDay}
                        nameFile={userInfo.fileUser}
                        close={handleCloseUserInfo}
                        onPasswordVisibility={togglePasswordVisibility}
                        passwordHidden={passwordHidden}
                    />
                </Toolbar>
            </Container>
        </AppBar>

    );
}

export default NavbarAdmin;
