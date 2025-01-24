import React from "react";

const Notes = () => {
  return <>
  <div className="flex shadow-xl py-6 px-24 items-center bg-white">
    {/* Icon */}
    <div className="mr-4 items-center">
    <svg className="items-center" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3"/></svg>    </div>
    {/* Text */}
    <div className="items-center">
        <h1 className="flex text-sm font-medium text-blue-600 mb-0 pb-0 ">Beta</h1>
        <h1 className="flex text-3xl font-medium text-[#191919] mb-1 mt-0 pt-0  tracking-tighter ">Notes Generator From Text</h1>
        <h1 className="text-sm font-medium text-[#616161]  mb-4">Utilize generate notes based on the text input using our advanced large language models to improve your notes</h1>
    </div>
  </div>
  </>;
};

export default Notes;
