const sortByDate = items => {
  return items.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

export const storeAddTransaction = (set, item) => {
  set(state => ({
    transactions: state.transactions
      ? sortByDate([...state.transactions, item])
      : [item],
  }));
};

export const storeEditTransaction = (set, newItem) => {
  set(state => ({
    transactions: state.transactions.map(item => {
      if (newItem._id === item._id) {
        item = newItem;
      }
      return item;
    }),
  }));
};

export const storeEditCategory = (set, newItem) => {
  set(state => ({
    categories: state.categories.map(item => {
      if (newItem._id === item._id) {
        item = newItem;
      }
      return item;
    }),
  }));
};
