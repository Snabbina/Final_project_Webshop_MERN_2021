import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <div>
             <div key={product._id} className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                        <img className="card-img-top mx-auto" 
                        src={product.images[0].url} alt="four bottles of oil"/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <Link to={`/product/${product._id}`}>{product.name}</Link>
                            </h5>
                            {/* //<div> Skipping Rating for now */}
                            <p className="card-text">${product.price}</p>
                            <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View more details</Link>
                        </div>
                        </div>
                    </div>
        </div>
    )
}

export default Product
