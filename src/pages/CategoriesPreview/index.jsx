import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../redux/categories/category-selector';
import CategoryPreview from '../../components/CategoryPreview';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];

          return <CategoryPreview key={title} title={title} products={products} />;
        })
      }
    </>
  );
};

export default CategoriesPreview;
