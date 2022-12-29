import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios';
import './product.css'
import { Link } from 'react-router-dom';
import { useStateValue } from './contextApi/Context';
import { searchContext } from './contextApi/Context'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function Product() {
    const[data,setData]=useState([]);
    const [{ baskets,favi },dispatch]=useStateValue();
    const [favicol,setfavicol]=useState([])
    const[search,setSearch]=useContext(searchContext)

    useEffect(()=>{
        getdata();
    },[]);
    const getdata=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            setData(res?.data)
        })

    }
    var filteredata = data.filter((data) => {
        if 
          (data.title.toLowerCase().includes(search.toLowerCase()) ||
          data.category.toLowerCase().includes(search.toLowerCase())
        
        ) {
          return data;
        }
      });

    
    

  
  

  return (
    
    <div>
        <div className='data-row'>

            {
               filteredata.map((item,i)=>(
                    <div key={i} className='box'>
                        <Link to={`/productdesc/${item.id}`} className="img-link">
                        <img src={item.image} alt="image" className='img' />
                            <h1 className='title'>{item.title.substring(0,20)}</h1>
                        <div className='data-rate'>
                            <h3> $ {Math.ceil(item.price)}    </h3>
                            <div className='rating'><h3>rating:</h3>{Array(Math.floor(item.rating.rate)).fill().map((_,i)=>(
                                <p>⭐</p>
                                ))}</div>
                        </div>
                                
                        <div className='box-btn'>

                        <button type="button" /*</div>onClick={()=>dispatch({type:"ADD_TO_BASKET",payload:item})} */>Add To Cart</button>
                        </div>
                                </Link>
                               
                                <div className='fav-div'  >
                               < FavoriteBorderOutlinedIcon  className="fav red" onClick={()=>dispatch({type:'ADD_TO_FAVI',payload:item})}/>
                                </div>
                     
                                </div>
                        
                ))
            }
        </div>
      
    </div>
  )
}

export default Product
