export const getCategoryColor = (categoryId, categories) => {
  for (const i of categories) {
    if (i._id === categoryId) {
      return i.color;
    }
  }
  return '';
};

export const getCategoryTitle = (categoryId, categories) => {
  for (const i of categories) {
    if (i._id === categoryId) {
      return i.title;
    }
  }
  return '';
};
