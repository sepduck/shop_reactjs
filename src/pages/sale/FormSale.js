import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavbarUser from "../compoment/NavbarUser";
import NavbarUserSecond from "../compoment/NavbarUserSecond";
import { Container, Grid, Pagination } from "@mui/material";
import NavbarUserEnd from "../compoment/NavbarUserEnd";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { getListProduct } from "../api/ApiGet";
import { postAddProduct } from "../api/ApiPost";

function FormSale() {
    const [listProduct, setListProduct] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(12);
    const navigate = useNavigate();

    const startIndex = (page - 1) * pageSize;
    const visibleProducts = listProduct.slice(startIndex, startIndex + pageSize);
    const pageCount = Math.ceil(listProduct.length / pageSize);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
            return;
        }

        const onListProduct = async () => {
            try {
                const data = await getListProduct(token);
                setListProduct(data);
            } catch (err) {
                navigate('/');
            }
        };

        onListProduct();
    }, [navigate]);

    const onAddProduct = useCallback(async (productId) => {
        const token = localStorage.getItem('token');
        try {
            await postAddProduct(productId, token);
        } catch (err) {
            console.log('Lỗi khi thêm sản phẩm vào giỏ hàng', err);
        }
    }, []);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <div style={{ background: '#e8eaed' }}>
            <NavbarUser />
            <NavbarUserSecond />
            <Container maxWidth="xl">
                <Grid container spacing={3} mt={2} mb={3}>
                    {visibleProducts.map((product) => (
                        <Grid item xs={3} lg={3} key={product.product_id}>
                            <Card
                                className="text-center rounded-3"
                                onClick={() => onAddProduct(product.product_id)}
                                sx={{ cursor: 'pointer' }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&:hover img': {
                                            transform: 'scale(1.1)',
                                        },
                                        width: '100%',
                                        paddingBottom: '75%',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={`data:image/jpeg;base64,${product.file}`}
                                        alt={product.product_name}
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: 'rgba(251, 251, 251, 0.15)',
                                            opacity: 0,
                                            transition: 'opacity 0.5s ease',
                                            '&:hover': {
                                                opacity: 1,
                                            },
                                        }}
                                    ></Box>
                                </Box>
                                <CardContent sx={{ minHeight: 150 }}>
                                    <Typography
                                        variant="h5"
                                        className="card-title mb-3 text-reset"
                                        component="div"
                                        sx={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <b>{product.product_name}</b>
                                    </Typography>
                                    <Typography variant="body2" className="card-title mb-4 text-reset">
                                        {product.group_product_name}
                                    </Typography>
                                    <Typography variant="h6" className="mb-3 text-danger mt-2">
                                        <b>
                                            {product.price
                                                .toLocaleString('de-DE', { style: 'currency', currency: 'VND' })
                                                .replace('VNĐ', '')}
                                        </b>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }} className='mt-3'>
                    <Pagination count={pageCount} page={page} onChange={handlePageChange} />
                </Box>
            </Container>
            <NavbarUserEnd />
        </div>
    );
}

export default FormSale;
