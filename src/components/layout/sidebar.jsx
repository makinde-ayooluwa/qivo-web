import { Link } from "react-router-dom";
import SidebarNav from "../UI/sidebarNav";
import { useState } from "react";

export default function Sidebar({ links }) {
    const [focused, setFocused] = useState("/");
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
                            <SidebarNav link={link} key={index} focused={focused} setFocused={setFocused} />
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}