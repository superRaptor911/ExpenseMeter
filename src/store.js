import create from 'zustand';
import {persist} from 'zustand/middleware';
import {listCategories, listTransctions} from './api/api';

let store = set => ({
  count: 0,
  addCount: () => set(state => ({count: state.count + 1})),

  credential: null,
  setCred: cred => set({credential: cred}),

  transactions: null,
  loadTransactions: async cred => {
    if (cred) {
      const data = await listTransctions(cred.name, cred.password);
      return set({transactions: data});
    }
    return set({transactions: null});
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
  loadCategories: async cred => {
    if (cred) {
      const data = await listCategories(cred);
      set({categories: data});
    }
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
});

let uiStore = set => ({
  showSideBar: false,
  toggleSideBar: () => set(state => ({showSideBar: !state.showSideBar})),
});

store = persist(store);
export const useStore = create(store);
export const useUiStore = create(uiStore);
