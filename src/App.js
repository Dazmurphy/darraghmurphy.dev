import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, PageHeader } from 'antd';
import { GithubOutlined, LinkedinFilled, HomeFilled, FundFilled, FileTextFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
    <PageHeader
      ghost={false}
      title={<a href="#">darraghmurphy.dev</a>}
      // subTitle="This is a subtitle"
      extra={[
        <Menu theme="light" mode="horizontal">
          <Menu.Item icon={<FileTextFilled />} key="1"><a href="/blog" >Blog</a></Menu.Item>
          <Menu.Item icon={<LinkedinFilled />} key="2"><a href="https://www.linkedin.com/in/darraghmurphycs/" target="_blank" rel="noopener noreferrer">LinkedIn</a></Menu.Item>
          <Menu.Item icon={<GithubOutlined />} key="3"><a href="https://github.com/dazmurphy" target="_blank" rel="noopener noreferrer">Github</a></Menu.Item>
          <Menu.Item icon={<FundFilled />} key="4"><a href="#" >Stocks</a></Menu.Item>
        </Menu>,
      ]}
    ></PageHeader>
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
    <Footer style={{ textAlign: 'center' }}>darraghmurphy.dev ©2020 Created by Darragh Murphy</Footer>
  </Layout>
  );
}

export default App;
