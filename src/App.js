import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">LinkedIn</Menu.Item>
        <Menu.Item key="3">Github</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider>left sidebar</Sider>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Blog</Breadcrumb.Item>
        <Breadcrumb.Item>Post_1</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
      <Sider>right sidebar</Sider>
    </Layout>
    <Footer style={{ textAlign: 'center' }}>Darragh Murphy ©2020 Created by Darragh Murphy</Footer>
  </Layout>
  );
}

export default App;
