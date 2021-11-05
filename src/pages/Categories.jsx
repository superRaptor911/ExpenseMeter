import React, {useEffect} from 'react';
import AddCategory from '../components/categories/AddCategory';
import ListCategories from '../components/categories/ListCategories';
import {useStore} from '../store';

const Categories = () => {
  const categories = useStore(state => state.categories);
  const loadCategories = useStore(state => state.loadCategories);

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div>
      <ListCategories categories={categories} />
      <AddCategory />
    </div>
  );
};

export default Categories;
