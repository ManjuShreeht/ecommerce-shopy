import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './productdesc.css'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import{useStateValue} from './contextApi/Context'


function ProductDesc() {
    const{ id }=useParams();
    const[desc,setdesc]=useState({})
    const[descdata,setdescData]=useState([])
    const[info,setInfo]=useState([]);
    const[{baskets},dispatch]=useStateValue();

    useEffect(()=>{
        getdescdata()
    },[id]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
             setdescData(response.data)
            console.log(response.data)
        })
    },[])

    const getdescdata=()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(
            result=>{setdesc(result.data)}
        )

    }


  return (
    <div>
        <div className='desc-row'>
            
              
                        <img className='desc-img' src={desc.image} alt="image" />
                    <div>
                        {console.log(desc)}
                        <div className='desc-info'>
                            <h1>{desc.title}</h1>
                            <p>{desc.description}</p>
                           
                            
                            <h3>Price: $ {Math.ceil(desc.price)} </h3>
                            <div className='btns'>
                            <button type="button" onClick={()=>dispatch({type:'ADD_TO_BASKET',payload:desc})}>Add To Cart</button>
                            <Link to='/cart'>

                            <button type="button" className="btn1" >Show Cart</button>
                            </Link>
                               </div>
                        </div>
                    </div>
                
            
            </div>
            <div className='datadesc'>
                <h1>You May Also Like</h1>
            <div className='data-row1'>
                {
                    descdata.map((idx,i)=>(
                        <Link to={`/productdesc/${idx.id}`}>
                            {desc.category === idx.category && (
                        <div className='data-col'>
                               

                                <img src={idx.image} alt="img" />
                                <div className='data-info'>
                                <h1>{idx.title.substring(0,20)}</h1>
                                {/* <p>price: ${Math.celi(idx.price)}</p> */}
                                </div>
                                </div>
                               

                            ) 
                            }
                       
                            </Link>
                    ))
                }
            </div>
                </div>
               
    </div>
  )
}

export default ProductDesc
