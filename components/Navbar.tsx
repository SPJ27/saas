import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <>
      <div className="shadow-sm h-16 w-full px-24 items-center flex bg-white">
        {/* <h1 className="font-medium mr-5">Tokens: 5</h1> */}
        <div className=" ">
          <a
            href="#"
            className="flex items-center font-medium py-2 rounded px-5 text-white bg-[#191919]"
          ><svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>
            Tools
          </a>
        </div>
        <div className="flex flex-grow justify-end items-center">
          <h1 className="items-center flex font-light text-sm rounded-xl px-3 mr-3 bg-gray-200">
          <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>5 credits remain
          </h1>
          <a href="#" className="items-center flex font-light text-sm rounded py-1 px-3 mr-3 bg-yellow-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" className="mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9.5h20"/></svg>
            Upgrade
          </a>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <hr />
      
    </>
  );
};

export default Navbar;
