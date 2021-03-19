import React, { useState, useEffect } from "react";
import { data } from "./components/data";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import "./style.scss";

export const AppContext = React.createContext();

export const App = () => {
  const [products, setProducts] = useState(data);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(null);
  //counter
  const amountInBag = () => {
    let counter = 0;
    if (products === null) {
      setCount(0);
      return;
    }
    products.forEach((product) => {
      return (counter += product.amount);
    });
    setCount(counter);
  };
  //total price
  const totalPrice = () => {
    let counter = 0;
    if (products === null) {
      return setTotal(null);
    }
    products.forEach((product) => {
      return (counter += product.price * product.amount);
    });
    setTotal(counter.toFixed(2));
  };
  //remover
  const removeProduct = (id) => {
    if (products.length === 1) {
      return setProducts(null);
    }
    const newProducts = [...products].filter((product) => {
      return product.id !== id;
    });
    setProducts(newProducts);
  };
  //incrementer
  const incrementProduct = (id) => {
    const newProducts = [...products];
    newProducts.map((product) => {
      if (product.id === id) {
        product.amount += 1;
      }
      return product;
    });
    setProducts(newProducts);
  };
  //decrementer
  const decrementProduct = (id) => {
    const newProducts = [...products];
    newProducts.map((product) => {
      if (product.id === id) {
        product.amount -= 1;
      }
      return product;
    });
    setProducts(newProducts);
  };
  //remove all
  const removeAll = () => {
    setProducts(null);
  };
  //useEffect
  useEffect(() => {
    amountInBag();
    totalPrice();
    // eslint-disable-next-line
  }, [products]);
  //render
  return (
    <AppContext.Provider
      value={{
        count,
        total,
        removeAll,
        removeProduct,
        incrementProduct,
        decrementProduct,
      }}
    >
      <div className="app">
        <Navbar props={count} />
        <ProductList props={products} />
      </div>
    </AppContext.Provider>
  );
};
/* const Dummy = (props) => {
  const products = props.props;
  const { count } = useContext(AppContext);
  const { removeAll } = useContext(AppContext);
  return <div onClick={removeAll}>hi{console.log(products)}</div>;
}; */
