import { Space, Menu } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useModel } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';


const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const [prefix, setPrefix] = useState('')
  const [current, setCurrent] = useState('')

  useEffect(() => {
    const {origin , pathname, hash} = location
    let src = pathname.replace(/^(?!\/)|(\/{2,})/g, '/');
    if (!(window as any).__POWERED_BY_QIANKUN__) {
      src = '/platform/'
    }
    console.log(src)
    setPrefix(origin + src)
    const key = hash.includes('app-common') ? 'app-common' : 'app-pro'
    setCurrent(key)
  }, [])


  const handleClick = useCallback(
    e => {
      console.log('click ', e);
      setCurrent(e.key)
    },
    []
  );

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>
      
      <Menu  mode="horizontal" onClick={handleClick} selectedKeys={[current]}>
        <Menu.Item key="app-common" >
          <a href={prefix + '#/app-common/base'} >
          课程中心
          </a>
        </Menu.Item>
  
    
        <Menu.Item key="app-pro">
            资料中心
        </Menu.Item>
      </Menu>

   
      
     
      <Avatar />
    
    </Space>
  );
};
export default GlobalHeaderRight;
