import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import PaidIcon from '@mui/icons-material/Paid';
import GroupsIcon from '@mui/icons-material/Groups';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import SettingsIcon from '@mui/icons-material/Settings';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GridOnIcon from '@mui/icons-material/GridOn';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Menu from '@mui/material/Menu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Fade} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import {Link} from 'react-router-dom'; // Import Link from react-router-dom
import DiscountIcon from '@mui/icons-material/Discount';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker'; // Đối tác giao hàng
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import DescriptionIcon from '@mui/icons-material/Description';
import DvrIcon from '@mui/icons-material/Dvr';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import PublishIcon from '@mui/icons-material/Publish';
import SoapIcon from '@mui/icons-material/Soap';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SavingsIcon from '@mui/icons-material/Savings';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DifferenceIcon from '@mui/icons-material/Difference';
import AirplayIcon from '@mui/icons-material/Airplay';
import NetworkPingIcon from '@mui/icons-material/NetworkPing';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PublicIcon from '@mui/icons-material/Public';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {menuSx} from "../../reusable/ReusableStyles";

function NavbarAdminSecond() {
    const [itemProduct, setItemProduct] = React.useState(null);
    const [itemTransaction, setItemTransaction] = React.useState(null);
    const [itemPartner, setItemPartner] = React.useState(null);
    const [itemEmployee, setItemEmployee] = React.useState(null);
    const [itemReport, setItemReport] = React.useState(null);
    const [itemSellOnline, setItemSellOnline] = React.useState(null);

    const openProduct = Boolean(itemProduct);
    const openTransaction = Boolean(itemTransaction);
    const openPartner = Boolean(itemPartner);
    const openEmployee = Boolean(itemEmployee);
    const openReport = Boolean(itemReport);
    const openSellOnline = Boolean(itemSellOnline);

    const handleClickProduct = (event) => {
        setItemProduct(event.currentTarget);
    };
    const handleClickTransaction = (event) => {
        setItemTransaction(event.currentTarget);
    };
    const handleClickPartner = (event) => {
        setItemPartner(event.currentTarget);
    };
    const handleClickEmployee = (event) => {
        setItemEmployee(event.currentTarget);
    };
    const handleClickReport = (event) => {
        setItemReport(event.currentTarget);
    };
    const handleClickSellOnline = (event) => {
        setItemSellOnline(event.currentTarget);
    };

    const handleCloseProduct = () => {
        setItemProduct(null);
    };
    const handleCloseTransaction = () => {
        setItemTransaction(null);
    };
    const handleClosePartner = () => {
        setItemPartner(null);
    };
    const handleCloseEmployee = () => {
        setItemEmployee(null);
    };
    const handleCloseReport = () => {
        setItemReport(null);
    };
    const handleCloseSellOnline = () => {
        setItemSellOnline(null);
    };

    const buttonSx = {
        color: 'white',
        textDecoration: 'none',
        textTransform: 'capitalize'
    };


    return (<AppBar position="static" sx={{backgroundColor: '#1976d2'}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Box>
                        <Button component={Link}
                                to="/DashBoard"
                                sx={buttonSx} className={'me-3 text-white'}>
                            <VisibilityIcon className={'me-2'} fontSize='small'/>
                            Tổng quan
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            id="fade-button"
                            aria-controls={openProduct ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openProduct ? 'true' : undefined}
                            onClick={handleClickProduct}
                            className={'me-3'}
                            sx={buttonSx}
                        ><DisplaySettingsIcon className={'me-2'} fontSize='small'/>
                            Hàng hóa
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={itemProduct}
                            open={openProduct}
                            onClose={handleCloseProduct}
                            className={'mt-2'}
                            TransitionComponent={Fade}
                            sx={menuSx}

                        >
                            <MenuItem component="a" href={'/product'} onClick={handleCloseProduct} className={'mt-2 text-white'} >

                                <ListItemText className={'me-5'}>
                                    <GridOnIcon fontSize="small"
                                                className={'me-3'}
                                    />
                                    Danh mục
                                </ListItemText>

                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseProduct}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <DiscountIcon fontSize="small"
                                                  className={'me-3'}
                                    />
                                    Thiết lập giá
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseProduct}
                                      className={'mt-2 mb-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <DescriptionIcon fontSize="small"
                                                     className={'me-3'}
                                    />
                                    Kiểm kho
                                </ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Button
                            id="fade-button"
                            aria-controls={openTransaction ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openTransaction ? 'true' : undefined}
                            onClick={handleClickTransaction}
                            className={'me-3'}
                            sx={buttonSx}
                        ><SyncAltIcon className={'me-2'} fontSize='small'/>
                            Giao dịch
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={itemTransaction}
                            open={openTransaction}
                            onClose={handleCloseTransaction}
                            className={'mt-2'}
                            TransitionComponent={Fade}
                            sx={menuSx}
                        >
                            <MenuItem component="a" href={''} onClick={handleCloseTransaction}
                                      className={'mt-2 mb-2 text-white'}>

                                <ListItemText className={'me-5'}>
                                    <DvrIcon fontSize="small"
                                             className={'me-3'}
                                    />
                                    Đặt hàng
                                </ListItemText>

                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseTransaction}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <RequestQuoteIcon fontSize="small"
                                                      className={'me-3'}
                                    />
                                    Hóa đơn
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseTransaction}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <FileCopyIcon fontSize="small"
                                                  className={'me-3'}
                                    />
                                    Vận đơn
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseTransaction}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <ReplyAllIcon fontSize="small"
                                                  className={'me-3'}
                                    />
                                    Trả hàng
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseTransaction}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <NoCrashIcon fontSize="small"
                                                 className={'me-3'}
                                    />
                                    Nhập hàng
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseTransaction}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <PublishIcon fontSize="small"
                                                 className={'me-3'}
                                    />
                                    Trả hàng nhập
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseTransaction}
                                      className={'mt-2 mb-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <SoapIcon fontSize="small"
                                              className={'me-3'}
                                    />
                                    Xuất hủy
                                </ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Button
                            id="fade-button"
                            aria-controls={openPartner ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openPartner ? 'true' : undefined}
                            onClick={handleClickPartner}
                            className={'me-3'}
                            sx={buttonSx}
                        ><HandshakeIcon className={'me-2'} fontSize='small'/>
                            Đối tác
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={itemPartner}
                            open={openPartner}
                            onClose={handleClosePartner}
                            className={'mt-2'}
                            TransitionComponent={Fade}
                            sx={menuSx}
                        >
                            <MenuItem component="a" href={'/customer'} onClick={handleClosePartner} className={'mt-2 text-white'}>

                                <ListItemText className={'me-5'}>
                                    <PeopleAltIcon fontSize="small"
                                                   className={'me-3'}
                                    />
                                    Khách hàng
                                </ListItemText>

                            </MenuItem>
                            <MenuItem component="a" href={'/supplier'} onClick={handleClosePartner}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <GroupsIcon fontSize="small"
                                                className={'me-3'}
                                    />
                                    Nhà cung cấp
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleClosePartner}
                                      className={'mt-2 mb-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <AssistWalkerIcon fontSize="small"
                                                      className={'me-3'}
                                    />
                                    Đối tác giao hàng
                                </ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Button
                            id="fade-button"
                            aria-controls={openEmployee ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openEmployee ? 'true' : undefined}
                            onClick={handleClickEmployee}
                            className={'me-3'}
                            sx={buttonSx}
                        ><PersonIcon className={'me-2'} fontSize='small'/>
                            Nhân viên
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={itemEmployee}
                            open={openEmployee}
                            onClose={handleCloseEmployee}
                            className={'mt-2'}
                            TransitionComponent={Fade}
                            sx={menuSx}
                        >
                            <MenuItem component="a" href={'/employee'} onClick={handleCloseEmployee} className={'mt-2 text-white'}>

                                <ListItemText className={'me-5'}>
                                    <PersonIcon fontSize="small"
                                                className={'me-3'}
                                    />
                                    Nhân viên
                                </ListItemText>

                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseEmployee} className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <EditCalendarIcon fontSize="small"
                                                      className={'me-3'}
                                    />
                                    Lịch làm việc
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseEmployee}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <CalendarMonthIcon fontSize="small"
                                                       className={'me-3'}
                                    />
                                    Chấm công
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseEmployee} className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <SavingsIcon fontSize="small"
                                                 className={'me-3'}
                                    />
                                    Bảng tính lương
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseEmployee}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <CurrencyExchangeIcon fontSize="small"
                                                          className={'me-3'}
                                    />
                                    Thiết lập hoa hồng
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseEmployee}
                                      className={'mt-2 mb-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <SettingsIcon fontSize="small"
                                                  className={'me-3'}
                                    />
                                    Thiết lập chung
                                </ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Button component={Link}
                                to=""
                                className={'me-3 text-white'}
                                sx={buttonSx}>
                            <PaidIcon className={'me-2'} fontSize='small'/>
                            Sổ quỹ
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            id="fade-button"
                            aria-controls={openReport ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openReport ? 'true' : undefined}
                            onClick={handleClickReport}
                            className={'me-3'}
                            sx={buttonSx}
                        ><AssessmentIcon className={'me-2'} fontSize='small'/>
                            Báo cáo
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={itemReport}
                            open={openReport}
                            onClose={handleCloseReport}
                            className={'mt-2'}
                            TransitionComponent={Fade}
                            sx={menuSx}
                        >
                            <MenuItem component="a" href={''} onClick={handleCloseReport} className={'mt-2 text-white'}>

                                <ListItemText className={'me-5 '}>
                                    <ScheduleIcon fontSize="small"
                                                  className={'me-3'}
                                    />
                                    Cuối ngày
                                </ListItemText>

                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseReport}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <DifferenceIcon fontSize="small"
                                                    className={'me-3'}
                                    />
                                    Bán hàng
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseReport} className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <PointOfSaleIcon fontSize="small"
                                                     className={'me-3'}
                                    />
                                    Đặt hàng
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseReport}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <DisplaySettingsIcon fontSize="small"
                                                         className={'me-3'}
                                    />
                                    Hàng hóa
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseReport} className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <PeopleAltIcon fontSize="small"
                                                   className={'me-3'}
                                    />
                                    Khách hàng
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseReport}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <GroupsIcon fontSize="small"
                                                className={'me-3'}
                                    />
                                    Nhà cung cấp
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseReport} className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <PersonIcon fontSize="small"
                                                className={'me-3'}
                                    />
                                    Nhân viên
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseReport}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <AirplayIcon fontSize="small"
                                                 className={'me-3'}
                                    />
                                    Kênh bán hàng
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseReport}
                                      className={'mt-2 mb-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <NetworkPingIcon fontSize="small"
                                                     className={'me-3'}
                                    />
                                    Tài chính
                                </ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Button
                            id="fade-button"
                            aria-controls={openSellOnline ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openSellOnline ? 'true' : undefined}
                            onClick={handleClickSellOnline}
                            className={'me-3'}
                            sx={buttonSx}
                        ><ShoppingCartIcon className={'me-2'} fontSize='small'/>
                            Bán Online
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={itemSellOnline}
                            open={openSellOnline}
                            onClose={handleCloseSellOnline}
                            className={'mt-2'}
                            TransitionComponent={Fade}
                            sx={menuSx}
                        >
                            <MenuItem component="a" href={''} onClick={handleCloseSellOnline}
                                      className={'mt-2 text-white'}>

                                <ListItemText className={'me-5'}>
                                    <FacebookIcon fontSize="small"
                                                  className={'me-3'}
                                    />
                                    Bán hàng Facebook
                                </ListItemText>

                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseSellOnline}
                                      className={'mt-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <LocalMallIcon fontSize="small"
                                                   className={'me-3'}
                                    />
                                    Bán hàng trên sàn TMĐT
                                </ListItemText>
                            </MenuItem>
                            <MenuItem component="a" href={''} onClick={handleCloseSellOnline}
                                      className={'mt-2 mb-2 text-white'}>
                                <ListItemText className={'me-5'}>
                                    <PublicIcon fontSize="small"
                                                className={'me-3'}
                                    />
                                    Website bán hàng
                                </ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '10px',
                        }}
                    >
                        <Button component={Link}
                                to="/sale"
                                className={'text-white'}
                                sx={buttonSx}>
                            <ShoppingBasketIcon className={'me-2'} fontSize='small'/>
                            Bán hàng
                        </Button>
                    </Box>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>);
}

export default NavbarAdminSecond;
