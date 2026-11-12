import { MdAdd, MdPerson, MdPlusOne } from "react-icons/md"
import Header from "../components/layout/header"
import PostCard from "../components/socials/postCard";
import { usePosts } from "../providers/postProvider";
import { useStories } from "../providers/storyProvider";

const Homepage = () => {
    const { stories } = useStories();
    const { posts } = usePosts();
    return (
        <>
            <div className="p-0">
                {/* STORIES */}
                <div className="p-3 border-b-10 border-double border-[var(--sidebar-bg)]">
                    <div className="p-4">
                        <h1 className="font-bold text-2xl">Stories</h1>
                    </div>
                    <div className="overflow-x-scroll scrollbar-none">
                        <div className="flex gap-5 flex-nowrap px-2">

                            {/* Your Story */}
                            <div className="w-[75px] shrink-0 grid justify-items-center gap-1 cursor-pointer">
                                <div className="w-[75px] h-[75px] rounded-full border-2 border-gray-500 p-[3px]">
                                    <div className="w-full h-full rounded-full bg-[var(--sidebar-bg)] flex items-center justify-center text-3xl">
                                        <MdAdd />
                                    </div>
                                </div>
                                <span className="text-sm font-medium">Your story</span>
                            </div>

                            {/* Other Stories */}
                            {stories.length === 0 && (
                                <div className="w-full py-8 text-center text-gray-400">
                                    <p className="text-sm">No stories yet.</p>
                                    <p className="text-xs mt-1">Be the first to share a moment!</p>
                                </div>
                            )}
                            {stories.filter((x, index) => index < 3).map((story, index) => (
                                <div key={index} className="w-[75px] shrink-0 grid justify-items-center gap-1 cursor-pointer">
                                    <div className="w-[75px] h-[75px] rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                                        <div className="w-full h-full rounded-full bg-[var(--sidebar-bg)] flex items-center justify-center text-3xl">
                                            <MdPerson />
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium">{story.name.split(" ")[0]}</span>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                {/* POSTS */}
                <div className="grid">
                    {posts.map((post, index) => (
                        <PostCard key={index} post={post} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Homepage