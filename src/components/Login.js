import React from 'react'
import './login.css'
import {Link,useNavigate} from "react-router-dom" //instead of histroy use navigate for v6
import { db,auth } from '../firebase'



function Login() {
 const navigate=useNavigate();
const[email,setEmail]=React.useState('');
const[password,setPassword]=React.useState('');

   const signIn=(e)=>{
e.preventDefault() //preventing no refresh
//firebase login 

auth.signInWithEmailAndPassword(email,password)
.then(auth=>{
  console.log(auth)
    navigate('/')
}).catch(error=>alert(error.message))
   }
 
    const register= e =>{
        e.preventDefault();
        //firebase register
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //successfully created new user with email & password
           console.log(auth)
            if(auth){
                navigate('/')
            }
        })
        .catch(error=>alert(error.message))

     }
  return (
      <div className='login'>
        <Link to="/">
   <h1 className='login-logo'>Shopy.</h1>
   </Link>
   <div className='login_container'>
    <h1>Sign-in</h1>

    <form>
<h5>E-mail</h5>
<input type='text' value={email}  onChange={e=>setEmail(e.target.value)}  required/>
<h5>Password</h5>
<input type='password' value={password}  onChange={e=>setPassword(e.target.value)} required />
<button type="submit" className='login_btn'  onClick={signIn} >Sign In</button>

    </form>
    <p>
        By sigining-in you agree to the shopy Conditions of Use.
        Please see our Privacy Notice,our Interest-Based Ads Notice.
    </p>
    <button className='register_btn' onClick={register} >Create your Amazon Account</button>
   </div>
    </div>
  )
}

export default Login;
