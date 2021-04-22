import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem({product}) {
    console.log(product)

    
    

    return ( 
        <>
        <div>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
            <p>{product.brand}</p>
            
        </div>
        </>
    )

}
export default ProductItem