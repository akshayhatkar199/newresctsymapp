import React from 'react'
import Image1 from '../../assets/images/images8.jpg';
import Image2 from '../../assets/images/images2.jpg';
import Image3 from '../../assets/images/images6.jpg';
import Image4 from '../../assets/images/images5.jpg';
import Image5 from '../../assets/images/images4.jpg';
import Image6 from '../../assets/images/images3.jpg';


import { Card } from 'antd';

import { Col, Row } from 'antd';
const { Meta } = Card;




export const AppGallery  = () => {
  return (
<div id='Gallery' className='block featureBlock bgGray'>
<div className='titleHolder'>
    <h2>  Gallery</h2>
    <p> shahupuri yuvak mandal 1st lane kolhapur!</p>

</div> 
<div className='container-fluid'>
<Row gutter={[16, 16]}>
  <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
  <Card
    hoverable
    cover={<img alt="Modern Design" src={Image1}/>}
  >
    <Meta title="*व्यापारी पेठ,शाहूपुरी, कोल्हापूर*." />
  </Card>
  
  </Col>

  <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
  <Card
    hoverable
    cover={<img alt="Clean and Elegant" src={Image2}/>}
  >
    <Meta title="*शाहूपुरी युवक मंडळ* मिरवणूक" />
  </Card>
  
  </Col>

  <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
  <Card
    hoverable
    cover={<img alt="Great Support" src={Image3}/>}
  >
    <Meta title=" *स्थापना : १९७८* " />
  </Card>
  
  </Col>

  <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
  <Card
    hoverable
    cover={<img alt="Easy to customise" src={Image4}/>}
  >
    <Meta title="छत्रपती शिवाजी महाराज" />
  </Card>
  
  </Col>

  <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
  <Card
    hoverable
    cover={<img alt="Unlimited Gallery" src={Image5}/>}
  >
    <Meta title="*शाहूपुरी युवक मंडळ* सिम्बॉल" />
  </Card>
  
  </Col>

  <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
  <Card
    hoverable
    cover={<img alt="Advanced Options" src={Image6}/>}
  >
    <Meta title=" गणपती बाप्पा मोरया" />
  </Card>
  
  </Col>

  
</Row>


</div>

</div>
    
  )
}

export default AppGallery;


 
