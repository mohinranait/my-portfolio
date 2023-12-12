import { Link } from "react-router-dom";


const ProjectCard = ({item}) => {
    const {image, title,demo,github,details} = item || {}
    return (
        <div className="group" data-aos="fade-up">
            <div className="h-[320px] px-4 pt-4 md:px-10 md:pt-10 overflow-hidden mb-8 relative " style={{backgroundImage:`url('https://wp.shsarker.xyz/zyan/wp-content/uploads/2023/10/banner-scaled.jpg')`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
                <div className=" scale-0 group-hover:scale-100 absolute transition-all left-0 top-0 w-full bg-black bg-opacity-80 h-full gap-3 flex items-center justify-center">
                    <Link to={demo} className=" bg-primary hover:bg-[#20c57b] px-4 py-2 rounded transition-all duration-300 font-semibold text-black ">
                        <span className=" inline-block text-center ">Demo</span>
                    </Link>
                    <Link to={github} className=" border-2 border-gray-700 hover:border-gray-500 text-white px-4 py-2 rounded transition-all duration-300 font-semibold ">
                        <span className=" inline-block text-center ">Github</span>
                    </Link>
                </div>
                <div>
                    <img className="mx-auto " src={image} alt="" />
                </div>
            </div>
            <div>
                <p className="text-xl mb-2 font-bold text-white">{title}</p>
                <p className="text-gray-500">{details}</p>
            </div>
        </div>
    );
};

export default ProjectCard;