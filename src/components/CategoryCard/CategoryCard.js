import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/subcategories/${category.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      style={{ border: '1px solid gray', padding: '10px', width: '150px', cursor: 'pointer' }}
    >
      <img src={category.image} alt={category.name} style={{ width: '100%' }} />
      <h3>{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
