import superAgent from 'superagent';

export const getRemoteData = function (api) {
  //console.log('step 2: actions first', api);
  return (dispatch) => {
    //console.log('step 3: actions second', dispatch);
    return superAgent.get(api).then((response) => {
        //console.log('step 4: actions third', res.body.products);
        dispatch(getProducts({ results: response.body.products }));
      }).catch((error) => {
      console.error(error.message)});
  }
};

export const getProducts = (products) => {
  //console.log('step 5: products action', products);
  return {
    type: 'GET',
    payload: products.results,
  };
};

export const active = (name) => {
  return {
    type: 'ACTIVE',
    payload: name,
  };
};

export const increment = (product) => {
  return {
    type: 'INCREMENT',
    payload: product,
  };
};

export const show = (bool) => {
  return {
    type: 'SHOW_CART',
    payload: bool,
  };
};

export const decrement = (product) => {
  return {
    type: 'DECREMENT',
    payload: product,
  };
};