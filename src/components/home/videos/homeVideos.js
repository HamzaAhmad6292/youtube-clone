import * as React from 'react';

import VideoCard from './videoCard';
import { useState,useEffect } from 'react';
import { uploadVideotoFirebase } from '@/utils/helperFunctions/videosHelperFunctions';
import { uploadVideo } from '@/api/videosApi';
import { useDispatch, useSelector, useStore } from 'react-redux'
import {useInfiniteQuery} from "@tanstack/react-query"
import { getVideos } from '@/api/videosApi';
export default function HomeVideos({searchName}) {
  


  const [videoFile,setVideoFile]=useState(null)
  const[thumbnailFile,setThumbNailFile]=useState(null)
  const [videoUrl,setVideoUrl]=useState(null)
  const [thumbNailUrl,setThumbnailUrl]=useState(null)
  const [videoTitle,setVideoTitle]=useState(null)
  const [description,setDescription]=useState(null)
  const[tags,setTags]=useState(null)
  const [selectedVideos, setSelectedVideos] = useState([]);


  const [page,setPage]=useState(1)
  const currentUser=useSelector((state)=>state.user.currentUser)
  
  const [hasNextPage,setHasNextPage]=useState(false)    




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
  };


  const {
    data,
    error,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    status,}=useInfiniteQuery({
    queryKey:{searchName},
    queryFn:getVideos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
    if (lastPage.length === 0) {
      return undefined
    }
    return lastPageParam + 1
  },
  getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
    if (firstPageParam <= 1) {
      return undefined
    }
    return firstPageParam - 1
  },  
  }
  )

  useEffect(() => {
    if (data && data?.pages && data?.pages[0] && data?.pages[0]?.data) {
      setPage(data?.pageParams?.length);
      setHasNextPage(data?.pages[page - 1]?.data?.hasNextPage);
      setSelectedVideos(prevSelectedVideo => [
        ...prevSelectedVideo,
        ...data?.pages[page-1]?.data?.videos,
      ]);
    }
  }, [data, page, hasNextPage]);
console.log(selectedVideos)

  return (

  

    <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-co ls-3 lg:grid-cols-4">
    
    {selectedVideos.map((video) => (
  <VideoCard key={video._id} />
))}





      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </button>
      </div>        


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
