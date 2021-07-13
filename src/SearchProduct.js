import Header from './Header';
import React,{useState} from 'react';
import {Table} from 'react-bootstrap';
function SearchProduct(){
    const [data,setData] = useState([]);

    async function search(key){
        if(key.length > 1){
            let result = await fetch("http://localhost:8000/api/search/"+key);
            result = await result.json();
            console.log(result);
            setData(result);
        }
    }

    return (
        <div><Header />
            <div className="col-sm-6 offset-sm-3" >
               <h1>Search Product</h1>
               <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search Product" />
                {
                    data.length>0 ?
                   <Table striped bordered hover>
                   <thead>
                       <tr>
                           <th>#</th>
                           <th>Name</th>
                           <th>Image</th>
                           <th>Description</th>
                           <th>Price</th>
                           <th>Operations</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           data.map((item)=>
                               <tr>
                                   <td>{item.id}</td>
                                   <td>{item.name}</td>
                                   <td><img style={{width:"140px"}} src={"http://localhost:8000/"+item.filepath} /></td>
                                   <th>{item.description}</th>
                                   <th>{item.price}</th>
                               </tr>
                           )
                       }
                   </tbody>
               </Table>
               : null
                }
            </div>
        </div>
    )
}

export default SearchProduct;