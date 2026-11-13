import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="bg-[var(--header-bg)] sticky top-0 h-[var(--header-height)] z-20">
                <div className="flex justify-between items-center">
                    {/* LOGO */}
                    <div className="">
                        <Link to={"/"}>
                            <img src="/logo.png" width={100} alt="" />
                        </Link>
                    </div>
                    {/* <div className="flex gap-3">
                        <div className="border p-5 rounded-full"></div>
                    </div> */}
                </div>
            </div>
        </>
    )
}