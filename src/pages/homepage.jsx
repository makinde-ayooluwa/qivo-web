import { MdAdd, MdPerson, MdPlusOne } from "react-icons/md"
import Header from "../components/layout/header"
import PostCard from "../components/socials/postCard";

const Homepage = () => {
    const stories = [
        {
            name: "Makinde Ayooluwa"
        },
        {
            name: "StorePilot Official"
        },
        {
            name: "TMRX Global"
        },
        {
            name: "Annie Johnson"
        },
        {
            name: "StorePilot Official"
        },
        {
            name: "TMRX Global"
        },
        {
            name: "Annie Johnson"
        }, ,
        {
            name: "StorePilot Official"
        },
        {
            name: "TMRX Global"
        },
        {
            name: "Annie Johnson"
        }, ,
        {
            name: "StorePilot Official"
        },
        {
            name: "TMRX Global"
        },
        {
            name: "Annie Johnson"
        }, ,
        {
            name: "StorePilot Official"
        },
        {
            name: "TMRX Global"
        },
        {
            name: "Annie Johnson"
        },
    ]
    const posts = [
        {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: 0,
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                }
            ],
            createdAt: "Jun 3"
        }
    ];
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
                            {stories.length < 1 && (
                                <>
                                    <h1>No stories</h1>
                                </>
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
                    {posts.map((post) => (
                        <PostCard post={post} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Homepage