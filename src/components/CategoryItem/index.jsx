/* eslint-disable react/prop-types */
import React from 'react';
import './CategoryItem.styles.scss';

const CategoryItem = ({ category: { imageUrl, title } }) => (
  <div className="category-item-container">
    <div
      className="background-image"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
    />
    <div className="category-item-body-container">
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
);

export default CategoryItem;
