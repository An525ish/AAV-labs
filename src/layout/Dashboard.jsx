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
        id: 'plan',
        icon: ListIcon,
        text: 'plan',
    },
    {
        id: 'status',
        icon: StatsIcon,
        text: 'status',
    },
    {
        id: 'audit',
        icon: SearchIcon,
        text: 'audit',
    },
    {
        id: 'config',
        icon: SettingsIcon,
        text: 'config',
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