import React, { useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { VideoCard } from "./VideoCard";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
export const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getYoutubeVideosData();
  }, []);
  const getYoutubeVideosData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    //console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className=" flex flex-wrap justify-center py-2  my-4 ">
      {videos.map((video) => (
        <Link to={'/watch?v='+ video.id} key={video.id} ><VideoCard  info={video} /></Link>
      ))}
    </div>
  );
};
