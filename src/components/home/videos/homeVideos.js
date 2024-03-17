import * as React from 'react';

import VideoCard from './videoCard';
import { useState,useEffect } from 'react';
import { uploadVideotoFirebase } from '@/utils/helperFunctions/videosHelperFunctions';
import { uploadVideo } from '@/api/videosApi';
import { useDispatch, useSelector, useStore } from 'react-redux'
import {useInfiniteQuery} from "@tanstack/react-query"
import { getVideos } from '@/api/videosApi';
import { useRouter } from 'next/router';

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
      setSelectedVideos(data?.pages[page-1]?.data?.videos)
      
    }
  }, [data, page, hasNextPage]);
  


console.log(selectedVideos)

  return (

  

    <div className="py-4 holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-co ls-3 lg:grid-cols-4">

    {selectedVideos?.map((video) => (
      <VideoCard  video={video}  key={video._id} />
      ))}






  <div
    class="fter:h-px my-24  flex justify-center  items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
    <button type="button"
    onClick={() => fetchNextPage()}
    disabled={!hasNextPage || isFetchingNextPage}
    class="flex items-center rounded-full border border-gray-300 bg-gray-800 px-3 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 transition duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-4 w-4">
            <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
        </svg>
        {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </button>
  </div>   





    
    
    </div>
  );
}
