import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const Home = () => {
    const data = useSelector(state =>state)
  return (
    <Layout title='会员商城' subTitle='开始狂欢1'>
      Home
      {JSON.stringify(data)}
    </Layout>
  )
}

export default Home
