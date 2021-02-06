// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from 'react'


import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/Home";
import ProductDetails from './components/product/ProductDetails'

import Login from './components/user/Login'
import Register from './components/user/Register'
import store from './store'


import { loadUser } from './actions/userActions'


const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  },[])

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={ProductDetails} exact />
          
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
        <Footer />
      </div>
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
