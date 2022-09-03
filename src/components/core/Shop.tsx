import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const Shop = () => {
    const data = useSelector(state=>state)
  return (
    <Layout title='商城主页' subTitle='开始加购'>
      Shop
      {JSON.stringify(data)}
    </Layout>
  )
}

export default Shop
