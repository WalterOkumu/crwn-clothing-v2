/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from '../Button';
import './ProductCard.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addToCart } = useContext(CartContext);

  const addProductToCart = () => addToCart(product);

  return (
    <div className="product-card-container">
      <img src={`${imageUrl}`} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">
          {price}
        </span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
