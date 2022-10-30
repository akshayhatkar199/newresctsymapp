import React from 'react'
// import Image1 from '../../assets/images/images8.jpg';
import Image2 from '../../assets/images/images2.jpg';
import Image3 from '../../assets/images/images6.jpg';
import Image4 from '../../assets/images/blood-donation.jpg';

import { Card, List ,Button} from 'antd';

// const basurl = 'http://localhost:3000/'

const data = [
  {
    title: 'रक्तदान शिबिरे',
    content:[
        {
          Image: Image4,
            price:'£29.99',
            space:'1 GB of space',
            user: '1 user',
            support:'24/7 support',
            backup:'Safe, reliable backup',
            access:'समाजभान जपत ..... राबविलेले अनेक उपक्रम म्हणजेच शाहूपुरी युवक मंडळ ! आरोग्य शिबिरे, , रक्तदान शिबिरे,  महापूर किंवा  आपत्ती.... मंडळाने नेहमीच पुढाकार घेऊन आपले मदतीचे हात सदव रिते केले. '
        }
    ]
  },
  {
    title: ' मिरवणूका',
    content:[
        {
          Image: Image2,
            price:'£29.99',
            space:'1 GB of space',
            user: '5 user',
            support:'24/7 support',
            backup:'Safe, reliable backup',
            access:'बक्षिसपात्र देखाव्यांची उभारणी, शांत, उत्सवाचे पावित्र्य जपणान्या मांगल्यपूर्ण मिरवणूका आणि सोबतच समाजभान जपत ..... राबविलेले अनेक उपक्रम म्हणजेच शाहूपुरी युवक मंडळ '
        }
    ]
  },

  {
    title: 'आरोग्य शिबिरे, शाळांना कॉम्प्युटर्स्',
    content:[
        {
            Image: Image3,
            price:'£29.99',
            space:'1 GB of space',
            user: '15 user',
            support:'24/7 support',
            backup:'Safe, reliable backup',
            access:'शिबिरे, शाळांना कॉम्प्युटर्स्, रक्तदान शिबिरे, किल्लारी आम्ही पुन्हा सज्ञ आहोतच. पण तुमचे दातृत्त्वाचे हजारो हात आमच्या पाठीशी आहेत याचीही आम्हाला खात्री आहे !'
        }
    ]
  },

  
];

const AppEvents = () => {
  return (
    <div id='Events' className='block pricingBlock'>
    <div className='container-fluid'>
    <div className='titleHolder'>

      <h2>Events</h2>
      {/* <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim</p> */}

    </div>
    <List
    grid={{ gutter: 16,
    xs:1,
    sm:1,
    md:3,
    lg:3,
    xl:3,
    xxl:3,
     column: 3 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title} className="aaaaaaaaaaa">
        <img src= {item.content[0].Image} style={{ width: '100%' , height:'250px'}}/>
        {/* <p className="large"> {item.content[0].price}</p> */}
        {/* <p> {item.content[0].space}</p>
        <p> {item.content[0].user}</p>
        <p> {item.content[0].support}</p>
        <p> {item.content[0].backup}</p> */}
        <br/>
        <br/>
        <p> {item.content[0].access}</p>
        <Button type="primary" className="ant-btn ant-btn-primary ant-btn-lg"><i className ="fab fa-telegram-plane"></i><span>  More Info</span></Button>
        </Card>
      </List.Item>

    )}
  /> 
    </div>
    </div>
    
    )
}

export default AppEvents


