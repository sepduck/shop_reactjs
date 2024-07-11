import {Box, Button, Grid, Modal} from "@mui/material";
import {buttonTheme, buttonThemeClose, styleSquare} from "./ReusableStyles";
import Typography from "@mui/material/Typography";
import {ReusableSelect} from "./ReusableSelect";
import * as React from "react";

export const ModalSetRole = (
    {
        open,
        close,
        valueUserId,
        inputChange,
        optionsCustumer,
        onSave
    }) => {
    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styleSquare} className={'rounded-5'}
                 boxSizing='content-box'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Thêm roles nhân viên
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    <Grid container spacing={2}>
                        <Grid item md={4} className="ps-3 mt-2">
                            <Typography variant="subtitle1"><b>Tên người dùng</b></Typography>
                        </Grid>
                        <Grid item md={8}>
                            <ReusableSelect
                                id='userId'
                                name='userId'
                                key={valueUserId}
                                value={valueUserId}
                                inputChange={inputChange}
                                options={optionsCustumer}
                                optionValueField='user_id'
                                optionLabelField='full_name'
                            />
                        </Grid>
                    </Grid>
                    <Grid className='mt-4 mb-3'
                          sx={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
                        <Button
                            onClick={onSave}
                            variant='contained'
                            color='success'
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