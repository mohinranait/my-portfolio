import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const SocilaLogo = () => {
    return (
        <>
            <ul className="flex flex-wrap items-center justify-center gap-2">
                <li><a className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full relative before:w-full before:h-full before:absolute before:bg-gray-900 before:left-0 before:top-0 before:rounded-full before:scale-0 before:hover:scale-100 before:transition-all before:duration-500 text-slate-700 hover:text-white transition-all duration-500  " href="#"> <FaFacebookF className="z-10" /></a></li>
                <li><a className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full relative before:w-full before:h-full before:absolute before:bg-gray-900 before:left-0 before:top-0 before:rounded-full before:scale-0 before:hover:scale-100 before:transition-all before:duration-500 text-slate-700 hover:text-white transition-all duration-500  " href="#"> <FaLinkedinIn className="z-10" /></a></li>
                <li><a className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full relative before:w-full before:h-full before:absolute before:bg-gray-900 before:left-0 before:top-0 before:rounded-full before:scale-0 before:hover:scale-100 before:transition-all before:duration-500 text-slate-700 hover:text-white transition-all duration-500  " href="#"> <FaTwitter className="z-10" /> </a></li>
                <li><a className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full relative before:w-full before:h-full before:absolute before:bg-gray-900 before:left-0 before:top-0 before:rounded-full before:scale-0 before:hover:scale-100 before:transition-all before:duration-500 text-slate-700 hover:text-white transition-all duration-500  " href="#"> <FaInstagram className="z-10" /> <i className=" z-10 text-base fab fa-instagram"></i></a></li>
            </ul>   
        </>
    );
};

export default SocilaLogo;