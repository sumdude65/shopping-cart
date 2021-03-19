import React, { useContext } from "react";
import { AppContext } from "../App";
import { Product } from "./Product";

export const ProductList = (props) => {
  const products = props.props;
  const { total } = useContext(AppContext);
  const { removeAll } = useContext(AppContext);
  return (
    <div className="product-list">
      <div className="products">
        {products === null ? (
          <h1>Your cart is empty</h1>
        ) : (
          products.map((product) => {
            return <Product props={product} />;
          })
        )}
      </div>
      <div className="total">
        {products === null ? (
          ""
        ) : (
          <button onClick={removeAll}>remove all</button>
        )}
        {total === null ? "" : <h3>Total amount: {total}</h3>}
      </div>
    </div>
  );
};
