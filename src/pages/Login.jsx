import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import {  toast } from 'react-toastify';

const Login = () => {
    const {loginUser} = useAuth();
    const {register,  handleSubmit, formState: { errors }, } = useForm()
    const navigate = useNavigate();
    const location = useLocation();


    const onSubmit = async (data) => {
        const {email, password} = data || {};
        try {
            await loginUser(email, password)
           toast.success("Login Successfull")
            navigate(location?.state ? location?.state : '/')
        } catch (error) {
            toast("Somthing wrong your crediantials")
        }
    }


    const emailValidation = {
        required : "Email fild is Required",
        minLength: {
            value: 5,
            message: "Email charecter length must bee 5 charecter"
        },
        maxLength: {
            value : 20,
            message : "Email charecter limit is 20"
        },
        pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message : "Invalid email address"
        }
    }

    return (
        <section className=''>
        <div className='' >
            <div className="container flex items-center h-screen my-10">
                <div className=" w-[300px]   md:w-[450px] overflow-hidden  mx-auto rounded-lg">
                    
                        <div className='px-5 py-5 md:px-10 md:pb-10 rounded-b-lg bg-secondary '>
                        
                            <div className='text-xl pb-5 font-semibold text-gray-600'>Login </div>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='mb-4'>
                                        <label htmlFor="" className='mb-1 block font-medium text-gray-600'>Email</label>
                                        <input type="email" name='email' {...register("email", emailValidation)} placeholder='Email' className='input-filed ' />
                                        <p className="text-red-500 text-sm">{errors.email && errors.email.message }</p>
                                    </div>
                                    <div className='mb-5'>
                                        <label htmlFor="" className='mb-1 block font-medium text-gray-600'>Password</label>
                                        <input type="password" name='password' {...register("password", { required: 'Password is required' })} placeholder='Password' className='input-filed ' />
                                        <p className="text-red-500 text-sm">{errors.password && errors.password.message }</p>
                                    </div>
                                    <div className='mb-4 flex gap-5'>
                                        <button type='submit' className='px-5 py-4 transition-all bg-primary hover:bg-[#41c793] text-black font-medium w-full'>Sign In</button>
                                    </div>
                                </form>
                            </div>
                           
                            
                        </div>
                
                </div>
                
            </div>
        </div>
    </section>
    );
};

export default Login;