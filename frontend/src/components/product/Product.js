import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product, col }) => {
    return (
        <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
            <div className="card p-3 rounded">
                <img
                    className="card-img-top mx-auto"
                    src={product.images[0].url}
                    alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link to={`/products/${product._id}`}>{product.name}</Link>
                    </h5>
                    {/* <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                        </div>
                        <span id="no_of_reviews">({product.numOfReviews} Reviews)</span> */}
                    </div>
                    <p className="card-text">${product.price}</p>
                    <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
                </div>
            </div>
    )
}

export default Product


// import React from 'react'
// import { Link } from 'react-router-dom'

// const Product = ({ product }) => {
//     return (
//         <div>
//              <div key={product._id} className="col-sm-12 col-md-6 col-lg-3 my-3">
//                     <div className="card p-3 rounded">
//                         <img className="card-img-top mx-auto" 
//                         src={product.images[0].url} alt={product.name}/>
//                         <div className="card-body d-flex flex-column">
//                             <h5 className="card-title">
//                                 <Link to={`/product/${product.id}`}>{product.name}</Link>
//                             </h5>
//                             {/* //<div> Skipping Rating for now */}
//                             <p className="card-text">${product.price}</p>
//                             <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View more details</Link>
//                         </div>
//                         </div>
//                     </div>
//         </div>
//     )
// }

// export default Product
