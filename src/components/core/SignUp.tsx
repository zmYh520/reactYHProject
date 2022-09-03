import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const SignUp = () => {
  const data = useSelector(state =>state)
  return (
    <Layout title='注册' subTitle=''>
      Sign
      {JSON.stringify(data)}
    </Layout>
  )
}

export default SignUp
