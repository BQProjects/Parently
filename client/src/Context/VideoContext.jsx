/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [VideosData, setVideosData] = useState([]);

  const AddVideo = (data) => {
    const videoWithId = { ...data, id: Date.now() };
    setVideosData((prev) => [...prev, videoWithId]);
  };

  const RemoveVideo = (id) => {
    setVideosData((prev) => prev.filter((video) => video.id !== id));
  };

  const UpdateVideo = (id, updatedData) => {
    setVideosData((prev) =>
      prev.map((video) =>
        video.id === id ? { ...video, ...updatedData } : video
      )
    );
  };

  return (
    <VideoContext.Provider
      value={{ VideosData, AddVideo, RemoveVideo, UpdateVideo }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};
