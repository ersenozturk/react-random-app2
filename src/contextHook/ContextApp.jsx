import React from 'react'
import ImgHeader from '../components/header/ImgHeader'
import InfoHeader from '../components/header/InfoHeader'
import Icons from '../components/icons/Icons'
import { Context } from './Contexts'


const ContextApp = () => {

  
  return (
    <Context>
      <ImgHeader/>
      <InfoHeader />
      <Icons />
    </Context>
  )
}

export default ContextApp