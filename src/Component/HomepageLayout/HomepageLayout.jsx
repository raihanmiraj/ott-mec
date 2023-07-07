"use client" 
import Sidebar from '@/Component/Sidebar/Sidebar';

import { useState } from 'react'
const HomepageLayout = ({children}) => {
    const [sidebarExtend, setSidebarExtend] = useState(false);
    return (
        <>
         <Sidebar sidebarExtend = {sidebarExtend} setSidebarExtend={setSidebarExtend}/>
            <div className={`pl-0  ${sidebarExtend ? "sm:pl-[180px]" : "sm:pl-[70px]"} feedGrid grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-[4%] pt-20 mx-3 sm:ml-4 md:pr-[28px] lg:pr-14 gap-y-6 max-w-[100%] bg-contain `}>{children}
  </div>
        </>
    );
}

export default HomepageLayout;
