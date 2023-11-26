import { Card, Col, Image } from "antd";
import React from "react";
const { Meta } = Card;

const Appphotocards = ({ src, title }) => {
  return (
    <div>
      <div className="">
        <Card
          hoverable
          className="photosizecard"
          cover={<Image className="photosize" src={src} />}
        >
          <Meta title={title} description="www.instagram.com" />
        </Card>
      </div>
    </div>
  );
};

export default Appphotocards;
