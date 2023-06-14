import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../Products/items';

const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items.find((item) => item.id === parseInt(itemId));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <img src={item.image} alt="Product" />
      <h2>{item.name}</h2>
      <p>Category: {item.category}</p>
      <p>Price: {item.price}</p>
    </div>
  );
};

export default ItemDetails;
