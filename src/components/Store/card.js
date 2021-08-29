import { connect } from 'react-redux';
import Paycard from './paycard.js';

import { Button, Box, Typography, Drawer, List, ListItem, Grid, Divider, makeStyles } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import HighlightOffIcon  from '@material-ui/icons/Delete';

import { increment, show, decrement } from '../../store/actions.js';

const useStyles = makeStyles({
  list: {
    width: 800,
  },
  buttonPay:{
    marginTop: 350,
    marginLeft: 80,
  }
});

const Card = (props) => {
  const classes = useStyles();

  let display = props.cart.display || [];
  
  return (
    <>
      <Button color="inherit" onClick={() => props.show(!props.cart.show)}>
        <Box display="flex" width={130} height={50} borderRadius={7} bgcolor="primary" alignItems="center" justifyContent="center" justify="center" >
          <AddShoppingCartIcon />
          <Typography variant="h6" gutterBottom mx={3}> cart {props.cart.count} </Typography>
        </Box>
      </Button>
      <Drawer anchor="right" open={props.cart.show} onClose={() => props.show(false)} >
        <List className={classes.list}>
          <ListItem>
            <Grid container alignItems="center" justify="center" wrap="wrap" spacing={2} >
              <Typography variant="h4"> Cart </Typography>
            </Grid>
          </ListItem>
          <Typography variant='h4'> Order Summary </Typography>
          <Divider />
          {display.map((product) => {
            return (
              <ListItem key={product._id}>
                <Grid container alignItems="center" justify="space-between" wrap="wrap" spacing={2} >
                  <Typography variant="h7">
                  <strong> {product.name} </strong> &nbsp; &nbsp; &nbsp; <strong> {product.count + 1} </strong>
                  </Typography>
                  <Typography variant="body1">
                    ${(product.count + 1) * product.price}
                    <HighlightOffIcon onClick={() => props.decrement(product)} />
                  </Typography>
                </Grid>
              </ListItem>
            );
          })}
              <Typography variant='h6'> TOTAL </Typography>
          <Divider />
          <div>
          <Paycard/>
          </div>
        </List>
      </Drawer>
    </>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });
const mapDispatchToProps = { increment, show, decrement };
export default connect(mapStateToProps, mapDispatchToProps)(Card);