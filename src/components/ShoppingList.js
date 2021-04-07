import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';

const plantList = [
  {
    name: 'monstera',
    category: 'classique',
    id: '1ed',
    isBestSale: true,
    light: 2,
    water: 3
  },
  {
    name: 'ficus lyrata',
    category: 'classique',
    id: '2ab',
    light: 3,
    water: 1
  },
  {
    name: 'pothos argenté',
    category: 'classique',
    id: '3sd',
    light: 1,
    water: 2
  },
  {
    name: 'yucca',
    category: 'classique',
    id: '4kk',
    light: 3,
    water: 1
  },
  {
    name: 'olivier',
    category: 'extérieur',
    id: '5pl',
    light: 3,
    water: 1
  },
  {
    name: 'géranium',
    category: 'extérieur',
    id: '6uo',
    light: 2,
    water: 2
  },
  {
    name: 'basilique',
    category: 'extérieur',
    id: '7ie',
    isBestSale: true,
    light: 2,
    water: 3
  },
  {
    name: 'aloe',
    category: 'plante grasse',
    id: '8fp',
    light: 2,
    water: 1
  },
  {
    name: 'succulente',
    category: 'plante grasse',
    id: '9vn',
    light: 2,
    water: 1
  }
];

const ShoppingList = () => {
  const categories = plantList.reduce((accumulator, plant) => {
    if (accumulator.includes(plant.category)) {
      return accumulator;
    }
    return accumulator.concat(plant.category);
  }, []);

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>

       <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList
