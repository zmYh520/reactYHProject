import { Col, Menu, Row,Descriptions,Typography  } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../core/Layout'
import { ShoppingCartOutlined, UserOutlined, OrderedListOutlined } from '@ant-design/icons';
import { isAuth } from '../../helpers/auth';
import { Jwt } from '../../store/models/auth';
const { Title } = Typography;
const AdminDashboard = () => {
const {user:{name,email}} = isAuth() as Jwt

  const adminLink = ()=>(
    <>
      <Title level={5}>管理员菜单</Title>
      <Menu>
        <Menu.Item>
          <ShoppingCartOutlined/>
          <Link to='/create/categoty'>添加分类</Link>
        </Menu.Item>
        <Menu.Item>
          <UserOutlined/>
          <Link to='/create/product'>添加产品</Link>
        </Menu.Item>
        <Menu.Item>
        <OrderedListOutlined />
          <Link to='/'>订单列表</Link>
        </Menu.Item>
      </Menu>
    </>
      
    
  )

  const adminInfo = ()=>(
    <Descriptions title="管理员信息" bordered>
      <Descriptions.Item label="昵称">{name}</Descriptions.Item>
      <Descriptions.Item label="邮件">{email}</Descriptions.Item>
      <Descriptions.Item label="角色">管理员</Descriptions.Item>
    </Descriptions>
  )
  return (
    <Layout title="管理员主页"  subTitle='尊敬的管理员欢迎回家'>
      <Row>
        <Col span='4'>
          {adminLink()}
        </Col>
        <Col span='20'>{adminInfo()}</Col>
      </Row>
    </Layout>
  )
}

export default AdminDashboard
