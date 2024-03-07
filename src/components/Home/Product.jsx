import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from "@material-ui/lab";
const Product = ({product}) => {
  const options={
    value:product.ratings,
    readOnly:true,
    precision:0.5
  }
  console.log(product)
  return (
    <Link>
           <img src={product.images[0].url} alt={product.name} />
           <p>{product.name}</p>
           <div>
            <Rating  {...options}/>{" "}
            <span>{" "}</span>
            {product.numofReviews} Reviews
           </div>
           <span>{`₹${product.price}`}</span>
    </Link>
  )
}

export default Product
