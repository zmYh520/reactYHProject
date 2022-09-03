import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const SignIn = () => {
    const data = useSelector(state =>state)
  return (
    <Layout title='登陆' subTitle=''>
      SignIn
      {JSON.stringify(data)}
    </Layout>
  )
}

export default SignIn
