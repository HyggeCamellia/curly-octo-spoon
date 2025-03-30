function App() {
  return (
    // 全屏渐变背景 + 居中内容
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      
      {/* 卡片容器 - 网格布局 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        
        {/* 单个卡片组件 */}
        <Card 
          title="React 魔法" 
          emoji="🪄"
          color="bg-blue-500"
        />
        
        <Card 
          title="Tailwind 美学" 
          emoji="🎨"
          color="bg-green-500"
        />
        
        <Card 
          title="前端乐趣" 
          emoji="🚀"
          color="bg-yellow-500"
        />
        
      </div>
    </div>
  );
}

// 卡片组件
function Card({ title, emoji, color }) {
  return (
    <div className={`${color} rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:rotate-3 shadow-xl`}>
      <div className="text-9xl text-center mb-4">{emoji}</div>
      <h2 className="text-white text-2xl font-bold text-center">{title}</h2>
      <div className="mt-4 opacity-70 bg-white/10 rounded-full h-1 w-1/2 mx-auto" />
      <button className="mt-6 w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg transition-colors duration-200">
        点我探索 →
      </button>
    </div>
  );
}