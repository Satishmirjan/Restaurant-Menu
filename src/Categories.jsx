import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="flex justify-center mb-12 flex-wrap gap-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => filterItems(category)}
          className="text-orange-700 border-2 border-orange-600 px-4 py-2 rounded-full capitalize hover:bg-orange-600 hover:text-white transition duration-300 shadow-md font-medium"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
