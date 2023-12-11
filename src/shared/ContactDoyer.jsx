
import { MdSend } from "react-icons/md";
import Logo from './Logo';
import { RxCross2 } from 'react-icons/rx';

const ContactDoyer = ({isContactDoyar, setIsContactDoyar}) => {
    return (
        <div className="hidden md:block">
            {/* <div className="opacityDiv hidden w-full z-40 h-full backdrop-blur-lg bg-black bg-opacity-40 fixed top-0 left-0  "></div> */}
            <div className={`w-[350px]  z-[100] transition-all duration-500 bg-[#000] h-screen fixed right-0 top-0 overflow-y-auto  ${isContactDoyar ? 'translate-x-0' : 'translate-x-[360px]' }`}>
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
                            <h5 className='text-xl font-bold text-white mb-2'>About Us</h5>
                            <p className="text-gray-500">Histudy is a education website template. You can customize all.</p>
                        </li>
                        <li>
                            <p className="text-gray-500 text-base flex mb-2 items-center gap-x-2"> 
                                <span><i className="far fa-envelope"></i></span>
                                <span>example@gmail.com</span>
                            </p>
                            <p className="text-gray-500 text-base flex items-center gap-x-2"> 
                                <span><i className="fas fa-phone-alt"></i></span>
                                <a href="tel:01728068200" className="text-base">01728068200</a>
                            </p>
                        </li>
                        <li className="flex-grow h-full">
                            <form action="" className='space-y-6'>
                                <input type="text" className='py-4 px-4 border border-primary outline-none w-full bg-transparent ' placeholder='Your name' />
                                <input type="text" className='py-4 px-4 border border-primary outline-none w-full bg-transparent ' placeholder='Email' />
                                <textarea name="" id="" cols="30" className='py-4 px-4 border border-primary outline-none w-full bg-transparent ' rows="3" placeholder='Message...'></textarea>
                                <button type='button' className=" py-4 items-center  flex-nowrap  text-gray-900 hover:bg-[#0F1722] transition-all hover:text-white bg-primary   px-5 rounded font-semibold duration-500">
                                    <span className=" text-sm  lg:text-base  text-center inline-flex items-center gap-1 "> Submit Now <MdSend /></span>
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