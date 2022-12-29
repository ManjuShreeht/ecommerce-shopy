import React, { useContext, useEffect, useState } from 'react'
import { useStateValue, qtyContext} from './contextApi/Context';
import './cart.css'
import { type } from '@testing-library/user-event/dist/type';
import {getBasketTotal} from './contextApi/Reducer'
import { Link } from 'react-router-dom';

function Cart() {
    const[{baskets,user },dispatch]=useStateValue();

    console.log(getBasketTotal(baskets))
  

  //  const handleqty=()=>{
  //   if(qty<10){
  //   setQty(qty+1)
  //   }
  //  }
  //  const handleminus=()=>{
  //   if(qty>0){
  //     setQty(qty-1)
  //   }
  //  }
 
  return (
   
    <div className='subtotal'>
      
  
    <div className='cart'>
        <h1 className='heading'> Your Cart</h1>
        <div className="cart-row">

      {
       baskets.map((item,i)=>(
        
            <div  className="cart-box">
                
                <img src={item.image} alt="img" />
                <div className="cart-col">

                <h1>{item.title}</h1>
                <p>Price: $ {Math.ceil(item.price)} </p>
             
              
                {/* <div className="cart-btn">
                    <button type="button" onClick={handleminus}>-</button>
                    <p>{qty}</p>

                    <button type="button" onClick={handleqty}>+</button>
                </div> */}
                <button className='btn' type="button" onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:item})}>Remove From Cart</button>
                </div>
            </div>
        ))
    }
    </div>
    
    </div>
    <div className='sub'>

    <p  >SubTotal: </p>
    <h2>$ {getBasketTotal(baskets)}</h2>
    <Link to={baskets.length>0 && '/checkout' }>
      { baskets.length>0?(

    <button className='sub-btn' type='button'>Checkout</button>):
    (

      <button className='sub-btn 'style={{backgroundColor:"red"}} type='button'>Empty basket</button>)
      }
    </Link>
    </div>
    </div>
   
  )
}

export default Cart;
