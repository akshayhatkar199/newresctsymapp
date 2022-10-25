import React,{ useState } from 'react'

import { Anchor,Button, Drawer } from 'antd';

const { Link } = Anchor;



const Appheader = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  }
  return (
    <div className='container-fluid'>
        <div className='header'>
        <div className="logo" >
        <i className='fa fa-flag' style={{color:"#ff4c00"}}></i>
        <a href='http://www.google.com'> शाहूपुरी युवक मंडळ</a>
        </div>
    <div className='mobileHidden'>
    <Anchor targetOffset ='65.2'>
    <Link href="#hero" title="Home" />
    <Link href="#about" title="About" />
    <Link href="#Gallery" title="Gallery" />
    {/* <Link href="#works" title="Howtowork" /> */}
    {/* <Link href="#faq" title="FAQ" /> */}
    <Link href="#Events" title="Events" />
    <Link href="#contact" title="contact" />
    
  </Anchor>
  </div>
  <div className='mobileVisible'>
  <Button type="primary" onClick={showDrawer}>
  <i className="fas fa-bars"></i>
      </Button>
      <Drawer  placement="right" onClose={onClose} open={open}>
      <Anchor targetOffset ='65.2'>
    <Link href="#hero" title="Home" />
    <Link href="#about" title="About" />
    <Link href="#Gallery" title="Gallery" />
    {/* <Link href="#works" title="Howtowork" /> */}
    {/* <Link href="#faq" title="FAQ" /> */}
    <Link href="#Events" title="Events" />
    <Link href="#contact" title="contact" />
    
  </Anchor>
      </Drawer>

  </div>
        </div>
    </div>
  )
}

export default Appheader


