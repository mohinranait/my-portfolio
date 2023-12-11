import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {  toast } from 'react-toastify';


const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_cjig19x', 'template_5baq578', form.current, '-MNh8pTpezRMWbUJW')
        .then(() => {
            toast.success("Send Successfully")
            setLoading(false)
            e.target.reset();
        }, (error) => {
            toast.success(error.text)
            setLoading(false)
        });
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <input type="text" name='first_name' className='input-filed ' placeholder='First name' />
                    <input type="text" name='last_name' className='input-filed ' placeholder='Last name' />
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <input type="email" name='user_email' className='input-filed ' placeholder='Email' />
                    <input type="text" name='website' className='input-filed ' placeholder='Website' />
                </div>
                <div className=" gap-8 mb-8">
                    <textarea name="message" id="" className='input-filed ' cols="30" rows="4" placeholder="Message"></textarea>
                </div>
                <div className='mb-4 flex gap-5'>

                    {
                        loading ?  <button type='button' className='px-5 py-4 transition-all bg-[#169557] hover:bg-[#1aad75] text-black font-medium w-full'>Sending...</button>
                         :  
                         <button type='submit' className='px-5 py-4 transition-all bg-primary hover:bg-[#41c793] text-black font-medium w-full'>Submit</button>
                    }
                   
                </div>
            </form>   
        </>
    );
};

export default ContactForm;