/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { CategoryPreviewContainerDiv, H2Title, PreviewDiv } from './CategoryPreview.styles';

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainerDiv>
    <H2Title>
      <Link to={title}>{title.toUpperCase()}</Link>
    </H2Title>
    <PreviewDiv>
      {
        products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
      }
    </PreviewDiv>
  </CategoryPreviewContainerDiv>
);

export default CategoryPreview;
