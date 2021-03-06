import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
const Register = () => {
    const [agree, setAgree] = useState(false);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleNameBlur = (e) => {
        setDisplayName(e.target.value);
    }
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(displayName);
        await createUserWithEmailAndPassword(email, password)
        await updateProfile(displayName);

        toast('send email verification ');
        navigate('/home');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }
    const navigateLogin = () => {
        navigate('/login');
    }
    return (
        <div className='w-50 mx-auto mt-2'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className={`ps-2 ${agree ? '' : 'text-danger'} mb-3`} controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept Terms and Condition" />
                </Form.Group>
                <Button
                    disabled={!agree}
                    variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='d-flex'><span className='mx-2'>Already Have an Account?</span> <CustomLink to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</CustomLink></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;