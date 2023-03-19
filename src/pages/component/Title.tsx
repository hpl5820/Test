import { Button } from 'antd'
import react from 'react'
import { useState } from 'react';

import './Title.less'


interface ItemAdd{
  handleAdd:(data:any)=>void
  
}

export default function Title(props:ItemAdd) {
  // const [isModalOpen, setIsModalOpen] = useState(true)
  // const handleAdd =()=>{
  //   props.handleAdd(isModalOpen)
  //   console.log(isModalOpen)
  // }
  return (
    <div className='mainTop'>
        <div>数据工厂</div>
        {/* <div>{isModalOpen}</div> */}
        <Button className='addTopButton' /*onClick={()=>setIsModalOpen(!isModalOpen)}*/>新增数据源</Button>
    </div>
  )
}
