/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button, { BUTTON_TYPE_CLASSES } from '../Button';
import {
  ProductCardContainerDiv,
  FooterDiv,
  NameSpan,
  PriceSpan,
} from './ProductCard.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addToCart } = useContext(CartContext);

  const addProductToCart = () => addToCart(product);

  return (
    <ProductCardContainerDiv>
      <img src={`${imageUrl}`} alt={`${name}`} />
      <FooterDiv>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>
          {price}
        </PriceSpan>
      </FooterDiv>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCardContainerDiv>
  );
};

export default ProductCard;
