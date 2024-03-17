import { getVideoById } from '@/api/videosApi';
import { useQuery } from '@tanstack/react-query'





export default function Page({ params }) {

const video=getVideoById(params)
console.log(video?.data)

   return (
    <video className="h-full w-full rounded-lg" controls>
      <source src={video?.videoUrl} type="video/mp4" />
    </video>
  );
  }