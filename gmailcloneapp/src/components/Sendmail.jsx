import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/appSlice';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';

function Sendmail() {
    const [formData, setFormData] = useState({
        to: "",
        subject: "",
        message: ""
    });

    const open = useSelector(store => store.appSlice.open);
    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, "emails"), {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            createdAt: serverTimestamp(),
        });

        dispatch(setOpen(false));
        setFormData({
            to: "",
            subject: "",
            message: ""
        });
    };

    return (
        <motion.div
            className={`fixed inset-0 z-50 ${open ? 'flex' : 'hidden'} items-center justify-center bg-gray-900 bg-opacity-50`}
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="bg-white max-w-lg w-full shadow-lg rounded-lg"
                initial={{ y: "-50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">New Message</h2>
                    <button
                        onClick={() => dispatch(setOpen(false))}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <RxCross2 size={"20px"} />
                    </button>
                </div>

                <form onSubmit={submitHandler} className="p-6 flex flex-col gap-4">
                    <input
                        onChange={changeHandler}
                        value={formData.to}
                        name='to'
                        type="text"
                        placeholder='To'
                        className='border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500 transition'
                    />
                    <input
                        onChange={changeHandler}
                        value={formData.subject}
                        name='subject'
                        type="text"
                        placeholder='Subject'
                        className='border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500 transition'
                    />
                    <textarea
                        onChange={changeHandler}
                        name="message"
                        value={formData.message}
                        placeholder='Message'
                        cols={30}
                        rows={6}
                        className='border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500 transition'
                    ></textarea>
                    <button
                        type='submit'
                        className='bg-blue-600 text-white rounded-full py-2 px-4 font-medium hover:bg-blue-700 transition'
                    >
                        Send
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
}

export default Sendmail;
