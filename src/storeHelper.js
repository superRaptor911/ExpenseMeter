import {listTransctions} from './api/api';

const sortByDate = items => {
  return items.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

export const storeAddTransaction = (set, item) => {
  item.date = new Date(item.date);
  set(state => ({
    transactions: state.transactions
      ? sortByDate([...state.transactions, item])
      : [item],
  }));
};

export const storeEditTransaction = (set, newItem) => {
  newItem.date = new Date(newItem.date);
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

export const storeLoadTransactions = async set => {
  let data = await listTransctions();
  data = data.map(item => {
    item.date = new Date(item.date);
    return item;
  });
  set({transactions: data});
};
