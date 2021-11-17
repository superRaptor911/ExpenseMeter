import create from 'zustand';
import {persist} from 'zustand/middleware';
import {listCategories, listTransctions} from './api/api';

let store = set => ({
  count: 0,
  addCount: () => set(state => ({count: state.count + 1})),

  credential: null,
  setCred: cred => set({credential: cred}),

  transactions: null,
  loadTransactions: async () => {
    const data = await listTransctions();
    return set({transactions: data});
  },
  addTransaction: item => {
    set(state => ({
      transactions: state.transactions ? [...state.transactions, item] : [item],
    }));
  },
  deleteTransaction: id => {
    set(state => ({
      transactions: state.transactions.filter(item => item._id != id),
    }));
  },
  editTransaction: newItem => {
    set(state => ({
      transactions: state.transactions.map(item => {
        if (newItem._id === item._id) {
          item = newItem;
        }
        return item;
      }),
    }));
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
    set(state => ({
      categories: state.categories.map(item => {
        if (newItem._id === item._id) {
          item = newItem;
        }
        return item;
      }),
    }));
  },
});

let uiStore = set => ({
  showSideBar: false,
  toggleSideBar: () => set(state => ({showSideBar: !state.showSideBar})),
});

store = persist(store);
export const useStore = create(store);
export const useUiStore = create(uiStore);
