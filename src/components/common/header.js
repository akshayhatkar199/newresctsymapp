import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Button, Drawer, Dropdown } from "antd";

// ... (import statements remain unchanged)

const Appheader = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let position = element.getBoundingClientRect();
      window.scrollTo(position.left, position.top + window.scrollY - 145);
    }
    onClose();
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fa fa-flag" style={{ color: "#ff4c00" }}></i>
          <a href="http://www.google.com"> शाहूपुरी युवक मंडळ</a>
        </div>
        <div className="mobileHidden">
          <div>
            <RouterLink to="/" className="headermenumain">Home</RouterLink>
            <label className="headermenumain" onClick={() => handleClickScroll("#about")}>About</label>
            {/* <Dropdown
              overlay={
                <div className="dropbackground">
                  <RouterLink to="/photogallery"><b className="text-dark">Photos</b></RouterLink>
                </div>
              }
              placement="bottomLeft"
              arrow
            >
              <Button className="dropdownbuttongallery"><span className="gallearytextdrop">Gallery</span></Button>
            </Dropdown> */}
             <RouterLink to="/photogallery" className="headermenumain">Gallery</RouterLink>
            <label className="headermenumain" onClick={() => handleClickScroll("#Events")}>Events</label>
            <label className="headermenumain" onClick={() => handleClickScroll("#contact")}>Contact</label>
          </div>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer placement="right" onClose={onClose} open={open}>
            <div className="mobilehedermainallmenu">
              <RouterLink to="/" className="mobilehedermenu" onClick={onClose}>Home</RouterLink>
              <label className="mobilehedermenu" onClick={() => handleClickScroll("#about")}>About</label>
              <RouterLink to="/photogallery" className="text-dark mobilehedermenu" onClick={onClose}>Photos</RouterLink>
              <label className="mobilehedermenu" onClick={() => handleClickScroll("#Events")}>Events</label>
            <label className="mobilehedermenu" onClick={() => handleClickScroll("#contact")}>Contact</label>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Appheader;
