import NavbarAdmin from "../compoment/NavbarAdmin";
import NavbarAdminSecond from "../compoment/NavbarAdminSecond";
import {
    Box,
    Button,
    Container,
    FormControlLabel,
    Grid,
    Input,
    Radio,
    RadioGroup,
    Tooltip,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {putEmployee} from "../api/ApiPut";
import {getFindByIdEmployee} from "../api/ApiGet";
import {
    buttonTheme,
    buttonThemeClose,
    gridStyle,
    InfoOutlinedIconStyle,
    styleNewProduct
} from "../../reusable/ReusableStyles";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function FormEditEmployee() {
    useEffect(() => {
        onFindByEmployeeId();
    }, []);

    let {id} = useParams();
    const [imageEmployee, setImageEmployee] = useState(null);
    const [employeeEdit, setEmployeeEdit] = useState({
        userId: '',
        phoneNumber: '',
        idCard: '',
        genderId: '',
        facebook: '',
        email: '',
        address: '',
        fullName: '',
        birthday: '',
        fileUser: null
    });

    const navigate = useNavigate();

    const onFindByEmployeeId = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getFindByIdEmployee(id, token);
            setEmployeeEdit(data);
        } catch (err) {
            navigate('/employee');
        }
    };
    const onEditEmployee = async () => {
        const formEdit = new FormData();
        for (const key in employeeEdit) {
            formEdit.append(key, employeeEdit[key]);
        }
        const token = localStorage.getItem('token')
        try {
            await putEmployee(id, formEdit, token)
            alert("Sửa thông tin nhân viên thành công");
            navigate('/employee');
        } catch (error) {
            alert("Lỗi khi thêm nhân viên!");
            navigate('/employee');
        }
    };

    const inputDataEditEmployee = (e) => {
        const {name, value} = e.target;
        setEmployeeEdit({...employeeEdit, [name]: value});
    }
    const inputDataFileEmployee = (e) => {
        const fileUser = e.target.files[0];
        if (fileUser) {
            setEmployeeEdit({ ...employeeEdit, fileUser });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageEmployee(reader.result);
            };
            reader.readAsDataURL(fileUser);
        }
    };

    return (
        <div className='customDiv' style={{height: '950px'}}>
            <NavbarAdmin/>
            <NavbarAdminSecond/>
            <Container maxWidth={'xl'}>
                <Box sx={styleNewProduct} className={'rounded-5'}
                     boxSizing='content-box'>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <b>Sửa thông tin nhân viên</b>
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
                                                {imageEmployee ? (
                                                    <img
                                                        src={imageEmployee}
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
                                                    onChange={inputDataFileEmployee}
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
                                                        value={employeeEdit.fullName}
                                                        onChange={inputDataEditEmployee}
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
                                                    <Input
                                                        fullWidth
                                                        name={'birthday'}
                                                        value={employeeEdit.birthday}
                                                        onChange={inputDataEditEmployee}
                                                        type='date'
                                                    />
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
                                                    <Input
                                                        fullWidth
                                                        name={'phoneNumber'}
                                                        value={employeeEdit.phoneNumber}
                                                        onChange={inputDataEditEmployee}
                                                        type='tel'
                                                    />
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
                                                    <Input
                                                        fullWidth
                                                        name={'email'}
                                                        value={employeeEdit.email}
                                                        onChange={inputDataEditEmployee}
                                                        type='email'
                                                    />
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
                                                    <Input
                                                        fullWidth
                                                        name={'address'}
                                                        value={employeeEdit.address}
                                                        onChange={inputDataEditEmployee}
                                                        type='text'
                                                    />
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
                                                    <Input
                                                        fullWidth
                                                        name={'idCard'}
                                                        value={employeeEdit.idCard}
                                                        onChange={inputDataEditEmployee}
                                                        type='text'
                                                    />
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
                                                    <Input
                                                        fullWidth
                                                        name={'facebook'}
                                                        value={employeeEdit.facebook}
                                                        onChange={inputDataEditEmployee}
                                                        type='url'
                                                    />
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
                                                        value={employeeEdit.genderId}
                                                        onChange={inputDataEditEmployee}
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
                            <Button variant='contained'
                                    onClick={onEditEmployee}
                                    className='me-2'
                                    color='success'
                                    sx={buttonTheme}
                            >
                                Lưu
                            </Button>
                            <Button
                                variant='contained'
                                component={Link}
                                to={'/employee'}
                                sx={buttonThemeClose}
                            >
                                Bỏ qua
                            </Button>
                        </Grid>
                    </Typography>
                </Box>
            </Container>
        </div>
    );
}

export default FormEditEmployee;
