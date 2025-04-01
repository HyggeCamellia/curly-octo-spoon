import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jisuanqi from './Wuyuxuan/jisuanqi';
import Sidebar from './SysPage2/Sidebar';

const App = () => {
  const menuItems = [
    { label: '吴雨轩', link: '/jisuanqi' },
  ];

  return (
    <Router>
      <div>
        <Sidebar title="菜单" menuItems={menuItems} />
        <Routes>
          <Route path="/" element={<Jisuanqi />} />
          <Route path="/jisuanqi" element={<Jisuanqi />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;