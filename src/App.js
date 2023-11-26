import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import AppHome from "./views/home";
import Appheader from "./components/common/header";
import AppFooter from "./components/common/footer";
import Appphotogallery from "./components/home/photogallery";
import Video from "./components/home/video";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Content } from 'antd/lib/layout/layout';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <Appheader />
      </Header>

      <Content>
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="/photogallery" element={<Appphotogallery />} />
            <Route path="/video" element={<Video />} />
          </Routes>
        {/* </BrowserRouter> */}
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
