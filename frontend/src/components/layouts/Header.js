import React from "react";

import "../../App.css";

const Header = () => {
  return (
    <>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
              {/* IF I WANT A LOGO HERE */}
            {/* <Link to="/">
            <img src="/images/Logo.png" />
            </Link> */}
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div className="input-group">
            <input
              type="text"
              id="search-field"
              className="form-control"
              placeholder="Enter Product name here"
            />

            <div className="input-group-append">
              <button id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <button className="btn" id="login_btn">
            Login{" "}
          </button>

          <span className="ml-3" id="cart">
            Cart
          </span>
          <span className="ml-1" id="cart_count">
            0
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;

// ******************************************************************************

// via Extenssion E7 React snippets short: racfe --->  gives basic comp templet!
