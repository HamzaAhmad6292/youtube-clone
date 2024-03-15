"use client"


import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { uploadVideotoFirebase } from '@/utils/helperFunctions/videosHelperFunctions';
import { uploadVideo } from '@/api/videosApi';
import { useDispatch, useSelector, useStore } from 'react-redux'
import {useMutation} from "@tanstack/react-query"




function UploadVideo() {

    const [videoFile,setVideoFile]=useState(null)
    const[thumbnailFile,setThumbNailFile]=useState(null)
    const [videoUrl,setVideoUrl]=useState(null)
    const [thumbNailUrl,setThumbnailUrl]=useState(null)
    const [videoTitle,setVideoTitle]=useState(null)
    const [description,setDescription]=useState(null)
    const[tags,setTags]=useState(null)
    const dispatch=useDispatch()
    const currentUser=useSelector((state)=>state.user.currentUser)
    

    const mutate = useMutation(async (videoData) => {
      console.log("hamza the great")
      try {
        // Upload video and thumbnail to Firebase
        const { videoUrl: firebaseVideoUrl, thumbnailUrl: firebaseThumbnailUrl } = await uploadVideotoFirebase({
          videoFile,
          thumbnailFile,
        });
  
        // Update videoData with Firebase URLs
        videoData.videoUrl = firebaseVideoUrl;
        videoData.thumbnailUrl = firebaseThumbnailUrl;
  
        // Send the updated videoData to your backend API for database storage
        const response = await uploadVideo(videoData); // Replace with your actual API call
        console.log('Video upload response:', response);
  
        // Handle success (e.g., reset form, show success message)
        // dispatch(someSuccessAction(response.data)); // Assuming you have a success action
  
        return videoData; // Return the updated videoData for potential use (optional)
      } catch (error) {
        console.error('Video upload error:', error);
        // Handle errors (e.g., display error message to user)
        // dispatch(someErrorAction(error.message)); // Assuming you have an error action
      }
    },{videoData});
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Validate input fields (optional)
      // if (!videoFile || !videoTitle || !description || !tags) {
      //   // Handle missing fields
      //   return;
      // }
  
      // Create video data object with initial properties
      const videoData = {
        title: videoTitle,
        description: description,
        tags: tags,
        uploader: currentUser?.userName,
        videoLength: 1, // Replace with actual video length calculation (optional)
      };
  
      // Trigger the mutation
      mutate.mutate(videoData);
    };



  return (
<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center text-gray-700">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <h2 className="font-semibold text-xl text-gray-600">Video Upload Form</h2>
      <p className="text-gray-500 mb-6">Please fill out the following fields to upload your video.</p>

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Video Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
              <div className="md:col-span-2">
                <label for="videoTitle">Video Title</label>
                <input type="text" name="videoTitle" id="videoTitle" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  onChange={(e)=>setVideoTitle(e.target.value)} />
              </div>

              <div className="md:col-span-1">
                <label for="description">Description</label>
                <input type="text" name="description" id="description" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" onChange={(e)=>setDescription(e.target.value)} />
              </div>

              <div className="md:col-span-1">
                <label for="tags">Tags</label>
                <input type="text" name="tags" id="tags" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" onChange={(e)=>setTags(e.target.value)}/>
              </div>

              <div className="md:col-span-2">
                <label for="videoFile">Upload Video</label>
                <input type="file" name="videoFile" id="videoFile" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"   onChange={(e) => setVideoFile(e.target.files[0])} // Update with selected file
 />
              </div>

              <div className="md:col-span-2">
                <label for="thumbnailFile">Upload Thumbnail</label>
                <input type="file" name="thumbnailFile" id="thumbnailFile" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" onChange={(e)=>setThumbNailFile(e.target.files[0])} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e)=>handleSubmit(e)}>Upload</button>
      </div>
    </div>
  </div>
</div>

  );
}

export default UploadVideo