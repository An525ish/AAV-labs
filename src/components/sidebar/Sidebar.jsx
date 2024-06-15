import { createContext } from "react"
import SignOutIcon from "../icons/SignOut"
import { useNavigate } from "react-router-dom"

export const SidebarContext = createContext()

const Sidebar = ({ children }) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/auth')
    }

    return (
        <aside className="h-screen bg-primary">
            <nav className="h-full flex flex-col pl-2 shadow-sm">

                <ul className="flex-1 mt-28">{children}</ul>

                <div className="relative flex flex-col gap-6 p-3">
                    <SignOutIcon
                        className={'w-7 cursor-pointer inline-block group-hover:fill-red'}
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