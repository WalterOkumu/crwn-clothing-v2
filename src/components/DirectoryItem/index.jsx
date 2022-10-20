/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { DirectoryItemContainerDiv, BodyDiv, BackgroundImageDiv } from './DirectoryItem.styles';

const DirectoryItem = ({ directory }) => {
  const navigate = useNavigate();

  const { imageUrl, title, route } = directory;

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainerDiv onClick={onNavigateHandler}>
      <BackgroundImageDiv imageUrl={imageUrl} />
      <BodyDiv>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyDiv>
    </DirectoryItemContainerDiv>
  );
};

export default DirectoryItem;
