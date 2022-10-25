import React from 'react'
import { Col , Row } from 'antd';


const items = [
    {
       key : '1',
      //  icon: <i className="fas fa-chart-pie"></i>,
      icon: <i className="fa fa-trophy" aria-hidden="true" style={{color: "gold"}}></i>,
       title :'तांत्रिक देखावा ',
       content :'४० वर्ष परितोषिकांची अखंडित परंपरा कायम.....'

    },
    {
        key : '2',
        // icon: <i className="fas fa-desktop"></i>,
        icon: <i className="fa fa-trophy" aria-hidden="true" style={{color: "gold"}}></i>,
        title :'गणपती विसर्जन मिरवणूक',
        content :'अखंडित परंपरा कायम......'
 
     },
     {
        key : '3',
        // icon: <i className="fas fa-database"></i>,
        icon: <i className="fa fa-trophy" aria-hidden="true" style={{color: "gold"}}></i>,
        title :'Shahupuri Yuvak Mandal ',
        content :'... येणाऱ्या "गणराया अवॉर्ड" मधे शाहूपुरी युवक मंडळ…”'
 
     },
]

const AppAbout = () => {
  return (
    <div id='about' className='block aboutBlock'>
    <div className='container-fluid'>
    <div className='titleHolder'>
        <h2> About Us</h2>
        <h5>Shahupuri Yuvak Mandal </h5>
        <p>दरवर्षी विविध विषयांच्या नावीन्यपूर्ण मांडणीतून सर्वोत्तम,
       बक्षिसपात्र देखाव्यांची उभारणी, शांत, उत्सवाचे पावित्र्य जपणान्या मांगल्यपूर्ण मिरवणूका आणि सोबतच समाजभान जपत ..... राबविलेले </p>
    </div>
    <div className='contenHolder'>
     {/* <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus officiis repudiandae est 
     deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque. Facilis porro in laborum dolor amet 
     ratione hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci quidem sint 
     enim pariatur ducimus, saepe voluptatibus inventore commodi! Quis, explicabo molestias libero tenetur
      temporibus perspiciatis deserunt.</p> */}

      <p>
      कोल्हापुर पोलिस प्रशासनामार्फत दरवर्षी घेण्यात येणाऱ्या "गणराया अवॉर्ड" मधे शाहूपुरी युवक मंडळ यांना तांत्रिक देखावा मधे  क्रमांक मिळाल्याबद्दल सर्व कार्यकर्त्यांचे हार्दिक अभिनंदन
      आपला
      शाहूपुरी युवक मंडळ
      </p>
    </div>
    <Row gutter={[16, 16]}>
    {items.map(item =>{
        return (
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} key ={item.key}>
            <div className='content'>
            <div className='icon'>
            {item.icon}
            </div>
            <h3>{item.title}</h3> 
            <p>{item.content}</p> 
            </div>
                
               
               
            </Col>
        )
    })}
        
    </Row>
    </div>

    </div>
  )
}

export default AppAbout