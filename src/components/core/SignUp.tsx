import { Button, Form, Input, Result } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetSignup, signup, SingupPayload } from '../../store/actions/auth.actions'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducer'
import Layout from './Layout'

const SignUp = () => {
  const dispatch = useDispatch();

  //从store里面获取登陆信息
  const auth = useSelector<AppState,AuthState>(state => state.auth);

  const [form] = Form.useForm();//获取表单对象

  const OnFinish = (value:SingupPayload)=>{
    dispatch(signup(value))
    
  }


  // 1.注册成功清空表单；
  useEffect(()=>{
    if(auth.signup.loaded && auth.signup.success){
      form.resetFields();//清空
    }
  },[auth])

  // 2.注册成功，显示成功信息

  const showSuccess = ()=>{
    if(auth.signup.loaded && auth.signup.success){
      return(
        <Result
          status="success"
          title="注册成功"
          extra={[
            <Button type="primary" key="console">
              <Link to='/signin'>登陆</Link>
            </Button>,
          ]}
        />
      )
    }
  }
  // 3.注册失败，显示失败信息
  
  const showError = ()=>{
    if(auth.signup.loaded && !auth.signup.success){
      return(
        <Result
          status="warning"
          title="注册失败"
          subTitle={auth.signup.message}
        />
      )
    }
  }
  // 4.离开页面之前清空状态

  useEffect(()=>{
    return()=>{//tip1cl
      dispatch(resetSignup())
    }
  },[])


  const signupForm = ()=>{
    return (
      <Form form={form} onFinish={OnFinish}>
        <Form.Item name="name"  label="名称">
          <Input />
        </Form.Item>
        <Form.Item name="password"  label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item name="email"  label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item >
          <Button type='primary' htmlType='submit'>注册</Button>
        </Form.Item>
     </Form>
    )
  }
  return (
    <Layout title='注册' subTitle=''>
      {showSuccess()}
      {showError()}
      {signupForm()}
    </Layout>
  )
}

export default SignUp
