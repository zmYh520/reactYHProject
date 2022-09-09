import { Button, Form, Input, message } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { API } from '../../config';
import { isAuth } from '../../helpers/auth';
import { Jwt } from '../../store/models/auth';
import Layout from '../core/Layout'

const AddCategory = () => {
  const [name,setName] = useState<string>('');
  const {user,token} = isAuth() as Jwt;
  useEffect(()=>{
    async function addCategoty(){
      try {
        let response = await axios.post<{name:string}>(`${API}/category/create/${user._id}`,{name:name},{
          headers:{
            "Authorization":`Bearer ${token}`
          }
        })
        message.success(`[${response.data.name}]添加成功`)
      } catch (error) {
        message.error(error.response.data.error)
      }
      
    }

    if(name){
      addCategoty()
    }
  },[name])
  const Onfinish = (value:{name:string})=>{
    setName(value.name)
    
  }
  return (
    <Layout title='添加分类' subTitle=''>
      <Form onFinish={Onfinish}>
        <Form.Item name='name' label="分类名称">
          <Input/>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>提交</Button>
        </Form.Item>
      </Form>
      <Button>
        <Link to='/admin/dashboard'>返回dashboard</Link>
      </Button>
    </Layout>
  )
}

export default AddCategory
