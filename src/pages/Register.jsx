import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import {  toast } from 'react-toastify';


const Register = () => {
    const {createUser,userUpdate} = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {register,  handleSubmit, formState: { errors }, } = useForm()

    
    const onSubmit = async (data) => {
        try {
           
            const {name, email,password} = data;
            await createUser(email, password);
            await userUpdate(name);
            toast.success("Register successfull")
            navigate("/")
        } catch (error) {
            if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
                setError("Your email already exists")
                toast("Your email already exists")
            }else{

                toast(error.message )
            }
        }
    }

    const emailValidation = {
        required : "Email fild is Required",
        minLength: {
            value: 5,
            message: "Email charecter length must bee 5 charecter"
        },
        maxLength: {
            value : 50,
            message : "Email charecter limit is 50"
        },
        pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message : "Invalid email address"
        }
    }

    const passwordValidation = {
        required:"Password is required", 
        maxLength: {
            value: 10,
            message: "Maximum charecter 10"
        },
        minLength: {
            value: 6,
            message: "Minimum charecter is 6"
        }
    }




    return (
        <section className=''>
            <div className='' >
                <div className="container flex py-7 items-center">
                    <div className=" w-[300px] mt-28 md:w-[450px] overflow-hidden  mx-auto rounded-lg">
                            
                            <div className='px-5 py-5 md:px-10 md:pb-10 rounded-b-lg bg-secondary '>
                               
                                <div className='text-xl pb-5 font-semibold text-gray-600'>Register </div>
                                {
                                    error &&   <div>
                                    <p className="py-2 bg-red-50 shadow text-red-500 text-center rounded">{error}</p>
                                </div>
                                }
                              
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                       
                                        <div className='mb-4'>
                                            <label htmlFor="" className='mb-1 block font-medium text-gray-600'>Full Name</label>
                                            <input type="text" name='name' {...register("name", { required: 'Name fild is required' })} placeholder='Full Name' className='input-filed ' />
                                            <p className="text-red-500 text-sm">{errors.name && errors.name.message }</p>
                                        </div>
                                       
                                        <div className='mb-4'>
                                            <label htmlFor="" className='mb-1 block font-medium text-gray-600'>Email</label>
                                            <input type="email" name='email' {...register("email", emailValidation)} placeholder='Email' className='input-filed ' />
                                            <p className="text-red-500 text-sm">{errors.email && errors.email.message }</p>
                                        </div>
                                        <div className='mb-5'>
                                            <label htmlFor="" className='mb-1 block font-medium text-gray-600'>Password</label>
                                            <input type="password" name='password' {...register("password", passwordValidation)} placeholder='Password' className='input-filed ' />
                                            <p className="text-red-500 text-sm">{errors.password && errors.password.message }</p>
                                        </div>
                                        <div className='mb-4 flex gap-5'>
                                            <button type='submit' className='px-5 py-4 transition-all bg-primary hover:bg-[#41c793] text-black font-medium w-full'>Sign Up</button>
                                        </div>
                                    </form>
                                </div>
                                <p className='text-center text-gray-700'>Already have a  account ? <Link to={'/login'} className='text-blue-600'>Sign In</Link> </p>
                                
                            </div>
                    
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Register;