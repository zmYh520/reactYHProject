import { Button, Form, Input, Result } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import { signin, SigninPaylod } from '../../store/actions/auth.actions'
import { Jwt } from '../../store/models/auth'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducer'
import Layout from './Layout'

const SignIn = () => {
    const data = useSelector(state =>state);
    const dispatch = useDispatch();
    const Onfinish = (value:SigninPaylod) =>{
      dispatch(signin(value))
    }

    // 1.获取登陆结果

    const auth = useSelector<AppState,AuthState>(state=>state.auth);
    
    // 2.登陆失败显示错误信息
    const showError = () =>{
      if(auth.signin.loaded && !auth.signin.success){
          return (
            <Result
              status="warning"
              title="登陆失败"
              subTitle={auth.signin.message}
            />
          )
      }
    }
    // 3.登陆成功根据角色跳转不同页面

    const redirectDashboard = ()=>{
      const auth = isAuth();
      if(auth){
        const {user:{role}} = auth as Jwt;

        if(role === 0){
          return <Redirect to='/user/dashboard'/>
        }else if(role === 1){
          return <Redirect to='/admin/dashboard'/>
        }
      }
    }
    // 4.处理导航链接（dashbord，登陆注册）



    const siginForm = ()=>{
      return(
        <Form onFinish={Onfinish}>
        
        <Form.Item name="email"  label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item name="password"  label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item >
          <Button type='primary' htmlType='submit'>登陆</Button>
        </Form.Item>
     </Form>
      )
    }
  return (
    <Layout title='登陆' subTitle=''>
      {showError()}
      {redirectDashboard()}
      {siginForm()}
    </Layout>
  )
}

export default SignIn
