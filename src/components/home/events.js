import React from "react";
import { Card, List, Button } from "antd";
import Edata from "../Serverdata/Edata";
import Roll from "react-reveal/Roll";

const AppEvents = () => {
  return (
    <section id="#Events">
      <div className="block pricingBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Events</h2>
            {/* <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim</p> */}
          </div>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3,
              column: 3,
            }}
            dataSource={Edata}
            renderItem={(item) => (
              // <List.Item>
              <Card title={item.title} className="m-1 eventcard">
                <Roll left duration={2000}>
                  <img
                    src={item.content[0].Image}
                    className="cardimage"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                    alt={item.title}
                  />
                </Roll>
                <br />
                <br />
                <p> {item.content[0].access}</p>
                <Button
                  type="primary"
                  className="ant-btn ant-btn-primary ant-btn-lg"
                >
                  <i className="fab fa-telegram-plane"></i>
                  <span> More Info</span>
                </Button>
              </Card>
              // </List.Item>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default AppEvents;
