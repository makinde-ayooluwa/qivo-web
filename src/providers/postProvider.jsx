import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([
        {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        },
        {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        },
        {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        }, {
            user: {
                name: "StorePilot Official"
            },
            text: "Lorem ipsum dolet enum dolet anum dot lemekue",
            likes: [
                "26262272727", "27726262727262",
            ],
            comments: [
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
                {
                    user: "Makinde Ayooluwa",
                    comment: "Great service at the place"
                },
            ],
            createdAt: "Jun 3"
        },
    ]);
    const [loading, setLoading] = useState(false);
    return (
        <>
            <PostContext.Provider value={{ posts, loading }}>
                {children}
            </PostContext.Provider>
        </>
    )
}

export const usePosts = () => {
    return useContext(PostContext);
}