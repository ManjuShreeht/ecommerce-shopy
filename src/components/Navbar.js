import React from 'react'
import './navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search from './Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProfileMenu from '../components/ProfileMenu'
import { Link } from 'react-router-dom';
import { useStateValue } from './contextApi/Context';
import { auth } from '../firebase';

function Navbar() {
  const[{baskets,user},dispatch]=useStateValue();


  const handleAuthentication=()=>{

    if(user){
      auth.signOut();//signout from firebase function
    }
  }
  return (
    <div className='header'>

    <div className='navbar'>
      <Link to="/">

      <h1 className='logo'> shopy<span>.</span></h1>
      </Link>
      <div className='search-bar'>
        <Search />
      </div>
{/* <div className='items'>
      <Link to="/">
<h1 className='home'> Home</h1>
</Link>
<Link to="/item">

<h1 className='home'> Product</h1>
</Link>
<Link to="/contact">

<h1 className='home'> Contact</h1>
</Link>
</div> */}
      <div className='right-side' >
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication}>

        {!user?(
          <div>
            <p></p>
        <button type="button">Login</button>
        <button type="Register">Register</button>
        </div>
        ):(
          <div>
            <p>{user.email}</p>
            <button type="button">Logout</button>

          </div>)
}
            </div>
        </Link>
        <Link to="/cart">

        <p className='account-icon'><ShoppingCartIcon /><span>{baskets.length}</span></p>
        </Link><Link to='/favourite'>
          
        <p className='heart-icon'><FavoriteBorderOutlinedIcon /></p>
        </Link>

        <p className='account-icon'><ProfileMenu /></p>
      </div>
    </div>
    </div>
  )
}

export default Navbar
