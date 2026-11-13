import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Tabs({ links }) {
    return (
        <div className='fixed bottom-0 mb-0 h-[var(--tabs-height)] w-full bg-[var(--tabs-bg)] z-20'>
            <div className='flex justify-between h-full items-center align-middle p-3'>
                {links.filter((x) => x.tab).map((link, index) => (
                    <>

                        <NavLink
                            key={index}
                            to={link.link}
                            end={link.link === "/"}
                            className={({ isActive }) =>
                                `grid items-center justify-center gap-1 p-3 rounded-xl text-center text-sm font-medium transition-all duration-200 ${isActive
                                    ? "text-[var(--tabs-focused)]"
                                    : "text-[var(--tabs-color)] hover:text-white hover:bg-white/5"
                                }`
                            }
                        >
                            <span className="text-3xl">{link.icon}</span>
                            {/* <span>{link.title}</span> */}
                        </NavLink>
                    </>
                ))}
            </div>
        </div>
    )
}
