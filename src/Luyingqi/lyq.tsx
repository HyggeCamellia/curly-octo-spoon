import React, { useState } from 'react';

const lyq: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="p-4 bg-gray-100 rounded-md text-center">
            <h2 className="text-xl font-bold mb-2">计数器</h2>
            <p className="text-lg mb-4">当前计数: {count}</p>
            <div className="flex justify-center space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={increment}
                >
                    增加
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={decrement}
                >
                    减少
                </button>
            </div>
        </div>
    );
};

export default lyq;    