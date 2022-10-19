/* eslint-disable react/prop-types */
import React from 'react';
import './DirectoryItem.styles.scss';

const DirectoryItem = ({ directory: { imageUrl, title } }) => (
  <div className="directory-item-container">
    <div
      className="background-image"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
    />
    <div className="body">
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
);

export default DirectoryItem;
