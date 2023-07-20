"use client" 
import Sidebar from '@/Component/Sidebar/Sidebar';

import { useState } from 'react'
const HomepageLayout = ({children}) => {
    const [sidebarExtend, setSidebarExtend] = useState(false);
    return (
        <>
         <Sidebar sidebarExtend = {sidebarExtend} setSidebarExtend={setSidebarExtend}/>
            <div className={`pl-0  ${sidebarExtend ? "sm:pl-[180px]" : "sm:pl-[70px]"}  `}>{children}
  </div>
        </>
    );
}

export default HomepageLayout;
