import React, { useState,useEffect } from "react";
import Navbar from './components/Navbar'
import MainPart from "./components/MainPart";
import Product from "./components/Product";
import Footer from "./components/Footer";
import ProductDesc from "./components/ProductDesc";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Cart from "./components/Cart";
import { searchContext } from "./components/contextApi/Context";
import Login from "./components/Login";
import Favourite from "./components/Favourite";
import Item from "./components/Items/Item";
import Checkout from "./components/Checkout";
import { auth } from './firebase'

import Category from "./components/Category";
import { useStateValue } from "./components/contextApi/Context";
import Address from "./components/Address";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Women from "./components/Women";
import Jewllary from "./components/Jewllary";
import Men from "./components/Men";
import Electronics from "./components/Electronics";
const promise=loadStripe(
  "pk_test_51LwgK4SHPx1utwaqQ3ZW2JvStiqsMudncA4gAs7eWPjxN5snSUTWo199ZGZ2At8yQQvFSOPLaZfCwbmHpZuzvpkr00vl2hsIoZ"
)

function App() {
  const[search,setSearch]=useState('');
  const [{},dispatch]=useStateValue();
  useEffect(()=>{

  

    //useeffect ru only once when app components load

    auth.onAuthStateChanged(authUser=>{
    
      if(authUser){
//user loggrd in/user was logged in

dispatch({
  type:'SET_USER',
  user:authUser
})
      }else{
        //user is logged outo
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    <div >
      <searchContext.Provider value={[search, setSearch]}>
      <Router >
      
        <Routes >
          <Route path='/' element={[<Navbar />,<Category />,<MainPart />,<Product />,<Footer />]} />
          <Route path='/item' element={[<Navbar />,<Item/>]} />
          <Route path='/women' element={[<Navbar />,<Women />]} />
          <Route path='/men' element={[<Navbar />,<Men />]} />
          <Route path='/electrics' element={[<Navbar />,<Electronics />]} />
          <Route path='/jewellary' element={[<Navbar />,<Jewllary />]} />
          <Route path='/productdesc/:id' element={[ <Navbar />,<ProductDesc />,<Footer />]} />
          <Route path='/cart' element={[<Navbar />,<Cart />,<Footer />]} />
          <Route path='/login' element={[<Login />]} />
          <Route path='/favourite' element={[<Navbar />,<Favourite /> ]} />
          <Route path='/checkout' element={[<Navbar />,<Address /> ]} />
          <Route path='/payment' element={[<Navbar />,<Elements stripe={promise}><Payment /></Elements> ]} />
        </Routes>
      </Router>
      </searchContext.Provider>
     
    </div>
  );
}

export default App;
