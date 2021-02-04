import React, { useEffect } from "react";
import "../App.css";

import TitleTags from "./layouts/TitleTags";
import Product from "./product/Product";
import Loader from "./layouts/Loader";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { useAlert } from 'react-alert'

const Home = () => {
  const dispatch = useDispatch();

  const alert = useAlert()

  // PUll all of these from the state, , productsCount ska in här sen
  const { loading, products, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if(error) {
      return alert.error(error)
    }
    
    dispatch(getProducts());

   

  }, [dispatch, alert, error]);

 
  return (
    <>
      {loading ? <Loader /> : (
        <>
          <TitleTags title={"Get the best Self care kit online"} />

          <h1 id="products_heading">Latest Products</h1>

          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
