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
import store from "./store";

import { loadUser } from "./actions/userActions";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
          <Route path="/me" component={Profile} exact />

          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

// ****************************************************************************

// function App() {
//   return (
//     <div className="App">

//       <h1>MangoOils Webshop</h1>
//     </div>
//   );
// }

// export default App;
