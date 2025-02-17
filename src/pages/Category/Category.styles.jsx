import styled from 'styled-components';

export const CategoryContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const CategoryTitleH2 = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

export default { CategoryContainerDiv, CategoryTitleH2 };

/*
.category-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
}

.category-title {
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
}
*/
