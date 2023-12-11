import EducationCard from "../components/EducationCard";
import ProjectCard from "../components/ProjectCard";
import ServiceCard from "../components/ServiceCard";
import { LiaFileDownloadSolid } from "react-icons/lia";

const Home = () => {
    return (
        <>
            <section className="" style={{backgroundImage:`url('https://wp.shsarker.xyz/zyan/wp-content/uploads/2023/10/banner-scaled.jpg')`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
                <div className=" py-16">
                    <div className="container lg:w-[1100px] md:px-0 min-h-screen flex items-center justify-center px-5 ">
                        <div className="grid mt-20 lg:mt-0 grid-cols-1 lg:grid-cols-2 items-center gap-y-10 lg:gap-y-0 md:gap-5">
                            <div className="order-2 lg:order-1">
                                <div className=" space-y-4 md:space-y-6 lg:space-y-8">
                                    <div>
                                        <span className="uppercase text-white bg-[#55e6a531] font-semibold rounded py-2 px-4 text-sm">MERN Stack develoepr</span>
                                    </div>
                                    <h1 className="text-3xl leading-[40px] md:text-5xl md:leading-[60px] lg:text-5xl lg:leading-[65px] xl:text-6xl font-bold xl:leading-[75px] text-white"> I'm Ebrahim <br /> Creative<span className="bg-gradient-to-l to-[#03e37e] from-[#04f872] bg-clip-text text-transparent">Developer</span> </h1>
                                    <p className="text-white">I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                                    <div className="flex items-center gap-x-3">
                                       
                                            <a href="#" className="flex items-center  flex-nowrap  text-gray-900 hover:bg-[#0F1722] transition-all hover:text-white bg-primary   px-5 rounded font-semibold duration-500">
                                                <span className=" text-sm py-3  lg:py-4 lg:text-base  text-center flex items-center gap-1 "> <LiaFileDownloadSolid /> Download CV</span>
                                            </a>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="relative flex justify-center items-center">
                                    <figure className="w-64 h-64 rounded-full bg-red-200 overflow-hidden">
                                        <img className={`w-64 h-64 rounded-full`} src="https://avatars.githubusercontent.com/u/99636383?v=4"  alt="Banner" />
                                    </figure>
                                    
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="pt-20 pb-10">
                <div className="" style={{margin: '0 auto'}}>
                    <p className="text-center text-2xl text-primary mb-5" style={{textAlign: 'center'}}>My Services</p>
                    <p className="text-center text-4xl text-white font-bold" style={{textAlign: 'center'}}>Crafting stories through design and innovation</p>
                </div>
                <div className="container lg:w-[1100px] pt-28 px-5 md:px-0">
                    <div className="grid md:grid-cols-3 gap-5">
                       <ServiceCard />
                       <ServiceCard />
                       <ServiceCard />
                    </div>
                </div>
            </section>


            <section className="py-16">
                <div className="container lg:w-[1100px] px-5 md:px-0">
                    <div className="grid lg:grid-cols-2 gap-5">
                        <div>
                            <div className="" style={{margin: '0'}}>
                                <p className="text-center text-2xl text-primary mb-5" style={{textAlign: 'left'}}>About me</p>
                                <p className="text-center text-4xl text-white font-bold" style={{textAlign: 'left'}}>Transforming visions into exceptional portfolios</p>
                            </div>
                            <div className="flex gap-5 mt-10">
                                <div >
                                    <div className="w-40 h-[3px] bg-gray-400 "></div>
                                </div>
                               <div>
                                    <p className="text-gray-400 mb-10">Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione</p>
                                    <div>
                                        <a href="#" className=" py-4 items-center  flex-nowrap  text-gray-900 hover:bg-[#0F1722] transition-all hover:text-white bg-primary   px-5 rounded font-semibold duration-500">
                                            <span className=" text-sm  lg:text-base  text-center inline-flex items-center gap-1 "> <LiaFileDownloadSolid /> Download CV</span>
                                        </a>
                                    </div>
                               </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <div className="relative">
                                    <span className="w-[250px] h-[400px] bg-primary absolute -top-5 -right-5"></span>
                                    <img className="z-50 relative" src="https://wp.shsarker.xyz/zyan/wp-content/uploads/2023/10/about_img.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>


            <section className="pt-20 pb-10">
                <div className="" style={{margin: '0 auto'}}>
                    <p className="text-center text-2xl text-primary mb-5" style={{textAlign: 'center'}}>EDUCATION & SKILL</p>
                    <p className="text-center text-4xl text-white font-bold" style={{textAlign: 'center'}}>Showcasing your talent amplifying your impact</p>
                </div>
                <div className="container lg:w-[1100px] pt-28 px-5 md:px-0">
                    <div className="grid md:grid-cols-2 gap-6">
                        <EducationCard />
                        <EducationCard />
                        <EducationCard />
                        <EducationCard />
                    </div>
                </div>
            </section>


            <section className="py-10">
                <div className="container lg:w-[1100px] px-5 md:px-0">
                    <div className="grid items-center md:grid-cols-2 gap-5">
                        <div className="">
                            <div className="" style={{margin: '0 auto'}}>
                                <p className=" text-2xl text-primary mb-5" style={{textAlign: 'left'}}>Special Skills</p>
                                <p className=" text-4xl text-white font-bold" style={{textAlign: 'left'}}>My Special Skills filed hire</p>
                            </div>
                            <div className="mt-10">
                                    <a href="#" className=" py-4 items-center  flex-nowrap  text-gray-900 hover:bg-[#0F1722] transition-all hover:text-white bg-primary   px-5 rounded font-semibold duration-500">
                                        <span className=" text-sm  lg:text-base  text-center inline-flex items-center gap-1 "> <LiaFileDownloadSolid /> Download CV</span>
                                    </a>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <div className="bg-gray-800 pt-4 pb-6 px-5 relative ">
                                <span className="text-white">HTML</span>
                                <span className="bg-primary h-[6px] w-full absolute bottom-0 left-0"></span>
                            </div>
                            <div className="bg-gray-800 pt-4 pb-6 px-5 relative ">
                                <span className="text-white">HTML</span>
                                <span className="bg-primary h-[6px] w-[80%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="bg-gray-800 pt-4 pb-6 px-5 relative ">
                                <span className="text-white">HTML</span>
                                <span className="bg-primary h-[6px] w-[50%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="bg-gray-800 pt-4 pb-6 px-5 relative ">
                                <span className="text-white">HTML</span>
                                <span className="bg-primary h-[6px] w-[90%] absolute bottom-0 left-0"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-10">
                <div className="" style={{margin: '0 auto'}}>
                    <p className="text-center text-2xl text-primary mb-5" style={{textAlign: 'center'}}>MY RECENT PORTFOLIO</p>
                    <p className="text-center text-4xl text-white font-bold" style={{textAlign: 'center'}}>My Complete Projects</p>
                </div>
                <div className="container lg:w-[1100px] px-5 md:px-0 mt-16">
                    <div className="grid lg:grid-cols-2 gap-10">
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </section>
        </>

    );
};

export default Home;