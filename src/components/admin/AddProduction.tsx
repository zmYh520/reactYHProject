import { Button, Form, Input, message, Radio, Select, Upload } from 'antd'
import React, { useEffect, useState } from 'react'
import Layout from '../core/Layout'
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { getCategoty } from '../../store/actions/category.action';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { categoryState } from '../../store/reducers/category.reducer';
import { RcFile } from 'antd/lib/upload';
import axios from 'axios';
import { API } from '../../config';
import { isAuth } from '../../helpers/auth';
import { Jwt } from '../../store/models/auth';

const AddProduction = () => {

  const dispath = useDispatch();
  const [file,setFile] = useState<RcFile>();
  const {user,token} = isAuth() as Jwt;

  const category = useSelector<AppState,categoryState>(state=>state.category)
  useEffect(()=>{
    dispath(getCategoty())
    
  },[])

const Onfinish=(value:any)=>{
  
  const formData = new FormData();
  for(let val in value){
    formData.set(val,value[val]);
  }

  if(typeof file !== 'undefined'){
    formData.set('photo',file)
  }

  axios.post(`${API}/product/create/${user._id}`,formData,{
    headers:{
      'authorization':`bearer ${token}`
    }
  }).then(()=>{
    message.success('商品添加成功')
  },()=>{
    message.error('商品添加失败')
  })
}

  function categoryForm(){
    const props = {
      accept:"image/*",
      beforeUpload:function(file:RcFile){
        setFile(file)
        return false
      }
    }
    return(
      <Form onFinish={Onfinish} initialValues={{category:''}}>
        <Form.Item>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>上传商品封面</Button>
        </Upload>
        </Form.Item>
        <Form.Item name="name" label="商品名称">
            <Input />
        </Form.Item>
        <Form.Item name="description" label="商品描述">
            <Input />
        </Form.Item>
        <Form.Item name="price" label="商品价格">
            <Input />
        </Form.Item>
        <Form.Item name="category" label="所属分类">
            <Select>
                <Select.Option value=''>请选择分类</Select.Option>
                {
                  category.category.result.map(item=>(
                    <Select.Option value={item._id}>{item.name}</Select.Option>
                    ))
                }
            </Select>
        </Form.Item>
        <Form.Item name="quantity" label="商品数量">
            <Input />
        </Form.Item>
        <Form.Item name="shipping" label="是否需要运输">
            <Radio.Group>
              <Radio value={1}>是</Radio>
              <Radio value={0}>否</Radio>
            </Radio.Group>
        </Form.Item>
        <Form.Item >
            <Button htmlType='submit' type='primary'>提交</Button>
        </Form.Item>
      </Form>
    )
  }
  return (
    <Layout title='添加商品' subTitle=''>
      {categoryForm()}
    </Layout>
  )
}

export default AddProduction
