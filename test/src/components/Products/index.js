import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as productImage from '../../Drawables/Products/';
import { items } from './items'; // Import the items array

const itemsPerPage = 8; // Number of items to display per page

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1); // Current page state

  // Calculate the total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Calculate the start and end page numbers to display
  let startPage, endPage;
  if (currentPage <= 3) {
    startPage = 1;
    endPage = Math.min(totalPages, 3);
  } else if (currentPage + 1 >= totalPages) {
    startPage = Math.max(totalPages - 2, 1);
    endPage = totalPages;
  } else {
    startPage = currentPage - 1;
    endPage = currentPage + 1;
  }

  // Handle pagination button clicks
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get the items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  // Render pagination buttons
  const renderPaginationButtons = () => {
    const buttons = [];

    // Previous button
    if (startPage > 1) {
      buttons.push(
        <button
          key="previous"
          className="mx-2 px-4 py-2 text-2xl flex rounded-full bg-yellow-300 text-black-500 font-extrabold"
          onClick={() => handlePageChange(startPage - 1)}
        >         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
          </svg>


        </button>
      );
    }

    // Page buttons
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`mx-2 px-4 py-2 rounded-lg ${currentPage === i ? "bg-red-500 text-white" : "bg-gray-300 text-gray-600"
            }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Next button
    if (endPage < totalPages) {
      buttons.push(
        <button
          key="next"
          className="mx-2 px-4 py-2 text-2xl flex rounded-full bg-yellow-300 text-black-500 font-extrabold"
          onClick={() => handlePageChange(endPage + 1)}
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
</svg>

        </button>
      );
    }

    return buttons;
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-0 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* Map over the currentItems array */}
          {currentItems.map((item) => (
            <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link to={`/item-details/${item.id}`} className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="mx-auto object-fit object-fit w-full h-full block" src={item.image} />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                <p className="mt-1 font-bold">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination buttons */}
        <div className="flex justify-center mt-8">
          {renderPaginationButtons()}
        </div>
      </div>
    </section>
  );
};

export default Product;
