import './App.css';
import ProductContainer from './page/ProductContainer';
import {useState, useEffect} from 'react'
import AddForm from './page/AddForm';
import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import ProductShow from './page/ProductShow'

function App() {
const [products, setProducts] = useState([])

function addProduct(newProduct) {
  setProducts([...products, newProduct])
}

useEffect (()=> {
fetch ('http://localhost:4000/products')
.then(r => r.json())
.then(products => {
  console.log(products)
  setProducts(products)
})

}, [] )


  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* <Route exact path="/" >
          <Home />
        </Route> */}
        <Route exact path="/products" >
          <ProductContainer products={products} addUpdate=/>
        </Route>
        <Route exact path="/add_product">
          <AddForm addProduct={addProduct} />
        </Route>
        <Route exact path="/product/:id">
          <ProductShow products={products} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
