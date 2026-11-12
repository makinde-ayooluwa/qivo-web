
import { useEffect, useState } from "react";

import {
    MdBookmark,
    MdExplore,
    MdHome,
    MdMessage,
    MdNotifications,
    MdPerson,
    MdSettings,
    MdSlowMotionVideo
} from "react-icons/md";

import Header from "../components/layout/header";
import Sidebar from "../components/layout/sidebar";
import Tabs from "../components/layout/tabs";

export default function AppLayout({ children }) {
    const MOBILE_WIDTH = 765;

    const [showSidebar, setShowSidebar] = useState(
        window.innerWidth > MOBILE_WIDTH
    );

    useEffect(() => {
        const handleResize = () => {
            setShowSidebar(window.innerWidth > MOBILE_WIDTH);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const links = [
        { title: "Home", icon: <MdHome />, link: "/", tab: true },
        { title: "Explore", icon: <MdExplore />, link: "/explore", tab: true },
        { title: "Reels", icon: <MdSlowMotionVideo />, link: "/reels" },
        { title: "Messages", icon: <MdMessage />, link: "/messages", tab: true },
        { title: "Notifications", icon: <MdNotifications />, link: "/notifications" },
        { title: "Saved", icon: <MdBookmark />, link: "/saved", tab: true },
        { title: "Profile", icon: <MdPerson />, link: "/profile", tab: true },
        { title: "Settings", icon: <MdSettings />, link: "/settings" }
    ];

    return (
        <>
            <Header />

            <div className="min-w-0 w-full overflow-x-hidden">
                {showSidebar && <Sidebar links={links} />}
                {!showSidebar && <Tabs links={links} />}
                <main className={`min-w-0 mb-[var(--tabs-height)] p-1 ${showSidebar ? "ml-64" : ""}`}>
                    {children}
                </main>
            </div>
        </>
    );
}
