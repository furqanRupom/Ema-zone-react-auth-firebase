import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TrashIcon } from "@heroicons/react/24/solid";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { name, price, seller, category, img, ratings, shipping, id } = product;

  return (
    <div className="border-4 p-2 rounded">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div>
            <img className="w-20 " src={img} alt="" />
          </div>
          <div>
            <p> name : {name}</p>
            <p>price : ${price}</p>
            <p>Shipping charge : ${shipping}</p>
          </div>
        </div>
        <div onClick={() => handleRemoveFromCart(id)}>
          <TrashIcon className="w-10 cursor-pointer h-10 text-red-500 bg-red-500/25 rounded-full p-1"></TrashIcon>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
