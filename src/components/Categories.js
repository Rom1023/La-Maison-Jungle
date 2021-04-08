import '../styles/Categories.css'

const Categories = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className='lmj-categories'>
      <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} className='lmj-categories-select'>

        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};


export default Categories;

