
import { MdSend } from "react-icons/md";
import Logo from './Logo';
import { RxCross2 } from 'react-icons/rx';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {  toast } from 'react-toastify';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const ContactDoyer = ({isContactDoyar, setIsContactDoyar}) => {
    const [loading, setLoading] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_cjig19x', 'template_5baq578', form.current, '-MNh8pTpezRMWbUJW')
        .then(() => {
            toast.success("Send Successfully")
            setLoading(false)
            e.target.reset();
        }, (error) => {
            toast.success(error.text)
            setLoading(false)
        });
    };

    return (
        <div className="hidden md:block">
            {/* <div className="opacityDiv hidden w-full z-40 h-full backdrop-blur-lg bg-black bg-opacity-40 fixed top-0 left-0  "></div> */}
            <div className={`contactDoyaer  ${isContactDoyar ? 'translate-x-0' : 'translate-x-[360px]' }`}>
                <div>
                    <ul className="px-4  space-y-5 flex  flex-col">
                        <li className="flex items-center pt-4 justify-between">
                        <Logo />
                            <span onClick={() => setIsContactDoyar(!isContactDoyar)} className="cursor-pointer bg-[#222] text-gray-200 hover:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center">
                                <RxCross2 />
                            </span>
                        </li>
                        <hr className="border border-gray-800" />
                       
                        <li>
                            <p className="text-gray-500 text-base flex mb-2 items-center gap-x-2"> 
                                <span><MdOutlineEmail size={15} className="text-white" /></span>
                                <span>ebrahimit49@gmail.com</span>
                            </p>
                            <p className="text-gray-500 text-base flex items-center gap-x-2"> 
                                <span> <FaPhoneAlt /> </span>
                                <a href="tel:01728068200" className="text-base">01728068200</a>
                            </p>
                        </li>
                        <li className="flex-grow h-full">
                            <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                                <input type="text" name="first_name" className='input-filed ' placeholder='Your name' />
                                <input type="email" name="user_email" className='input-filed ' placeholder='Email' />
                                <input type="text" name="website" className='input-filed ' placeholder='Website' />
                                <textarea name="message" id="" cols="30" className='input-filed ' rows="3" placeholder='Message...'></textarea>
                                <button type='sbumit' className=" py-4 items-center  flex-nowrap  text-gray-900 hover:bg-[#0F1722] transition-all hover:text-white bg-primary   px-5  font-semibold duration-500">
                                    {
                                        loading ?  <span className=" text-sm  lg:text-base  text-center inline-flex items-center gap-1 "> Sending...</span> :  <span className=" text-sm  lg:text-base  text-center inline-flex items-center gap-1 "> Submit Now <MdSend /></span>
                                    }
                                   
                                </button>
                            </form>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactDoyer;