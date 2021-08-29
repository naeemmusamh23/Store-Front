import { connect } from 'react-redux';
import { Container, Typography, makeStyles } from '@material-ui/core';

import Categories from './categories';
import Products from './products';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: '#cccccc',
    padding: theme.spacing(5, 0, 3),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Store = (props) => {
  const classes = useStyles();

  let category = props.activeList.activeCategories.display_name;
  
  let description =
    props.activeList.activeCategories.description || 'Choose a category';
  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="sm" align="center">
          <Categories />
          <br />
          <Typography component="h3" variant="h4" align="center" color="textPrimary" mt="3" > {category} </Typography>
          <br />
          <Typography component="p" variant="h5" align="center" color="textSecondary" gutterBottom > {description} </Typography>
        </Container>
      </div>
      <Products className="main" />
    </main>
  );
};

const mapStateToProps = (state) => ({
  activeList: state.categories,
});

export default connect(mapStateToProps)(Store);