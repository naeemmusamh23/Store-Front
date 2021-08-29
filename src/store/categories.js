let initialState = {
  categories: [
    {
      name: 'food',
      display_name: 'Food',
      description: 'Good Food = Good mind 👨‍🍳',
    },
    {
      name: 'electronics',
      display_name: 'Electronics',
      description: 'good technology = less time 👨‍💻',
    },
  ],
  activeCategories: {},
};

const categories = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      let activeCategories = initialState.categories.find((category)=>category.name === payload);
      return { categories: initialState.categories, activeCategories};
    default:
      return state;
  }
};

export default categories;