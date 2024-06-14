import { createContext } from "react"
import SignOutIcon from "../icons/SignOut"

export const SidebarContext = createContext()

const Sidebar = ({ children }) => {

    const handleLogout = () => {
        console.log('first')
    }

    return (
        <aside className="h-screen bg-primary">
            <nav className="h-full flex flex-col pl-2 shadow-sm">

                <ul className="flex-1 mt-28">{children}</ul>

                <div className="relative flex flex-col gap-4 p-3">
                    <SignOutIcon
                        className={'w-7 inline-block group-hover:fill-red'}
                        onClick={handleLogout}
                    />

                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        className="w-7 h-7 rounded-full"
                    />

                </div>
            </nav>
        </aside>
    )
}

export default Sidebar