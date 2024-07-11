import {Box, Button, Grid, Input, Modal, Typography} from "@mui/material";
import {buttonTheme, buttonThemeClose, gridStyle, stylesModalSmall} from "./ReusableStyles";
import * as React from "react";

export const ModalFormSmall = (
    {
        open,
        handleClose,
        title,
        inputLabel,
        inputValue,
        inputName,
        inputChange,
        onSave,
    }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={stylesModalSmall} className={'rounded-5'} boxSizing='content-box'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    <Grid container spacing={2}>
                        <Grid item md={4} className="ps-3 mt-2">
                            <Typography variant="subtitle1"><b>{inputLabel}</b></Typography>
                        </Grid>
                        <Grid item md={8}>
                            <Input
                                fullWidth
                                value={inputValue}
                                name={inputName}
                                onChange={inputChange}
                                color='success'
                                type='text'
                            />
                        </Grid>
                    </Grid>
                    <Grid className='mt-4 mb-3' sx={gridStyle}>
                        <Button
                            onClick={onSave}
                            variant='contained'
                            color='success'
                            className='me-2'
                            sx={buttonTheme}
                        >
                            Lưu
                        </Button>
                        <Button
                            variant='contained'
                            sx={buttonThemeClose}
                            onClick={handleClose}
                        >
                            Bỏ qua
                        </Button>
                    </Grid>
                </Typography>
            </Box>
        </Modal>
    );
};