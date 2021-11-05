import {getRequest, postRequest} from './request';

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

  return getIfValid(response);
}

export async function listTransctions(username, password) {
  const response = await postRequest(url + 'transactions/', {
    name: username,
    password: password,
  });

  return getData(response);
}

export async function addTransaction(
  cred,
  title,
  transType,
  note,
  date,
  amount,
  category,
) {
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

export async function deleteTransaction(cred, id) {
  const response = await postRequest(url + 'transactions/delete', {
    name: cred.name,
    password: cred.password,
    id: id,
  });

  return getIfValid(response);
}

export async function listCategories(cred) {
  const response = await postRequest(url + 'category/', {
    name: cred.name,
    password: cred.password,
  });

  return getData(response);
}

export async function addCategories(
  cred,
  title,
  color,
  description,
  dailyLimit,
  weeklyLimit,
  monthlyLimit,
) {
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
