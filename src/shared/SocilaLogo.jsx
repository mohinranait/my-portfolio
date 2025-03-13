import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const SocilaLogo = () => {
    return (
        <>
            <ul className="flex flex-wrap items-center justify-center gap-2">
                <li><a className="socilaButton" href="https://github.com/mohinranait" target="_blank" rel="noreferrer" > <FaGithub className="z-10"/></a></li>
                <li><a className="socilaButton" href="https://www.linkedin.com/in/mohinrana" target="_blank" rel="noreferrer" > <FaLinkedinIn className="z-10"/></a></li>
                <li><a className="socilaButton" href="https://twitter.com/MDEbrahim555199" target="_blank" rel="noreferrer" > <FaTwitter className="z-10" /> </a></li>
            </ul>   
        </>
    );
};

export default SocilaLogo;