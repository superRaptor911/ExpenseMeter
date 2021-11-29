import {isThisMonth, isThisWeek, isToday, isYesterday} from 'date-fns';

export const getTotalSpent = transactions => {
  let spent = 0;
  transactions &&
    transactions.forEach(item => {
      if (item.transType === 'EXPENSE') {
        spent += parseFloat(item.amount);
      } else {
        spent -= parseFloat(item.amount);
      }
    });

  return spent;
};

export const getDailyTransactions = transactions => {
  let dailyTransactions = [];
  transactions &&
    transactions.forEach(item => {
      if (isToday(item.date)) {
        dailyTransactions.push(item);
      }
    });

  return dailyTransactions;
};

export const getYesterdaysTransaction = transactions => {
  let dailyTransactions = [];
  transactions &&
    transactions.forEach(item => {
      if (isYesterday(item.date)) {
        dailyTransactions.push(item);
      }
    });

  return dailyTransactions;
};

export const getWeeklyTransaction = transactions => {
  let weeklyTransactions = [];
  transactions &&
    transactions.forEach(item => {
      if (isThisWeek(item.date)) {
        weeklyTransactions.push(item);
      }
    });

  return weeklyTransactions;
};

export const getMonthlyTransaction = transactions => {
  let monthlyTransactions = [];
  transactions &&
    transactions.forEach(item => {
      if (isThisMonth(item.date)) {
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
