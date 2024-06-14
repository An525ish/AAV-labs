import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ Icon, text }) => {
    const [active, setActive] = useState('home');


    return (
        <NavLink to={`/${text}`} className={({ isActive }) => setActive(isActive)} >
            <li
                className={`relative flex items-center p-3 my-3 font-medium rounded-s-full cursor-pointer transition-colors group ${active ? 'bg-background text-primary' : 'hover:bg-background text-primary'}`}
            >
                <Icon className={`w-6 h-6 group-hover:fill-primary group-hover:stroke-primary ${active && 'fill-primary stroke-primary'}`} />
            </li>
        </NavLink>
    );
}

export default SidebarItem;
