import DirectoryItem from '../DirectoryItem';
import './Directory.styles.scss';

const Directory = () => {
  const directories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'images/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'images/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'images/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'images/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'images/men.png',
    },
  ];

  return (
    <div className="directory-container">
      {
        directories.map((directory) => (
          <DirectoryItem key={directory.id} directory={directory} />
        ))
      }
    </div>
  );
};

export default Directory;
