import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setUser } from '../../redux/appSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

function Navbar() {
    const [input, setInput] = useState("");
    const [showPopup, setShowPopup] = useState(false); // State for popup visibility
    const dispatch = useDispatch();
    const {user} = useSelector(store=>store.appSlice)

    useEffect(() => {
        dispatch(setSearchText(input));
    }, [input, dispatch]);

    const handleProfileClick = () => {
        setShowPopup(prev => !prev); // Toggle popup visibility
    };

    const handleLogout = () => {
        // Handle logout functionality here
        signOut(auth).then(()=>{
            dispatch(setUser(null));
        }).catch((error)=>{
            console.log(error)
        })
        console.log("Logout");
        setShowPopup(false); // Hide popup after logout
    };

    return (
        <div className="relative flex items-center justify-between mx-4 h-16">
            <motion.div
                className="flex items-center gap-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-2">
                    <motion.div
                        className="p-3 rounded-full hover:bg-gray-100"
                        whileTap={{ scale: 0.95 }}
                    >
                        <RxHamburgerMenu size={"20px"} />
                    </motion.div>
                    <img className='w-8' src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_128px.png" alt="gmail logo" />
                    <h1 className='text-2xl text-gray-500 font-medium mr-4'>Gmail</h1>
                </div>
            </motion.div>

            <motion.div
                className="md:block hidden w-[50%] mr-60"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
                    <IoIosSearch size={"24px"} className='text-gray-700' />
                    <input
                        type="text"
                        placeholder='search mail'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='rounded-full w-full bg-transparent outline-none px-1'
                    />
                </div>
            </motion.div>

            <motion.div
                className="md:block hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-2">
                    <motion.div
                        className="p-3 rounded-full hover:bg-green-100 cursor-pointer"
                    >
                        <CiCircleQuestion size={"30px"} />
                    </motion.div>
                    <motion.div
                        className="p-3 rounded-full hover:bg-green-100 cursor-pointer"
                    >
                        <IoIosSettings size={"30px"} />
                    </motion.div>
                    <motion.div
                        className="p-3 rounded-full hover:bg-green-100 cursor-pointer"
                    >
                        <PiDotsNineBold size={"30px"} />
                    </motion.div>
                    <motion.div
                        className="cursor-pointer relative"
                        onClick={handleProfileClick}
                    >
                        <img className='rounded-full h-8 w-8' src={user?.photoURL} alt="" />
                        {showPopup && (
                            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md p-4 w-48 z-20">
                                <p className="text-gray-700 mb-2">Are you sure you want to logout?</p>
                                <button 
                                    onClick={handleLogout} 
                                    className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default Navbar;
