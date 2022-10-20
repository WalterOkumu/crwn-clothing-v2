import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/CategoriesContext';
import ProductCard from '../../components/ProductCard';
import { CategoryContainerDiv, CategoryTitleH2 } from './Category.styles';

const Category = () => {
  const { category } = useParams();

  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProduct] = useState(categoriesMap[category]);

  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitleH2>{category.toUpperCase()}</CategoryTitleH2>
      <CategoryContainerDiv>
        {
          products && products.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </CategoryContainerDiv>
    </>
  );
};

export default Category;
