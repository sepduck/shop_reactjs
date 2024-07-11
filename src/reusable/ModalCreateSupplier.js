import {Box, Button, Grid, Input, Modal, Tooltip, Typography} from "@mui/material";
import {
    boxStyle,
    buttonTheme,
    buttonThemeClose,
    gridStyle,
    InfoOutlinedIconStyle,
    styleNewProduct
} from "./ReusableStyles";
import {ReusableFormSelect} from "./ReusableSelect";
import * as React from "react";

export const ModalCreateSupplier = (
    {
        open,
        close,
        valueSupperName,
        valueEmail,
        valuePhoneNumber,
        valueCompany,
        valueAddress,
        valueTaxCode,
        valueGroupSupplierId,
        valueProductId,
        inputChange,
        optionsGroupSuppier,
        optionsProduct,
        openGroupSupplier,
        openProduct,
        onSaveSupplier,

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
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Thêm nhà cung cấp
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Grid container>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={7}>
                                        <Grid container>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Tên nhà cung cấp</b>
                                                    <Tooltip
                                                        title="Tên hàng là tên của sản phẩm"
                                                        placement="right-start">
                                                        <InfoOutlinedIconStyle
                                                            fontSize='small'
                                                            sx={{color: '#757575'}}
                                                            className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth
                                                       name={'supplierName'}
                                                       value={valueSupperName}
                                                       onChange={inputChange}
                                                       type='text'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}>
                                        <Grid container>
                                            <Grid item md={1}/>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Email</b>
                                                    <Tooltip
                                                        title="Giá vốn dùng để tính lợi nhuận cho sản phẩm (sẽ tự động thay đổi khi thay đổi phương pháp giá tính vốn)"
                                                        placement="right-start">
                                                        <InfoOutlinedIconStyle
                                                            fontSize='success'
                                                            sx={{color: '#757575'}}
                                                            className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth
                                                       name={'email'}
                                                       value={valueEmail}
                                                       onChange={inputChange}
                                                       type='email'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={7}>
                                        <Grid container>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Điện thoại</b>
                                                    <Tooltip
                                                        title="Lựa chọn nhóm hàng cho sản phẩm"
                                                        placement="right-start">
                                                        <InfoOutlinedIconStyle fontSize='success'
                                                                               sx={{color: '#757575'}}
                                                                               className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth name={'phoneNumber'}
                                                       value={valuePhoneNumber}
                                                       onChange={inputChange}

                                                       type='tel'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}>
                                        <Grid container>
                                            <Grid item md={1}/>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Công ty</b></Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth name={'company'}
                                                       value={valueCompany}
                                                       onChange={inputChange}
                                                       type='text'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={7}>
                                        <Grid container>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Địa chỉ</b>
                                                    <Tooltip
                                                        title="Thương hiệu, nhãn hiệu của sản phẩm"
                                                        placement="right-start">
                                                        <InfoOutlinedIconStyle fontSize='success'
                                                                               sx={{color: '#757575'}}
                                                                               className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>

                                                <Input fullWidth name={'address'}
                                                       value={valueAddress}
                                                       onChange={inputChange}
                                                       type='text'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}>
                                        <Grid container>
                                            <Grid item md={1}/>
                                            <Grid item md={4} mt={1}>
                                                <Typography
                                                    variant="subtitle1"><b>Mã số thuế</b>
                                                    <Tooltip
                                                        title="Số lượng tồn kho của sản phẩm"
                                                        placement="right-start">
                                                        <InfoOutlinedIconStyle/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth name={'taxCode'}
                                                       value={valueTaxCode}
                                                       onChange={inputChange}
                                                       type='text'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={7}>
                                        <Grid container>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Nhóm NCC</b>
                                                    <Tooltip
                                                        title="Sự dụng để ghi lại vị trí mà hàng hóa được cất giữ hoặc trưng bày. Ví dụ: kệ số 1, số 2 ..."
                                                        placement="right-start">
                                                        <InfoOutlinedIconStyle/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Box sx={boxStyle}>
                                                    <ReusableFormSelect
                                                        id='groupSupplierId'
                                                        name='groupSupplierId'
                                                        key={valueGroupSupplierId}
                                                        value={valueGroupSupplierId}
                                                        inputChange={inputChange}
                                                        options={optionsGroupSuppier}
                                                        optionValueField='groupSupplierId'
                                                        optionLabelField='groupSupplierName'
                                                        handleOpen={openGroupSupplier}
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}/>
                                    <Grid item xs={6} md={7}>
                                        <Grid container>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Tên hàng hóa</b></Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Box sx={boxStyle}>
                                                    <ReusableFormSelect
                                                        id='productId'
                                                        name='productId'
                                                        key={valueProductId}
                                                        value={valueProductId}
                                                        inputChange={inputChange}
                                                        options={optionsProduct}
                                                        optionValueField='product_id'
                                                        optionLabelField='product_name'
                                                        handleOpen={openProduct}
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Typography>
                <Typography>
                    <Grid className='mt-4 mb-3'
                          sx={gridStyle}>
                        <Grid>
                            <Button variant='contained'
                                    color='success'
                                    onClick={onSaveSupplier}
                                    sx={buttonTheme}
                            ><b>Lưu</b></Button>
                            <Button variant='contained'
                                    color='success'
                                    className={'ms-2'}
                                    onClick={onSaveSupplier}
                                    sx={buttonTheme}>
                                <b>Lưu & Thêm mới</b></Button>
                            <Button variant='contained'
                                    className={'ms-2'}
                                    color='success'
                                    onClick={onSaveSupplier}
                                    sx={buttonTheme}><b>
                                Lưu & Sao chép</b>
                            </Button>
                            <Button className={'text-end ms-2'}
                                    variant='contained'
                                    onClick={close}
                                    sx={buttonThemeClose}>
                                <b>Bỏ qua</b>
                            </Button>
                        </Grid>
                    </Grid>
                </Typography>
            </Box>
        </Modal>
    )
}