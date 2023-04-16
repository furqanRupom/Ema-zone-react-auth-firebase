import React, { useState } from "react";
import Cart from "../OrderCart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
  const savedCart = useLoaderData();
  console.log(savedCart)
  const [cart, setCart] = useState(savedCart);
  // console.log(cart)
  const handleRemoveFromCart = (id) => {
    const remainingItem = cart.filter((item) => item.id !== id);
    setCart(remainingItem);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <>
      <section className="grid md:grid-cols-2 gap-5 my-20 max-w-5xl mx-auto">
        <div className="grid gap-6 pr-10">
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </div>
        <div className="text-center">
          <Cart cart={cart} handleClearCart={handleClearCart}>
            {" "}
            <Link to={"/Checkout"}>
              <button className="bg-amber-500 w-9/12 mt-5 flex justify-between items-center text-white  mx-auto p-2 rounded text-normal">
                <span>Proceed Checkout</span>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </Cart>
        </div>
      </section>
    </>
  );
};

export default Order;
