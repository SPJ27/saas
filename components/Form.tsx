import React from "react";

const Form = () => {
  return (
    <>
      <div className="h-96 max-w-xl shadow-2xl rounded-xl bg-white p-4">
        <div className="flex items-center mb-4">
          <svg
            className="mr-4 items-center"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="#2563EB"
          >
            <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-1.227 9.537c1.75 0 3.31.401 4.653 1.206.2.117.317.236.317.532 0 .288-.234.5-.498.5-.129 0-.217-.045-.338-.119-1.16-.7-2.605-1.07-4.14-1.07-.856 0-1.717.11-2.523.278-.13.028-.296.079-.394.079a.5.5 0 0 1-.507-.503c0-.336.194-.503.436-.55a13.357 13.357 0 0 1 2.994-.353zm-.11-2.613c2.094 0 4.12.522 5.712 1.475.267.153.366.347.366.632a.622.622 0 0 1-.624.627c-.173 0-.283-.07-.4-.14-1.302-.771-3.106-1.285-5.08-1.285-1.014 0-1.888.142-2.612.335-.156.043-.243.09-.389.09a.626.626 0 0 1-.625-.628c0-.34.165-.574.498-.668.9-.247 1.817-.438 3.154-.438zm.163-2.749c2.35 0 4.82.484 6.626 1.544.243.138.412.346.412.726 0 .437-.35.75-.754.75-.163 0-.26-.04-.413-.123-1.448-.868-3.695-1.347-5.868-1.347-1.085 0-2.186.11-3.196.385-.116.029-.263.087-.41.087a.75.75 0 0 1-.754-.764c0-.435.27-.68.56-.765 1.14-.336 2.413-.493 3.797-.493z" />
          </svg>
          <div className="items-center ">
            <p className="text-lg tracking-tighter font-semibold p-0  items-center text-[#1b1a20]">
              Entry Text
            </p>
            <p className="text-xs tracking-tighter font-sm items-center text-[#818181]">
              Enter the information to generate notes
            </p>
          </div>
        </div>

        <form action="#">
          <label htmlFor="title" className="text-[#4d545e] font-medium">
            Title
          </label>
          <input
            className="text-[#4d545e]  w-full font-medium border-[#d4d4d4] border-[0.5px]  outline-none rounded-md px-3 py-1"
            type="text"
            name="title"
            id="title"
          />
          <p className="mb-4 text-sm text-[#b6b7b9]">
            Enter the topic of your notes
          </p>
          <label htmlFor="title" className="text-[#4d545e] font-medium">
            Characters
          </label>
          <input
            className="text-[#4d545e] w-full font-medium border-[#d4d4d4] border-[1px]  outline-none rounded-md px-3 py-1"
            type="text"
            name="char"
            id="char"
          />
        </form>
      </div>
    </>
  );
};

export default Form;
