import React from 'react'
import useFetch from '../../customHook/useFetch'

const ImgHeader = () => {

const {data} = useFetch('https://randomuser.me/api/')

  return (
    <div>
        <img src={data?.picture.large} alt="" />
    </div>
  )
}

export default ImgHeader