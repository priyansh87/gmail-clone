import React, { useState } from 'react'
import { LuPencil } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { MdOutlineDrafts } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';
function Sidebar() {

    const sidebarItems = [
        {
            icon :<LuPencil size={"24px"}/>, text : "Inbox" 
        },
        {
            icon :<IoMdStar size={"24px"}/>, text : "Starred" 
        },
        {
            icon :<MdOutlineWatchLater size={"24px"}/>, text : "Snoozed" 
        },
        {
            icon :<TbSend2 size={"24px"}/>, text : "Sent" 
        },
        {
            icon :<MdOutlineDrafts size={"24px"}/>, text : "Draft" 
        },
        {
            icon :<MdOutlineKeyboardArrowDown size={"24px"}/>, text : "more" 
        },

    ]

    // const [open , setOpen] = useState(false) ; // this is local state variable 
    const dispatch = useDispatch()

  return (
    <div className='w-[15%]'>
        <div className="p-3 flex flex-col gap-6">
            <button onClick={()=>dispatch(setOpen(true)) } className='flex items-center gap-6 p-4 rounded-2xl hover:shadow-md  bg-[#c2e7ff]'>
                <LuPencil size={"24px"}/>
                Compose
            </button>
            <div className="text-grey-500  flex flex-col gap-3">
                {
                    sidebarItems.map((item ,index)=>{
                        return <div key={index} className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200'>
                            {item.icon}
                            <p>{item.text}</p>
                        </div>
                    })
                }

            </div>
        </div>
    </div>
  )
}

export default Sidebar