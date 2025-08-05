import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { subcategories } from '../data/mockData';

const SubCategories = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const filteredSubcategories = subcategories.filter(
    sc => sc.categoryId === parseInt(categoryId)
  );

  return (
    <div>
      <h2>Subcategories</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {filteredSubcategories.length === 0 ? (
          <p>No subcategories found.</p>
        ) : (
          filteredSubcategories.map((sc) => (
            <div
              key={sc.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                width: '150px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
              onClick={() => navigate(`/products/${sc.id}`)} // 👈 Navigate to products page
            >
              <img src="https://via.placeholder.com/150" alt={sc.name} style={{ width: '100%' }} />
              <h4>{sc.name}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SubCategories;
