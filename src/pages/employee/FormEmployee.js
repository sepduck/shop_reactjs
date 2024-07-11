import {useEffect, useState} from "react";
import axios from "axios";
import '../../Custom.css'
import * as React from 'react';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver';
import {
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    MenuItem,
    TextField,
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {DataGrid} from "@mui/x-data-grid";
import NavbarAdmin from "../compoment/NavbarAdmin";
import NavbarAdminSecond from "../compoment/NavbarAdminSecond";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Paper from "@mui/material/Paper";
import {gridStyle} from "../../reusable/ReusableStyles";
import {
    getListCustomer,
    getListEmployee,
    getListGender, getSearchEmployeeActive,
    getSearchEmployeeId,
    getSearchEmployeeName,
    getSearchEmployeePhoneNumber
} from "../api/ApiGet";
import {postAddRoles, postEmployeeSave} from "../api/ApiPost";
import {ReusableRadioThree} from "../../reusable/ReusableRadio";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {ModalCreateUser} from "../../reusable/ModalCreateUser";
import {ModalSetRole} from "../../reusable/ModalSetRole";


function FormEmployee() {
    useEffect(() => {
        onListEmployee()
        onListGender()
        onListCustomer()
    }, []);

    const [imageEmployee, setImageEmployee] = useState(null);
    const [listEmployee, setListEmployee] = useState([]);
    const [addRoles, setAddRoles] = useState({
        userId: ''
    })
    const [usersSave, setUsersSave] = useState({
        username: '',
        password: '',
        phoneNumber: '',
        idCard: 0,
        genderId: '',
        facebook: '',
        email: '',
        address: '',
        fullName: '',
        birthday: '',
        fileUser: null
    })
    const [searchEmployeeId, setSearchEmployeeId] = useState({
        employeeId: ''
    })
    const [searchEmployeeName, setSearchEmployeeName] = useState({
        employeeName: ''
    })
    const [searchEmployeePhoneNumber, setSearchEmployeePhoneNumber] = useState({
        phoneNumber: ''
    })
    const [searchActive, setSearchActive] = useState({
        activeId: ''
    })
    const [listCustomer, setListCustomer] = useState([]);
    const [, setListGender] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openSetRole, setOpenSetRole] = React.useState(false);
    const [openNewEmployee, setOpenNewEmployee] = React.useState(false);

    const navigate = useNavigate()

    const columns = [
        {
            field: 'id',
            headerName: 'Mã nhân viên',
            width: 100,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column',
            renderCell: (params) => `EMP00${params.value}`
        }, {
            field: 'file_user',
            headerName: 'Ảnh',
            width: 100,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column',
            renderCell: (params) => (
                <img src={`data:image/jpeg;base64,${params.value}`} alt="Employee"
                     style={{width: 50, height: 50, borderRadius: '50%'}}/>
            ),
        },
        {
            field: 'full_name',
            headerName: 'Tên nhân viên',
            width: 230,
            headerAlign: 'center',
            headerClassName: 'header-column'
        },
        {
            field: 'phone_number',
            headerName: 'Số điện thoại',
            width: 150,
            align: 'right',
            headerAlign: 'center',
            headerClassName: 'header-column'
        },

        {
            field: 'id_card',
            headerName: 'Số CMND/CCCD',
            minWidth: 130,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column'
        },
        {
            field: 'email',
            headerName: 'Email',
            minWidth: 250,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column'
        },
        {
            field: 'start_day',
            headerName: 'Ngày tạo',
            minWidth: 130,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column',
            renderCell: (params) => {
                const date = new Date(params.value);
                const formattedDate = !isNaN(date) ? date.toLocaleDateString('vi-VN', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                }) : '';
                return <span>{formattedDate}</span>;
            }
        },
        {
            field: 'edit',
            headerName: 'Edit',
            sortable: false,
            width: 100,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column',
            renderCell: (params) => (
                <strong>
                    <Link to={`/employee/edit/${params.id}`}><EditIcon/></Link>
                </strong>
            ),

        },
        {
            field: 'delete',
            headerName: 'Ngưng hoạt động',
            sortable: false,
            width: 150,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column',
            renderCell: (params) => (
                <strong>
                    <DeleteIcon sx={{color: '#b71c1c'}}
                                onClick={() => onDeleteEmployee(params.id)}
                    />
                </strong>
            ),
        },

    ];

    const onDeleteEmployee = (e) => {
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        axios.delete('/employee/' + e.target.value, {headers: headers})
            .then(() => {
                console.log("XOA THANH CONG")
                onListEmployee()
            })
            .catch(error => {
                console.log(error)
                navigate("/")
            })
    }
    const onSetRoles = async () => {
        const token = localStorage.getItem('token')
        try {
            await postAddRoles(addRoles.userId, token)
            onListEmployee()
            handleCloseSetRole()
        } catch (err) {
            console.log(err)
        }
    }
    const onListEmployee = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getListEmployee(token)
            setListEmployee(data)
        } catch (err) {
            navigate('/')
        }
    }
    const onListGender = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getListGender(token)
            setListGender(data)
        } catch (err) {
            navigate('/employee')
        }
    }
    const onUserSave = async () => {
        const formData = new FormData();
        for (const key in usersSave) {
            formData.append(key, usersSave[key]);
        }
        const token = localStorage.getItem('token')
        try {
            await postEmployeeSave(formData, token)
            onListEmployee()
            alert("Đăng ký thành công")
            handleCloseNewEmployee()
        } catch (error) {
            alert("Đăng ký không thành công! Vui lòng thử lại")
            handleCloseNewEmployee()

        }
    }
    const onSearchEmployeeId = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchEmployeeId(searchEmployeeId.employeeId, token)
            setListEmployee(data)
        } catch (err) {
            console.log(err)
        }
    }
    const onSearchEmployeeName = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchEmployeeName(searchEmployeeName.employeeName, token)
            setListEmployee(data)
        } catch (err) {
            console.log(err)
        }

    }
    const onSearchEmployeePhoneNumber = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchEmployeePhoneNumber(searchEmployeePhoneNumber.phoneNumber, token)
            setListEmployee(data)
        } catch (err) {
            console.log(err)
        }

    }
    const onSearchActive = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchEmployeeActive(searchActive.activeId, token)
            setListEmployee(data)
        } catch (err) {
            console.log(err)
        }
    }
    const onListCustomer = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getListCustomer(token)
            setListCustomer(data)
        } catch (err) {
            navigate('/employee')
        }
    }

    const inputDataEmployeeSave = (e) => {
        const {name, value} = e.target;
        setUsersSave({...usersSave, [name]: value});
    }
    const inputDataFileEmployee = (e) => {
        const fileUser = e.target.files[0];
        if (fileUser) {
            setUsersSave({ ...usersSave, fileUser });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageEmployee(reader.result);
            };
            reader.readAsDataURL(fileUser);
        }
    };
    const inputDataSearchEmployeeName = (e) => {
        setSearchEmployeeName({...searchEmployeeName, [e.target.name]: e.target.value})
    }
    const inputDataSearchEmployeeId = (e) => {
        setSearchEmployeeId({...searchEmployeeId, [e.target.name]: e.target.value})
    }
    const inputDataSearchPhoneNumber = (e) => {
        setSearchEmployeePhoneNumber({...searchEmployeePhoneNumber, [e.target.name]: e.target.value})
    }
    const inputDataSearchEmployeeActive = (e) => {
        setSearchActive({...searchActive, [e.target.name]: e.target.value})
    }
    const inputDataSetRoles = (e) => {
        setAddRoles({...addRoles, [e.target.name]: e.target.value})
    }

    const exportToExcel = () => {
        const dataToExport = listEmployee.map(({ file_user, ...rest }) => rest);
        const ws = XLSX.utils.json_to_sheet(dataToExport)
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        const wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'array'});
        const blob = new Blob([wbout], {type: 'application/octet-stream'});
        saveAs(blob, 'danh-sach-nhan-vien.xlsx');
    };

    const resetFormEmployeeSave = () => setUsersSave({
        username: '',
        password: '',
        phoneNumber: '',
        idCard: 0,
        genderId: '',
        facebook: '',
        email: '',
        address: '',
        fullName: '',
        birthday: '',
        fileUser: null
    })
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (action) => {
        console.log(action);
    };
    const handleOpenSetRole = () => setOpenSetRole(true);
    const handleOpenNewEmployee = () => {
        setOpenNewEmployee(true);
        resetFormEmployeeSave()
        setImageEmployee(null)
    }
    const handleCloseSetRole = () => setOpenSetRole(false);
    const handleCloseNewEmployee = () => setOpenNewEmployee(false);

    return (
        <div className='customDiv'>
            <NavbarAdmin></NavbarAdmin>
            <NavbarAdminSecond></NavbarAdminSecond>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item md={2} className='mt-3'>
                        <Typography variant="h5"
                                    color="black">
                            <b>Nhân viên</b>
                        </Typography>
                    </Grid>
                    <Grid item md={10} className="mt-3">
                        <Grid container spacing={2}>
                            <Grid item md={5}>
                                <Box>
                                    <FormControl fullWidth variant="standard">
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                            className='form-control text-dark bg-white text-start'
                                        >
                                            Tìm kiếm theo mã, tên, điện thoại
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                            PaperProps={{
                                                style: {
                                                    width: anchorEl ? anchorEl.clientWidth : undefined,
                                                },
                                            }}
                                        >
                                            <Container>
                                                <MenuItem onClick={() => handleMenuItemClick('Mã nhân viên')}>
                                                    <TextField
                                                        fullWidth
                                                        className="mt-3"
                                                        name="customerId"
                                                        value={searchEmployeeId.employeeId}
                                                        onChange={inputDataSearchEmployeeId}
                                                        placeholder="Theo mã nhân viên"
                                                        type="number"
                                                        variant='standard'
                                                    />
                                                </MenuItem>
                                                <MenuItem onClick={() => handleMenuItemClick('Tên nhân viên')}>
                                                    <TextField
                                                        fullWidth
                                                        className="mt-3"
                                                        name="customerName"
                                                        placeholder="Theo tên nhân viên"
                                                        value={searchEmployeeName.employeeName}
                                                        onChange={inputDataSearchEmployeeName}
                                                        type="text"
                                                        variant='standard'
                                                    />
                                                </MenuItem>
                                                <MenuItem onClick={() => handleMenuItemClick('Số điện thoại')}>
                                                    <TextField
                                                        fullWidth
                                                        className="mt-3"
                                                        name="phoneNumber"
                                                        value={searchEmployeePhoneNumber.phoneNumber}
                                                        onChange={inputDataSearchPhoneNumber}
                                                        placeholder="Theo số điện thoại"
                                                        type="tel"
                                                        variant='standard'
                                                    />
                                                </MenuItem>
                                                <Grid sx={gridStyle}>
                                                    <Button
                                                        color='success'
                                                        variant='contained'
                                                        className='mt-5 mb-5'
                                                        onClick={
                                                            onSearchEmployeeId ||
                                                            onSearchEmployeeName ||
                                                            onSearchEmployeePhoneNumber
                                                        }>
                                                        Tìm kiếm
                                                    </Button>
                                                </Grid>
                                            </Container>
                                        </Menu>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item md={7} sx={gridStyle}>
                                <Grid item className='text-end me-3'>
                                    <Button
                                        color='success'
                                        variant='contained'
                                        className='form-control me-4'
                                        onClick={handleOpenNewEmployee}
                                        style={{textTransform: 'none'}}
                                    >
                                        <b>Thêm mới</b>
                                    </Button>
                                </Grid>
                                <Grid item className='text-end me-3'>
                                    <Button
                                        color='success'
                                        variant='contained'
                                        className='form-control me-4'
                                        onClick={handleOpenSetRole}
                                        style={{textTransform: 'none'}}
                                    >
                                        <b>Set role</b>
                                    </Button>
                                </Grid>
                                <Grid item className='text-end me-3'>
                                    <Button
                                        color='success'
                                        variant='contained'
                                        className='form-control me-4'
                                        style={{textTransform: 'none'}}
                                    >
                                        <b>Import</b>
                                    </Button>
                                </Grid>
                                <Grid item className='text-end'>
                                    <Button
                                        color='success'
                                        variant='contained'
                                        className=' form-control me-4'
                                        onClick={exportToExcel}
                                        style={{textTransform: 'none'}}
                                    >
                                        <b>Export</b>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={2}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Paper className="w-100 p-3 shadow mb-3 bg-white rounded-4">
                                    <Typography variant="h6"><b>Trạng thái</b></Typography>
                                    <ReusableRadioThree
                                        name='activeId'
                                        id='activeId'
                                        labelFirst="Tất cả"
                                        labelSecond="Đang hoạt động"
                                        labelThird="Ngưng hoạt động"
                                        inputChange={inputDataSearchEmployeeActive}
                                        onClick={onSearchActive}
                                    />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={10}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <div style={{height: 750, width: '100%'}}>
                                    <DataGrid
                                        rows={listEmployee}
                                        columns={columns}
                                        initialState={{
                                            pagination: {
                                                paginationModel: {page: 0, pageSize: 15},
                                            },
                                        }}
                                        pageSizeOptions={[5, 10]}
                                        style={{backgroundColor: '#f7f8f9', borderColor: "#9fbcd8"}}
                                        className='customDataGrid'
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <ModalCreateUser
                title={"Thêm nhân viên"}
                buttonTitle={"Lưu"}
                open={openNewEmployee}
                close={handleCloseNewEmployee}
                valueFullName={usersSave.fullName}
                valueBirthday={usersSave.birthday}
                valuePhoneNumber={usersSave.phoneNumber}
                valueEmail={usersSave.email}
                valueAddress={usersSave.address}
                valueGender={usersSave.genderId}
                valueIdCard={usersSave.idCard}
                valueFacebook={usersSave.facebook}
                valueUsername={usersSave.username}
                valuePassword={usersSave.password}
                inputChange={inputDataEmployeeSave}
                inputChangeFile={inputDataFileEmployee}
                onSave={onUserSave}
                imageUser={imageEmployee}
                handleImageUpload={inputDataFileEmployee}
            />
            <ModalSetRole
                open={openSetRole}
                close={handleCloseSetRole}
                valueUserId={addRoles.userId}
                inputChange={inputDataSetRoles}
                optionsCustumer={listCustomer}
                onSave={onSetRoles}

            />
        </div>
    );
}

export default FormEmployee


