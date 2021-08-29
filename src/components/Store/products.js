/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, makeStyles } from '@material-ui/core/';
import { increment, getRemoteData } from '../../store/actions';

const api = 'https://run.mocky.io/v3/86db0ece-4dea-44d6-9913-3fd9c13b03aa';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Status = (props) => {
  const classes = useStyles();

  useEffect(() => {
    console.log('step 1: products component', api);
    props.getRemoteData(api);
  }, []);
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}> {props.products.display.length > 0
          ? props.products.display.map((product) => {
              return (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} image={product.url} title="Image title" />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2"> {product.name} </Typography>
                      <Typography>Price: ${product.price}</Typography>
                      <Typography> {product.inStock > 0 ? `In stock, ${product.inStock} items left` : 'Out of Stock'} </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" onClick={() => props.increment(product)} disabled={product.inStock > 0 ? false : true} > ADD TO CART </Button>
                      <Button size="small" color="primary"> VIEW DETAILS </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          : props.products.products.map((product) => {
              return (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} image={product.url} title="Image title" />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2"> {product.name} </Typography>
                      <Typography>Price: ${product.price}</Typography>
                      <Typography> {product.inStock > 0 ? `In stock, ${product.inStock} items left` : 'Out of Stock'} </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" onClick={() => props.increment(product)} disabled={product.inStock > 0 ? false : true} > ADD TO CART </Button>
                      <Button size="small" color="primary"> VIEW DETAILS </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({ products: state.products });
const mapDispatchToProps = { increment, getRemoteData };
export default connect(mapStateToProps, mapDispatchToProps)(Status);