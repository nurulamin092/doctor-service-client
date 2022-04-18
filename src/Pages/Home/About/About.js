import React from 'react';
import profile from '../../../images/profile/profile.png'
const About = () => {
    return (
        <div className='container w-50 mx-auto'>
            <h1>My Dream</h1>
            <img src={profile} alt="" />
            <div>
                I am student of Programming Hero batch 5.
                My dream complete this course and join SCIC Program.
                Then I join a jod Ing Sha Allah
            </div>
        </div>
    );
};

export default About;