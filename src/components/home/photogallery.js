import { Col, Row } from "antd";
import React from "react";
import Gallery from "react-photo-gallery";
import photosdata from "../Serverdata/photosdata";

const Appphotogallery = () => {
  return (
    <div className="container-fluid photomaindiv">
      <Row gutter={[16, 16]}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
        >
          <div className="gallerydiv">
            <h2 className="text-center maintitlephoto"><b>Photos</b></h2>
            <hr />
            <Gallery photos={photosdata} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Appphotogallery;
// proper
