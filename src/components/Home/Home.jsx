import React, { Fragment } from 'react'
import { CgMouse } from "react-icons/cg";
import "./Home.css"
import Product from './Product';
const product={
  name:"Tshirt",
  images:[{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62QSBH7WlB3Mx2GWQzQce285tPiQ6gucd1g&usqp=CAU"}],
  price:3000,
  numofReviews:2,
  ratings:3,
  _id:"asad"
}
const Home = () => {
  return (
    <Fragment>
            <div className="banner">
                    <p>Welcome to Ecommerce</p>
                    <h1>FIND AMAZING PRODUCTS BELOW</h1>
                     <a>
                          <button>
                            Scroll <CgMouse/>
                          </button>
                     </a>
            </div>
            <h2 className='homeHeading'>Featured Products</h2>
            <div className='container' id="container">
                   <Product product={product}/>
            </div>
    </Fragment>
  )
}

export default Home
