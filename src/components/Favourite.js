import React, { useContext, useEffect, useState } from 'react'
import { useStateValue, qtyContext} from './contextApi/Context';
import './cart.css'
import { type } from '@testing-library/user-event/dist/type';


function Favourite() {
    const[{favi },dispatch]=useStateValue();

   

  
 
  return (
    <div className='cart'>
        <h1 className='heading'> Your Cart</h1>
        <div className="cart-row">

      {
        favi.map((item,i)=>(
        
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
                <button className='btn' type="button" onClick={()=>dispatch({type:'REMOVE_FROM_FAVI',payload:item})}>Remove From Favorite List</button>
                </div>
            </div>
        ))
    }
    </div>
 
    </div>
  )
}

export default Favourite;
