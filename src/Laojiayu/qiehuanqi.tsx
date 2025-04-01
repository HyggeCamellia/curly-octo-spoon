import React, { useState } from 'react';

// 定义图片数组
const images: string[] = [
  'https://dummyimage.com/800x600/ff0000/ffffff',
  'https://dummyimage.com/800x600/00ff00/ffffff',
  'https://dummyimage.com/800x600/0000ff/ffffff'
];

interface ImageSwitcherProps {
  // 这里可以添加组件可能需要的 props
}

const ImageSwitcher: React.FC<ImageSwitcherProps> = () => {
  // 使用 useState 来管理当前显示的图片索引
  const [currentIndex, setCurrentIndex] = useState(0);

  // 切换到下一张图片的函数
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // 切换到上一张图片的函数
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">图片切换器</h1>
      <div className="flex justify-center mb-4">
        <img
          src={images[currentIndex]}
          alt="展示图片"
          className="w-full h-auto rounded-md"
        />
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={prevImage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          上一张
        </button>
        <button
          onClick={nextImage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          下一张
        </button>
      </div>
    </div>
  );
};

export default ImageSwitcher;    