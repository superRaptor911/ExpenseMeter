import create from 'zustand';
import {persist} from 'zustand/middleware';
import {listCategories, listTransctions} from './api/api';
import {
  storeAddTransaction,
  storeEditCategory,
  storeEditTransaction,
  storeLoadTransactions,
} from './storeHelper';

let store = set => ({
  credential: null,
  setCred: cred => set({credential: cred}),

  transactions: null,
  loadTransactions: () => {
    storeLoadTransactions(set);
  },
  addTransaction: item => {
    storeAddTransaction(set, item);
  },
  deleteTransaction: id => {
    set(state => ({
      transactions: state.transactions.filter(item => item._id != id),
    }));
  },
  editTransaction: newItem => {
    storeEditTransaction(set, newItem);
  },

  categories: null,
  loadCategories: async () => {
    const data = await listCategories();
    set({categories: data});
  },
  addCategory: item => {
    set(state => ({
      categories: state.categories ? [...state.categories, item] : [item],
    }));
  },
  deleteCategory: id => {
    set(state => ({
      categories: state.categories.filter(item => item._id != id),
    }));
  },
  editCategory: newItem => {
    storeEditCategory(set, newItem);
  },
});

let uiStore = set => ({
  showSideBar: false,
  toggleSideBar: () => set(state => ({showSideBar: !state.showSideBar})),
});

store = persist(store, {
  // ...
  onRehydrateStorage: state => {
    // optional
    return (state, error) => {
      if (error) {
        console.log('an error happened during hydration', error);
      } else {
        if (state.transactions) {
          state.transactions = state.transactions.map(item => {
            item.date = new Date(item.date);
            return item;
          });
        }
        console.log('hydration finished');
      }
    };
  },
});
export const useStore = create(store);
export const useUiStore = create(uiStore);
