import React from 'react'

const AppFooter = () => {
  return (
    <div className='container-fluid'>
    <div className='footer'>
    <div className='logo'> 
    <i className='fa fa-flag' style={{color:"#ff4c00", marginRight: "6px"}}></i>
     shahupuri yuvak mandal  <i className='fa fa-flag' style={{color:"#ff4c00"}}></i>
    </div>
    <ul className='socials '>
        <li> <a href='https://www.facebook.com/shahupuriyuvak.mandal/'><i className="fab fa-facebook-f" style={{color:"#1877f2"}}></i></a> </li>
        <li> <a href='https://www.twitter.com'><i className="fab fa-twitter" style={{color:"#1da1f2"}}></i></a> </li>
        <li> <a href='https://www.whatsapp.com'><i className="fab fa-whatsapp" style={{color:"#24a01b"}}></i></a> </li>
        <li> <a href='https://www.instagram.com/shahupuri_yuvak_mandal_sym/?hl=en'><i className="fab fa-instagram" style={{color:"#f10c13"}}></i></a> </li>
       
    </ul>
   
    <div className="copyright">
    Designed and Developed by Akshay Hatkar <i className="fa fa-heart color-danger" aria-hidden="true"></i>

    </div>
    </div>
    
    </div>
  )
}

export default AppFooter