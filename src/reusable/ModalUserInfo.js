import {Box, Button, Card, CardMedia, Grid, IconButton, Modal, Typography} from "@mui/material";
import {styleNewProduct} from "./ReusableStyles";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import * as React from "react";

export const ModalUserInfo = (
    {
        open,
        close,
        nameUsername,
        namePassword,
        nameFullname,
        nameBirthday,
        namePhoneNumber,
        nameEmail,
        nameAddress,
        nameIdCard,
        nameFacebook,
        nameStartDay,
        nameGender,
        nameFile,
        valueGender,
        passwordHidden,
        onPasswordVisibility
    }) => {
    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styleNewProduct} className={'rounded-5'}
                 boxSizing='content-box'>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Grid container>
                                <Grid item md={4}></Grid>
                                <Grid item md={8}>
                                    <Typography variant="h6"><b>THÔNG TIN TÀI KHOẢN</b></Typography>
                                </Grid>
                                <Grid container spacing={4} mt={3}>
                                    <Grid item xs={6} md={4}>
                                        <Card sx={{
                                            maxWidth: 200, borderRadius: '50%',
                                            width: 200,
                                            height: 200,
                                            margin: 'auto',
                                        }}>
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={`data:image/jpeg;base64,${nameFile}`}
                                            />
                                        </Card>
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Grid container>
                                            <Grid item md={12}>
                                                <Typography variant="h6"><b>Thông tin đăng nhập</b>
                                                </Typography>
                                            </Grid>
                                            <Grid container mt={2}>
                                                <Grid item md={3} className="mt-2">
                                                    <Typography variant="subtitle1">Tên người dùng
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9} className="mt-2">
                                                    <Typography variant="subtitle1"><b>{nameUsername}</b>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={3} className="mt-2">
                                                    <Typography variant="subtitle1">Mật khẩu
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9} className="mt-2">
                                                    <Typography variant="subtitle1">
                                                        <b> {passwordHidden ? '***' : namePassword}</b>
                                                        <IconButton className="ms-2" onClick={onPasswordVisibility}>
                                                            {passwordHidden ? <VisibilityOff/> : <Visibility/>}
                                                        </IconButton>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <hr/>
                                        <Grid container mb={5}>
                                            <Grid item md={12}>
                                                <Typography variant="h6"><b>Thông tin cá nhân</b>
                                                </Typography>
                                            </Grid>
                                            <Grid container mt={2}>
                                                <Grid item md={3} className="mt-2">
                                                    <Typography variant="subtitle1">Họ và tên
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9} className="mt-2">
                                                    <Typography variant="subtitle1"><b>{nameFullname}</b>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={3} className="mt-2">
                                                    <Typography variant="subtitle1">Giới tính
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9} className="mt-2">
                                                    <Typography value={valueGender} key={valueGender}
                                                                variant="subtitle1"><b>{nameGender}</b>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={3} className="mt-2">
                                                    <Typography variant="subtitle1">Ngày sinh
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9} className="mt-2">
                                                    <Typography variant="subtitle1"><b>{nameBirthday}</b>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={3} className="mt-2">
                                                    <Typography variant="subtitle1">Số điện thoại
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9} className="mt-2">
                                                    <Typography variant="subtitle1"><b>{namePhoneNumber}</b>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={3} className="mt-2">
                                                    <Typography variant="subtitle1">Email
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9} className="mt-2">
                                                    <Typography variant="subtitle1"><b>{nameEmail}</b>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={3} className="mt-2">
                                                    <Typography variant="subtitle1">Địa chỉ
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9} className="mt-2">
                                                    <Typography variant="subtitle1"><b>{nameAddress}</b>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={3} className="mt-2">
                                                    <Typography variant="subtitle1">CMND/CCCD
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9} className="mt-2">
                                                    <Typography variant="subtitle1"><b>{nameIdCard}</b>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={3} className="mt-2">
                                                    <Typography variant="subtitle1">Facebook
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9} className="mt-2">
                                                    <Typography variant="subtitle1"><b>{nameFacebook}</b>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={3} className="mt-2">
                                                    <Typography variant="subtitle1">Ngày tạo
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9} className="mt-2">
                                                    <Typography variant="subtitle1"><b>{nameStartDay}</b>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Typography>
            </Box>
        </Modal>
    )
}