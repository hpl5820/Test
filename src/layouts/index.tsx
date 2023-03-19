import TableForm from '@/pages/component/TableForm';
import TableList from '@/pages/component/TableList';
import Title from '@/pages/component/Title';
import { ConfigProvider } from 'antd';
import { Link, Outlet } from 'umi';
import styles from './index.less';
import zhCN from 'antd/locale/zh_CN';
import { useState } from 'react';
import Test from '@/pages/component/Test';

export default function Layout() {

  // const [test,setTest] = useState('test')
  const handleAdd=()=>{
    
  }

  return (
    <div className={styles.navs}>
      {/* <Outlet /> */}
      {/* <ConfigProvider locale={zhCN}>
      <Title 
      handleAdd={handleAdd}/>
      <TableForm/>
      <TableList/>
      </ConfigProvider> */}
      <Test/>
    </div>
  );
}
