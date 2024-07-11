import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import TabletIcon from '@mui/icons-material/Tablet';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import WatchIcon from '@mui/icons-material/Watch';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import ComputerIcon from '@mui/icons-material/Computer';
import SimCardIcon from '@mui/icons-material/SimCard';

function NavbarUserSecond() {
    const buttonSx = {
        color: 'white',
        textDecoration: 'none',
        textTransform: 'capitalize'
    };
    return (<AppBar position="static" sx={{backgroundColor: '#1976d2'}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box sx={{width: '100%'}}>
                    <Box sx={{ml: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Button sx={buttonSx}>
                            <PhoneIphoneIcon className='me-2' fontSize='small'/>
                            Điện thoại
                        </Button>
                        <Button sx={buttonSx}>
                            <LaptopIcon className='me-2' fontSize='small'/>
                            Laptop
                        </Button>
                        <Button sx={buttonSx}>
                            <TabletIcon className='me-2' fontSize='small'/>
                            Tablet
                        </Button>
                        <Button sx={buttonSx}>
                            <HeadphonesIcon className='me-2' fontSize='small'/>
                            Phụ kiện
                        </Button>
                        <Button sx={buttonSx}>
                            <WatchIcon className='me-2' fontSize='small'/>
                            Smartwatch
                        </Button>
                        <Button sx={buttonSx}>
                            <WatchLaterIcon className='me-2' fontSize='small'/>
                            Đồng hồ
                        </Button>
                        <Button sx={buttonSx}>
                            <PhonelinkSetupIcon className='me-2' fontSize='small'/>
                            Máy cũ, Thu cũ
                        </Button>
                        <Button sx={buttonSx}>
                            <ComputerIcon className='me-2' fontSize='small'/>
                            Pc, máy in
                        </Button>
                        <Button sx={buttonSx}>
                            <SimCardIcon className='me-2' fontSize='small'/>
                            Sim, thẻ cào
                        </Button>
                    </Box>
                </Box>

            </Toolbar>
        </Container>
    </AppBar>);
}

export default NavbarUserSecond;
