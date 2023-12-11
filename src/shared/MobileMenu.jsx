import Logo from "./Logo";
import SocilaLogo from "./SocilaLogo";
import { RxCross2 } from "react-icons/rx";

const MobileMenu = ({isMenu, setIsMenu}) => {
    return (
        <div className="lg:hidden">
            <div className="opacityDiv hidden w-full z-40 h-full backdrop-blur-lg bg-black bg-opacity-40 fixed top-0 left-0  "></div>
            <div className={`w-[70%]  z-[100] transition-all duration-500 bg-[#000] h-screen fixed left-0 top-0 overflow-y-auto ${isMenu ? 'translate-x-0':'-translate-x-[100%]'} `}>
                <div>
                    <ul className="px-4  space-y-5 flex  flex-col">
                        <li className="flex items-center pt-4 justify-between">
                           <Logo />
                            <span onClick={() => setIsMenu(!isMenu)} className="cursor-pointer bg-[#222] text-gray-200 hover:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center">
                                <RxCross2 />
                            </span>
                        </li>
                        <hr className="border border-gray-800" />
                        <li>
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
                            <ul>
                                <li className="border-b border-gray-800"><a className="text-gray-400 text-lg w-full hover:text-primary py-1 inline-block transition-all duration-300 " href="#">Home</a></li>
                                <li className="border-b border-gray-800"><a className="text-gray-400 text-lg w-full hover:text-primary py-1 inline-block transition-all duration-300 " href="#">About</a></li>
                                <li className="border-b border-gray-800"><a className="text-gray-400 text-lg w-full hover:text-primary py-1 inline-block transition-all duration-300 " href="#">Pages</a></li>
                                <li className=""><a className="text-gray-400 text-lg w-full hover:text-primary py-1 inline-block transition-all duration-300 " href="#">Elements</a></li>
                              
                            </ul>
                        </li>
                        <li className=" space-y-5 pt-[calc(75%-140px)] pb-5" >
                            <div>
                                <a href="#" className="w-full inline-block text-center  rounded-[50px] p-[3px] group  bg-gradient-to-l from-[#55e6a5] to-[#02c570] text-black">
                                    <span className="w-full h-full inline-block  py-3 rounded-3xl group-hover:bg-gradient-to-l group-hover:from-[#55e6a5] group-hover:to-[#02c570] font-bold transition-all duration-500">Enroll now</span>
                                </a>
                            </div>
                            <div>
                                <SocilaLogo />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;