// AppCard.jsx
import React from "react";
import { Card, Col } from "antd";
import Slide from "react-reveal/Slide";
const { Meta } = Card;

const AppCard = ({ src, title }) => {
  return (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
      <Slide right duration={1000}>
        <Card
          className="gallearycard"
          hoverable
          cover={
            <img
              alt="Modern Design"
              src={src}
              style={{ width: "100%", height: "350px" }}
            />
          }
        >
          <Meta title={title} />
        </Card>
      </Slide>
    </Col>
  );
};

export default AppCard;
