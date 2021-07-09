import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

import { BrowserRouter , Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import Protected from './Protected'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        {/* <h1>E-Comm Project</h1> */}

        <Route path="/login" ><Login /></Route>
        <Route path="/register" ><Register /></Route>
        <Route path="/add" ><Protected Cmp={AddProduct} /></Route>
        <Route path="/update" ><Protected Cmp={UpdateProduct} /></Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
