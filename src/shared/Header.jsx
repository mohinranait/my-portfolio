import { HiMenu } from "react-icons/hi";
import Logo from "./Logo";
import {Link} from "react-scroll"
import "./ActiveMenu.css"
import { useEffect, useState } from "react";


const Header = ({isMenu, setIsMenu, isContactDoyar, setIsContactDoyar}) => {

    const [scrollY, setScrollY] = useState(0);
    const [sticky, setSticky]  = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            setScrollY(window.scrollY);
        })

        if( scrollY > 400 ){
            setSticky(true)
        }else{
            setSticky(false)
        }
    },[scrollY])

    return (
        <header id="header" className="pt-4 md:pt-10 absolute top-0 left-0 w-full  ">
            {/* <div className="w-72 md:w-[700px] blur-3xl -z-10 h-[350px] left-0 bottom-0 bg-blue-100 absolute"></div>
            <div className="w-72 md:w-[400px] blur-3xl -z-10 h-[300px] right-0 top-0 bg-red-100 absolute"></div> */}
            <div>
                <div className={`container lg:w-[1100px] px-4 lg:px-0 z-[999]  transition-all duration-1000  left-0 right-0 ${sticky ? 'fixed top-0 bg-[#000000] rounded-md' : '-top-full'} `}>
                    <div className="" >
                        <nav className="headerGroup">
                            <div className=" lg:col-span-3  grid grid-cols-2 w-full items-center justify-between ">
                                <Logo />
                                <button onClick={() => setIsMenu(!isMenu)} className="mobileHumber">
                                    <HiMenu className="text-primary cursor-pointer inline-block text-2xl" />
                                </button>
                            </div>
                        
                            <ul className="activeMenu lg:col-span-7 hidden lg:flex items-center justify-center">
                                <li>
                                    <Link 
                                    to="hero" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-100} 
                                    duration={500} 
                                    className="headerNavLink" >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    to="service" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-20} 
                                    duration={500} 
                                    className="headerNavLink" >Service
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    to="about" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-20} 
                                    duration={500} 
                                    className="headerNavLink" >About
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    to="education" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-20} 
                                    duration={500} 
                                    className="headerNavLink" >Education 
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    to="skills" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-20} 
                                    duration={500} 
                                    className="headerNavLink" >Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    to="projects" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-20} 
                                    duration={500} 
                                    className="headerNavLink" >Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    to="contact" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-20} 
                                    duration={500} 
                                    className="headerNavLink" >Contact
                                    </Link>
                                </li>
                               
                            </ul>
                            <div className=" lg:col-span-2 hidden  lg:flex items-center justify-end">
                                <button onClick={() => setIsContactDoyar(!isContactDoyar)} className=" bg-primary px-4 py-2 rounded-sm transition-all duration-300 font-semibold text-black ">
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