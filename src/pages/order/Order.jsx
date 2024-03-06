import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

const Order = () => {
    const context = useContext(myContext);
    const {name, profession} = context;
  return (
    <Layout>
        <h2>{name}</h2>
        <h2>{profession  }</h2>

    </Layout>
  )
}

export default Order