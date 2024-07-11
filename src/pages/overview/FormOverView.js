import {Avatar, Container, Grid, ListItem, ListItemAvatar, useTheme} from "@mui/material";
import * as React from "react";
import NavbarAdmin from "../compoment/NavbarAdmin";
import NavbarAdminSecond from "../compoment/NavbarAdminSecond";
import {BarChart} from "@mui/x-charts";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import {useEffect, useState} from "react";
import {
    getNotification,
    getSalesMonthPercentageChange,
    getSalesPercentageChange,
    getTodayPurchase
} from "../api/ApiGet";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import axios from "axios";

function FormOverView() {
    useEffect(() => {
        onNotification()
        onTodayPurchase()
        onSalesPercentageChange()
        onSalesMonthPercentageChange()
        onDailySalesTotalPriceLast30Days()
    }, []);

    const chartSetting2 = {
        xAxis: [{
            ticks: [0, 50000000, 100000000, 150000000, 200000000, 250000000, 300000000, 350000000, 400000000, 450000000, 500000000],
            valueFormatter: (value) => `${value / 10000000}tr`
        }], height: 500,
    };
    const dataset2 = [
        {day: '01', seoul: 26000000}, {day: '02', seoul: 8200000}, {day: '03', seoul: 6700000},
        {day: '04', seoul: 8300000}, {day: '05', seoul: 1300000},
    ];

    const [purchases, setPurchases] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const onTodayPurchase = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getTodayPurchase(token)
            if (data && data.purchases) {
                setPurchases(data.purchases); // Cập nhật danh sách mua hàng vào state purchases
                setTotalPrice(data.totalPrice); // Cập nhật tổng giá trị vào state totalPrice
            }
        } catch (err) {
            console.log(err)
        }
    }
    const [percentageChange, setPercentageChange] = useState(null);
    const onSalesPercentageChange = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSalesPercentageChange(token)
            setPercentageChange(data)
        } catch (err) {
            console.log(err)
        }
    }
    const [percentageChangeMonth, setPercentageChangeMonth] = useState(null);
    const onSalesMonthPercentageChange = async () => {
        const token = localStorage.getItem('token')
        try {
            const data = await getSalesMonthPercentageChange(token)
            setPercentageChangeMonth(data)
        } catch (err) {
            console.log(err)
        }
    }
    const [data, setData] = useState([]);
    const [labels, setLabels] = useState([]);
    const onDailySalesTotalPriceLast30Days = async () => {
        const token = localStorage.getItem('token')
        try {
            axios.get('/daily-sales-total-price-last-30-days')
                .then(response => {
                    // Tạo mảng dữ liệu và mảng nhãn
                    const salesData = response.data;
                    const dates = Array.from({ length: salesData.length }, (_, i) => `${i + 1}`);

                    setData(salesData);
                    setLabels(dates);
                })
                .catch(error => {
                    console.error('Có lỗi xảy ra khi gọi API:', error);
                });
        } catch (err) {
            console.error('Error fetching the sales data:', err);
        }
    }
    useEffect(() => {
        // Gọi API để lấy dữ liệu bán hàng

    }, []);
    const [listNotification, setListNotification] = useState([])
    const onNotification = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getNotification(token)
            setListNotification(data)
        } catch (err) {
            console.log(err)
        }
    }

    const highlightUser = (message) => {
        const parts = message.split(' đã ');
        return (
            <>
                <Typography component="span" color={"blue"} fontWeight={"bold"}>
                    {parts[0]}
                </Typography>
                <b>{' đã ' + parts[1]}</b>
            </>
        );
    };
    const getAvatarClass = () => {
        if (percentageChange !== null && percentageChange < 0) {
            return 'me-3 bg-danger'; // Màu đỏ cho giá trị âm
        }
        return 'me-3 bg-success'; // Màu xanh cho giá trị dương hoặc bằng không
    };
    const getAvatarMonthClass = () => {
        if (percentageChangeMonth !== null && percentageChangeMonth < 0) {
            return 'me-3 bg-danger'; // Màu đỏ cho giá trị âm
        }
        return 'me-3 bg-success'; // Màu xanh cho giá trị dương hoặc bằng không
    };
    const getFontTextClass = () => {
        if (percentageChange !== null && percentageChange < 0) {
            return 'me-3 text-danger';
        }
        return 'me-3 text-success'
    }
    const getFontTextMonthClass = () => {
        if (percentageChangeMonth !== null && percentageChangeMonth < 0) {
            return 'me-3 text-danger';
        }
        return 'me-3 text-success'
    }
    const getIcon = () => {
        if (percentageChange != null && percentageChange < 0) {
            return <SouthIcon fontSize='small'/>;
        }
        return <NorthIcon fontSize='small'/>
    }
    const getMonthIcon = () => {
        if (percentageChangeMonth != null && percentageChangeMonth < 0) {
            return <SouthIcon fontSize='small'/>;
        }
        return <NorthIcon fontSize='small'/>

    }
    return (<div className='customDiv'>
            <NavbarAdmin></NavbarAdmin>
            <NavbarAdminSecond></NavbarAdminSecond>
            <Container maxWidth="xl" className={'mt-3'}>
                <Grid container spacing={3}>
                    <Grid item md={9}>
                        <Paper className="w-100 p-3 shadow mb-3 bg-white rounded-4">
                            <Typography><b>KẾT QUẢ BÁN HÀNG HÔM NAY</b></Typography>
                            <Container maxWidth="xl">
                                <Grid container spacing={2}>
                                    <Grid item md={4}>
                                        <React.Fragment>
                                            <ListItem disablePadding
                                                      className={`mt-2 vertical-divider`}
                                            >
                                                <Avatar className='me-3 bg-primary'>
                                                    <AttachMoneyIcon fontSize='small'/>
                                                </Avatar>
                                                <ListItemText
                                                    primary={purchases.length + ' hóa đơn'}
                                                    secondary={
                                                        <>
                                                            <Typography variant='h5' component={'span'}
                                                                        className='text-primary'>
                                                                {totalPrice.toLocaleString()}
                                                            </Typography><br/>
                                                            <Typography variant="caption" color="text.secondary">Doanh
                                                                thu
                                                            </Typography>
                                                        </>
                                                    }
                                                />
                                            </ListItem>
                                        </React.Fragment>
                                    </Grid>
                                    <Grid item md={4}>
                                        <React.Fragment>
                                            <ListItem disablePadding
                                                      className={'mt-2 vertical-divider'}
                                            >
                                                <Avatar className={getAvatarClass()}>
                                                    {getIcon()}
                                                </Avatar>
                                                <ListItemText
                                                    primary={'So sánh theo ngày'}
                                                    secondary={
                                                        <>
                                                            <Typography variant='h5' component={'span'}
                                                                        className={getFontTextClass()}>
                                                                {percentageChange}%
                                                            </Typography><br/>
                                                            <Typography variant="caption" color="text.secondary">So
                                                                với
                                                                hôm qua
                                                            </Typography>
                                                        </>
                                                    }
                                                />
                                            </ListItem>
                                        </React.Fragment>
                                    </Grid>
                                    <Grid item md={4}>
                                        <React.Fragment>
                                            <ListItem disablePadding
                                                      className={`mt-2`}
                                            >
                                                <Avatar className={getAvatarMonthClass()}>
                                                    {getMonthIcon()}
                                                </Avatar>
                                                <ListItemText
                                                    primary={'So sánh theo tháng'}
                                                    secondary={
                                                        <>
                                                            <Typography variant='h5' component={'span'}
                                                                        className={getFontTextMonthClass()}>
                                                                {percentageChangeMonth}%
                                                            </Typography><br/>
                                                            <Typography variant="caption" color="text.secondary">So
                                                                với
                                                                cùng kỳ tháng trước
                                                            </Typography>
                                                        </>
                                                    }
                                                />
                                            </ListItem>
                                        </React.Fragment>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Paper>
                        <Paper className="w-100 p-3 shadow mb-4 bg-white rounded-4">
                            <Typography><b>DOANH THU THUẦN THÁNG NÀY</b></Typography>
                                <BarChart
                                    sx={{width : '100%', height : '100%'}}
                                    xAxis={[
                                        {
                                            id: 'barCategories',
                                            data: labels,
                                            scaleType: 'band',
                                        },
                                    ]}
                                    series={[
                                        {
                                            data: data,
                                            color: 'brown',
                                            valueFormatter: (value) => `${value / 1000000}tr`
                                        },
                                    ]}
                                    height={500}
                                />
                        </Paper>
                        <Paper className="w-100 p-3 shadow mb-5 bg-white rounded-4">
                            <Typography><b>TOP 10 HÀNG HÓA BÁN CHẠY THÁNG NÀY</b></Typography>
                            <BarChart
                                dataset={dataset2}
                                yAxis={[{scaleType: 'band', dataKey: 'day'}]}
                                series={[{
                                    dataKey: 'seoul',
                                    color: 'brown',
                                    valueFormatter: (value) => `${value / 1000000}tr`
                                }]}
                                layout="horizontal"
                                grid={{vertical: true}}
                                {...chartSetting2}
                            />
                        </Paper>
                    </Grid>
                    <Grid item md={3}>
                        <Paper square sx={{pb: '50px'}} className="w-100 p-3 shadow mb-5 bg-white rounded-4">
                            <Typography gutterBottom component="div" sx={{p: 2, pb: 0}} mb={3}>
                                <b>THÔNG BÁO</b>
                            </Typography>
                            <Container className='overflow-auto' style={{ maxHeight: '1200px' }}>
                                <List sx={{mb: 2}}>
                                    {listNotification.map((list, index) => (
                                        <React.Fragment key={list.notificationId}>
                                            <ListItem disablePadding
                                                      className={`mt-4 ${index % 2 === 0 ? 'even' : 'odd'}`}
                                            >
                                                <Avatar className='me-3'
                                                        sx={{bgcolor: index % 2 === 0 ? '#f50057' : '#1565c0'}}
                                                >
                                                    <QuestionAnswerIcon fontSize='small'/>
                                                </Avatar>
                                                <ListItemText primary={highlightUser(list.message)}
                                                              secondary={new Date(list.timestamp).toLocaleString()}/>

                                            </ListItem>
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Container>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default FormOverView