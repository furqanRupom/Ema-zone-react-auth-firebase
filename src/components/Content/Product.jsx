import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { name, price, seller, category, img ,ratings} = props.product;
  
  const {handleProduct} = props

  return (
    <>
      <div className=" px-2 pt-2 pb-8 border border-slate-400 rounded-md relative">
        <img className="rounded-md" src={img} alt="" />
        <div className="py-5">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p>
            price : <span className="font-semibold">{price}</span>
          </p>
          <div className="pt-5 pb-5">
                <p>Manufacturer : {seller}</p>
                <p>ratings : {ratings} star</p>
          </div>
        </div>
          <button onClick={()=> handleProduct(props.product)} className="px-7 py-3  absolute left-0 bottom-0 w-full bg-amber-400/25 font-semibold hover:bg-amber-400/50 transition-all ">
            Add to Cart
             <span className="ml-8 text-xl"><FontAwesomeIcon icon={faShoppingCart} /></span>
            </button>

      </div>
    </>
  );
};

export default Product;
