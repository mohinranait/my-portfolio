
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
    

    return (
        <>
            <div className=" pb-16 pt-40 ">
                <div className="" style={{margin: '0 auto'}}>
                    <p className="text-center text-2xl text-primary mb-5" style={{textAlign: 'center'}}>GET IN TOUCH</p>
                    <p className="text-center text-4xl text-white font-bold" style={{textAlign: 'center'}}>Let’s discuss about an project!</p>
                </div>    
                <div className="container px-5 md:px-0 mt-10">
                    <div className=" max-w-2xl mx-auto">
                        <div className="col-span-3 ">
                            <ContactForm />
                        </div>
                       
                    </div>
                </div>
            </div>   
        </>
    );
};

export default ContactUs;