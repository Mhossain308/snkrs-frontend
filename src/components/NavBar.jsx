import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
   
return ( 
        <div>
          {/* <Link to="/">Home</Link> */}
          <Link to="/products">Products</Link>
          <Link to="/add_product">Sell</Link>
            
        </div>
    )

}
export default NavBar