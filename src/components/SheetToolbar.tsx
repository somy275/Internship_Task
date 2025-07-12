import React from 'react';
import { FaAnglesRight } from "react-icons/fa6";
import { VscEyeClosed } from "react-icons/vsc";
import { BiSortAlt2 } from "react-icons/bi";
import { IoFilterSharp } from "react-icons/io5";
import { TbViewportTall } from "react-icons/tb";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiArrowLineUp } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { PiArrowsMerge } from "react-icons/pi";
export const SheetToolbar = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center  lg:justify-between p-2 border-b-2 border-solid border-[#F6F6F6]">
      <div className="flex flex-wrap justify-center md:justify-baseline gap-1">
      <button onClick={() => console.log('Tool bar')} className="flex  items-center font-semibold cursor-pointer px-4 py-2 border-r-2 border-solid border-[#e6e3e3]  text-sm hover:bg-gray-100">
        Tool bar
        <FaAnglesRight className='ml-1' />
        </button>
        <button onClick={() => console.log('Hide fields')} className="flex items-center px-4 py-2 font-semibold   text-sm hover:bg-gray-100">
          <VscEyeClosed className='mr-1 text-xl' />
          Hide fields
        </button>
      
        <button onClick={() => console.log('Sort')} className="flex items-center px-4 py-2 font-semibold rounded-md  text-sm hover:bg-gray-100">
          <BiSortAlt2 className='mr-1 text-xl' />
          Sort
        </button>
        <button onClick={() => console.log('Filter')} className="flex items-center px-4 py-2 font-semibold rounded-md  text-sm hover:bg-gray-100">
         <IoFilterSharp className='mr-1 text-xl' />
          Filter
        </button>
      <button onClick={() => console.log('Cell view')} className="flex items-center px-4 py-2 font-medium rounded-md  text-sm hover:bg-gray-100">
          <TbViewportTall className='mr-1 text-xl' />
          Cell view
        </button>
      </div>
      <div className='flex flex-wrap justify-center md:justify-baseline gap-2'>
      <button onClick={() => console.log('Import')} className="flex items-center px-3 py-1.5 font-semibold rounded-md text-sm text-[#545454] border-1 border-gray-200 hover:bg-gray-100 cursor-pointer">
        <LiaDownloadSolid className='mr-1 text-xl'/>
        Import
      </button>
      <button onClick={() => console.log('Export')} className="flex items-center px-3 py-1.5 font-semibold rounded-md text-sm text-[#545454] border-1 border-gray-200 hover:bg-gray-100 cursor-pointer">
       <PiArrowLineUp className='mr-1 text-xl'/>
        Export
      </button>
      <button onClick={() => console.log('Share')} className="flex items-center px-4 py-2 font-semibold rounded-md text-[#545454] text-sm border-1 border-gray-200 hover:bg-gray-100 cursor-pointer">
       <FaRegShareFromSquare className='mr-1 text-xl'/>
        Share
      </button>
      <button onClick={() => console.log('New Action')} className="flex items-center px-4 py-2 font-medium rounded-md bg-[#4B6A4F] text-white text-sm hover:bg-[#4b6a4fd4] cursor-pointer">
       <PiArrowsMerge className='mr-1 text-xl'/>
        New Action
      </button>
      </div>
    </div>
  );
};
