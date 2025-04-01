import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps2 {
    title: string;
    menuItems: { label: string; link: string }[];
}

const Sidebar = (props: SidebarProps2) => {
    const { title, menuItems } = props;

    return (
        <div className="flex bg-gray-800 text-white p-4 w-full">
            <div className="flex flex-row items-center w-full">
                <div className="text-sm font-bold mr-4">{title}</div>
                <ul className="flex space-x-4">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link} className="text-blue-400 hover:underline">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;    
    