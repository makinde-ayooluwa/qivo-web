import { MdList, MdListAlt, MdPerson, MdTimerOff, MdWatch } from "react-icons/md";

export default function PostCard({ post }) {
    return (
        <>
            <div className="p-0">
                <div className="flex justify-start items-center gap-2 p-2 border-b-2 border-[var(--sidebar-bg)]">
                    <div className="border rounded-full p-2">
                        <MdPerson size={30} />
                    </div>
                    <div className="grid">
                        <span className="font-bold">{post.user.name}</span>
                        <span className="font-bold text-[13px] flex gap-1 items-center">
                            <MdWatch />
                            {post.createdAt}
                        </span>
                    </div>
                </div>
                <div className="mb-3">
                    <h1>{post.text}</h1>
                </div>
                <div className="flex justify-between border-collapse">
                    <div className="border-r-3">Likes</div>
                </div>
            </div>
        </>
    )
}