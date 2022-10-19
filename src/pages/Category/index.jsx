import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/CategoriesContext';
import ProductCard from '../../components/ProductCard';
import './Category.styles.scss';

const Category = () => {
  const { category } = useParams();

  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProduct] = useState(categoriesMap[category]);

  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {
          products && products.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </>
  );
};

export default Category;
