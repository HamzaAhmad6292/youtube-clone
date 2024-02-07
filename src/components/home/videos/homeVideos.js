import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import VideoCard from './videoCard';
import { useState } from 'react';
import { uploadVideo } from '@/utils/helperFunctions/videosHelperFunctions';


export default function HomeVideos() {

  const [videoFile,setVideoFile]=useState(null)
  const[thumbnailFile,setThumbNailFile]=useState(null)
  const [videoUrl,setVideoUrl]=useState(null)
  const [thumbNailUrl,setThumbnailUrl]=useState(null)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadVideo({
      setVideoUrl,
      setThumbnailUrl,
      videoFile,
      thumbnailFile,
    });
  };

  return (

  

    <div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
    
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <form onSubmit={handleSubmit}>
      <input type="file" onChange={(e)=>{setVideoFile(e.target.files[0])}} />
      <input type="file" onChange={(e)=>{setThumbNailFile(e.target.files[0])}} />
      <button type="submit">Upload</button>
    </form>

    
    
    </div>
  );
}
