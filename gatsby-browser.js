import React from 'react'
import Layout from './src/components/Layout'
import './src/css/index.scss'

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
