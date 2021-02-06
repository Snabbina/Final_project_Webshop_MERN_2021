import React, { useState, useEffect } from "react";
import "../App.css";
import Pagination from 'react-js-pagination'

import TitleTags from "./layouts/TitleTags";
import Product from "./product/Product";
import Loader from "./layouts/Loader";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { useAlert } from 'react-alert'

const Home = () => {

  const [currentPage, setCurrentPage] = useState(1)

  const alert = useAlert()
  const dispatch = useDispatch();


  // PUll all of these from the state,
  const { loading, products, error, productsCount, resPerPage } = useSelector (
    state => state.products
  );

  useEffect(() => {
    if(error) {
      return alert.error(error)
    }
    
    dispatch(getProducts(currentPage));

   

  }, [dispatch, alert, error, currentPage]);

  // kan man ersätta med en arrow func?
  // const setCurrentPageNo = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  // }

  function setCurrentPageNo(pageNumber){
    setCurrentPage(pageNumber)
  }


 
  return (
    <>
      {loading ? <Loader /> : (
        <>
          <TitleTags title={"Get the best Self care kit online"} />

          <h1 id="products_heading">Latest Capsule Wardrobes</h1>

          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </section>

          {resPerPage < productsCount}
                  <div className="d-flex justify-content-center mt-5">
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText = {'Next'}
                    prevPageText = {'Prev'}
                    firstPageText = {'First'}
                    lastPageText = {'Last'}
                    itemClass="page-item"
                    linkClass="page/link"
                    />

                  </div>

        </>
      )}
    </>
  );
};

export default Home;
