import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import MobileMenu from "../shared/MobileMenu";
import { useState } from "react";
import ContactDoyer from "../shared/ContactDoyer";
import { animateScroll as scroll } from 'react-scroll';
import { FaAngleDoubleUp } from "react-icons/fa";

const MainLayout = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    const [isMenu, setIsMenu] = useState(false)
    const [isContactDoyar, setIsContactDoyar] = useState(false)
    return (
        <>
            <div>
                <Header isMenu={isMenu} setIsMenu={setIsMenu} isContactDoyar={isContactDoyar} setIsContactDoyar={setIsContactDoyar} />
                <Outlet />
                <Footer />
                <MobileMenu isMenu={isMenu} setIsMenu={setIsMenu} />
                <ContactDoyer isContactDoyar={isContactDoyar} setIsContactDoyar={setIsContactDoyar} />
                <a onClick={scrollToTop} className="w-12 h-12 cursor-pointer flex items-center justify-center rounded-full bg-primary  hover:bg-[#02bc8b]  right-5 bottom-5 fixed">
                    <FaAngleDoubleUp className="text-black" />
                </a>
            </div>
        </>
    );
};

export default MainLayout;