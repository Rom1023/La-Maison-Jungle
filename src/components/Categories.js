import '../styles/Categories.css'

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className='lmj-categories'>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className='lmj-categories-select'>

        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};


export default Categories;

