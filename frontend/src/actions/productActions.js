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
export const getProducts = (currentPage = 1) => async (dispatch) => {
  try {
      
    dispatch({ type: ALL_PRODUCTS_REQUEST });

    //get all data from Backend from the url
    const { data } = await axios.get(`http://localhost:4000/api/v1/products?page=${currentPage}`);

    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch ({
      type: ALL_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};


//gets the DETAILS of product via id
export const getProductDetails = (id) => async (dispatch) => {
  try {
      
    dispatch({ type:  PRODUCT_DETAILS_REQUEST });

    //get all data from Backend from the url
    const { data } = await axios.get(`http://localhost:4000/api/v1/product/${id}`);

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
