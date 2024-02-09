import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import VideoCard from './videoCard';
import { useState } from 'react';
import { uploadVideotoFirebase } from '@/utils/helperFunctions/videosHelperFunctions';
import { uploadVideo } from '@/api/videosApi';
import { useDispatch, useSelector, useStore } from 'react-redux'

export default function HomeVideos() {

  const [videoFile,setVideoFile]=useState(null)
  const[thumbnailFile,setThumbNailFile]=useState(null)
  const [videoUrl,setVideoUrl]=useState(null)
  const [thumbNailUrl,setThumbnailUrl]=useState(null)
  const [videoTitle,setVideoTitle]=useState(null)
  const [description,setDescription]=useState(null)
  const[tags,setTags]=useState(null)
  
  const currentUser=useSelector((state)=>state.user.currentUser)

  const handleSubmit = async (e) => {
    e.preventDefault();

    //this  nigga to firebase
    await uploadVideotoFirebase({
      setVideoUrl,
      setThumbnailUrl,
      videoFile,
      thumbnailFile,
    });

    //this nigga to database
    console.log(currentUser)
    const videoData={
      title:videoTitle,
      description:description,
      tags:tags,
      videoUrl:videoUrl,
      thumbnailUrl:thumbNailUrl,
      uploader:currentUser?.userData._id,
      videoLength:1,
    }
    const response=await uploadVideo(videoData)
    console.log(response)
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


      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md text-black">
  <div className="mb-4">
    <label htmlFor="videoTitle" className="block text-gray-700 font-semibold mb-2">Video Title</label>
    <input type="text" id="videoTitle" onChange={(e) => setVideoTitle(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
    <input type="text" id="description" onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="tags" className="block text-gray-700 font-semibold mb-2">Tags</label>
    <input type="text" id="tags" onChange={(e) => setTags(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="videoFile" className="block text-gray-700 font-semibold mb-2">Upload Video</label>
    <input type="file" id="videoFile" onChange={(e) => setVideoFile(e.target.files[0])} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="thumbnailFile" className="block text-gray-700 font-semibold mb-2">Upload Thumbnail</label>
    <input type="file" id="thumbnailFile" onChange={(e) => setThumbNailFile(e.target.files[0])} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Upload</button>
</form>


    
    
    </div>
  );
}
