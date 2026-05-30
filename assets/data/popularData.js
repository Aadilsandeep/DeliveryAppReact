const popularData = [
  {
    id: 1,
    image: require('../images/pizza1.png'),
    title: 'Pepperoni Pizza',
    weight: '500 gr',
    rating: '5.O',
    price: 250,
    size: 'Medium',
    sizeNumber: 14,
    crust: 'Thin',
    deliveryTime: 30,
    ingredients: [
      {
        id: 1,
        name: 'ham',
        image: require('../images/ham.png'),
      },
      {
        id: 2,
        name: 'tomato',
        image: require('../images/tomato.png'),
      },
      {
        id: 3,
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
      {
        id: 4,
        name: 'garlic',
        image: require('../images/garlic.png'),
      },
    ],
  },

  {
    id: 2,
    image: require('../images/pizza2.png'),
    title: 'Veg Pizza',
    weight: '450 gr',
    rating: '4.O',
    price: 550,
    size: 'Large',
    sizeNumber: 20,
    crust: 'Thick',
    deliveryTime: 50,
    ingredients: [
      {
        id: 1,
        name: 'ham',
        image: require('../images/ham.png'),
      },

      {
        id: 2,
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
    ],
  },

  {
    id: 3,
    image: require('../images/pizza3.png'),
    title: 'Pepperoni hot Pizza',
    weight: '700 gr',
    rating: '4.5',
    price: 200,
    size: 'small',
    sizeNumber: 11,
    crust: 'Thin',
    deliveryTime: 20,
    ingredients: [
      {
        id: 1,
        name: 'ham',
        image: require('../images/ham.png'),
      },
      {
        id: 2,
        name: 'tomato',
        image: require('../images/tomato.png'),
      },
      {
        id: 3,
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
    ],
  },
];

export default popularData;
