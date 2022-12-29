import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer'>
      <h1>Shopy</h1>
      <p>Copyright<span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2022 Shopy,Inc.</p>
      <div className='footer-icon'>
        <InstagramIcon  className="ic"/>
        <FacebookIcon  className="ic"/>
        <TwitterIcon className="ic" />
      </div>
      
    </div>
  )
}

export default Footer
