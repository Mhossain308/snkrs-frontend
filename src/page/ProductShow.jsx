import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
function ProductShow() {
    const [product, setProduct] = useState({name:"", description:"", image:"", location:"", price:"", brand:""})
    const {id} = useParams()

    useEffect (()=> {
        fetch (`http://localhost:4000/products/${id}`)
        .then(r => r.json())
        .then(product => {
          console.log(product)
          setProduct(product)
        })
        
        }, [] )
   

    
    
   
return ( 
        <div>
            <h1> Product Show Page </h1>
            {product.name}
            
        </div>
    )

}
export default ProductShow