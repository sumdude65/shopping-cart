import React from "react";
import { FaShoppingCart } from "react-icons/fa";
export const Navbar = (props) => {
  const count = props.props;
  return (
    <div className="nav">
      <h1>Shopping Cart</h1>
      <div className="icon">
        <FaShoppingCart />
        <h1>{count}</h1>
      </div>
    </div>
  );
};
