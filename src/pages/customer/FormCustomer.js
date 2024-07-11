import {useEffect, useState} from "react";
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
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import {gridStyle} from "../../reusable/ReusableStyles";
import {
    getListCustomer,
    getListGender, getSearchCustomerActive, getSearchCustomerAddress, getSearchCustomerEmail, getSearchCustomerGender,
    getSearchCustomerId,
    getSearchCustomerName,
    getSearchCustomerPhoneNumber
} from "../api/ApiGet";
import {ReusableRadioFour, ReusableRadioThree} from "../../reusable/ReusableRadio";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {deleteCustomer} from "../api/ApiDelete";

function FormCustomer() {
    useEffect(() => {
        onListCustomer()
        onListGender()
    }, []);

    const navigate = useNavigate()

    const columns = [
        {
            field: 'id',
            headerName: 'Mã KH',
            width: 100,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column',
            renderCell: (params) => `CUS00${params.value}`
        }, {
            field: 'file_user',
            headerName: 'Ảnh',
            width: 100,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column',
            renderCell: (params) => (
                <img src={`data:image/jpeg;base64,${params.value}`} alt="Product"
                     style={{width: 50, height: 50, borderRadius: '50%'}}/>
            ),
        },
        {
            field: 'full_name',
            headerName: 'Tên khách hàng',
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
            field: 'address',
            headerName: 'Địa chỉ',
            width: 150,
            align: 'right',
            headerAlign: 'center',
            headerClassName: 'header-column'
        },
        {
            field: 'gender_name',
            headerName: 'Giới tính',
            width: 90,
            align: 'right',
            headerAlign: 'center',
            headerClassName: 'header-column'
        },
        {
            field: 'email',
            headerName: 'Email',
            minWidth: 130,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column'
        },
        {
            field: 'birthday',
            headerName: 'Ngày sinh',
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
            field: 'facebook',
            headerName: 'Facebook',
            minWidth: 130,
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
                    <Link to={`/customer/edit/${params.id}`}><EditIcon/></Link>
                </strong>
            ),

        },
        {
            field: 'delete',
            headerName: 'Delete',
            sortable: false,
            width: 100,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'header-column',
            renderCell: (params) => (
                <strong>
                    <DeleteIcon sx={{color: '#b71c1c'}}
                                onClick={() => onDeleteCustomer(params.id)}
                    />
                </strong>
            ),
        },

    ];

    const [listCustomer, setListCustomer] = useState([]);
    const [, setListGender] = useState([]);
    const [searchCustomerId, setSearchCustomerId] = useState({
        customerId: ''
    })
    const [searchCustomerName, setSearchCustomerName] = useState({
        customerName: ''
    })
    const [searchCustomerPhoneNumber, setSearchCustomerPhoneNumber] = useState({
        phoneNumber: ''
    })
    const [searchCustomerEmail, setSearchCustomerEmail] = useState({
        email: ''
    })
    const [searchCustomerAddress, setSearchCustomerAddress] = useState({
        address: ''
    })
    const [searchActive, setSearchActive] = useState({
        activeId: ""
    })
    const [searchGender, setSearchGender] = useState({
        genderId: ""
    })
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const onDeleteCustomer = async (userId) => {
        const token = localStorage.getItem('token')
        try {
            await deleteCustomer(userId, token)
            onListCustomer()
        } catch (error) {
            navigate('/')
        }
    }
    const onListCustomer = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListCustomer(token);
            setListCustomer(data)
        } catch (error) {
            navigate('/')
        }
    }
    const onListGender = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getListGender(token)
            setListGender(data)
        } catch (error) {
            navigate('/customer')
        }
    }
    const onSearchCustomerId = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchCustomerId(searchCustomerId.customerId, token);
            setListCustomer(data)
        } catch (err) {
            console.log(err)
        }
    }
    const onSearchCustomerName = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchCustomerName(searchCustomerName.customerName, token);
            setListCustomer(data)
        } catch (err) {
            console.log(err)
        }
    }
    const onSearchCustomerPhoneNumber = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchCustomerPhoneNumber(searchCustomerPhoneNumber.phoneNumber, token)
            setListCustomer(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onSearchCustomerEmail = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchCustomerEmail(searchCustomerEmail.email, token)
            setListCustomer(data)
        } catch (error) {
            console.log(error)
        }

    }
    const onSearchCustomerAddress = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchCustomerAddress(searchCustomerAddress.address, token)
            setListCustomer(data)
        } catch (err) {
            console.log(err)
        }

    }
    const onSearchActive = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchCustomerActive(searchActive.activeId, token)
            setListCustomer(data)
        } catch (err) {
            console.log(err)
        }
    }
    const onSearchGender = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSearchCustomerGender(searchGender.genderId, token)
            setListCustomer(data)
        } catch (err) {
            console.log(err)
        }
    }

    const inputDataSearchCustomerName = (e) => {
        setSearchCustomerName({...searchCustomerName, [e.target.name]: e.target.value})
    }
    const inputDataSearchCustomerId = (e) => {
        setSearchCustomerId({...searchCustomerId, [e.target.name]: e.target.value})
    }
    const inputDataSearchPhoneNumber = (e) => {
        setSearchCustomerPhoneNumber({...searchCustomerPhoneNumber, [e.target.name]: e.target.value})
    }
    const inputDataSearchCustomerEmail = (e) => {
        setSearchCustomerEmail({...searchCustomerEmail, [e.target.name]: e.target.value})
    }
    const inputDataSearchCustomerAddress = (e) => {
        setSearchCustomerAddress({...searchCustomerAddress, [e.target.name]: e.target.value})
    }
    const inputDataSearchCustomerGender = (e) => {
        setSearchGender({...searchGender, [e.target.name]: e.target.value})
    }
    const inputDataSearchCustomerActive = (e) => {
        setSearchActive({...searchActive, [e.target.name]: e.target.value})
    }

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(listCustomer)
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        const wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'array'});
        const blob = new Blob([wbout], {type: 'application/octet-stream'});
        saveAs(blob, 'danh-sach-khach-hang.xlsx');
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (action) => {
        console.log(action);
    };

    return (
        <div className='customDiv'>
            <NavbarAdmin></NavbarAdmin>
            <NavbarAdminSecond></NavbarAdminSecond>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item md={2} className='mt-3'>
                        <Typography variant="h5" color="black"><b>Khách hàng</b></Typography>
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
                                                <MenuItem onClick={() => handleMenuItemClick('Mã khách hàng')}>
                                                    <TextField
                                                        fullWidth
                                                        className="mt-3"
                                                        name="customerId"
                                                        value={searchCustomerId.customerId}
                                                        onChange={inputDataSearchCustomerId}
                                                        placeholder="Theo mã khách hàng"
                                                        type="number"
                                                        variant='standard'
                                                    />
                                                </MenuItem>
                                                <MenuItem onClick={() => handleMenuItemClick('Tên khách hàng')}>
                                                    <TextField
                                                        fullWidth
                                                        className="mt-3"
                                                        name="customerName"
                                                        placeholder="Theo tên khách hàng"
                                                        value={searchCustomerName.customerName}
                                                        onChange={inputDataSearchCustomerName}
                                                        type="text"
                                                        variant='standard'
                                                    />
                                                </MenuItem>
                                                <MenuItem onClick={() => handleMenuItemClick('Số điện thoại')}>
                                                    <TextField
                                                        fullWidth
                                                        className="mt-3"
                                                        name="phoneNumber"
                                                        value={searchCustomerPhoneNumber.phoneNumber}
                                                        onChange={inputDataSearchPhoneNumber}
                                                        placeholder="Theo số điện thoại"
                                                        type="tel"
                                                        variant='standard'
                                                    />
                                                </MenuItem>
                                                <MenuItem onClick={() => handleMenuItemClick('Email')}>
                                                    <TextField
                                                        fullWidth
                                                        className="mt-3"
                                                        name="email"
                                                        placeholder="Theo email"
                                                        value={searchCustomerEmail.email}
                                                        onChange={inputDataSearchCustomerEmail}
                                                        type="text"
                                                        variant='standard'
                                                    />
                                                </MenuItem>
                                                <MenuItem onClick={() => handleMenuItemClick('Địa chỉ')}>
                                                    <TextField
                                                        fullWidth
                                                        className="mt-3"
                                                        name="address"
                                                        placeholder="Theo địa chỉ"
                                                        value={searchCustomerAddress.address}
                                                        onChange={inputDataSearchCustomerAddress}
                                                        type="text"
                                                        variant='standard'
                                                    />
                                                </MenuItem>
                                                <Grid sx={gridStyle}>
                                                    <Button
                                                        color='success'
                                                        variant='contained'
                                                        className='mt-5 mb-5'
                                                        onClick={
                                                            onSearchCustomerId ||
                                                            onSearchCustomerName ||
                                                            onSearchCustomerPhoneNumber ||
                                                            onSearchCustomerEmail ||
                                                            onSearchCustomerAddress
                                                        }>
                                                        Tìm kiếm
                                                    </Button>
                                                </Grid>
                                            </Container>
                                        </Menu>
                                    </FormControl>
                                </Box>
                            </Grid>
                            {/*<Grid item md={3}></Grid>*/}
                            <Grid item md={7} sx={gridStyle}>
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
                                    <Typography variant="h6"><b>Giới tính</b></Typography>
                                    <ReusableRadioFour
                                        name='genderId'
                                        id='genderId'
                                        labelFirst="Tất cả"
                                        labelSecond="Nam"
                                        labelThird="Nữ"
                                        labelFour="Khác"
                                        inputChange={inputDataSearchCustomerGender}
                                        onClick={onSearchGender}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className="w-100 p-3 shadow mb-3 bg-white rounded-4">
                                    <Typography variant="h6"><b>Trạng thái</b></Typography>
                                    <ReusableRadioThree
                                        name='activeId'
                                        id='activeId'
                                        labelFirst="Tất cả"
                                        labelSecond="Đang hoạt động"
                                        labelThird="Ngưng hoạt động"
                                        inputChange={inputDataSearchCustomerActive}
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
                                        rows={listCustomer}
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
        </div>
    )
}

export default FormCustomer


