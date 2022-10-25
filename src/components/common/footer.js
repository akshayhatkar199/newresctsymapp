import React from 'react'

const AppFooter = () => {
  return (
    <div className='container-fluid'>
    <div className='footer'>
    <div className='logo'> 
    <i className="fas fa-bolt"></i>
    <a href="http://google.com">shahupuri yuvak mandal </a><i className="fas fa-bolt"></i>
    </div>
    <ul className='socials '>
        <li> <a href='https://www.facebook.com/shahupuriyuvak.mandal/'><i className="fab fa-facebook-f"></i></a> </li>
        <li> <a href='https://www.twitter.com'><i className="fab fa-twitter"></i></a> </li>
        <li> <a href='https://www.whatsapp.com'><i className="fab fa-whatsapp"></i></a> </li>
        <li> <a href='https://www.instagram.com/shahupuri_yuvak_mandal_sym/?hl=en'><i className="fab fa-instagram"></i></a> </li>
       
    </ul>
   
    <div className="copyright">
    Designed and Developed by Akshay Hatkar <i className="fa fa-heart color-danger" aria-hidden="true"></i>

    </div>
    </div>
    
    </div>
  )
}

export default AppFooter