import React from 'react';
import 'antd/dist/antd.css';
import './App.css'; 
import AppHome from './views/home';
import Appheader from './components/common/header'
import AppFooter from './components/common/footer'
import {  Layout } from 'antd';
// import { Content } from 'antd/lib/layout/layout';
const { Header,Content,Footer} = Layout;


function App() {
  return (

 <Layout className="mainLayout">
 <Header>
       <Appheader />
 </Header>

<Content>
      <AppHome />
 </Content>
 <Footer>
 <AppFooter/>

 </Footer>
 </Layout>


  );
}

export default App;
