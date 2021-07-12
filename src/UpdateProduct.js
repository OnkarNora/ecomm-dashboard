import Header from './Header';
import {withRouter} from 'react-router-dom';
import {useEffect,useState} from 'react';
function UpdateProduct(props){
    const [data,setData] = useState([]);
    
    useEffect(async ()=>{
        let result = await fetch("http://localhost:8000/api/product/"+props.match.params.id); 
        result = await result.json();
        setData(result);
    },[])
    console.log(data);

    return (
        <div>
            <Header />
            <h1>Update Product</h1>
            <input type="text" defaultValue={data.name} /><br /><br />
            <input type="text" defaultValue={data.price} /><br /><br />
            <input type="text" defaultValue={data.description} /><br /><br />
            <input type="file" defaultValue={data.filepath} /><br /><br />
            <img style={{width:50}} src={"http://localhost:8000/" + data.filepath}  /><br /><br />
            <button class="update" >
                Update
            </button>

        </div>
    )
}

export default withRouter(UpdateProduct);