"use client"
  import AuthContext from '@/context/AuthContext';
import React, { useContext } from 'react';

const loginPage = () => {
      const {user, googleLogin} = useContext(AuthContext);
    return (
        <section className="h-screen w-full bg-black text-white flex justify-center items-center px-4 md:px-0">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 text-2xl font-semibold items-center">
            <div className="border-b-4 py-2">Login</div>
            <div className="py-2 text-gray-500">Subscribe Now</div>
          </div>
          <div className="flex flex-col gap-5 ">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email"
              className="p-2 rounded-sm text-black outline-0"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              className="p-2 rounded-sm text-black outline-0"
            />
            <button className="bg-[#f4181c] p-3 rounded-sm">Login</button>
            <a href="#">Forgot Password?</a>
          </div>
          <div className="grid grid-cols-2 gap-4 text-black text-[10px] md:text-sm">
          <button onClick={googleLogin}  className="flex items-center bg-white  px-2 md:px-8 py-1 md:py-3 rounded-lg font-semibold">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="38px"
            height="30px"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
        </span>
        <span>Sign In With Gogole</span>
      </button>
          </div>
        </div>
      </section>
      
      
    );
}

export default loginPage;
