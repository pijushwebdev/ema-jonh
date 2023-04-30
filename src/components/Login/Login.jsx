import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const { signInWithGoogle, signIn, passwordResetEmail, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef()
    const [user, setUser] = useState(null);
    const [show, setShow] = useState(false);

    const location = useLocation();


    const from = location.state?.from?.pathname || '/';


    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                const signedUser = res.user;
                toast.success('Successfully Login');
                setUser(signedUser);
                navigate(from, { replace: true });

            })
            .catch(error => {
                toast.error(error.message)
            })

    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                const currentUser = res.user;
                toast.success('Logged in with google');
                setUser(currentUser);
                navigate(from, { replace: true });

            })
            .catch(error => {
                toast.error(error.message);

            })
    }

    const handleResetPassword = (e) => {
        const email = emailRef.current.value;
        if (!email) {
            toast.error("Please Provide an email");
        }
        passwordResetEmail(email)
            .then(() => {
                toast.success('A rest email has been sent');

            })
            .catch(err => {
                toast.error(err.message);

            })
    }


    return (
        <div className='w-1/4 mx-auto shadow-md p-4 rounded-md '>

            <h1 className='my-4 text-2xl font-bold text-center'>Login</h1>

            <form onSubmit={handleSignIn} className='flex flex-col text-center my-5' >
                <input className='py-1 px-2 text-red-700 rounded-md outline-none border' ref={emailRef} type="email" name='email' placeholder='Email' required />
                <div className='relative'>
                    <input className='w-full my-6 py-1 px-2 text-red-700 rounded-md outline-none border' type={show ? 'text' : 'password'} name='password' placeholder='Password' required />
                    <span onClick={() => setShow(!show)} className='absolute cursor-pointer top-7 right-2'>
                        <>
                            {
                                show ? <FontAwesomeIcon icon={faEye} style={{ color: "#6c7ac1", }} /> :
                                    <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#4574c4", }} />
                            }
                        </>
                    </span>
                </div>

                <input className='py-1 px-2 bg-green-700 rounded-md text-white' type="submit" value='Sign in' />
            </form>
            <p className='text-cyan-600'><small>Forgot Password?</small> <span onClick={handleResetPassword} className='text-sky-700 cursor-pointer hover:underline'>Reset</span></p>
            <p className='text-cyan-600 my-4'><small>Not have an account?</small> <Link to='/sign-up' className='text-sky-700 cursor-pointer hover:underline'>Sign up</Link></p>

            <button onClick={handleGoogleSignIn} className='px-2 py-1 border rounded-md outline-none text-gray-500 font-semibold'>Sign in with Google</button>
        </div>
    );
};

export default Login;