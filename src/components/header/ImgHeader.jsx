import React from 'react'
import useFetch from '../../customHook/useFetch'

const ImgHeader = () => {
    const {data} = useFetch("https://randomuser.me/api/")
  return (
    <div>
        ARABa
    </div>
  )
}

export default ImgHeader