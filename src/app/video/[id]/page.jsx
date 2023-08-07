import HomepageLayout from "@/Component/HomepageLayout/HomepageLayout";
import VideoPages from "@/Pages/VideoPages/VideoPages";
 
const video = async ({ params: { id } })=>{
    return (
        <HomepageLayout>
      
     <VideoPages id={id}/>
       
       </HomepageLayout>
    )
}

export default video;