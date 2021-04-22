import React from 'react'
import ProductItem from '../components/ProductItem'

function ProductContainer({products}) {
    const allProducts = products.map((product)=>{
        return(
            <ProductItem
            key={product.id}
            product={product}
            // {...product}
           

            />
        )
    })


    return ( 
        <>
            <h1>ProductContainer</h1>
            { allProducts }
        </>
    )

}
export default ProductContainer