import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import Loading from '../../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
    const [signInWIthFacebook, facebookUser, facebookLoading] = useSignInWithFacebook(auth);
    if (googleLoading || facebookLoading) {
        return <Loading></Loading>
    }
    if (googleUser || facebookUser) {
        navigate('/home')
    }
    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>
            <button
                onClick={() => signInWIthFacebook()}
                className='btn btn-primary w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={facebook} alt="" />
                <span className='px-2'>Facebook Sign In</span>
            </button>
        </div>
    );
};

export default SocialLogin;