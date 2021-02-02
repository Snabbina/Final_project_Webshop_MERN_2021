import React from "react";
import "../App.css";

import TitleTags  from './layouts/TitleTags'

// Static data for now

const Home = () => {
  return (
    <>
        <TitleTags title={'Get the best Self care kit online'} />

      <h1 id="products_heading">Latest Products</h1>
      <section id="products" className="container mt-5">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded">
                    <img className="card-img-top mx-auto" 
                    src="../components/images/four_oils.jpg" alt="four bottles of oil"/>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                            <a href="#">Pack of 4xbottles of Mango oil</a>
                        </h5>
                        {/* //<div> Skipping Rating for now */}
                        <p className="card-text">140kr</p>
                        <a href="#" id="view_btn" className="btn btn-block">View more details</a>
                    </div>
                    </div>
                </div>
            </div>
      </section>
      <section id="products" className="container mt-5">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded">
                    <img className="card-img-top mx-auto" 
                    src="../components/images/four_oils.jpg" alt="four bottles of oil"/>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                            <a href="#">Pack of 4xbottles of Mango oil</a>
                        </h5>
                        {/* //<div> Skipping Rating for now */}
                        <p className="card-text">140kr</p>
                        <a href="#" id="view_btn" className="btn btn-block">View more details</a>
                    </div>
                    </div>
                </div>
            </div>
      </section>
    </>
  );
};

export default Home;
