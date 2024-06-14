import HomeIcon from "@/components/icons/Home";
import ListIcon from "@/components/icons/List";
import NotificationIcon from "@/components/icons/Notification";
import SearchIcon from "@/components/icons/Search";
import SettingsIcon from "@/components/icons/Settings";
import StatsIcon from "@/components/icons/Stats";
import Sidebar from "@/components/sidebar/Sidebar";
import SidebarItem from "@/components/sidebar/SidebarItem";
import { Outlet } from "react-router-dom";

const sidebarItems = Object.freeze([
    {
        id: 'home',
        icon: HomeIcon,
        text: 'home',
    },
    {
        id: 'list',
        icon: ListIcon,
        text: 'list',
    },
    {
        id: 'stats',
        icon: StatsIcon,
        text: 'stats',
    },
    {
        id: 'search',
        icon: SearchIcon,
        text: 'search',
    },
    {
        id: 'setting',
        icon: SettingsIcon,
        text: 'setting',
    },
    {
        id: 'notification',
        icon: NotificationIcon,
        text: 'notification',
    },
]);

const DashboardWrapper = () => {
    return (
        <div className='flex'>
            <Sidebar>
                {sidebarItems.map(item => (
                    <SidebarItem
                        key={item.id}
                        Icon={item.icon}
                        text={item.text}
                    />
                ))}
            </Sidebar>
            <main className='p-4 w-full h-screen overflow-y-auto scrollbar-hide'>
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardWrapper