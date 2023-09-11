import HomepageLayout from "@/Component/HomepageLayout/HomepageLayout"; 
import DeptPage from "../../../Pages/DeptPage/DeptPage";

const category = async ({ params: { name } })=>{
    return (
        <HomepageLayout>
      
           <DeptPage name={name} />
       
       </HomepageLayout>
    )
}

export default category;