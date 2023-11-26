// AppGallery.jsx
import React from "react";
import AppCard from "../common/card";
import Cdata from "../Serverdata/Cdata";
import { Col, Row } from "antd";

export const AppGallery = () => {
  return (
    <div id="Gallery" className="block featureBlock bgGray">
      <div className="titleHolder">
        <h2>Gallery</h2>
        <p>shahupuri yuvak mandal 1st lane kolhapur!</p>
      </div>
      <div className="container-fluid">
        <Row gutter={[16, 16]}>
          {Cdata.map((val, ind) => (
            <AppCard key={ind} src={val.src} title={val.title} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AppGallery;
