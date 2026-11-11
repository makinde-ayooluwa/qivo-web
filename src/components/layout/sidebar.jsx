import { Link } from "react-router-dom";

export default function Sidebar({ links }) {
    return (
        <>
            <div className="bg-[var(--sidebar-bg)] border-[var(--sidebar-border)] sticky top-[var(--header-height)] h-[calc(100vh-var(--header-height))]">
                <div className="p-3 overflow-scroll scrollbar-none">
                    <div className="grid items-center">
                        <div>
                            <input type="text" className="border p-2 rounded-full px-5" placeholder="Search" name="" id="" />
                        </div>
                        <div className="mt-5 grid gap-4">
                            {links.map((link, index) => (
                                <Link to={link.link} key={index} className="bg-[var(--sidebar-link-background)] rounded-[7px] p-2 flex items-center justify-start font-bold gap-4">
                                    <span className="text-2xl">{link.icon}</span>
                                    <span className="">{link.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}