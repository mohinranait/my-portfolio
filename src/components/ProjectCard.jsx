

const ProjectCard = () => {
    return (
        <div className="group">
            <div className="h-[500px] px-8 pt-8 md:px-20 md:pt-16 overflow-hidden mb-8 relative " style={{backgroundImage:`url('https://wp.shsarker.xyz/zyan/wp-content/uploads/2023/10/banner-scaled.jpg')`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
                <div className=" scale-0 group-hover:scale-100 absolute transition-all left-0 top-0 w-full bg-black bg-opacity-80 h-full gap-3 flex items-center justify-center">
                    <a href="#" className=" bg-primary hover:bg-[#20c57b] px-4 py-2 rounded transition-all duration-300 font-semibold text-black ">
                        <span className=" inline-block text-center ">Demo</span>
                    </a>
                    <a href="#" className=" border-2 border-gray-700 hover:border-gray-500 text-white px-4 py-2 rounded transition-all duration-300 font-semibold ">
                        <span className=" inline-block text-center ">Github</span>
                    </a>
                </div>
                <div>
                    <img className="mx-auto " src="https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-1.jpg" alt="" />
                </div>
            </div>
            <div>
                <p className="text-2xl font-bold text-white">Givest - Non Profit PSD Template</p>
            </div>
        </div>
    );
};

export default ProjectCard;