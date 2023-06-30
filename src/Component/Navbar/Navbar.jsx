
"use client"
import imglogo from '@/assets/logo/logo.png'
import Image from 'next/image'
const Navbar = ({sidebarExtend,setSidebarExtend}) => {
  return (
    <>
      <div className=" fixed z-10 bg-[#ffff] w-[100%]">
  <nav className="flex py-1 items-center space-x-2 lg:space-x-20 xl:space-x-64">
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
      <a href="/">
        {/* <img
          className="w-32"
          src="https://youtubeclone-farhan.netlify.app/static/media/ytLogo.4f4677b1b0aa581fee6e.png"
          alt=""
        /> */}
          <Image
      src={imglogo}
      width={128}
      height={50}
    
      alt="Picture of the author"
    
    />
      </a>
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
  </nav>
</div>

    </>
  );
}

export default Navbar;
