import {Box, Button, Container, FormControl, Grid, Input, Modal, Typography} from "@mui/material";
import {styleSquare} from "./ReusableStyles";
import KeyIcon from "@mui/icons-material/Key";
import * as React from "react";

export const ModalEditPassword = (
    {
        open,
        close,
        valueOldPassword,
        valueNewPassword,
        valueConfirmPassword,
        inputChange,
        onEdit,
    }) => {
    return (
        <Modal
            open={open}
            onClose={close}
        >
            <Box sx={styleSquare} className={'rounded-6'}>
                <Typography className='text-center' variant="h6"
                            component="h2">
                    Đổi mật khẩu
                </Typography>
                <Typography sx={{mt: 2}}>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <FormControl variant="filled" fullWidth>
                                    <Input
                                        name={'oldPassword'}
                                        value={valueOldPassword}
                                        onChange={inputChange}
                                        placeholder="Nhập mật khẩu hiện tại"
                                        startAdornment={
                                            <KeyIcon className={'me-2'}/>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={12} mt={1}>
                                <FormControl variant="filled" fullWidth>
                                    <Input
                                        name={'newPassword'}
                                        value={valueNewPassword}
                                        onChange={inputChange}
                                        placeholder="Nhập mật khẩu mới"
                                        startAdornment={
                                            <KeyIcon className={'me-2'}/>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} mt={1} mb={3} md={12}>
                                <FormControl variant="filled" fullWidth>
                                    <Input
                                        name={'confirmPassword'}
                                        value={valueConfirmPassword}
                                        onChange={inputChange}
                                        placeholder="Nhập lại mật khẩu"
                                        startAdornment={
                                            <KeyIcon className={'me-2'}/>
                                        }
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={6} md={12}>
                                <Button variant="contained"
                                        color='success'
                                        onClick={onEdit}
                                        className='form-control rounded-2'
                                >
                                    Thay đổi
                                </Button>
                            </Grid>
                            <Grid item xs={6} md={12}>
                                <Button variant="outlined"
                                        onClick={close}
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
    )
}