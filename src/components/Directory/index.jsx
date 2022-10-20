import DirectoryItem from '../DirectoryItem';
import { DirectoryContainerDiv } from './Directory.styles';

const directories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/hats.png',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/jackets.png',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/sneakers.png',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/womens.png',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/men.png',
    route: 'shop/mens',
  },
];

const Directory = () => (
  <DirectoryContainerDiv>
    {
        directories.map((directory) => (
          <DirectoryItem key={directory.id} directory={directory} />
        ))
      }
  </DirectoryContainerDiv>
);

export default Directory;
