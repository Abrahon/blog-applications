import { Player } from '@lottiefiles/react-lottie-player';
import React, { useContext, useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, setUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const navigate = useNavigate();



    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');

        createUser(data.email, data.password, data.type)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
                toast.success('User created successfully');
                navigate('/')


                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.type);
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error));
    }

    const saveUser = (name, email, type) => {
        const user = { name, email, type };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save user',data)
                navigate('/');
                setCreatedUserEmail(email);

            })
    }

    return (
        <div>
            <div className='h-[700px] flex justify-center items-center drop-shadow-2xl'>
                <div className='w-1/2 my-10'>
                    <Player
                        src='https://assets2.lottiefiles.com/packages/lf20_jrpzvtqz.json'
                        className="player rounded-lg"
                        loop
                        autoplay
                        speed={1}
                    />
                </div>

                <div className='w-96 p-7 shadow-3xl bg-rose-400 rounded'>
                    <h2 className='text-4xl text-center'>Signup</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" id="" placeholder="Full name" {...register("name", {
                                required: "Name is required"
                            })}
                                className="p-3 rounded outline-none border-none w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" id="" placeholder="Email Address" {...register("email", {
                                required: "Email is required"

                            })}
                                className="p-3 outline-none border-none w-full max-w-xs" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" id="" placeholder="Enter password " {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "password must be 6 characters" }
                            })}

                                className="p-3 rounded outline-none border-none w-full max-w-xs" />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                        </div>
                        <div className="form-control w-full max-w-xs">
                        
                        
                        
                        <div className="form-control w-full max-w-xs">
                           <label className="label"> <span className="label-text text-xl">Select Account Type</span></label>
                           <select {...register("type")}>
                               <option value="superUser">super user</option>
                               <option value="admin">admin</option>
   
                           </select>
                       </div>
                             {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
   
                       </div>
                        


                        <input className='btn btn-accent w-full mt-2' value="signup" type="submit" />
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}

                    </form>
                    <p className=''>Already have an account?<Link className="font-semibold" to="/login">Please login</Link></p>



                </div>
            </div>
        </div>
    );
};

export default SignUp;