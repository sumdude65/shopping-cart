import React, { useContext } from "react";
import { AppContext } from "../App";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

export const Product = (props) => {
  const product = props.props;
  //add context
  const { removeProduct, incrementProduct, decrementProduct } = useContext(
    AppContext
  );
  return (
    <div key={product.id} className="product">
      <div className="container">
        <img src={product.img} alt="" />
        <div className="meta">
          <h1>{product.title}</h1>
          <h2>{product.price}</h2>
          <button onClick={() => removeProduct(product.id)}>remove</button>
        </div>
      </div>
      <div className="counters">
        <button onClick={() => incrementProduct(product.id)}>
          <FaAngleUp />
        </button>
        <h3>{product.amount}</h3>
        <button onClick={() => decrementProduct(product.id)}>
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
};
