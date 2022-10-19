const SHOP_DATA = [
  {
    title: 'Hats',
    items: [
      {
        name: 'Brown Brim',
        price: 25,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/hats/brown-brim.png',
        id: 1,
      },
      {
        id: 2,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/hats/blue-beanie.png',
        price: 18,
        name: 'Blue Beanie',
      },
      {
        id: 3,
        price: 35,
        name: 'Brown Cowboy',
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/hats/brown-cowboy.png',
      },
      {
        name: 'Grey Brim',
        id: 4,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/hats/grey-brim.png',
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/hats/green-beanie.png',
        price: 18,
      },
      {
        name: 'Palm Tree Cap',
        price: 14,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/hats/palm-tree-cap.png',
        id: 6,
      },
      {
        price: 18,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/hats/red-beanie.png',
        id: 7,
        name: 'Red Beanie',
      },
      {
        name: 'Wolf Cap',
        price: 14,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/hats/wolf-cap.png',
        id: 8,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        price: 16,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/hats/blue-snapback.png',
      },
    ],
  },
  {
    title: 'Sneakers',
    items: [
      {
        price: 220,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/sneakers/adidas-nmd.png',
        id: 10,
        name: 'Adidas NMD',
      },
      {
        name: 'Adidas Yeezy',
        id: 11,
        price: 280,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/sneakers/yeezy.png',
      },
      {
        name: 'Black Converse',
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/sneakers/black-converse.png',
        price: 110,
        id: 12,
      },
      {
        name: 'Nike White AirForce',
        id: 13,
        price: 160,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/sneakers/white-nike-high-tops.png',
      },
      {
        price: 160,
        id: 14,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/sneakers/nikes-red.png',
        name: 'Nike Red High Tops',
      },
      {
        price: 160,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/sneakers/nike-brown.png',
        id: 15,
      },
      {
        id: 16,
        price: 190,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/sneakers/nike-funky.png',
        name: 'Air Jordan Limited',
      },
      {
        id: 17,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/sneakers/timberlands.png',
        name: 'Timberlands',
        price: 200,
      },
    ],
  },
  {
    title: 'Jackets',
    items: [
      {
        price: 125,
        name: 'Black Jean Shearling',
        id: 18,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/jackets/black-shearling.png',
      },
      {
        name: 'Blue Jean Jacket',
        price: 90,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/jackets/blue-jean-jacket.png',
        id: 19,
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/jackets/grey-jean-jacket.png',
        price: 90,
      },
      {
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/jackets/brown-shearling.png',
        id: 21,
        price: 165,
        name: 'Brown Shearling',
      },
      {
        name: 'Tan Trench',
        price: 185,
        id: 22,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/jackets/brown-trench.png',
      },
    ],
  },
  {
    title: 'Womens',
    items: [
      {
        name: 'Blue Tanktop',
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/womens/blue-tank.png',
        price: 25,
        id: 23,
      },
      {
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/womens/floral-blouse.png',
        price: 20,
        name: 'Floral Blouse',
        id: 24,
      },
      {
        name: 'Floral Dress',
        price: 80,
        id: 25,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/womens/floral-skirt.png',
      },
      {
        id: 26,
        price: 80,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/womens/red-polka-dot-dress.png',
        name: 'Red Dots Dress',
      },
      {
        name: 'Striped Sweater',
        price: 45,
        id: 27,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/womens/striped-sweater.png',
      },
      {
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/womens/yellow-track-suit.png',
        name: 'Yellow Track Suit',
        price: 135,
        id: 28,
      },
      {
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/womens/white-vest.png',
        price: 20,
        id: 29,
        name: 'White Blouse',
      },
    ],
  },
  {
    title: 'Mens',
    items: [
      {
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/mens/camo-vest.png',
        id: 30,
        price: 325,
        name: 'Camo Down Vest',
      },
      {
        price: 20,
        name: 'Floral T-shirt',
        id: 31,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/mens/floral-shirt.png',
      },
      {
        name: 'Black & White Longsleeve',
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/mens/long-sleeve.png',
        id: 32,
        price: 25,
      },
      {
        id: 33,
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/mens/pink-shirt.png',
        price: 25,
        name: 'Pink T-shirt',
      },
      {
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/mens/roll-up-jean-shirt.png',
        price: 40,
        id: 34,
        name: 'Jean Long Sleeve',
      },
      {
        imageUrl: 'https://raw.githubusercontent.com/WalterOkumu/crwn-clothing-v2/main/public/images/shop-img/mens/polka-dot-shirt.png',
        id: 35,
        name: 'Burgundy T-shirt',
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
