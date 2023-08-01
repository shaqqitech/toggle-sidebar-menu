"use client";

import { useState } from "react";
import { RxCross2 } from 'react-icons/rx';
import{ GiHamburgerMenu } from 'react-icons/gi';
import{ FcFeedback } from 'react-icons/fc';
import{ FiSettings } from 'react-icons/fi';
import{ AiFillContacts, AiFillSafetyCertificate } from 'react-icons/ai';
import{ VscProject } from 'react-icons/vsc';
import {
  FaHome,
  FaIdBadge,
  FaUniversity,
} from "react-icons/fa";

export default function Home() {
  const [open, setOpen] = useState(false);

  const mapList = [
    { name: "Home", icon: <FaHome size={25} /> },
    { name: "Education", icon: <FaUniversity size={25} /> },
    { name: "Projects", icon: <VscProject /> },
    { name: "Certificates", icon: <AiFillSafetyCertificate size={25} /> },
    { name: "Contact", icon: <AiFillContacts size={25} /> },
    { name: "Feedback", icon: <FcFeedback size={25} /> },
    { name: "Settings", icon: <FiSettings size={25} /> },
  ];

  const handleClick = () =>{
    setOpen(!open)
  }

  return (
    <>
    <div className={`absolute right-6 cursor-pointer w-10 h-10`} onClick={handleClick}>
      {open ? <RxCross2  size={25} style={{position: "absolute", right: 25, cursor: "pointer"}} /> : <GiHamburgerMenu  size={25} style={{position: "absolute", right: 25, cursor: "pointer"}} />}
    </div>
      
      <div className={`${open ? 'w-48' : 'w-16' } duration-500 ease-out h-[90vh] flex justify-start bg-gray-800 mx-5 my-8 rounded-r-xl p-2 relative`}>
        <div className=" w-full h-full relative flex justify-start flex-col">
          {mapList.map((item, ind) => {
            return (
              <div className="h-[100%] w-full p-3 flex justify-between items-center" >
                <div className="cursor-pointer h-[100%] w-7 flex justify-center items-center flex-col fixed" key={ind}>
                  {item.icon}
                </div>
                <div className={`${open ? 'translate-x-0' : 'opacity-0 -translate-x-16 text-[5px]'} duration-500 w-full ml-12 text-lg font-semibold cursor-pointer`}>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
