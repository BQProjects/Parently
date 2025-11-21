import { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {

    const [VideosData, setVideosData] = useState([]);

    const AddVideo = (data) => {
        const videoWithId = { ...data, id: Date.now() };
        setVideosData(prev => [...prev, videoWithId]);
    };

    const RemoveVideo = (id) => {
        setVideosData(prev => prev.filter(video => video.id !== id));
    };

    return (
        <VideoContext.Provider value={{ VideosData, AddVideo, RemoveVideo }}>
            {children}
        </VideoContext.Provider>
    )

}

export const useVideo = () => {
    return useContext(VideoContext);
}