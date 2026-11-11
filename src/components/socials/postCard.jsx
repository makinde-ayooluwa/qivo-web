import { MdList, MdListAlt, MdPerson, MdTimerOff, MdWatch } from "react-icons/md";
import { useState } from "react";
import { MdFavorite, MdFavoriteBorder, MdChatBubbleOutline, MdShare } from "react-icons/md";
export default function PostCard({ post }) {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(post.likes);

    const handleLike = () => {
        let userId = "gdgtdeu76wye";
        setLiked(!liked);
        setLikes(prev =>
            liked
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        );
        post.likes = likes;
        console.log(post)
    };
    const images = [
        "/logo.jpg",
        "/logo.png",
        "/logo.png",
        "/logo.png",
        "/logo.png",
    ]
    let postImages = images.filter((_, index) => index < 4);
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
                <div className="w-full divide-black">
                    {/* {postImages.map((image, index) => (
                        <>
                            {postImages.length < 3 &&
                                <div key={index} className="w-full">
                                    <img src={image} className="justify-self-center" height={400} width={400} alt="" />
                                </div>
                            }
                            {
                                postImages.length >= 3 &&
                                <>
                                    <div key={index} className="grid">
                                        <div className="">
                                            <img src={index == 0 && image} className="w-full" alt="" />
                                        </div>
                                        <div className="grid">
                                            <div className="">
                                                <img src={index == 1 && image} className="w-full" alt="" />
                                            </div>
                                            <div className="">
                                                <img src={index == 2 && image} className="w-full" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                        </>
                    ))} */}
                    <img src="/logo.png" className="justify-self-center" width={400} alt="" />
                </div>
                <div className="w-full border-t border-[var(--sidebar-border)]">

                    {/* Like count */}
                    <div className="flex justify-between items-center px-3 py-2 text-sm">
                        <span>{likes.length.toLocaleString()} likes</span>
                        <span className="text-gray-400">{post.comments.length} comment{post.comments.length > 1 && "s"}</span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex w-full border-t border-[var(--sidebar-border)]">

                        <button
                            onClick={handleLike}
                            className={`flex-1 flex items-center justify-center gap-2 p-3 transition-colors ${liked ? "text-pink-500" : "hover:text-pink-500"
                                }`}
                        >
                            {liked ? <MdFavorite size={21} /> : <MdFavoriteBorder size={21} />}
                            <span>{liked ? "Liked" : "Like"}</span>
                        </button>

                        <button className="flex-1 flex items-center justify-center gap-2 p-3 hover:text-blue-400">
                            <MdChatBubbleOutline size={21} />
                            <span>Comment</span>
                        </button>

                        <button className="flex-1 flex items-center justify-center gap-2 p-3 hover:text-green-400">
                            <MdShare size={21} />
                            <span>Share</span>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}