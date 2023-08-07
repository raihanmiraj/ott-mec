
"use client"
import { AuthContext } from '@/Provider/AuthContextProvider';
import imglogo from '@/assets/logo/logo.png'
 
 
import Image from 'next/image'
import Link from 'next/link';
 import { useContext } from 'react';
const Navbar =  ({sidebarExtend,setSidebarExtend}) => {
 
  const {user,logOut} = useContext(AuthContext)
 
  return (
    <>
      <div className=" fixed z-10 bg-[#ffff] w-[100%]">
        {/* {displayName} */}
  <nav className="flex py-1 items-center justify-between">
    <div className="flex items-center space-x-4 ml-3 -mt-4 pl-2">
      <button className="z-[99999]" onClick={()=>setSidebarExtend(sidebarExtend?false:true)}  >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <Link href="/">
          <Image
      src={imglogo}
      width={128}
      height={50}
    
      alt="Picture of the author"
    
    />
      </Link>
    </div>
    <form className="-mt-3">
      <div className="relative w-[170px] sm:w-[420px] ">
        <input
          type="search"
          name="search"
          id="default-search"
          className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-[1px] border-[#cccccc] focus:outline-none"
          placeholder="Search"
          required=""
        />
        <button
          type="submit"
          className="text-white absolute right-0 bottom-0 top-0 font-medium text-sm px-4 py-2 bg-[#f8f8f8] border-[1px] border-[#cccccc]"
        >
       
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
   {user ? <>
   
    <div className="dropdown dropdown-end pr-0 md:pr-12">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user && user.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><button type='button' onClick={user && logOut}>Logout</button></li>
      </ul>
    </div>
   </>:
   <div className='pr-0 md:pr-12'>
   <Link href="/login" className='px-5 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold'>Login</Link>
   </div>
   }
  </nav>
</div>

    </>
  );
}

export default Navbar;
