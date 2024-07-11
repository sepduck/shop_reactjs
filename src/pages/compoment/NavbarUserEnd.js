import Box from "@mui/material/Box";
import {Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import Paper from "@mui/material/Paper";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function NavbarUserEnd() {
    const TikTokIcon = ({color = "#000000"}) => {
        return (
            <svg
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="4%"
                height="4%"
            >
                <path
                    d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"/>
            </svg>
        );
    };
    return (
        <Box sx={{flexGrow: 1}} className='mt-5'>
            <Grid container spacing={3}>
                <Grid item md={12}>
                    <Paper className="border border-1">
                        <Container maxWidth={'xl'}>
                            <Grid container spacing={2} className='mt-5'>
                                <Grid item xs={12} md={3}>
                                    <Typography variant="h6" component="h2" className='fw-bold'>
                                        Học lập trình để đi làm
                                    </Typography>

                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Typography variant="h6" component="h2" className='fw-bold'>
                                        Về shopphone
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Typography variant="h6" component="h2" className='fw-bold'>
                                        Sản phẩm
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Typography variant="h6" component="h2" className='fw-bold'>
                                        Công cụ
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Typography variant="h6" component="h2" className='fw-bold'>
                                        Công ty cổ phần công nghệ NESTECH
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} className='mt-2'>
                                <Grid item xs={12} md={3}>
                                    <Typography component="h2">
                                        Điện thoại: 0333.93.22.90
                                    </Typography>
                                    <Typography component="h2">
                                        Email: cutexinhzai2018@gmail.com
                                    </Typography>
                                    <Typography component="h2">
                                        Địa chỉ: Số 10, ngõ 37/21, Dịch Vọng, Cầu Giấy, Hà Nội
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Typography component="h2">
                                        Giới thiệu
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Liên hệ
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Điều khoản
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Bảo mật
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Cơ hội việc làm
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Typography component="h2">
                                        Game Nester
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Game CSS Diner
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Game CSS Selectors
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Game Froggy
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Game Froggy Pro
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Game Scoops
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Typography component="h2">
                                        Tạo CV xin việc
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Rút gọn liên kết
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Clip-path maker
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Snippet generator
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        CSS Grid generator
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Cảnh báo sờ tay lên mặt
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Typography component="h2">
                                        Mã số thuế: 0109922901
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Ngày thành lập: 18/08/2001
                                    </Typography>
                                    <Typography component="h2" className='mt-1'>
                                        Lĩnh vực hoạt động: Giáo dục, công nghệ - lập trình. Chúng tôi tập trung xây
                                        dựng và phát triển các sản phẩm mang lại giá trị cho cộng đồng lập trình viên
                                        Việt Nam.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} className='mt-2 mb-5'>
                                <Grid item xs={12} md={6}>
                                    <Typography component="h2">
                                        © 2018 - 2024 NESTECH. Nền tảng học lập trình hàng đầu Việt Nam
                                    </Typography>

                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography component="h2" className='d-flex justify-content-end'>
                                        <YouTubeIcon fontSize='large' iconType="youtube" sx={{color: 'red'}}
                                                     className="me-2"/>
                                        <FacebookIcon fontSize="large" iconType="facebook" sx={{color: 'blue'}}
                                                      className="me-2"/>
                                        <TikTokIcon/>
                                    </Typography>

                                </Grid>
                            </Grid>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NavbarUserEnd;