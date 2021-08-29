import { AppBar, Typography, Toolbar, Link, Grid } from '@material-ui/core/';
import Card from '../Store/card.js';

export default function Header(props) {
    return (
      <AppBar position="relative" color="white">
        <Toolbar>
          <Grid container direction="row" justify="space-between" alignItems="center" >
            <Typography variant="h5" color="inherit" noWrap>
              <Link color="inherit" href="/"> OUR STORE </Link>
            </Typography>
            <Card />
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }