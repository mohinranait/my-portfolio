import EducationCard from "../components/EducationCard";
import ProjectCard from "../components/ProjectCard";
import ServiceCard from "../components/ServiceCard";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaGithub, FaLinkedinIn, FaReact, FaTwitter, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import jsImg from "../../public/img-icon/js.webp"
import reactImg from "../../public/img-icon/react.png"
import reduxImg from "../../public/img-icon/redux.png"
import expressImg from "../../public/img-icon/express.webp"
import mongodbImg from "../../public/img-icon/mongodb.png"
import tailwindImg from "../../public/img-icon/tailwindcss.png"
import nextJsImg from "../../public/img-icon/nextjs.png"
import nodejsImg from "../../public/img-icon/nodejs.png"
import dockerImg from "../../public/img-icon/docker.webp"
import devOpsImg from "../../public/img-icon/devops.png"


import p1 from "../../public/p1.png"
import p2 from "../../public/p2.png"
import p3 from "../../public/p3.png"
import p4 from "../../public/p4.png"
import p5 from "../../public/p5.png"
import ContactForm from "../components/ContactForm";
import SectionTitle from "../components/SectionTitle";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import DimondIcon from "../components/svgs/DimondIcon";
import LaravelIcon from "../components/svgs/LaravelIcon";
import WordpressIcon from "../components/svgs/WordpressIcon";

const educations = [
    {
        _id: 1,
        date: '20 Jun 2022',
        title: "Wordpress Web Development",
        description: 'Your go-to expert for WordPress web development. With a passion for transforming ideas into engaging digital experiences, I specialize in leveraging the power of WordPress to create dynamic and user-friendly websites.',
    },
    {
        _id: 2,
        date: '12 Nov 2022',
        title: "HTML and CSS",
        description: ' Transforming raw HTML into visually stunning and responsive designs is where CSS comes into play. Proficient in CSS3, I bring creativity to life by styling websites with precision, using techniques like flexbox and grid for layout and animations to enhance user experiences.',
    },
    {
        _id: 3,
        date: "2023",
        title: 'MERN Stack Web Development',
        description: `Hello! I'm Ebrahim, on an exciting journey to becoming a proficient MERN stack developer. Passionate about creating dynamic web applications, I am currently immersed in mastering the MongoDB, Express.js, React, and Node.js stack.`,
    },
    {
        _id: 4,
        date: '12 Dec 2023',
        title: "Present learning Next.js",
        description: 'Leveraging Next.js, I effortlessly create smooth, client-side navigation, ensuring a snappy and intuitive journey for users.Boosting performance is my forte. With SSR in Next.js, I optimize websites for speed, SEO, and a superior user experience.',
    },
]


const services = [
    {
        _id : 1,
        icon : <DimondIcon />,
        title: "MERN Stack Website",
        details : ' Build high-performance, full-stack web applications with  and Node.js. I develop scalable, secure, and efficient solutions tailored to your business needs, ensuring a seamless user experience. '
    },
    {
        _id : 2,
        icon : <LaravelIcon />,
        title: "Laravel Website",
        details : 'Specializing in Laravel, a powerful PHP framework, I create robust, scalable, and high-performance websites. With deep expertise in Laravel, I ensure your web applications are secure, maintainable, and built for growth.'
    },
    {
        _id : 3,
        icon : <WordpressIcon />,
        title: "Wordpress Website",
        details : `As a seasoned WordPress developer, I craft dynamic, visually stunning websites with a focus on both design and functionality. I bring your ideas to life, ensuring seamless user experiences and easy content management.`
    },
]


const projects = [
    {
        _id: 1,
        image :p1,
        title: 'StoreMI - MERN',
        demo: 'https://uminex-mern-app.web.app/',
        github: 'https://github.com/mohinranait/uminex-ecommerce-client',
        details : "Best and featured website for mobile selling. Here the mobile can be selected by selecting the variant of the mobile.",
    },
    {
        _id: 5,
        image :p5,
        title: 'HouseRent - MERN',
        demo: 'https://rent-house-using-nextjs.vercel.app/',
        github: 'https://github.com/mohinranait/houseRent-task-using-nextjs?tab=readme-ov-file',
        details : "Here a appoinment use can be published with all the information of a appoinment. And the user can book that booking appoinment month by month.",
    },
    {
        _id: 4,
        image :p4,
        title: 'CourseLog - MERN',
        demo: 'https://online-course-silling-website.web.app/',
        github: 'https://github.com/mohinranait/online-course-selling',
        details : "Online course selling website. It's mobile friendly and multi-functionality features",
    },
    {
        _id: 2,
        image :p3,
        title: 'Electronics Selling website',
        demo: 'https://assignment-10-d4641.web.app/',
        github: 'https://github.com/mohinranait/ecommerce-store-app-for-assignment-10',
        details: "All types of electronics are available. Can register here and order the product."
    },
    {
        _id: 3,
        image :p2,
        title: 'Conversation website by Post',
        demo: "https://assignment-12-5d967.web.app/",
        github: 'https://github.com/mohinranait/assignment-12-client',
        details: "The main feature of this website is that conversation can be done through posts. You can comment there"
    },
    
]

const myTitles = [
    // Same substring at the start will only be typed once, initially
    'Developer',
    2000,
    'Designer',
    2000,
    'Man',
    2000,
    'Coder',
    2000,
]

const Home = () => {

    useEffect(() => {
        AOS.init();
    },[])

    return (
        <>
            <section id="hero" className="" style={{backgroundImage:`url('https://wp.shsarker.xyz/zyan/wp-content/uploads/2023/10/banner-scaled.jpg')`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
                <div className=" py-16">
                    <div className="container lg:w-[1100px] md:px-0 min-h-screen flex items-center justify-center px-5 ">
                        <div className="grid mt-20 lg:mt-0 grid-cols-1 lg:grid-cols-12 items-center gap-y-10 lg:gap-y-0 md:gap-5">
                            <div className="hidden lg:block col-span-1">
                                <ul className="space-y-7">
                                    <li>
                                        <a href="https://github.com/mohinranait" target="_blank" rel="noreferrer" className="text-primary " ><FaGithub size={25} /></a>
                                        </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/mohinrana" target="_blank" rel="noreferrer" className="text-primary " ><FaLinkedinIn size={25} /></a>
                                        </li>
                                    <li>
                                        <a href="https://twitter.com/MDEbrahim555199" target="_blank" rel="noreferrer" className="text-primary " ><FaTwitter size={25} /></a>
                                        </li>
                                </ul>
                            </div>
                            <div className="lg:col-span-6 order-2 lg:order-1">
                                <div className=" space-y-4 md:space-y-6 lg:space-y-8">
                                    <div>
                                        <span className="uppercase text-white bg-[#55e6a531] font-semibold rounded py-2 px-4 text-sm">MERN Stack developer</span>
                                    </div>
                                    <h1 className="text-3xl leading-[40px] md:text-5xl md:leading-[60px] lg:text-5xl lg:leading-[65px] xl:text-6xl font-bold xl:leading-[75px] text-white"> I am Ebrahim <br /> Creative
                                        <span className="bg-gradient-to-l to-[#03e37e] from-[#04f872] bg-clip-text text-transparent">
                                            <TypeAnimation
                                                sequence={myTitles}
                                                speed={10}
                                                repeat={Infinity}
                                            />
                                        </span> 
                                    </h1>
                                    <div>
                                    <p className="text-white mb-2">I am a passionate <strong>Web Developer</strong> who loves writing clean, efficient code and crafting intuitive UI/UX. With experience in <strong>Next.js, TypeScript, SCSS,</strong> and <strong>Redux</strong>, I specialize in building scalable and high-performing web applications.</p>
                                    <p className="text-white">
                                        <strong>Tech stack: </strong>
                                        Next.js, ShadCN, NextUI, Ant Design, Tailwindcss, Bootstrap, Mongoose, Express, MongoDB, Redux, RTK Query.
                                    </p>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <a 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        href="https://drive.google.com/file/d/1br5FspYnhaFeYhJStBFB9KC1rlJwFuK-/view?usp=sharing"  className="flex items-center py-3 gap-1  flex-nowrap  text-gray-900 hover:bg-[#0F1722] transition-all hover:text-white bg-primary   px-5 cursor-pointer font-semibold duration-500">
                                            <LiaFileDownloadSolid /> Download CV
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5 order-1 lg:order-2">
                                <div className="relative flex justify-center items-center">
                                <FaReact size={120} className="text-primary absolute -top-16 hidden lg:block -left-3 animate-spin " />
                                    <figure className="w-64 h-64 rounded-full  overflow-hidden">
                                        <img className={`w-64 h-64 rounded-full`} src="https://avatars.githubusercontent.com/u/99636383?v=4"  alt="Banner" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="service" className="pt-20 pb-10">
                <SectionTitle  textAlign="center"  margin={'auto'} title={'My Services'} subTitle={'Crafting Digital Experiences'} />
               
                <div className="container lg:w-[1100px] pt-28 px-5 md:px-0">
                    <div className="grid md:grid-cols-3 gap-5" data-aos="fade-up">
                        {
                            services?.map(item => <ServiceCard key={item?._id} service={item} /> )
                        }
                    </div>
                </div>
            </section>


            <section id="about" className="">
                <div className="container lg:w-[1100px] px-5 md:px-0 py-20">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="mb-20 lg:mb-0">
                            <SectionTitle textAlign="left"  margin={'0'} title={'About me'} subTitle={'Transforming visions into exceptional portfolios'} />
                           
                            <div className="flex gap-5 mt-10">
                                <div className="hidden lg:block">
                                    <div className="w-20 h-[3px] bg-gray-400 "></div>
                                </div>
                               <div>
                                    <p data-aos="fade-up" className="text-gray-400 mb-10">I’m a passionate MERN Stack Developer with expertise in building dynamic and responsive web applications. Focused on delivering seamless user experiences, I transform ideas into scalable, high-performance solutions using MongoDB, Express.js, React, and Node.js.</p>
                                    <div data-aos="fade-up">
                                        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1br5FspYnhaFeYhJStBFB9KC1rlJwFuK-/view?usp=sharing"  className=" py-4 items-center  flex-nowrap  text-gray-900 hover:bg-[#0F1722] transition-all hover:text-white bg-primary   px-5  font-semibold duration-500">
                                            <span className=" text-sm  lg:text-base  text-center inline-flex items-center gap-1 "> <LiaFileDownloadSolid /> Download CV</span>
                                        </a>
                                    </div>
                               </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <div className="relative" data-aos="fade-up">
                                    <span className="w-[250px] h-[400px] bg-primary absolute -top-5 -right-5"></span>
                                    <img className="z-50 w-full h-[380px] relative" src="https://media.newyorker.com/photos/66ba72ad48c45ec2854f7f13/1:1/w_1707,h_1707,c_limit/Anderson-Musk-PoliticalActivism.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>


            <section id="education" className="pt-20 pb-10">
                <SectionTitle textAlign="center"  margin={'auto'} title={'Educations'} subTitle={'Showcasing my talent amplifying my impact'} />
                
                <div className="container lg:w-[1100px] pt-28 px-5 md:px-0">
                    <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
                        {
                            educations?.map(education => <EducationCard key={education?._id} education={education} /> )
                        }
                    </div>
                </div>
            </section>


            {/* Skills */}
            <section id="skills"  className="pt-10 pb-28">
                <div className="container lg:w-[1100px] px-5 md:px-0">
                    <div className="grid  md:grid-cols-2 gap-5">
                        <div className="space-y-5 mb-12 md:mb-0">
                            <SectionTitle textAlign="left"  margin={'auto'} title={'Currently Learning'} subTitle={'Which I am currently learning.'} />
                              
                            <div className="service " data-aos="fade-up">
                                <span className="text-white ml-14">Docker</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src={dockerImg} alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[40%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service " data-aos="fade-up">
                                <span className="text-white ml-14">DevOps</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src={devOpsImg} alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[30%] absolute bottom-0 left-0"></span>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <SectionTitle textAlign="left"  margin={'auto'} title={'Special Skills'} subTitle={'My Special Skills filed hire'} />
                            
                            <div className="service" data-aos="fade-up">
                                <span className="text-white ml-14">JavaScript</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src={jsImg} alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[85%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service " data-aos="fade-up">
                                <span className="text-white ml-14">React JS</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src={reactImg} alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[90%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service " data-aos="fade-up">
                                <span className="text-white ml-14">Node JS</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src={nodejsImg} alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[70%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service " data-aos="fade-up">
                                <span className="text-white ml-14">Express JS</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src={expressImg} alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[80%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service " data-aos="fade-up">
                                <span className="text-white ml-14">MongoDB</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src={mongodbImg} alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[85%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service " data-aos="fade-up">
                                <span className="text-white ml-14">Next JS</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src={nextJsImg} alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[80%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service " data-aos="fade-up">
                                <span className="text-white ml-14">Redux</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src={reduxImg} alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[70%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service " data-aos="fade-up">
                                <span className="text-white ml-14">Tailwindcss</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src={tailwindImg} alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[95%] absolute bottom-0 left-0"></span>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </section>


            <section id="projects" className="pt-10 pb-20">
                <SectionTitle textAlign="center"  margin={'auto'} title={'Recent project'} subTitle={'My Projects'} />
               
                <div className="container lg:w-[1100px] px-5 md:px-0 mt-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            projects?.map(item => <ProjectCard key={item?._id} item={item} /> )
                        }
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section id="contact" className="py-10">
                <SectionTitle textAlign="center"  margin={'auto'} title={'Contact me'} subTitle={'Get in touch'} />
               
                <div className="container lg:w-[1100px] px-5 lg:px-0 mt-16">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                            <p className="text-2xl font-bold text-white mb-2" data-aos="fade-up">Get in Touch</p>
                            <p className="text-base font-medium text-gray-500" data-aos="fade-up">I am a hard-working, reliable web developer. I love being in this line of work because I am passionate about technology, design, and innovation.</p>
                            <ul className="space-y-6 mt-5">
                                <li className="flex items-center gap-8" data-aos="fade-up">
                                    <div>
                                        <FaUser size={30} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-white">Name</p>
                                        <p className="text-base font-medium text-gray-500">Md. Ebrahim</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-8" data-aos="fade-up">
                                    <div>
                                        <MdOutlineEmail size={30} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-white">Email</p>
                                        <p className="text-base font-medium text-gray-500">ebrahimit49@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-8" data-aos="fade-up">
                                    <div>
                                        <FaLocationDot size={30} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-white">Address</p>
                                        <p className="text-base font-medium text-gray-500">Dhaka, Bangladesh.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div data-aos="fade-up">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Home;