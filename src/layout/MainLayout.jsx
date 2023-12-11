import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import MobileMenu from "../shared/MobileMenu";
import { useState } from "react";
import ContactDoyer from "../shared/ContactDoyer";

const MainLayout = () => {
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
            </div>
        </>
    );
};

export default MainLayout;