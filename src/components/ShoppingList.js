import '../styles/ShoppingList.css';

const plantList = [
  {
    name: 'monstera',
    category: 'classique',
    id: '1ed'
  },
  {
    name: 'ficus lyrata',
    category: 'classique',
    id: '2ab'
  },
  {
    name: 'pothos argenté',
    category: 'classique',
    id: '3sd',
    isSpecialOffer: true
  },
  {
    name: 'yucca',
    category: 'classique',
    id: '4kk'
  },
  {
    name: 'olivier',
    category: 'extérieur',
    id: '5pl'
  },
  {
    name: 'géranium',
    category: 'extérieur',
    id: '6uo'
  },
  {
    name: 'basilique',
    category: 'extérieur',
    id: '7ie',
    isSpecialOffer: true
  },
  {
    name: 'aloe',
    category: 'plante grasse',
    id: '8fp',
    isSpecialOffer: true
  },
  {
    name: 'succulente',
    category: 'plante grasse',
    id: '9vn'
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
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">{plant.name}
                                                        {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList
