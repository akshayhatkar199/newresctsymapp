import React from 'react'
import { Carousel } from 'antd';
// import item from 'antd/lib/list/Item';
import { Button } from 'antd';

const items = [
    {
       key : '1',
       title :'Shahupuri Yuvak Mandal',
       content :'*शाहूपुरी युवक मंडळ* *स्थापना : १९७८* *व्यापारी पेठ,शाहूपुरी, कोल्हापूर*.'

    },
    {
        key : '2',
        title :'Shahupuri Yuvak Mandal',
        content :'Shahupuri Yuvak Mandal | Facebookhttps://www.facebook.com › shahupuriyuvak.mandal Shahupuri Yuvak Mandal is on Facebook. Join Facebook to connect with Shahupuri Yuvak Mandal and others you may know. Facebook gives people the power to...'
 
     },
     {
        key : '3',
        title :'Shahupuri Yuvak Mandal',
        content :'Shahupuri Yuvak Mandal - Instagramhttps://www.instagram.com › shahupuri_yuvak_mandal_s... Followe,  - See Instagram photos and videos from Shahupuri Yuvak Mandal (@shahupuri_yuvak_mandal_sym)'
 
     },
]

const AppHero = () => {
  return (
    <div id='hero' className='heroBlock'>
    <Carousel autoplay>
    {items.map(item => {
        return (
            <div className='container-fluid' key ={item.key}>
            <div className='content'>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
           <h1 style={{color: 'white'}}><span className='textvisible'>{item.title}</span></h1> 
              <p style={{color: 'white'}}><span className='textvisible'>{item.content}</span></p>
           {/* <div className='btnHolder'>
           <Button type="primary">Learn More</Button>
           <Button><i className="fas fa-desktop"></i>Watch a Demo</Button>
           </div> */}
            </div>
            </div>
        )
    })}
     
    </Carousel>
</div>
  );
}

export default AppHero