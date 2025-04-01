import React from 'react';
import MyTitle from './MyTitle';
import Sidebar from './Sidebar';
import Jisuanqi from '../Wuyuxuan/shizhong';

const SysPage2 = () => {
  // 定义左侧栏的标题和内容
  const sidebarTitle: string = "左侧栏标题";

  // 定义动态菜单项数据
  const menuItems = [
    { label: "吴雨轩", link: "#jisuanqi" },
    { label: "关于我们", link: "#about" },
    { label: "服务", link: "#services" },
    { label: "联系我们", link: "#contact" },
  ];

  return (
    <div className="h-screen flex flex-col">
      <MyTitle />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar title={sidebarTitle} menuItems={menuItems} />
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
          <div className='flex flex-row'>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default SysPage2;


/**
 * h-screen : 让最外层占满整个屏幕
 */