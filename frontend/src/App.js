import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";
import Cart from "./components/cart/Cart";

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import NewPassword from "./components/user/NewPassword";
import ForgotPassword from "./components/user/ForgotPassword";
import Order from "./components/orders/Order";
import store from "./store";

import { loadUser } from "./actions/userActions";

const App = () => {
  
  useEffect(() => {
    store.dispatch(loadUser());
  }, [] );


  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/search/:keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} exact />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/me/update" component={UpdateProfile} exact />
          <Route path="/me" component={Profile} exact />
          <Route path="/orders/me" component={Order} exact />
          <Route path="/password/update" component={NewPassword} exact />
          <Route path="/password/forgot" component={ForgotPassword} exact />
        
        

          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
          <Footer />
       
    </Router>
  );
};

export default App;

