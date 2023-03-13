import { Player } from '@lottiefiles/react-lottie-player';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn,providerLogin } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('');

    const location = useLocation();
    const navigate = useNavigate('/');

    const from = location.state?.from?.pathname || "/";

    const handleLogin = data =>{
        console.log(data);
        setLoginError('');
        console.log(data)
        signIn(data.email, data.password)
       .then(result=>{
        const user = result.user;
        console.log(user)
        toast.success('login successfully.')

        setLoginUserEmail(data.email)
         
       })
       .catch(error =>{
        console.log(error.message)
        setLoginError(error.message);
       });
       
    }
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
   
                // setLoading(false);
                // setLoginUserEmail(user.email);
                let userInfo = { displayName: user?.displayName, email: user?.email, role: 'buyer' };
                // saveUuse(userInfo);
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className=''>
            <div className='h-[700px] flex justify-center items-center drop-shadow-2xl md:flex'>
            <div className='w-1/2 my-10'>
                <Player
                    src='https://assets2.lottiefiles.com/packages/lf20_jrpzvtqz.json'
                    className="player rounded-lg"
                    loop
                    autoplay
                    speed={1}
                />
            </div>

                <div className='w-96 p-7 shadow-3xl bg-rose-400'>
                    <h2 className='text-4xl text-center'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input type="text" placeholder="Enter your email "
                                {...register("email", {
                                    required: "Email address is required"
                                })}

                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter password "
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }


                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                            <label className="label">
                                <span className="label-text">Forget Password</span>  </label>
                        </div>


                        <input className='btn btn-accent w-full' value="login" type="submit" />
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    </form>
                    <p>Don't have an account? <Link className='text-red' to="/signup">Create New account</Link></p>
                    <div>
                    <button type='button' onClick={handleGoogleSignIn} className='w-full  mt-4 py-2 rounded-2xl font-semibold mb-2 btn mr-10 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 text bg-transparent'>
                        CONTINUE WITH GOOGLE <FcGoogle className='ml-2 text-lg' />
                    </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;