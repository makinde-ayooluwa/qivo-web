import { createContext, useContext, useState } from "react";

const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
    const [feeds, setFeeds] = useState([

    ])
    return (
        <FeedContext.Provider value={{ feeds }}>
            {children}
        </FeedContext.Provider>
    )
}

export const useFeeds = () => {
    return useContext(FeedContext)
}