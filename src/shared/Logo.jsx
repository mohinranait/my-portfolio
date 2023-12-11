import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <>
            <Link to="/" className="block " >
                <p className="text-4xl font-extrabold bg-gradient-to-l from-[#019854] to-[#55e6a5] bg-clip-text text-transparent  ">x<span className="">Dora</span> </p>
            </Link>   
        </>
    );
};

export default Logo;