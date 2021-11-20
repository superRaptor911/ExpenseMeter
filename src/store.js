import create from 'zustand';
import {persist} from 'zustand/middleware';
import {listCategories, listTransctions} from './api/api';
import {
  storeAddTransaction,
  storeEditCategory,
  storeEditTransaction,
} from './storeHelper';

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

store = persist(store);
export const useStore = create(store);
export const useUiStore = create(uiStore);
