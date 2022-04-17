import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../Shared/CustomLink/CustomLink';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    if (user) {
        navigate('/home');
    }
    const navigateRegister = (e) => {
        navigate('/register')
    }
    return (
        <div className='w-50 mx-auto mt-2'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={() => signInWithEmailAndPassword(email, password)}
                    variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='d-flex'><span className='mx-2'>Don’t have an account?</span> <CustomLink to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</CustomLink></p>

        </div>
    );
};

export default Login;