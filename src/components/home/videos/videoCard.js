import React from 'react'
import { Image } from '@mui/icons-material'
function VideoCard() {
  return (
    <div class="flex justify-center mb-2">
    <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
            <Image width="320" height="240"  controls class="w-full rounded-t-lg">
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4"/>
                <source src="movie.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
            </Image>
        </a>
        <div class="p-2">
            <h5 class="text-gray-900 text-xl  mb-1">Video Card</h5>
            <p class="text-gray-700 text-base ">
      
            </p>
       
        </div>
    </div>
    </div>
    )
}

export default VideoCard