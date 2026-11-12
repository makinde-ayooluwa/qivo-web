import { createContext, useContext, useState } from "react";

const StoryContext = createContext();

export const StoryProvider = ({ children }) => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(false);
    return (
        <>
            <StoryContext.Provider value={{ stories, loading }}>
                {children}
            </StoryContext.Provider>
        </>
    )
}

export const useStories = ()=>{
    return useContext(StoryContext);
}