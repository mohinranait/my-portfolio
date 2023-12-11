import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const SocilaLogo = () => {
    return (
        <>
            <ul className="flex flex-wrap items-center justify-center gap-2">
                <li><a className="socilaButton" href="#"> <FaFacebookF className="z-10"/></a></li>
                <li><a className="socilaButton" href="#"> <FaLinkedinIn className="z-10"/></a></li>
                <li><a className="socilaButton" href="#"> <FaTwitter className="z-10" /> </a></li>
                <li><a className="socilaButton" href="#"> <FaInstagram className="z-10" /></a></li>
            </ul>   
        </>
    );
};

export default SocilaLogo;