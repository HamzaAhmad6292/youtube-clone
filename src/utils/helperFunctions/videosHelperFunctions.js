import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../../firebase/ClientApp";
export const uploadVideotoFirebase = async ({setVideoUrl,setThumbnailUrl,videoFile,thumbnailFile}) => {



    if (videoFile && thumbnailFile) {
      const videoRef = ref(storage, `videos/${videoFile.name}`);
      await uploadBytesResumable(videoRef,videoFile)
      // await videoRef.put(videoFile);



      const thumbnailRef = ref(storage, `thumbnails/${thumbnailFile.name}`);
      await uploadBytesResumable(thumbnailRef,thumbnailFile);

      // await thumbnailRef.put(thumbnailFile);

      // Get URLs of uploaded files
      //  const videoUrl = await videoRef.getDownloadURL();
      //  const thumbnailUrl = await thumbnailRef.getDownloadURL();

        try{
          const videoUrl=await getDownloadURL(ref(storage, `videos/${videoFile.name}`))
          const thumbnailUrl=await getDownloadURL(ref(storage, `thumbnails/${thumbnailFile.name}`))

          setThumbnailUrl(thumbnailUrl)
          setVideoUrl(videoUrl)
          console.log('Video URL:', videoUrl);
          console.log('Thumbnail URL:', thumbnailUrl);
          
   
        }
      catch(error){
        console.log(error)
      }


  
 
    }
  };