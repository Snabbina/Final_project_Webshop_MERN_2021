import axios from "axios";

import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

//Gets the products and fills the array
export const getProducts = (
  keyword = "",
  currentPage = 1,
  price, //not implemented yet
  category
) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });


    // let link = `https://gracious-mcnulty-e6c162.netlify.app/api/v1/products?`;    

    let link = `https://project-webshop.herokuapp.com/api/v1/products?`;

    // let link = `http://localhost:4000/api/v1/products?`;

    if (keyword) {
      link += `keyword=${keyword}&`;
    }

    if (currentPage) {
      link += `page=${currentPage}&`;
    }

    if (category) {
      link += `category=${category}&`;
    }

    //get all data from Backend from the url when logged in
    const { data } = await axios.get(link);
   
    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//gets the DETAILS of product via id
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    //get all data from Backend from the url
    // const { data } = await axios.get(
    //   `/api/v1/product/${id}`
    // );
 
    const { data } = await axios.get(
      `https://project-webshop.herokuapp.com/api/v1/product/${id}`
    );

    // const { data } = await axios.get(
    //   `http://localhost:4000/api/v1/product/${id}`
    // );

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Clears errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
