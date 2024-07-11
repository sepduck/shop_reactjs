import {Box, Button, Grid, Input, Modal, Typography} from "@mui/material";
import {buttonTheme, buttonThemeClose, gridStyle, stylesModalGroupSupplier} from "./ReusableStyles";
import * as React from "react";

export const ModalGroupSupplier = (
    {
        open,
        close,
        valueGroupSupplierName,
        inputChange,
        valueNote,
        onSave
    }) => {
    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={stylesModalGroupSupplier} className={'rounded-5'}
                 boxSizing='content-box'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Thêm nhóm nhà cung cấp
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    <Grid container spacing={2}>
                        <Grid item md={4} className="ps-3 mt-2">
                            <Typography variant="subtitle1"><b>Tên
                                nhóm</b></Typography>
                        </Grid>
                        <Grid item md={8}>
                            <Input fullWidth
                                   name={'groupSupplierName'}
                                   value={valueGroupSupplierName}
                                   onChange={inputChange}
                                   type='text'/>
                        </Grid>
                        <Grid item md={4} className="ps-3 mt-2">
                            <Typography variant="subtitle1"><b>Ghi
                                chú</b></Typography>
                        </Grid>
                        <Grid item md={8}>
                            <Input fullWidth
                                   name={'note'}
                                   value={valueNote}
                                   onChange={inputChange}
                                   className="mt-3"
                                   type='text'/>
                        </Grid>
                    </Grid>
                    <Grid className='mt-4 mb-3'
                          sx={gridStyle}>
                        <Button
                            onClick={onSave}
                            variant='contained'
                            className='me-2'
                            sx={buttonTheme}
                        >
                            Lưu
                        </Button>
                        <Button variant='contained'
                                sx={buttonThemeClose}
                                onClick={close}>
                            Bỏ qua
                        </Button>
                    </Grid>
                </Typography>
            </Box>
        </Modal>
    )
}