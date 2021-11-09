import {isThisMonth, isThisWeek, isToday} from 'date-fns';

export const getTotalSpent = transactions => {
  let spent = 0;
  transactions &&
    transactions.forEach(item => {
      spent += parseFloat(item.amount);
    });

  return spent;
};

export const getDailyTransactions = transactions => {
  let dailyTransactions = [];
  transactions &&
    transactions.forEach(item => {
      if (isToday(new Date(item.date))) {
        dailyTransactions.push(item);
      }
    });

  return dailyTransactions;
};

export const getWeeklyTransaction = transactions => {
  let weeklyTransactions = [];
  transactions &&
    transactions.forEach(item => {
      if (isThisWeek(new Date(item.date))) {
        weeklyTransactions.push(item);
      }
    });

  return weeklyTransactions;
};

export const getMonthlyTransaction = transactions => {
  let monthlyTransactions = [];
  transactions &&
    transactions.forEach(item => {
      if (isThisMonth(new Date(item.date))) {
        monthlyTransactions.push(item);
      }
    });

  return monthlyTransactions;
};

export const getCategoryLimit = (categories, type) => {
  let limit = 0;
  let key = 'monthlyLimit';

  if (type === 'DAILY') {
    key = 'dailyLimit';
  } else if (type === 'WEEKLY') {
    key = 'weeklyLimit';
  }

  categories &&
    categories.forEach(item => {
      limit += parseFloat(item[key]);
    });
  return limit;
};
