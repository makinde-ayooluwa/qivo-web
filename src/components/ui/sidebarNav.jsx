import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function SidebarNav({ link, focused, setFocused }) {
    return (
        <Link
            onClick={() => setFocused(link.link)}
            to={link.link}
            className={`rounded-[15px] p-2 flex items-center gap-4 font-bold ${focused == link.link && "bg-[var(--sidebar-link-background)]"}`}
        >
            <span className="text-2xl">{link.icon}</span>
            <span>{link.title}</span>
        </Link>
    )
}
