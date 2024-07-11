import {
    Box,
    Button, Container,
    FormControlLabel,
    Grid,
    Input,
    Modal,
    Radio,
    RadioGroup,
    Tooltip,
    Typography
} from "@mui/material";
import {
    buttonThemeClose,
    gridStyle,
    InfoOutlinedIconStyle,
    styleNewProduct
} from "./ReusableStyles";
import * as React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export const ModalCreateUser = (
    {
        title,
        buttonTitle,
        open,
        close,
        valueFullName,
        valueBirthday,
        valuePhoneNumber,
        valueEmail,
        valueGender,
        valueAddress,
        valueIdCard,
        valueFacebook,
        valueUsername,
        valuePassword,
        inputChange,
        onSave,
        imageUser,
        handleImageUpload
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
                    <b>{title}</b>
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
                                            {imageUser ? (
                                                <img
                                                    src={imageUser}
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
                                    <Grid item xs={6} md={6}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4}>
                                                <Typography variant="subtitle1"><b>Họ và
                                                    tên</b>
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
                                                <Input
                                                    fullWidth
                                                    name={'fullName'}
                                                    value={valueFullName}
                                                    onChange={inputChange}
                                                    type='text'
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Grid container alignItems="center">
                                            <Grid item md={1}/>
                                            <Grid item md={4}>
                                                <Typography variant="subtitle1"><b>Ngày
                                                    sinh</b>
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
                                                       name={'birthday'}
                                                       value={valueBirthday}
                                                       onChange={inputChange}
                                                       type='date'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Điện
                                                    thoại</b>
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
                                                <Input fullWidth
                                                       name={'phoneNumber'}
                                                       value={valuePhoneNumber}
                                                       onChange={inputChange}
                                                       type='tel'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Grid container alignItems="center">
                                            <Grid item md={1}/>
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Email</b></Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth name={'email'}
                                                       value={valueEmail}
                                                       onChange={inputChange}
                                                       type='email'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Địa chỉ</b>
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
                                                <Input fullWidth
                                                       name={'address'}
                                                       value={valueAddress}
                                                       onChange={inputChange}
                                                       type='text'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Grid container alignItems="center">
                                            <Grid item md={1}/>
                                            <Grid item md={4} mt={1}>
                                                <Typography
                                                    variant="subtitle1"><b>CMND/CCCD</b>
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
                                                <Input fullWidth name={'idCard'}
                                                       value={valueIdCard}
                                                       onChange={inputChange}
                                                       type='text'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Facebook</b>
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
                                                <Input fullWidth name={'facebook'}
                                                       value={valueFacebook}
                                                       onChange={inputChange}
                                                       type='url'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={6}/>
                                    <Grid item xs={6} md={6}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Tên tài
                                                    khoản</b>
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
                                                <Input fullWidth name={'username'}
                                                       value={valueUsername}
                                                       onChange={inputChange}
                                                       type='text'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={6}/>
                                    <Grid item xs={6} md={6}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Mật khẩu</b></Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Input fullWidth name={'password'}
                                                       value={valuePassword}
                                                       onChange={inputChange}
                                                       type='password'/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={6}/>
                                    <Grid item xs={6} md={6}>
                                        <Grid container alignItems="center">
                                            <Grid item md={4} mt={1}>
                                                <Typography variant="subtitle1"><b>Giới tính</b>
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
                                                <RadioGroup
                                                    row
                                                    name="genderId"
                                                    value={valueGender}
                                                    onChange={inputChange}
                                                >
                                                    <FormControlLabel
                                                        name={'genderId'}
                                                        value={1}
                                                        control={<Radio/>}
                                                        label="Nam"
                                                    />
                                                    <FormControlLabel
                                                        name={'genderId'}
                                                        value={2}
                                                        control={<Radio/>}
                                                        label="Nữ"
                                                    />
                                                    <FormControlLabel
                                                        name={'genderId'}
                                                        value={3}
                                                        control={<Radio/>}
                                                        label="Khác"
                                                    />
                                                </RadioGroup>
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
                        <Button color='success'
                                variant='contained'
                                onClick={onSave}
                                className='me-2'
                                style={{textTransform: 'none'}}
                        >
                            {buttonTitle}
                        </Button>
                        <Button
                            variant='contained'
                            onClick={close}
                            sx={buttonThemeClose}
                        >
                            Bỏ qua
                        </Button>
                    </Grid>
                </Typography>
            </Box>
        </Modal>
    )
}