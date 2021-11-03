import create from 'zustand';
import {persist} from 'zustand/middleware';
import {listTransctions} from './api/api';

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
});

store = persist(store);
export const useStore = create(store);
