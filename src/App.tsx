import React from'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Shizhong from './Wuyuxuan/shizhong';
import Sidebar from './SysPage2/Sidebar';
import Jisuan from './Luyingqi/jisuan';

const App = () => {
  const menuItems = [
    { label: '吴雨轩', link: '/Shizhong' },
    { label: '陆英棋', link: '/Jisuan' }, // 链接指向 /Jisuan
  ];

  return (
    <Router>
      <div>
        <Sidebar title="菜单" menuItems={menuItems} />
        <Routes>
          <Route path="/" element={<Shizhong />} />
          <Route path="/Shizhong" element={<Shizhong />} />
          <Route path="/Jisuan" element={<Jisuan />} /> // 修正路径并配置 Jisuan 组件
        </Routes>
      </div>
    </Router>
  );
};

export default App;