import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import Protected from './Protected'
import ProductList from './ProductList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        {/* <h1>E-Comm Project</h1> */}

        <Route path="/login" ><Login /></Route>
        <Route path="/register" ><Register /></Route>
        <Route path="/add" ><Protected Cmp={AddProduct} /></Route>
        <Route path="/update/:id" ><Protected Cmp={UpdateProduct} /></Route>
        <Route path="/" ><ProductList /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
