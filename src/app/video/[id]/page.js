import { getVideoById } from '@/api/videosApi';
import { useQuery } from '@tanstack/react-query'





export default function Page({ params }) {

const video=getVideoById(params)
console.log(video?.data)

   return (
    <div className='w-100 h-100'>

    <video className=" h-100 w-100 rounded-lg" controls>
      <source src={video?.videoUrl} type="video/mp4" />  
    </video>
  
    </div>
  );
  }