import {Box, Button, Container, FormControlLabel, Grid, Input, Modal, Switch, Tooltip, Typography} from "@mui/material";
import {
    boxStyle,
    buttonTheme,
    buttonThemeClose,
    gridStyle,
    InfoOutlinedIconStyle,
    styleNewProduct
} from "./ReusableStyles";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import {ReusableFormSelect, ReusableSelect} from "./ReusableSelect";
import * as React from "react";

export const ModalProductSave = (
    {
        openNewProduct,
        valueProductName,
        valuePrice,
        valueCapitalPrice,
        valueInventory,
        valueGroupProductId,
        valueTrademarkId,
        valueWeight,
        valueLocationId,
        valuePropertiesId,
        valueUnitId,
        valueDirectSales,
        valueCategoryId,
        optionGroupProduct,
        optionTrademark,
        optionLocation,
        optionProperties,
        optionUnit,
        optionCategory,
        inputChange,
        handleOpenNewGroupProduct,
        handleOpenNewTrademark,
        handleOpenNewLocation,
        handleOpenNewProperties,
        handleOpenNewUnit,
        handleCloseNewProduct,
        onSave,
        errors,
        errorsProductName,
        handleImageUpload,
        imageProduct
    }) => {
    return (
        <Modal
            open={openNewProduct}
            onClose={handleCloseNewProduct}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styleNewProduct} className={'rounded-5'}
                 boxSizing='content-box'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <b>Thêm hàng</b>
                </Typography>
                <Typography id="modal-modal-description" mt={5}>
                    <Container>
                        <Grid container spacing={5}>
                            <Grid item md={2}>
                                <Grid container spacing={2}>
                                    <Grid item md={12}>
                                        <Box
                                            mt={2}
                                            sx={{
                                                width: '100%',
                                                paddingTop: '100%',
                                                position: 'relative',
                                                border: '1px dashed #ccc',
                                                borderRadius: '5%',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {imageProduct ? (
                                                <img
                                                    src={imageProduct}
                                                    alt="Selected"
                                                    style={{
                                                        position: 'absolute',
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        top: 0,
                                                        left: 0,
                                                    }}
                                                />
                                            ) : (
                                                <Box
                                                    display="flex"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    style={{
                                                        position: 'absolute',
                                                        width: '100%',
                                                        height: '100%',
                                                        top: 0,
                                                        left: 0,
                                                    }}
                                                >
                                                    <CameraAltIcon style={{color: '#ccc'}}/>
                                                </Box>
                                            )}
                                        </Box>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Button
                                            fullWidth
                                            component="label"
                                            variant="contained"
                                            color="success"
                                            htmlFor="upload-file"
                                        >
                                            Chọn ảnh
                                            <input
                                                id="upload-file"
                                                name="file"
                                                type="file"
                                                style={{display: 'none'}}
                                                onChange={handleImageUpload}
                                            />
                                        </Button>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item md={10}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6} md={7}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4}>
                                                <Typography variant="subtitle1"><b>Tên
                                                    hàng</b>
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
                                                       name={'productName'}
                                                       id={'productName'}
                                                       value={valueProductName}
                                                       onChange={inputChange}
                                                       color='success'
                                                       type='text'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}>
                                        <Grid container alignItems="center">
                                            <Grid item md={1}/>
                                            <Grid item md={4}>
                                                <Typography variant="subtitle1"><b>Giá
                                                    vốn</b>
                                                    <Tooltip
                                                        title="Giá vốn dùng để tính lợi nhuận cho sản phẩm (sẽ tự động thay đổi khi thay đổi phương pháp giá tính vốn)"
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
                                                       name={'capitalPrice'}
                                                       value={valueCapitalPrice}
                                                       onChange={inputChange}
                                                       color='success'
                                                       type='number'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={7}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Nhóm
                                                    hàng</b>
                                                    <Tooltip
                                                        title="Lựa chọn nhóm hàng cho sản phẩm"
                                                        placement="right-start">
                                                        <InfoOutlinedIconStyle fontSize='small'
                                                                               sx={{color: '#757575'}}
                                                                               className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Box sx={boxStyle}>
                                                    <ReusableFormSelect
                                                        id='groupProductId'
                                                        name='groupProductId'
                                                        key={valueGroupProductId}
                                                        value={valueGroupProductId}
                                                        inputChange={inputChange}
                                                        options={optionGroupProduct}
                                                        optionValueField='groupProductId'
                                                        optionLabelField='groupProductName'
                                                        handleOpen={handleOpenNewGroupProduct}
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}>
                                        <Grid container alignItems="center">
                                            <Grid item md={1}/>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Giá
                                                    bán</b></Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth
                                                       name={'price'}
                                                       value={valuePrice}
                                                       onChange={inputChange}
                                                       color='success'
                                                       type='number'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={7}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Thương
                                                    hiệu</b>
                                                    <Tooltip
                                                        title="Thương hiệu, nhãn hiệu của sản phẩm"
                                                        placement="right-start">
                                                        <InfoOutlinedIconStyle fontSize='small'
                                                                               sx={{color: '#757575'}}
                                                                               className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Box sx={boxStyle}>
                                                    <ReusableFormSelect
                                                        id='trademarkId'
                                                        name='trademarkId'
                                                        key={valueTrademarkId}
                                                        value={valueTrademarkId}
                                                        inputChange={inputChange}
                                                        options={optionTrademark}
                                                        optionValueField='trademarkId'
                                                        optionLabelField='trademarkName'
                                                        handleOpen={handleOpenNewTrademark}
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}>
                                        <Grid container alignItems="center">
                                            <Grid item md={1}/>
                                            <Grid item md={4} mt={1}>
                                                <Typography
                                                    variant="subtitle1"><b>Tồn
                                                    kho</b>
                                                    <Tooltip
                                                        title="Số lượng tồn kho của sản phẩm"
                                                        placement="right-start">
                                                        <InfoOutlinedIconStyle fontSize='small'
                                                                               sx={{color: '#757575'}}
                                                                               className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth
                                                       name={'inventory'}
                                                       value={valueInventory}
                                                       onChange={inputChange}
                                                       color='success'
                                                       type='number'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={7}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Vị
                                                    trí</b>
                                                    <Tooltip
                                                        title="Sự dụng để ghi lại vị trí mà hàng hóa được cất giữ hoặc trưng bày. Ví dụ: kệ số 1, số 2 ..."
                                                        placement="right-start">
                                                        <InfoOutlinedIconStyle fontSize='small'
                                                                               sx={{color: '#757575'}}
                                                                               className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Box sx={boxStyle}>
                                                    <ReusableFormSelect
                                                        id='locationId'
                                                        name='locationId'
                                                        key={valueLocationId}
                                                        value={valueLocationId}
                                                        inputChange={inputChange}
                                                        options={optionLocation}
                                                        optionValueField='locationId'
                                                        optionLabelField='locationName'
                                                        handleOpen={handleOpenNewLocation}
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}>
                                        <Grid container alignItems="center">
                                            <Grid item md={1}/>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Trọng
                                                    lượng</b>
                                                    <Tooltip
                                                        title="Sử dụng để tính trọng lượng khi giao hàng"
                                                        placement="right-start">
                                                        <InfoOutlinedIconStyle fontSize='small'
                                                                               sx={{color: '#757575'}}
                                                                               className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth
                                                       name={'weight'}
                                                       value={valueWeight}
                                                       onChange={inputChange}
                                                       color='success'
                                                       type='number'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={7}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Thuộc
                                                    tính</b></Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Box sx={boxStyle}>
                                                    <ReusableFormSelect
                                                        id='propertiesId'
                                                        name='propertiesId'
                                                        key={valuePropertiesId}
                                                        value={valuePropertiesId}
                                                        inputChange={inputChange}
                                                        options={optionProperties}
                                                        optionValueField='propertiesId'
                                                        optionLabelField='propertiesName'
                                                        handleOpen={handleOpenNewProperties}
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}>
                                        <Grid container alignItems="center">
                                            <Grid item md={1}/>
                                            <Grid item md={11}>
                                                <FormControlLabel
                                                    id="directSales"
                                                    name="directSales"
                                                    value={valueDirectSales ? 1 : 0}
                                                    control={
                                                        <Switch
                                                            checked={valueDirectSales}
                                                            onChange=
                                                                {(e) => inputChange({
                                                                    target: {
                                                                        name: 'directSales',
                                                                        value: e.target.checked
                                                                    }
                                                                })}
                                                            sx={{
                                                                '& .MuiSwitch-switchBase.Mui-checked': {
                                                                    color: 'green',
                                                                },
                                                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                                    backgroundColor: 'green',
                                                                }
                                                            }}
                                                        />}
                                                    label="Bán trực tiếp"
                                                />

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={7}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Đơn vị cơ
                                                    bản</b>
                                                    <Tooltip
                                                        title="Đơn vị của hàng hóa như: hộp, lốc, thùng..."
                                                        placement="right-start">
                                                        <InfoOutlinedIconStyle fontSize='small'
                                                                               sx={{color: '#757575'}}
                                                                               className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Box sx={boxStyle}>
                                                    <ReusableFormSelect
                                                        id='unitId'
                                                        name='unitId'
                                                        key={valueUnitId}
                                                        value={valueUnitId}
                                                        inputChange={inputChange}
                                                        options={optionUnit}
                                                        optionValueField='unitId'
                                                        optionLabelField='unitName'
                                                        handleOpen={handleOpenNewUnit}
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={5}/>
                                    <Grid item xs={6} md={7}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Loại
                                                    hàng</b>
                                                    <Tooltip
                                                        title="Lựa chọn loại hàng cho sản phẩm"
                                                        placement="right-start">
                                                        <InfoOutlinedIconStyle fontSize='small'
                                                                               sx={{color: '#757575'}}
                                                                               className={'ms-2'}/>
                                                    </Tooltip>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <ReusableSelect
                                                    id='categoryId'
                                                    name='categoryId'
                                                    key={valueCategoryId}
                                                    value={valueCategoryId}
                                                    inputChange={inputChange}
                                                    options={optionCategory}
                                                    optionValueField='categoryId'
                                                    optionLabelField='categoryName'
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Typography>
                <Typography>
                    <Grid mt={5} mb={3}
                          sx={gridStyle}>
                        <Grid>
                            <Button variant='contained'
                                    sx={buttonTheme}
                                    color='success'
                                    onClick={onSave}
                                    type={"button"}>
                                <b>Lưu</b>
                            </Button>
                            <Button variant='contained'
                                    sx={buttonTheme}
                                    color='success'
                                    className={'ms-2'}
                                    onClick={onSave}
                                    type={"button"}>
                                <b>Lưu & Thêm mới</b>
                            </Button>
                            <Button variant='contained'
                                    sx={buttonTheme}
                                    color='success'
                                    className={'ms-2'}
                                    onClick={onSave}
                                    type={"button"}>
                                <b>Lưu & Sao chép</b>
                            </Button>
                            <Button variant='contained'
                                    sx={buttonThemeClose}
                                    className={'text-end ms-2'}
                                    onClick={handleCloseNewProduct}>
                                <b>Bỏ qua</b>
                            </Button>
                        </Grid>
                    </Grid>
                </Typography>
                {/*</form>*/}
            </Box>
        </Modal>
    )
}