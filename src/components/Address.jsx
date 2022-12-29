import React, { useState } from 'react'
import './address.css'
import {Link,useNavigate} from 'react-router-dom'


function Address() {
    const[address,setAddress]=useState({});
    const[name,setName]=useState('');
    const navigate=useNavigate();
    const submit=(e)=>{
        e.preventDefault();
        setAddress({
            name:name,}
            )
            navigate('/payment')
    }
    console.log(address)
  return (
    <div className='vv'>
        <div className='address'>
            <div className='add'>

            <h1>Name:</h1>
            <div className='input'>

            <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}  required/>
            </div>
            </div>
        <div className='add'>

            <h1>Email:</h1>
            <div className='input'>

            <input type="text" placeholder='name' required />
            </div>
            </div>
            <div className='add'>

            <h1>Mobile:</h1>
            <div className='input'>

            <input type="text" placeholder='name' required />
            </div>
            </div>
            <div className='add'>

            <h1>State:</h1>
            <div className='input'>

            <input type="text" placeholder='name' required />
            </div>
            </div>
            </div>
            <div className='address'>
            <div className='add'>

            <h1>District:</h1>
            <div className='input'>

            <input type="text" placeholder='name' required />
            </div>
            </div>
            <div className='add'>

            <h1>Addresss:</h1>
            <div className='input'>
                <textarea className="textarea" rows={5} cols={38}
               required ></textarea>
            
            </div>
            </div>
            <div className='add'>

            <h1>PinCode:</h1>
            <div className='input'>

            <input type="text" placeholder='name'  required/>
            </div>
            </div>
            <Link to='\payment'>

            <button type="button" onClick={submit}>Submit</button>
            </Link>
            
</div></div>
            /* <div className="add">
                <h1>
            Mobile:</h1>
            <div className='input'>
            <input type="number" placeholder='phone number' max={10} />
                </div>
            <div className="add">
            <h1>Email:</h1>
            <div className='input'>
            <input type="email" placeholder='phone number' />
            </div>
            </div>
            <div className="add">
            <h1>State:</h1>
            <div className='input'>
            <input type="text" placeholder='state' required />
            </div>
            </div>
             <div className="add">
             <h1>City:</h1>
             <div className='input'>
             <input type="text" placeholder='state' required />
             </div>
             </div>
             <div className="add">
             <h1>Address:</h1>  <div className='input'>

             <input type="textarea" placeholder='state' required />
             </div>
             </div>
             <div className="add">
            <h1> PinCode:</h1>
            <div className='input'>
             <input type="number" placeholder='state' required />
             </div>
             </div>
        </div>
        </div>
    </div> */
  )
}

export default Address
