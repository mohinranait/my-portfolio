import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
import Logo from "./Logo";


const Header = ({isMenu, setIsMenu, isContactDoyar, setIsContactDoyar}) => {
    return (
        <header id="header" className="pt-4 md:pt-10 absolute top-0 left-0 w-full  ">
            {/* <div className="w-72 md:w-[700px] blur-3xl -z-10 h-[350px] left-0 bottom-0 bg-blue-100 absolute"></div>
            <div className="w-72 md:w-[400px] blur-3xl -z-10 h-[300px] right-0 top-0 bg-red-100 absolute"></div> */}
            <div>
                <div id="stickyHeader" className="container  lg:w-[1100px] px-4 lg:px-0 z-30 top-0  transition-all duration-1000  left-0 right-0">
                    <div className="" >
                        <nav className="flex  lg:grid lg:grid-cols-3 items-center  justify-between bg-transparent h-20 px-5 rounded-md">
                            <div className=" grid grid-cols-2 w-full items-center justify-between ">
                                <Logo />
                                <button onClick={() => setIsMenu(!isMenu)} className="flex py-2 px-2 cursor-pointer items-center justify-center ml-auto lg:hidden text-gray-600">
                                    <HiMenu className="text-primary cursor-pointer inline-block text-2xl" />
                                </button>
                            </div>
                        
                            <ul className="hidden lg:flex items-center justify-center">
                                <li><a className="text-base text-white px-3 py-1 font-medium" href="./index.html">Home</a></li>
                                <li><a className="text-base text-white px-3 py-1 font-medium" href="./course.html">Service</a></li>
                                <li><a className="text-base text-white px-3 py-1 font-medium" href="./about.html">About</a></li>
                                <li><a className="text-base text-white px-3 py-1 font-medium" href="./contact.html">Contact</a></li>
                                <li><a className="text-base text-white px-3 py-1 font-medium" href="./user/dashboard.html">Dashboard</a></li>
                            </ul>
                            <div className="hidden  lg:flex items-center justify-end">
                                <button onClick={() => setIsContactDoyar(!isContactDoyar)} className=" bg-primary px-4 py-2 rounded transition-all duration-300 font-semibold text-black ">
                                    {/* <span className=" inline-block text-center ">Contact</span> */}
                                    <HiMenu className="text-black cursor-pointer inline-block text-2xl" />
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
           
        </header>
    );
};

export default Header;