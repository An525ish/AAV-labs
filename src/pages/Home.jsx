import ListIcon from "@/components/icons/List"
import SearchIcon from "@/components/icons/Search"
import SettingsIcon from "@/components/icons/Settings"
import StatsIcon from "@/components/icons/Stats"
import { Link } from "react-router-dom"

const homeCards = [
    {
        title: 'Technical Cutover Plan',
        Icon: ListIcon,
        bgColor: 'bg-gradient-blue',
        route: '/home'
    },
    {
        title: 'Business Cutover Plan',
        Icon: ListIcon,
        bgColor: 'bg-gradient-green',
        route: '/plan'
    },
    {
        title: 'Status Report',
        Icon: StatsIcon,
        bgColor: 'bg-gradient-orange',
        route: '/status'
    },
    {
        title: 'Audit',
        Icon: SearchIcon,
        bgColor: 'bg-gradient-purple',
        route: '/audit'
    },
    {
        title: 'Configuration',
        Icon: SettingsIcon,
        bgColor: 'bg-gradient-red',
        route: '/config'
    },
]

const Home = () => {
    return (
        <div className="p-4">
            <p className="font-medium text-4xl mb-8">Home</p>

            <div className="flex gap-8 flex-wrap">
                {
                    homeCards.map(({ title, Icon, bgColor, route }) =>
                        <Link key={title} to={route}>
                            <div className={`flex flex-col justify-between w-[20rem] h-[13rem] shadow-lg rounded-2xl ${bgColor} p-4`}>
                                <div className="flex justify-between">
                                    <Icon className={'w-12 opacity-50'} />
                                    <span className="text-4xl text-white">❯</span>
                                </div>

                                <p className="w-1/2 font-medium text-white-pure text-lg">{title}</p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Home