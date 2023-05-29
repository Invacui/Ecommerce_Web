import React from 'react';
import { Link } from 'react-router-dom';
import * as productImage from '../../Drawables/Products/';
import { items } from './items'; // Import the items array

const Product = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-0 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* Map over the items array */}
          {items.map((item) => (
            <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link to={`/item-details/${item.id}`} className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="mx-auto object-fit object-fit w-full h-full block" src={item.image} />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                <p className="mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
