import React from "react";
import { Col, Row } from "antd";
import Adata from "../Serverdata/Adata";
import Zoom from "react-reveal/Zoom";

const AppAbout = () => {
  return (
    <section id="#about">
      <div className="block aboutBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2> About Us</h2>
            <h5>Shahupuri Yuvak Mandal </h5>
            <p>
              दरवर्षी विविध विषयांच्या नावीन्यपूर्ण मांडणीतून सर्वोत्तम,
              बक्षिसपात्र देखाव्यांची उभारणी, शांत, उत्सवाचे पावित्र्य जपणान्या
              मांगल्यपूर्ण मिरवणूका आणि सोबतच समाजभान जपत ..... राबविलेले{" "}
            </p>
          </div>
          <div className="contenHolder">
            <p>
              कोल्हापुर पोलिस प्रशासनामार्फत दरवर्षी घेण्यात येणाऱ्या "गणराया
              अवॉर्ड" मधे शाहूपुरी युवक मंडळ यांना तांत्रिक देखावा मधे क्रमांक
              मिळाल्याबद्दल सर्व कार्यकर्त्यांचे हार्दिक अभिनंदन आपला शाहूपुरी
              युवक मंडळ
            </p>
          </div>
          <Row gutter={[16, 16]}>
            {Adata.map((item) => {
              return (
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 12 }}
                  md={{ span: 8 }}
                  key={item.key}
                >
                  <div className="content">
                    <Zoom left duration={1000}>
                      <div className="icon">{item.icon}</div>
                    </Zoom>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default AppAbout;
