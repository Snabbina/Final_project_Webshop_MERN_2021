// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/Home";
import ProductDetails from './components/product/ProductDetails'

import Login from './components/user/Login'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={ProductDetails} exact />
          <Route path="/login" component={Login} />
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
