import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="bg-amber-50 py-12 px-4 rounded-lg shadow-xl">
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 w-full max-w-6xl mx-auto">
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem;
          return (
            <article key={id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-48 md:h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-yellow-500 text-white px-3 py-1 rounded-br-lg font-bold">
                ₹{price}
                </div>
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold capitalize mb-2 text-gray-800">{title}</h4>
                  <div className="w-12 h-1 bg-yellow-500 mb-4"></div>
                  <p className="text-gray-600">{desc}</p>
                </div>
                <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 self-start">
                  Order Now
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;