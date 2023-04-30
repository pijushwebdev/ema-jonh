import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';
import { sendEmailVerification } from 'firebase/auth';


const SignUp = () => {

    const { createUser } = useContext(AuthContext);


    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirm.value;

        if(password.length < 8) {
            toast.error('Password should be minimum 8 character');
            return;
        }
        if(password !== confirmPass){
            toast.error('Password not matched');
            return;
        }

        createUser(email,password)
        .then(res => {
            const currentUser = res.user;
            toast.success('Successfully created...');
            form.reset();
            verifyUserEmail(currentUser);
        
        })
        .catch(error => {
            toast.error(error.message);
        })
    }
    const verifyUserEmail = (email) => {
        sendEmailVerification(email);
        toast.success('Verification mail has been sent');
    }

    return (
        <div className='shadow-md rounded-md p-3 w-1/4 mx-auto my-5'>   

            <h1 className='my-4 text-2xl font-bold text-center'>Sign Up</h1>

            <form onSubmit={handleSignUp} className='flex flex-col text-center my-5' >
                <input type="text" name='name' placeholder='Full name' className='my-3 py-1 px-2 text-red-700 rounded-md outline-none border' required/>

                <input className='my-3 py-1 px-2 text-red-700 rounded-md outline-none border' type="email" name='email' placeholder='Email' required />
                <input className='my-3 py-1 px-2 text-red-700 rounded-md outline-none border' type="password" name='password' placeholder='Password' required />
                <input className='my-3 py-1 px-2 text-red-700 rounded-md outline-none border' type="password" name='confirm' placeholder='Confirm Password' required />
                
                <input className='my-3 py-1 px-2 bg-green-700 rounded-md text-white' type="submit" value='Sign Up'/>
            </form>
            <p className='text-center text-red-500'><small>Already Have an Account?</small> <Link className='hover:underline text-red-400' to='/login'>Sign in</Link></p>
            
        </div>
    );
};

export default SignUp;