import HomepageLayout from "@/Component/HomepageLayout/HomepageLayout";
import CategoryPage from "@/Pages/CategoryPage/CategoryPage";

const category = async ({ params: { name } })=>{
    return (
        <HomepageLayout>
      
           <CategoryPage name={name} />
       
       </HomepageLayout>
    )
}

export default category;