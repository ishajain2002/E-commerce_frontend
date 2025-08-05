import React from 'react';
import { categories } from '../data/mockData';
import CategoryCard from '../components/CategoryCard/CategoryCard';

const Categories = () => {
  return (
    <div>
      <h2>Categories</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {categories.map(cat => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
