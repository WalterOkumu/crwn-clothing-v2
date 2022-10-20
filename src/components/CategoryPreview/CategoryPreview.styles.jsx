import styled from 'styled-components';

export const CategoryPreviewContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const H2Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const PreviewDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

export default { CategoryPreviewContainerDiv, H2Title, PreviewDiv };

/*
.category-preview-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }

  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
}
*/
