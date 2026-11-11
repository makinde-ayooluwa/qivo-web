import { MdBookmark, MdExplore, MdHome, MdMessage, MdNotifications, MdPerson, MdSettings, MdSlowMotionVideo } from "react-icons/md";
import Header from "../components/layout/header";
import Sidebar from "../components/layout/sidebar";

export default function AppLayout({ children }) {
    const MOBILE_WIDTH = 992;
    const links = [
        {
            title: "Home",
            icon: <MdHome />,
            link: "/"
        },
        {
            title: "Explore",
            icon: <MdExplore />,
            link: "/explore"
        },
        {
            title: "Reels",
            icon: <MdSlowMotionVideo />,
            link: "/reels"
        },
        {
            title: "Messages",
            icon: <MdMessage />,
            link: "/messages"
        },
        {
            title: "Notifications",
            icon: <MdNotifications />,
            link: "/notifications"
        },
        {
            title: "Saved",
            icon: <MdBookmark />,
            link: "/saved"
        },
        {
            title: "Profile",
            icon: <MdPerson />,
            link: "/profile"
        },
        {
            title: "Settings",
            icon: <MdSettings />,
            link: "/settings"
        }
    ]
    return (
        <>
            <div className="">
                <Header />
                <div className="grid grid-cols-[1fr_4fr] min-w-0 w-full overflow-x-hidden">
                    {innerWidth > MOBILE_WIDTH && <Sidebar links={links} />}
                    {children}
                </div>
            </div>
        </>
    )
}