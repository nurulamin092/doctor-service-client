import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleNameBlur = (e) => {
        setName(e.target.value);
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
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleRegister = async (e) => {
        e.preventDefault();
        // const name = e.target.value.name;
        /*     const email = e.target.value.email;
            const password = e.target.value.password;
            createUserWithEmailAndPassword(email, password); */
    }
    return (
        <div className='w-50 mx-auto mt-2'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={() => createUserWithEmailAndPassword(email, password)}
                    variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;