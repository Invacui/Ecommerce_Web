import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { items } from '../../components/Products/items'; // Import the items array
import { useCartContext } from '../../context/cart_context';
import Cart from '../Cart';
const ProductM = ({product}) => {
  const { cart } = useCartContext();
  console.log(
    "🚀 Winner Winner Bigger Dinner",cart)
  const {addToCart} = useCartContext();
  const { itemId } = useParams();
  const item = items.find((item) => item.id === parseInt(itemId));

  if (!item) {
    return <div>Item not found</div>;
  }
  return (

    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
          {item.category}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
          {item.name}
          </h1>
          <div className="flex mb-4">
            <a className="flex-grow text-yellow-500 border-b-2 border-yellow-500 py-2 text-lg px-1">
            Description
            </a>
            <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
              Reviews
            </a>
            <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
              Details
            </a>
          </div>
          <p className="leading-relaxed mb-4">
            Fam locavore kickstarter distillery. Mixtape chillwave tumeric
            sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
            juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
            seitan poutine tumeric. Gastropub blue bottle austin listicle
            pour-over, neutra jean.
          </p>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Color</span>
            <span className="ml-auto text-gray-900">Blue</span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Size</span>
            <span className="ml-auto text-gray-900">Medium</span>
          </div>
          <div className="flex border-t border-b mb-6 border-gray-200 py-2">
            <span className="text-gray-500">Quantity</span>
            <span className="ml-auto text-gray-900">1</span>
          </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">
            {item.price}
            </span>
            <Link to={`/cart-details`} className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded" onClick={() =>addToCart(item.id,item.category,item.name,item.price,item.image,item)}>
              Add To Cart
            </Link>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>
          </div>
        </div>
        <img
          alt="ecommerce"
          className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
          src={item.image}
        />
      </div>
    </div>
  </section>

  )
}

export default ProductM