import {Box, Button, Container, Grid, Input, Modal, Typography} from "@mui/material";
import {buttonTheme, buttonThemeClose, styleSquare} from "./ReusableStyles";
import React from "react";

export const ModalCustomerInfo = (
    {
        open,
        close,
        valueCustomerName,
        valuePhone,
        valueAddress,
        inputChange,
        onSave
    }
) => {
    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styleSquare} className='rounded-5' boxSizing='content-box'>
                <Typography id="modal-modal-title" variant="h6" component="h2" className='fw-bold'>
                    Địa chỉ nhận hàng
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Typography variant="subtitle1"><b>Liên hệ</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Input
                                    fullWidth
                                    placeholder="Họ và tên"
                                    name='customerName'
                                    value={valueCustomerName}
                                    onChange={inputChange}
                                    className="mb-2"
                                    color="success"
                                    type='text'/>
                            </Grid>
                            <Grid item md={12}>
                                <Input
                                    fullWidth
                                    placeholder="Số điện thoại"
                                    name='phone'
                                    value={valuePhone}
                                    onChange={inputChange}
                                    className="mb-4"
                                    color="success"
                                    type='text'/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Typography variant="subtitle1"><b>Địa chỉ nhận hàng</b>
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <Input
                                    fullWidth
                                    placeholder="Địa chỉ nhận hàng"
                                    className="mb-4"
                                    name='address'
                                    value={valueAddress}
                                    onChange={inputChange}
                                    color="success"
                                    type='text'/>
                            </Grid>
                            <Grid item xs={12} md={12} mt={3}>
                                <Button variant="contained"
                                        onClick={onSave}
                                        color='success'
                                        className='form-control'
                                        size='large'
                                        sx={buttonTheme}
                                >
                                    Lưu thông tin
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={12} mb={5}>
                                <Button variant="contained"
                                        size='large'
                                        className='form-control'
                                        sx={buttonThemeClose}
                                        onClick={close}>
                                    Bỏ lưu
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Typography>
            </Box>

        </Modal>
    )
}