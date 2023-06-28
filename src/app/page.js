import Image from 'next/image'
import imglogo from '@/assets/logo/logo.png'
export default function Home() {
  return (
 <>
 
 <div id="root">
  <div className="h-[50px] fixed z-10 bg-[#ffff] w-[100%]">
    <nav className="flex h-[60px] items-center space-x-2 lg:space-x-20 xl:space-x-64">
      <div className="flex items-center space-x-4 ml-3 -mt-4 pl-2">
        <button className="">
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
        <a className="w-32" href="/">
          {/* <img
            className="w-32"
            src="/static/media/ytLogo.4f4677b1b0aa581fee6e.png"
            alt=""
          /> */}
          <Image
          src={imglogo}
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
            {" "}
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
  <div className="absolute w-[10%] bg-[#fff] top-20 hidden sm:block">
    <div className="flex flex-col gap-y-6 fixed z-20">
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
        </div>
      </button>
    </div>
  </div>
  <div className=" block sm:hidden bg-[#ffff] top-0 fixed z-10 transition ease-in-out delay-150 h-[100vh]">
    <div className="hidden flex items-center space-x-4 ml-3 -mt-4 pl-2">
      <button className="">
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
        <img
          className="w-32"
          src="/static/media/ytLogo.4f4677b1b0aa581fee6e.png"
          alt=""
        />
      </a>
    </div>
    <div className=" flex flex-col gap-y-6" />
  </div>
  <div className="sm:hidden overlayEffect hidden" />
  <div className="pl-0  sm:pl-[70px] feedGrid grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-[4%] pt-20 mx-3 sm:ml-4 md:pr-[28px] lg:pr-14 gap-y-6 max-w-[100%] bg-contain ">
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/-VDXBHLU8q4/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              How I Learned to Code in 4 MONTHS &amp;amp; Got a Job Offer (no{" "}
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Internet Made Coder
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/66tfvFeALBQ/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              How to ACTUALLY learn to code... 7 Roadmaps for 2023
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Fireship
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                5 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/A4_TFHzqAAg/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              How to get rich as a solo software developer - The Ultimate{" "}
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Fireship
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/bP7ZBMYpRwc/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Competitive Coding vs Development | What to do for Placement
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Apna College
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/iO1mwxPNP5A/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Masterclass: AI-driven Development for Programmers
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Fireship
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                2 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/jhILOSndbBA/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              What Is The Difference Between Computer Programmer And Softw
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                James Cross
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                2 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/eKqY-oP1d_Y/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              How to Start Coding? Learn Programming for Beginners
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Apna College
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/k9WqpQp8VSU/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              How I Would Learn To Code (If I Could Start Over)
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Namanh Kapur
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/5YmCTVeiiTI/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Frontend Developer Roadmap Key Steps for Success. #programmi
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Quickcodetips
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                9 day ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/6DYjWGfvM3s/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              The HARDEST part about programming 🤦‍♂️ #code #programming{" "}
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Coding with Lewis
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                2 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/qS4mvrWWO_M/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              How I Plan My Coding Projects
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                ForrestKnight
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/J6rVaFzOEP8/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Guide To Becoming A Self-Taught Software Developer
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Traversy Media
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                3 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/2vTZ_0dpG-0/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              What is the difference between coder , programmer and develo
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                I know python
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                2 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/ORCd0lul9mE/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              FASTEST Way to Learn to Code and ACTUALLY Get a Job (in 2023
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Internet Made Coder
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                7 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/AZ0ja83nMVc/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Coding vs Programming | What Is The Difference Between Codin
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Simplilearn
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                2 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/lwPRcO8mgtc/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              The Ugly TRUTH About Programming in 2023 (what you MUST know
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Internet Made Coder
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                29 day ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/CIRGjwYgdT4/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Programming vs Coding - What&amp;#39;s the difference?
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Aaron Jack
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                2 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/sf4x8U3mJF0/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              1000 Days of Coding in 10 Minutes ( Self-Taught Developer Jo
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                lloyd
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                4 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/l6hjm7kFcPo/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              3 Developer Roadmaps That Actually Work
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Power Couple
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                4 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/iiVN99pAg_8/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Software Engineer vs Software Developer
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                ThePrimeTime
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                13 day ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/brAwZ5l_fuQ/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Coding won’t exist in 5 years? You might be right.
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                ForrestKnight
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                3 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/q5xyh5xYEb0/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              FASTEST Way to Get a Coding Job in 2023
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Internet Made Coder
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/_gW2vf5Yd2Y/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              I Spent 6 HOURS Researching The Coding Job Market… Here’s Wh
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Devslopes
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/6gibI4Fo1R8/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              My ChatGPT 4 Workflow &amp;amp; Tips as a Software Engineer
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Marko
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                3 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/X-cdWlx7hQI/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Why is Coding Important?
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Apna College
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/Ws6zCMdp9Es/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              The Harsh Reality of Being a Software Engineer
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Gyasi Linje
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/A1IOZUCTOkM/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              15&amp;quot; MacBook Air | developer&amp;#39;s dream
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Alex Ziskind
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                13 day ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/ccq9hu2toTI/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Software Engineer Vs Developer Vs Programmer | We Talk Digit
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                We Talk Digital
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/AjCJtT_qkKI/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              How to make money from Coding? 5 ways to earn without a job{" "}
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Apna College
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/CX0V_hspEZU/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Make money with coding.. What you&amp;#39;re NOT being told!
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Dorian Develops
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/QBI8mQZWGxE/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Software Development or Competitive Coding? | Is FAANG Overh
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Ishan Sharma
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/oC483DTjRXU/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              The 1 Coding Project Idea Guaranteed To Get You A Software D
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Coder Foundry
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                4 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/vej8Hjl1gbw/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Senior VS Junior 😂 | Funny Developer | Short 🔥
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Different Developer
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                2 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/BkzYfW1H8LI/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              FASTEST Way to Learn Coding and ACTUALLY Get a Job
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Namanh Kapur
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                10 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/YFlpYlmAiXU/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Competitive Programming (or) Development?
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Tanay Pratap
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                2 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/761MnGnfII8/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              3 FREE Coding Bootcamps For College Students 🔥 | Ishan Shar
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Ishan Sharma
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                7 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/zNq4dB2FzcQ/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              How to get into coding for beginners #shorts
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Ray Fu
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/M5QY2_8704o/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Chillstep Music for Programming / Cyber / Coding
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Chill Music Lab
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                3 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/F7XGddoTxrA/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Falling in Love with Web Development | Kyle Cook - @WebDevSi
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Beyond Coding
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                8 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/KrdQYtEj8tA/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Coder vs Programmer vs Developer | HINDI
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                TechFryDay
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                2 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/GnD7IQ48IQE/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Coding motivation: slow and steady wins the race 🐢🏁
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Coder Coder
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/QBSj1zvttr0/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              The Great Software Engineering Panic Of 2023
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Clément Mihailescu
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                5 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/DZjrmtFUsrE/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              5 Easiest Coding Language to learn (my opinion)
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Apna College
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                7 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/rpa5900OpQ4/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              How to Learn Coding for Beginners [ Sharing My Experience ]
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Technology Gyan
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                2 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/g9fIWtSexLs/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              ALL Python Programmers Should Know This!! #python #programmi
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                b001
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                7 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/MugtkoKJYWg/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Watch this before you get the M2 Max Macbook Pro for coding{" "}
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Engineering with Utsav
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                4 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/na5mHOSSydE/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Backend engineers be like... #coding #softwareengineer #deve
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Your Average Tech Bro
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                2 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/B3yuK2XHmvM/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Is ChatGPT actually useful for coding?
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Web Dev Cody
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                6 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/AJ8t4-9y4aI/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Is Coding Bootcamp Worth It in 2022?
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                Peter Elbaum
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                1 year ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 0 }}>
      <div className="w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent">
        <img
          className="md:w-56 lg:w-72 rounded-[12px] videoImage"
          src="https://i.ytimg.com/vi/ab6xJ4E23VQ/mqdefault.jpg"
        />
        <div className="flex w-[100%] gap-x-3 items-start mt-2">
          <div>
            <h3 className="text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]">
              Why I QUIT Coding (as an ex-Google programmer). ChatGPT won&amp;
            </h3>
            <div className="mt-1">
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide">
                TechLead
              </p>
              <p className="text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1">
                2 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

 
 </>
  )
}
