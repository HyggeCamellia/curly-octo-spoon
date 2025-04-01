// src/components/Menu.tsx
import React from 'react';

interface MenuProps {
    title: string;
    menuItems: { label: string; link: string; }[];
}

const Menu: React.FC<MenuProps> = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {props.menuItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;