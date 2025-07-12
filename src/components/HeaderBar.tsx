import React from 'react';
import { TbLayoutSidebarRightFilled } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io"
import { FaRegUser } from "react-icons/fa6";
export const HeaderBar = () => {
    const tabs = ['Workspace', 'Folder 2', 'Spreadsheet 3'];
    return (
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 p-4 border-b-[2px] border-b-[#F6F6F6] bg-white text-[#AFAFAF] font-medium text-[.8rem]">
          <span className='flex gap-2 items-center'>
            <TbLayoutSidebarRightFilled className='text-[#4b6a4fd4] text-2xl '/>
            {tabs.map((tab,idx) => (
                <button
                key={tab}
                    onClick={() => console.log(`Switched to ${tab}`)}
                    className={`hover:text-[#4b6a4fd4] ${idx!=2?"":"text-black"} flex gap-1 items-center`}
                    >
                    {tab}
                    {
                        idx!=2 ? 
<MdKeyboardArrowRight className=' text-xl '/>:<HiOutlineDotsHorizontal className='ml-2  text-xl '/>
}    
                </button>
            ))}
            </span>
            <span className='flex items-center gap-4'>
                <span className='flex items-center gap-1.5 bg-[#F6F6F6] rounded-md px-2 py-2'>

                <CiSearch className='text-[#757575] text-[1rem] '/>
                <input onChange={(e) => console.log(e.target.value)} placeholder='Search within sheet' type='text' className='border-none outline-none w-[7rem] text-[.7rem] text-[#757575] placeholder:text-[#757575]'/>
                </span>
                <span onClick={() => console.log('Notifications')} className='relative'>
                    <IoMdNotificationsOutline className='text-[#757575] text-[1.4rem] '/>
                    <span className='absolute top-[-.3rem] right-[-.2rem] py-[.03rem] px-[.3rem] bg-[#4B6A4F] text-white border-2 border-white text-[.5rem] flex items-center justify-center rounded-full'>2</span>
                </span>
                <span onClick={() => console.log('Profile')} className='flex items-center gap-1.5'>
                    <span className='bg-[#EEEEEE] rounded-full p-2 flex items-center justify-center'>

                    <FaRegUser className='text-[#757575] text-[1rem] '/>
                    </span>
                    <span className='flex flex-col items-start text-[.7rem]'>
                        <h5 className='text-[#000000] font-medium leading-2.5'>John Doe</h5>
                        <p className='text-[.6rem]'>John.doe@gmail.com</p>
                    </span>

                </span>
            </span>
        </div>
    );
};