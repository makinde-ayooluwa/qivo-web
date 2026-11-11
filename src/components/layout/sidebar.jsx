import { Link } from "react-router-dom";

export default function Sidebar({ links }) {
    return (
        <aside className="fixed left-0 top-[var(--header-height)] w-64 h-[calc(100vh-var(--header-height))] bg-[var(--sidebar-bg)] border-r border-[var(--sidebar-border)] overflow-y-auto scrollbar-none">
            <div className="p-3">
                <div className="grid items-center">
                    <input
                        type="text"
                        className="border p-2 rounded-full px-5 w-full"
                        placeholder="Search"
                    />

                    <div className="mt-5 grid gap-4">
                        {links.map((link, index) => (
                            <Link
                                to={link.link}
                                key={index}
                                className="bg-[var(--sidebar-link-background)] rounded-[7px] p-2 flex items-center gap-4 font-bold"
                            >
                                <span className="text-2xl">{link.icon}</span>
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}