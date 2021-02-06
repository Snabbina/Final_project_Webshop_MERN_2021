import axios from "axios";

import { ADD_TO_CART } from "../constants/cartConstants";


export const additemsToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } =  await axios.get(`http://localhost:4000/api/v1/product/${id}`);

    dispatch({
      type: ADD_TO_CART,
      payload: {
          product: data.product._id,
          name: data.product.price,
          image: data.product.images[0].url,
          stock: data.product.stock,
          quantity
      }
    })
    localStorage.setItems('cartItems', JSON.stringify(getState().cart.cartItems))
}