import Header from './Header';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function ProductList() {
    const [data, setData] = useState([]);
    useEffect( () => {
        getData();
    }, [])
    async function deleteOperation(id)
    {
        let result = await fetch("http://localhost:8000/api/delete/"+id,{
            method:'DELETE',

        });
        result = await result.json();
        console.log(result);
        getData();
    }
    async function getData(){
        let result = await fetch('http://localhost:8000/api/list');
        result = await result.json();
        setData(result);
    }
    return (
        <div>
            <Header />
            <div className="col-sm-8 offset-sm-2" >
            <h1>Product </h1>
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
                                <th><span onClick={()=>{deleteOperation(item.id)}} className="delete" >Delete</span></th>
                                <th><Link to={"update/" + item.id} ><span  className="update" >Update</span></Link></th>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default ProductList;