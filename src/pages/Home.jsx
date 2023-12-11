import EducationCard from "../components/EducationCard";
import ProjectCard from "../components/ProjectCard";
import ServiceCard from "../components/ServiceCard";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


import { jsPDF } from "jspdf";
import p1 from "../../public/p1.png"
import p2 from "../../public/p2.png"
import p3 from "../../public/p3.png"
import ContactForm from "../components/ContactForm";
import SectionTitle from "../components/SectionTitle";
const resume = "https://raw.githubusercontent.com/mohinranait/mohinranait/main/images/MERN%20Stack%20Developer.png"

const educations = [
    {
        _id: 1,
        date: '12 jun 2020',
        title: "Wordpress web development",
        description: 'Your go-to expert for WordPress web development. With a passion for transforming ideas into engaging digital experiences, I specialize in leveraging the power of WordPress to create dynamic and user-friendly websites.',
    },
    {
        _id: 2,
        date: '12 aug 2020',
        title: "HTML and css",
        description: ' Transforming raw HTML into visually stunning and responsive designs is where CSS comes into play. Proficient in CSS3, I bring creativity to life by styling websites with precision, using techniques like flexbox and grid for layout and animations to enhance user experiences.',
    },
    {
        _id: 3,
        date: "2023",
        title: 'MERN Stack web development',
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
        icon : <svg className='absolute -top-14 left-2/4 -translate-x-2/4   ' xmlns="http://www.w3.org/2000/svg" width="127" height="100" viewBox="0 0 127 100" fill="none"><path d="M63.7291 99.9969C63.2929 99.9969 62.8568 99.7789 62.5296 99.4517L0.484306 33.699C-0.0609081 33.1537 -0.0609081 32.3904 0.26622 31.7362L16.2955 3.82122C16.6226 3.27601 17.1679 2.94888 17.7131 2.94888H26.2184C27.0907 2.94888 27.854 3.71218 27.854 4.58452C27.854 5.45686 27.0907 6.22016 26.2184 6.22016H18.6945L3.75559 32.2814L63.7291 95.9624L123.266 32.2814L106.583 6.11113H42.6839C41.8115 6.11113 41.0482 5.34783 41.0482 4.47549C41.0482 3.60314 41.8115 2.83984 42.6839 2.83984H107.346C107.891 2.83984 108.437 3.16697 108.764 3.60314L126.647 31.5181C127.083 32.1724 126.974 32.9356 126.429 33.4809L64.9286 99.3427C64.6015 99.8879 64.1653 99.9969 63.7291 99.9969Z" fill="#55E6A5"></path><path d="M1.68373 34.2451C0.920431 34.2451 0.266175 33.6999 0.0480891 32.9366C-0.169996 32.0642 0.375217 31.1919 1.24756 30.9738L75.5057 14.2903C76.378 14.0722 77.2504 14.6174 77.4685 15.4897C77.6865 16.3621 77.1413 17.2344 76.269 17.4525L2.01086 34.1361C1.90182 34.1361 1.79277 34.2451 1.68373 34.2451Z" fill="#55E6A5"></path><path d="M125.227 34.2405C125.009 34.2405 124.9 34.2405 124.682 34.1314L42.1369 6.21648C41.2645 5.88936 40.8284 5.01702 41.1555 4.14468C41.4826 3.27234 42.355 2.83617 43.2273 3.1633L125.773 31.0782C126.645 31.4054 127.081 32.2777 126.754 33.1501C126.645 33.8043 125.991 34.2405 125.227 34.2405Z" fill="#55E6A5"></path><path d="M34.3962 9.1596C31.8882 9.1596 29.8164 7.08778 29.8164 4.57979C29.8164 2.07181 31.8882 0 34.3962 0C36.9042 0 38.976 2.07181 38.976 4.57979C38.976 7.08778 36.9042 9.1596 34.3962 9.1596ZM34.3962 3.27128C33.6329 3.27128 33.0877 3.81649 33.0877 4.57979C33.0877 5.34309 33.6329 5.88832 34.3962 5.88832C35.1595 5.88832 35.7047 5.34309 35.7047 4.57979C35.7047 3.92554 35.1595 3.27128 34.3962 3.27128Z" fill="#55E6A5"></path></svg>,
        title: "MERN Stack Website",
        details : ' MERN stack developer is someone who possesses expertise in MongoDB, Express.js, React, and Node.js, and is capable of building end-to-end web applications using these technologies. '
    },
    {
        _id : 2,
        icon : <svg className='absolute -top-14 left-2/4 -translate-x-2/4  ' xmlns="http://www.w3.org/2000/svg" width="99" height="101" viewBox="0 0 99 101" fill="none"><path d="M76.0618 100.003H1.44788C0.675676 100.003 0 99.3278 0 98.5556V23.7487C0 22.9765 0.675676 22.3008 1.44788 22.3008H76.0618C76.834 22.3008 77.5097 22.9765 77.5097 23.7487V98.4591C77.5097 99.3278 76.834 100.003 76.0618 100.003ZM2.89575 97.1077H74.6139V25.1965H2.89575V97.1077Z" fill="#55E6A5"></path><path d="M97.0071 77.6062H22.3932C21.621 77.6062 20.9453 76.9305 20.9453 76.1583V50.4826C20.9453 49.7104 21.621 49.0347 22.3932 49.0347H41.4086C42.1808 49.0347 42.8565 49.7104 42.8565 50.4826C42.8565 51.2548 42.1808 51.9305 41.4086 51.9305H23.8411V74.7104H95.5592V2.89575H23.8411V23.7452C23.8411 24.5174 23.1654 25.1931 22.3932 25.1931C21.621 25.1931 20.9453 24.5174 20.9453 23.7452V1.44788C20.9453 0.675676 21.621 0 22.3932 0H97.0071C97.7793 0 98.455 0.675676 98.455 1.44788V76.1583C98.455 77.027 97.7793 77.6062 97.0071 77.6062Z" fill="#55E6A5"></path><path d="M50.3866 54.8279C47.9735 54.8279 46.043 52.8974 46.043 50.4843C46.043 48.0711 47.9735 46.1406 50.3866 46.1406C52.7997 46.1406 54.7302 48.0711 54.7302 50.4843C54.7302 52.8974 52.7997 54.8279 50.3866 54.8279ZM50.3866 49.0364C49.6144 49.0364 48.9387 49.7121 48.9387 50.4843C48.9387 51.2565 49.6144 51.9321 50.3866 51.9321C51.1588 51.9321 51.8345 51.2565 51.8345 50.4843C51.8345 49.7121 51.1588 49.0364 50.3866 49.0364Z" fill="#55E6A5"></path></svg>,
        title: "Laravel Website",
        details : 'Skilled developer specializing in Laravel, the PHP web application framework. With a focus on crafting robust and scalable websites, I bring a wealth of expertise to every project'
    },
    {
        _id : 3,
        icon : <svg className='absolute -top-14 left-2/4 -translate-x-2/4  ' xmlns="http://www.w3.org/2000/svg" width="117" height="100" viewBox="0 0 117 100" fill="none"><path d="M74.2104 51.7634C73.8691 51.7634 73.414 51.6496 73.0727 51.4221C72.3902 50.8533 72.2764 49.7156 72.8452 49.033L110.502 3.52674H5.38219L43.0386 49.033C43.6074 49.7156 43.4937 50.8533 42.8111 51.4221C42.1285 51.9909 40.9908 51.8771 40.422 51.1945L0.490267 2.84414C0.0352047 2.38908 0.0352049 1.59271 0.262736 1.02388C0.490268 0.455056 1.17286 0 1.85546 0H114.37C115.052 0 115.621 0.34129 115.962 1.02388C116.19 1.59271 116.19 2.27531 115.735 2.84414L75.6894 51.0808C75.2343 51.5358 74.7792 51.7634 74.2104 51.7634Z" fill="#55E6A5"></path><path d="M58.0566 71.3299C57.6016 71.3299 57.0327 71.1024 56.6914 70.7611L44.5185 56.0853C43.9497 55.4027 44.0634 54.2651 44.746 53.6962C45.4286 53.1274 46.5663 53.2412 47.1351 53.9238L57.9428 67.0068L68.5231 54.2651C69.0919 53.5825 70.2295 53.4687 70.9121 54.0375C71.5947 54.6064 71.7085 55.744 71.1397 56.4266L59.308 70.7611C58.9667 71.1024 58.5117 71.3299 58.0566 71.3299Z" fill="#55E6A5"></path><path d="M114.256 99.9957H1.74217C1.05958 99.9957 0.490752 99.6544 0.149455 98.9719C-0.0780763 98.403 -0.0780765 97.7204 0.376986 97.1516L56.691 29.3473C57.3736 28.5509 58.625 28.5509 59.3076 29.3473L115.508 97.2654C115.963 97.7204 115.963 98.5168 115.735 99.0856C115.508 99.6544 114.939 99.9957 114.256 99.9957ZM5.38267 96.5827H110.616L58.0562 33.1015L5.38267 96.5827Z" fill="#55E6A5"></path><path d="M58.0561 26.7355C57.146 26.7355 56.3496 25.9392 56.3496 25.0291V19.9096C56.3496 18.9995 57.146 18.2031 58.0561 18.2031C58.9662 18.2031 59.7626 18.9995 59.7626 19.9096V25.0291C59.7626 25.9392 58.9662 26.7355 58.0561 26.7355Z" fill="#55E6A5"></path><path d="M58.054 84.4156C55.3237 84.4156 53.1621 82.2541 53.1621 79.6375C53.1621 77.0209 55.3237 74.8594 58.054 74.8594C60.7844 74.8594 62.946 77.0209 62.946 79.6375C62.946 82.3679 60.7844 84.4156 58.054 84.4156ZM58.054 78.3861C57.2577 78.3861 56.5751 78.9549 56.5751 79.7513C56.5751 80.5476 57.2577 81.1165 58.054 81.1165C58.8504 81.1165 59.533 80.5476 59.533 79.7513C59.533 78.9549 58.8504 78.3861 58.054 78.3861Z" fill="#55E6A5"></path></svg>,
        title: "Wordpress Website",
        details : `Seasoned developer specializing in WordPress, the world's most popular content management system. With a keen eye for design and functionality, I transform ideas into dynamic and visually stunning websites.`
    },
]


const projects = [
    {
        _id: 1,
        image :p1,
        title: 'Ecommerce webiste using MERN',
        demo: 'https://uminex-mern-app.web.app/',
        github: 'https://github.com/mohinranait/uminex-ecommerce-client',
        details : "Best and featured website for mobile selling. Here the mobile can be selected by selecting the variant of the mobile.",
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

const Home = () => {

    const downloadPdf = () => {
        const doc = new jsPDF();
        doc.addImage(resume,"PDF",1,1)
        doc.save(`${new Date()}.pdf`);
    }

    return (
        <>
            <section id="hero" className="" style={{backgroundImage:`url('https://wp.shsarker.xyz/zyan/wp-content/uploads/2023/10/banner-scaled.jpg')`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
                <div className=" py-16">
                    <div className="container lg:w-[1100px] md:px-0 min-h-screen flex items-center justify-center px-5 ">
                        <div className="grid mt-20 lg:mt-0 grid-cols-1 lg:grid-cols-2 items-center gap-y-10 lg:gap-y-0 md:gap-5">
                            <div className="order-2 lg:order-1">
                                <div className=" space-y-4 md:space-y-6 lg:space-y-8">
                                    <div>
                                        <span className="uppercase text-white bg-[#55e6a531] font-semibold rounded py-2 px-4 text-sm">MERN Stack develoepr</span>
                                    </div>
                                    <h1 className="text-3xl leading-[40px] md:text-5xl md:leading-[60px] lg:text-5xl lg:leading-[65px] xl:text-6xl font-bold xl:leading-[75px] text-white"> I'm Ebrahim <br /> Creative<span className="bg-gradient-to-l to-[#03e37e] from-[#04f872] bg-clip-text text-transparent">Developer</span> </h1>
                                    <p className="text-white">Hello! I'm Ebrahim, a dedicated MERN stack developer with a passion for crafting seamless web experiences. I specialize in leveraging the power of MongoDB, Express.js, React, and Node.js to build robust and responsive applications. From designing efficient databases to creating intuitive user interfaces.I am always eager to tackle new challenges and stay at the forefront of web development trends.</p>
                                    <div className="flex items-center gap-x-3">
                                       
                                            <a onClick={() => downloadPdf()} className="flex items-center py-3 gap-1  flex-nowrap  text-gray-900 hover:bg-[#0F1722] transition-all hover:text-white bg-primary   px-5 cursor-pointer font-semibold duration-500">
                                               <LiaFileDownloadSolid /> Download CV
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


            <section id="service" className="pt-20 pb-10">
                <SectionTitle textAlign="center"  margin={'auto'} title={'My Services'} subTitle={'Crafting stories through design and innovation'} />
               
                <div className="container lg:w-[1100px] pt-28 px-5 md:px-0">
                    <div className="grid md:grid-cols-3 gap-5">
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
                                    <div className="w-24 h-[3px] bg-gray-400 "></div>
                                </div>
                               <div>
                                    <p className="text-gray-400 mb-10">I am a passionate and results-driven MERN stack developer with a strong foundation in building dynamic and responsive web applications. My journey in the world of web development began with a curiosity about creating seamless user experiences and has since evolved into a deep expertise in the MERN stack.</p>
                                    <div>
                                        <a onClick={() => downloadPdf()}  className=" py-4 items-center  flex-nowrap  text-gray-900 hover:bg-[#0F1722] transition-all hover:text-white bg-primary   px-5  font-semibold duration-500">
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


            <section id="education" className="pt-20 pb-10">
                <SectionTitle textAlign="center"  margin={'auto'} title={'Educations'} subTitle={'Showcasing my talent amplifying my impact'} />
                
                <div className="container lg:w-[1100px] pt-28 px-5 md:px-0">
                    <div className="grid md:grid-cols-2 gap-6">
                        {
                            educations?.map(education => <EducationCard key={education?._id} education={education} /> )
                        }
                    </div>
                </div>
            </section>


            {/* Skills */}
            <section id="skills" className="pt-10 pb-28">
                <div className="container lg:w-[1100px] px-5 md:px-0">
                    <div className="grid  md:grid-cols-2 gap-5">
                        <div className="space-y-5 mb-12 md:mb-0">
                            <SectionTitle textAlign="left"  margin={'auto'} title={'Currently Learning'} subTitle={'Which I am currently learning.'} />
                              
                            <div className="service ">
                                <span className="text-white ml-14">Next JS</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src="https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png" alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[40%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service ">
                                <span className="text-white ml-14">Redux</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src="https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png" alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[30%] absolute bottom-0 left-0"></span>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <SectionTitle textAlign="left"  margin={'auto'} title={'Special Skills'} subTitle={'My Special Skills filed hire'} />
                            
                            <div className="service">
                                <span className="text-white ml-14">JavaScript</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[85%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service ">
                                <span className="text-white ml-14">React JS</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[90%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service ">
                                <span className="text-white ml-14">Node JS</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[70%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service ">
                                <span className="text-white ml-14">Express JS</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png" alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[80%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service ">
                                <span className="text-white ml-14">MongoDB</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png" alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[85%] absolute bottom-0 left-0"></span>
                            </div>
                            <div className="service ">
                                <span className="text-white ml-14">Tailwindcss</span>
                                <span className="serviceIcon">
                                    <img className="w-10" src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Tailwind-CSS1-900x0.png" alt="" />
                                </span>
                                <span className="bg-primary h-[6px] w-[95%] absolute bottom-0 left-0"></span>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </section>


            <section id="projects" className="pt-10 pb-20">
                <SectionTitle textAlign="center"  margin={'auto'} title={'Recent project'} subTitle={'My Complete Projects'} />
               
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
                            <p className="text-2xl font-bold text-white mb-2">Get in Touch</p>
                            <p className="text-base font-medium text-gray-500">I am a hard-working, reliable web developer. I love being in this line of work because I am passionate about technology, design, and innovation.</p>
                            <ul className="space-y-6 mt-5">
                                <li className="flex items-center gap-8">
                                    <div>
                                        <FaUser size={30} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-white">Name</p>
                                        <p className="text-base font-medium text-gray-500">Md. Ebrahim</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-8">
                                    <div>
                                        <MdOutlineEmail size={30} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-white">Email</p>
                                        <p className="text-base font-medium text-gray-500">ebrahimit49@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-8">
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
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Home;