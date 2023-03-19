import React from 'react'
import { Button, Checkbox, Form, Input, Select } from 'antd'
import './TableForm.less'


export default function TableForm() {

  const selectOptions = [
    { value: 'all', label: '全部' },
    { value: 0, label: '未发布' },
    { value: 1, label: '已发布' },
    { value: 2, label: '未发布' },
  ];


  return (
    <div className='inputForm'>
    <div className='FormItem'>
        <Form
        
    name="basic"
    // labelCol={{ span: 8 }}
    // wrapperCol={{ span: 16 }}
   
    // initialValues={{ remember: true }}
    layout='inline'
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
    style={{width:'200px'}}
      label="应用状态"
      name="status"
      
    >
      <Select options={selectOptions} 
      
      />
    </Form.Item>

    <Form.Item
    
      label="数据源名称"
      name="db_name"
      
    >
      <Input style={{width:'150px'}}/>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button  >
        重置
      </Button>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        查询
      </Button>
    </Form.Item>
  </Form>
    </div>
    </div>
  )
}
