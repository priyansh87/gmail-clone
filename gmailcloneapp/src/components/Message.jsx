import React from 'react';
import { MdCropSquare } from 'react-icons/md';
import { RiStarLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedEmail } from '../redux/appSlice';

function Message({ email }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openMail = () => {
        dispatch(setSelectedEmail(email));
        navigate(`/mail/${email.id}`);
    };

    return (
        <motion.div
            onClick={openMail}
            className='flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm bg-white hover:bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="flex items-center gap-3">
                <div className="flex-none text-gray-400 hover:text-blue-600 transition-colors">
                    <MdCropSquare className='w-5 h-5' />
                </div>
                <div className="flex-none text-gray-400 hover:text-yellow-500 transition-colors">
                    <RiStarLine className='w-5 h-5' />
                </div>
            </div>
            <div>
                <h1 className='font-semibold mx-2'>{email?.to} : </h1>
            </div>

            <div className='flex-1 ml-4'>
                <p className='text-gray-700 truncate inline-block max-w-full'>{email?.message}</p>
            </div>

            <div className="flex-none text-gray-500 text-sm">
                <p>{new Date(email?.createdAt?.seconds * 1000).toLocaleDateString()} {new Date(email?.createdAt?.seconds * 1000).toLocaleTimeString()}</p>
            </div>
        </motion.div>
    );
}

export default Message;
