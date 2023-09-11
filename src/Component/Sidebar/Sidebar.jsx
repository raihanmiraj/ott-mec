"use client"
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NavLink from '../NavLink/NavLink';

const Sidebar = ({sidebarExtend,setSidebarExtend}) => {
 const [navActive, setNavActive] = useState('home')
 const router = useRouter()
 
 
 console.log(router.asPath  )
  return (
    <>
    <Navbar setSidebarExtend={setSidebarExtend} sidebarExtend={sidebarExtend}/>
  <>
  <div className="absolute w-[10%] bg-[#fff] top-20 hidden sm:block">
    <div className="flex flex-col gap-y-6 fixed z-20">
    <NavLink
                
                href={"/"}
                activeClassName="bg-gray-100 rounded-lg"
                exact={"/"}
               
              >
        <div
          className={`flex items-center gap-x-4 ml-2 px-2 py-2 ${router.pathname=='home' && 'bg-gray-100 rounded-lg'}`}
        
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 22, width: 30 }}
          >
            <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" />
          </svg>
          <h4 className={`text-md font-semibold tracking-wide ${sidebarExtend?"":"hidden"}`}>Home</h4>
        </div>
      </NavLink>


      <NavLink
                
                href={"/dept/eee"}
                activeClassName="bg-gray-100 rounded-lg"
               
              >
              <div
          className={`flex items-center gap-x-4 ml-2 px-2 py-2 ${navActive=='eee' && 'bg-gray-100 rounded-lg'}`}
         
        >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>

          <h4 className={`text-md font-semibold tracking-wide ${sidebarExtend?"":"hidden"}`}>EEE</h4>
        </div>
              </NavLink>




      
     
              <NavLink
                
                href={"/dept/cse"}
                activeClassName="bg-gray-100 rounded-lg"
               
              >
        <div
         className={`flex items-center gap-x-4 ml-2 px-2 py-2 ${navActive=='cse' && 'bg-gray-100 rounded-lg'}`}
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
</svg>

          <h4 className={`text-md font-semibold tracking-wide ${sidebarExtend?"":"hidden"}`}>CSE</h4>
        </div>
        </NavLink>
        <NavLink
                
                href={"/dept/civil"}
                activeClassName="bg-gray-100 rounded-lg"
               
              >
        <div
         className={`flex items-center gap-x-4 ml-2 px-2 py-2 ${navActive=='civil' && 'bg-gray-100 rounded-lg'}`}
        >
           <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 22, width: 30 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
            />
          </svg>
          <h4 className={`text-md font-semibold tracking-wide ${sidebarExtend?"":"hidden"}`}>Civil</h4>
        </div>
        </NavLink>
    
    </div>
  </div>
  <div className={`pr-5 md:hidden block sm:hidden bg-[#ffff] top-[60px] fixed z-10 transition ease-in-out delay-150 h-[100vh] ${sidebarExtend?"":'hidden'}`}>
   
    <div className=" flex flex-col gap-y-6">
      <button>
        <div
          className="flex items-center gap-x-4 ml-2 px-2 py-2"
          style={{ backgroundColor: "rgb(242, 242, 242)", borderRadius: 10 }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 22, width: 30 }}
          >
            <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" />
          </svg>
          <h4 className={`text-md font-semibold tracking-wide ${sidebarExtend?"":"hidden"}`}>Home</h4>
        </div>
      </button>
      <button>
        <div
          className="flex items-center gap-x-4 ml-2 px-2 py-2"
          style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: 0 }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            version="1.2"
            baseProfile="tiny"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 22, width: 30 }}
          >
            <g>
              <path d="M7.828 19c-.801 0-1.555-.312-2.121-.879l-5.121-5.121 5.121-5.121c1.133-1.134 3.112-1.134 4.243.001 1.169 1.168 1.169 3.072-.001 4.241l-.878.879.878.879c1.17 1.169 1.17 3.073 0 4.242-.564.567-1.318.879-2.121.879zm-4.414-6l3.707 3.707c.38.379 1.039.377 1.413.001.391-.391.391-1.025.001-1.415l-2.292-2.293 2.292-2.293c.39-.39.39-1.024 0-1.414-.378-.379-1.036-.377-1.414 0l-3.707 3.707zM16.172 19c-.803 0-1.557-.312-2.122-.88-1.169-1.168-1.169-3.072.001-4.241l.878-.879-.878-.879c-1.17-1.169-1.17-3.073 0-4.242 1.129-1.133 3.109-1.134 4.242 0l5.121 5.121-5.121 5.121c-.566.567-1.32.879-2.121.879zm-.001-10c-.267 0-.518.104-.705.292-.391.391-.391 1.025-.001 1.415l2.292 2.293-2.292 2.293c-.39.39-.39 1.024 0 1.414.377.378 1.035.379 1.414 0l3.707-3.707-3.707-3.707c-.19-.189-.441-.293-.708-.293z" />
            </g>
          </svg>
          <h4 className={`text-md font-semibold tracking-wide ${sidebarExtend?"":"hidden"}`}>React JS</h4>
        </div>
      </button>
      <button>
        <div
          className="flex items-center gap-x-4 ml-2 px-2 py-2"
          style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: 0 }}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 22, width: 30 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
            />
          </svg>
          <h4 className={`text-md font-semibold tracking-wide ${sidebarExtend?"":"hidden"}`}>DuaLipa</h4>
        </div>
      </button>
      <button>
        <div
          className="flex items-center gap-x-4 ml-2 px-2 py-2"
          style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: 0 }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 22, width: 30 }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
          </svg>
          <h4 className={`text-md font-semibold tracking-wide ${sidebarExtend?"":"hidden"}`}>Comedy</h4>
        </div>
      </button>
      <button>
        <div
          className="flex items-center gap-x-4 ml-2 px-2 py-2"
          style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: 0 }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 22, width: 30 }}
          >
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
          </svg>
          <h4 className={`text-md font-semibold tracking-wide ${sidebarExtend?"":"hidden"}`}>Technology</h4>
        </div>
      </button>
      <button>
        <div
          className="flex items-center gap-x-4 ml-2 px-2 py-2"
          style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: 0 }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 22, width: 30 }}
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={32}
              d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64m258-80c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40"
            />
            <path
              fill="none"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={32}
              d="M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97"
            />
            <path
              fill="none"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={32}
              d="M256 480h139.31a32 32 0 0031.91-29.61L463 112"
            />
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M368 112l16-64 47-16"
            />
            <path
              fill="none"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={32}
              d="M224 112h256"
            />
          </svg>
          <h4 className={`text-md font-semibold tracking-wide ${sidebarExtend?"":"hidden"}`}>Food</h4>
        </div>
      </button>
      <button>
        <div
          className="flex items-center gap-x-4 ml-2 px-2 py-2"
          style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: 0 }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 22, width: 30 }}
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={32}
              d="M448 225.64v99a64 64 0 01-40.23 59.42l-23.68 9.47A32 32 0 00364.6 417l-10 50.14A16 16 0 01338.88 480H173.12a16 16 0 01-15.69-12.86L147.4 417a32 32 0 00-19.49-23.44l-23.68-9.47A64 64 0 0164 324.67V224c0-105.92 85.77-191.81 191.65-192S448 119.85 448 225.64z"
            />
            <circle
              cx={168}
              cy={280}
              r={40}
              fill="none"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={32}
            />
            <circle
              cx={344}
              cy={280}
              r={40}
              fill="none"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={32}
            />
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M256 336l-16 48h32l-16-48zm0 112v32m-48-32v32m96-32v32"
            />
          </svg>
          <h4 className={`text-md font-semibold tracking-wide ${sidebarExtend?"":"hidden"}`}>Travis Scott</h4>
        </div>
      </button>
      <button>
        <div
          className="flex items-center gap-x-4 ml-2 px-2 py-2"
          style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: 0 }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 22, width: 30 }}
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
          <h4 className={`text-md font-semibold tracking-wide ${sidebarExtend?"":"hidden"}`}>
            Olivia Rodrigo
          </h4>
        </div>
      </button>
    </div>
  </div>
  <div className={`sm:hidden fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-1 cursor-pointer overlayEffect ${sidebarExtend ? "block" : "hidden"}`}></div>
</>



    </>
  );
}

export default Sidebar;
