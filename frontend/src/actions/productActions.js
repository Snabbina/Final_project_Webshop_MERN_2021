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
export const getProducts = (keyword = '', currentPage = 1, price, category) => async (dispatch) => {
  try {
      
    dispatch({ type: ALL_PRODUCTS_REQUEST });

    let link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}`

    if(category) {
      link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}`
    }

    //get all data from Backend from the url
    const { data } = await axios.get(link);

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
