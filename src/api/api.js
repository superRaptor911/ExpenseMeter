import {useStore} from '../store';
import {postRequest} from './request';

const url = 'http://localhost:8080/';

function getData(response) {
  if (response && response.status) {
    return response.data;
  }
  return null;
}

function getIfValid(response) {
  if (response && response.status) {
    return response;
  }
  return null;
}

export async function loginUser(username, password) {
  const response = await postRequest(url + 'users/login', {
    name: username,
    password: password,
  });

  return response;
}

export async function listTransctions() {
  const cred = useStore.getState().credential;
  const response = await postRequest(url + 'transactions/', {
    name: cred.name,
    password: cred.password,
  });

  return getData(response);
}

export async function addTransaction(
  title,
  transType,
  note,
  date,
  amount,
  category,
) {
  const cred = useStore.getState().credential;
  const response = await postRequest(url + 'transactions/add', {
    name: cred.name,
    password: cred.password,
    title: title,
    transType: transType,
    note: note,
    date: date,
    amount: amount,
    category: category,
  });

  return getData(response);
}

export async function deleteTransaction(id) {
  const cred = useStore.getState().credential;
  const response = await postRequest(url + 'transactions/delete', {
    name: cred.name,
    password: cred.password,
    id: id,
  });

  return getIfValid(response);
}

export async function editTransaction(
  id,
  title,
  transType,
  note,
  date,
  amount,
  category,
) {
  const cred = useStore.getState().credential;
  const response = await postRequest(url + 'transactions/edit', {
    name: cred.name,
    password: cred.password,
    id: id,
    title: title,
    transType: transType,
    note: note,
    date: date,
    amount: amount,
    category: category,
  });

  return getData(response);
}

export async function listCategories() {
  const cred = useStore.getState().credential;
  const response = await postRequest(url + 'category/', {
    name: cred.name,
    password: cred.password,
  });

  return getData(response);
}

export async function addCategories(
  title,
  color,
  description,
  dailyLimit,
  weeklyLimit,
  monthlyLimit,
) {
  const cred = useStore.getState().credential;
  const response = await postRequest(url + 'category/add', {
    name: cred.name,
    password: cred.password,
    title: title,
    color: color,
    description: description,
    dailyLimit: dailyLimit,
    weeklyLimit: weeklyLimit,
    monthlyLimit: monthlyLimit,
  });

  return getData(response);
}

export async function editCategory(
  id,
  title,
  color,
  description,
  dailyLimit,
  weeklyLimit,
  monthlyLimit,
) {
  const cred = useStore.getState().credential;
  const response = await postRequest(url + 'category/edit', {
    name: cred.name,
    password: cred.password,
    id: id,
    title: title,
    color: color,
    description: description,
    dailyLimit: dailyLimit,
    weeklyLimit: weeklyLimit,
    monthlyLimit: monthlyLimit,
  });

  return getData(response);
}

export async function deleteCategory(id) {
  const cred = useStore.getState().credential;
  const response = await postRequest(url + 'category/delete', {
    name: cred.name,
    password: cred.password,
    id: id,
  });

  return getIfValid(response);
}
