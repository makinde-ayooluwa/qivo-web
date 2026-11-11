import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Tabs({ links }) {
    return (
        <div className='fixed bottom-0 mb-0 h-[var(--tabs-height)] w-full bg-[var(--tabs-bg)]'>
            <div className='flex justify-between h-full items-center align-middle'>
                {links.filter((x) => x.tab).map((link, index) => (
                    <>
                        {/* <Link key={index} to={link.link}>*/}

                        <NavLink
                            key={index}
                            to={link.link}
                            end={link.link === "/"}
                            className={({ isActive }) =>
                                `grid items-center justify-center gap-1 p-3 rounded-xl text-center text-sm font-medium transition-all duration-200 ${isActive
                                    ? "text-white bg-white/10"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`
                            }
                        >
                            <span className="text-2xl">{link.icon}</span>
                            <span>{link.title}</span>
                        </NavLink>
                        {/* </Link> */}
                    </>
                ))}
            </div>
        </div>
    )
}
