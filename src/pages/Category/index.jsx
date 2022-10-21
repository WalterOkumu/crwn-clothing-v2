import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { selectCategoriesMap } from '../../redux/categories/category-selector';
import { setCategoriesMap } from '../../redux/categories/category-action';
import ProductCard from '../../components/ProductCard';
import { CategoryContainerDiv, CategoryTitleH2 } from './Category.styles';

const Category = () => {
  const dispatch = useDispatch();

  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProduct] = useState(categoriesMap[category]);

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategories();
  }, [dispatch]);

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
