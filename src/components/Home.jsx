import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import axios from 'axios';
import Grid from '@mui/material/Grid'; // Corrected Grid import

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    maxHeight:  545,

    margin: 'auto',
    boxShadow: theme.shadows[3],
    '&:hover': {
        boxShadow: theme.shadows[5],
    },
}));

const PriceTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 'bold',
}));

const RatingTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
}));

const Home = () => {
    const [products, setProducts] = useState([]);

    // Fetching data from external API
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data);
            });
    }, []);

    return (
        <>
            <Typography variant="h4" align="center" gutterBottom>
                Products
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <StyledCard>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="260"
                                    image={product.image}
                                    alt={product.title}
                                    sx={{
                                        objectFit: 'contain', // Ensures that the image fits without being cropped
                                        maxWidth: '90%', // Optional: Reduces width to fit better inside the card
                                        margin: '0 auto' // Centers the image horizontally
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" noWrap>
                                        {product.title}
                                    </Typography>
                                    <PriceTypography variant="h6">
                                        ${product.price}
                                    </PriceTypography>
                                    <RatingTypography variant="body2">
                                        Rating: {product.rating.rate}
                                    </RatingTypography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View Details
                                </Button>
                                <Button size="small" color="secondary">
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Home;
