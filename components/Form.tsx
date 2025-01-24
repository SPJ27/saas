import React from 'react'

const Form = () => {
  return (
    <>
    <div className='h-96 max-w-xl shadow-2xl rounded-xl bg-white p-4'>
        <form action="#">
            <label htmlFor="title" className='text-[#4e5965] font-medium'>Title</label>
            <input className="text-[#4e5965] mb-6 w-full font-medium border-[#d4d4d4] border-[0.5px] shadow-md outline-none rounded-md px-3 py-1" type="text" name="title" id="title" />
            <label htmlFor="title" className='text-[#4e5965] font-medium'>Characters</label>
            <input className="text-[#4e5965] w-full font-medium border-[#d4d4d4] border-[1px] shadow-md outline-none rounded-md px-3 py-1" type="text" name="char" id="char" />
        </form>
    </div>
    </>
  )
}

export default Form