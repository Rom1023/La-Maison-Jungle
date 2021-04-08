import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';
import monstera from '../assets/monstera.jpg';
import lyrata from '../assets/lyrata.jpg';
import pothos from '../assets/pothos.jpg';
import calathea from '../assets/calathea.jpg';
import olivier from '../assets/olivier.jpg';
import cactus from '../assets/cactus.jpg';
import basil from '../assets/basil.jpg';
import succulent from '../assets/succulent.jpg';
import mint from '../assets/mint.jpg';

const plantList = [
  {
    name: 'monstera',
    category: 'classique',
    id: '1ed',
    light: 2,
    water: 3,
    cover: monstera
  },
  {
    name: 'ficus lyrata',
    category: 'classique',
    id: '2ab',
    light: 3,
    water: 1,
    cover: lyrata
  },

  {
    name: 'pothos argenté',
    category: 'classique',
    id: '3sd',
    light: 1,
    water: 2,
    cover: pothos
  },
  {
    name: 'calathea',
    category: 'classique',
    id: '4kk',
    light: 2,
    water: 3,
    cover: calathea
  },
  {
    name: 'olivier',
    category: 'extérieur',
    id: '5pl',
    light: 3,
    water: 1,
    cover: olivier
  },

  {
    name: 'cactus',
    category: 'plante grasse',
    id: '8fp',
    light: 2,
    water: 1,
    cover: cactus
  },
  {
    name: 'basilique',
    category: 'extérieur',
    id: '7ie',
    light: 2,
    water: 3,
    cover: basil
  },
  {
    name: 'succulente',
    category: 'plante grasse',
    id: '9vn',
    light: 2,
    water: 1,
    cover: succulent
  },

  {
    name: 'menthe',
    category: 'extérieur',
    id: '6uo',
    light: 2,
    water: 2,
    cover: mint
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
    <div className="lmj-shopping-list">
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
