import React from'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Shizhong from './Wuyuxuan/shizhong';
import Sidebar from './SysPage2/Sidebar';
import Jisuan from './Luyingqi/jisuan';
import TaskBoard from './Qiuhuiting/renwu';
import ImageSwitcher from './Laojiayu/qiehuanqi';

const App = () => {
  const menuItems = [
    { label: '吴雨轩', link: '/Shizhong' },
    { label: '陆英棋', link: '/Jisuan' }, // 链接指向 /Jisuan
    { label: '劳嘉愉', link: '/ImageSwitcher' }, 
    { label: '丘慧婷', link: '/TaskBoard' }, 
  ];

  return (
    <Router>
      <div>
        <Sidebar title="第二组作品" menuItems={menuItems} />
        <Routes>
          <Route path="/" element={<Shizhong />} />
          <Route path="/Shizhong" element={<Shizhong />} />
          <Route path="/Jisuan" element={<Jisuan />} /> // 修正路径并配置 Jisuan 组件
          <Route path="/ImageSwitcher" element={<ImageSwitcher />} />
          <Route path="/TaskBoard" element={<TaskBoard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;