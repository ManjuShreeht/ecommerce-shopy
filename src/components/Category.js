import React from 'react'
import './category.css'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className='category'>
      <div className='cate'>
        <div className='ca'>
        <Link to='/'>

        <img src='https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/all_deals.jpg ' />
        <p>All</p>
        </Link>
        </div>
      



<div className='ca'>
<Link to='/women'>

<img src='https://m.media-amazon.com/images/I/61KopFN+EnL._UY550_.jpg' />
<p>Women</p>
</Link>
</div>
<div className='ca'>
<Link to='/men'>

<img src='https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Men.jpg ' />
<p>Men</p>
</Link>
</div>
<div className='ca'>
<Link to='jewellary'>

<img src='https://m.media-amazon.com/images/I/31iMI1ZwynS._AC_SR180,120_QL70_.jpg ' />
<p>Jewellery</p>
</Link>
</div>
<div className='ca'>
<Link to='/electrics'>

<img src='https://m.media-amazon.com/images/I/91BSflfKpJL._AC_SR146,118_QL70_.jpg ' />
<p>Electronics</p>
</Link>
</div>


       
       
      </div>
    </div>
  )
}

export default Category
