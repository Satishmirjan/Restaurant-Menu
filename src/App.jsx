import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main className="bg-gradient-to-b from-amber-50 to-orange-50 min-h-screen font-sans">
      <section className="w-full max-w-6xl mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-orange-800 tracking-tight">
            Tandoori Trails
          </h1>
          <p className="text-lg mt-2 text-gray-600 italic">
            Flavours of India on every plate 🍽️
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;