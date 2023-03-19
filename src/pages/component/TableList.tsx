import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  id: number;
  db_name: string;
  db_type: string;
  db_describe: string;
  db_url: string;
  status:number;
  update_time:string
}

const columns: ColumnsType<DataType> = [
  {
    title: '数据源名称',
    dataIndex: 'db_name',

  },
  {
    title: '数据库类型',
    dataIndex: 'db_type',
    
  },
  {
    title: '数据源描述',
    dataIndex: 'db_describe',
    
  },
  {
    title: '连接信息',
    dataIndex: 'db_url',
    
  },
  {
    title: '应用状态',
    dataIndex: 'status',
    render:(_) =>(
      <>{_==0?'已停用':_==1?'已发布':'未发布'}</>
    )
  },
  {
    title: '更新时间',
    dataIndex: 'update_time',
    sorter: (a, b) => Date.parse(a.update_time.toString()) - Date.parse(b.update_time.toString())
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>连通测试 </a>
        
        <a>{record.status==1?'停用':'发布'}</a>
        <a>{record.status!=1?'编辑':""}</a>
        <a>{record.status==2?'删除':''}</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    id:1,
    db_name: 'John Brown',
    db_type: "32",
    db_describe: 'New York No. 1 Lake Park',
    db_url:'developer',
    update_time:'2019-10-1',
    status:1
  },
  {
    id:2,
    db_name: 'Jim Green',
    db_type: "42",
    db_describe: 'London No. 1 Lake Park',
    db_url:'developer',
    update_time:'2019-10-11',
    status:2
  },
  {
    id:3,
    db_name: 'Joe Black',
    db_type: "32",
    db_describe: 'Sydney No. 1 Lake Park',
    db_url:'developer',
    update_time:'6019-10-1',
    status:0
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;