import HomepageLayout from "@/Component/HomepageLayout/HomepageLayout";
import SearchPage from "@/Pages/SearchPage/SearchPage";
 

const category = async ({ params: { name } })=>{
    return (
        <HomepageLayout>
      
           <SearchPage name={name} />
       
       </HomepageLayout>
    )
}

export default category;