import React from "react";
import { Carousel, Button, Row, Col } from "antd"; // Import Carousel and Button directly from Ant Design
import Hdata from "../Serverdata/Hdata";
// import Flip from "react-reveal/Flip";
import { Flip } from "react-reveal";
import Slide from "react-reveal/Slide";

const AppHero = () => {
  return (
    <div id="hero" className="heroBlock">
      <Carousel autoplay>
        {/* autoplay */}
        {Hdata.map((item) => (
          <div className="custom-carousel-item">
            <Flip key={item.key} left  duration={3000}>
              {/* <div className="" key={item.key}> */}
              <Row>
                <Col
                  xl={{ order: 1, span: 12 }}
                  xs={{
                    order: 2,
                    span: 24,
                  }}
                  sm={{
                    order: 2,
                    span: 24,
                  }}
                  md={{
                    order: 2,
                    span: 24,
                  }}
                  lg={{
                    order: 1,
                    span: 12,
                  }}
                >
                  <div className="textpositioncarousal">
                    <h1>
                      <span className="styleoftext">
                        {item.title}{" "}
                        <span className="styleof2">{item.title2}</span>
                      </span>

                      <span className="styleoftext">{item.title3}</span>
                    </h1>
                    <span className="contentstyletext">{item.content}</span>
                    <br />
                    <br />
                    <button
                      type="button"
                      className="ant-btn ant-btn-primary ant-btn ant-btn-primary ant-btn-lg "
                    >
                      <i className="fab fa-telegram-plane mx-1"></i>
                      <span> More Info</span>
                    </button>
                  </div>
                </Col>
                <Col
                  xl={{ order: 2, span: 12 }}
                  xs={{
                    order: 1,
                    span: 24,
                  }}
                  sm={{
                    order: 1,
                    span: 24,
                  }}
                  md={{
                    order: 1,
                    span: 24,
                  }}
                  lg={{
                    order: 2,
                    span: 12,
                  }}
                >
                  <div className="sliderineerdiv">
                    <div className="imagtabset">
                      <img src={item.imageUrl} alt="" className="imagesize " />

                      <img
                        src={item.imageUrl2}
                        alt=""
                        className=" imagesize2 "
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Flip>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AppHero;
