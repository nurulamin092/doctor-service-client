import React from 'react';

const Footer = () => {
    return (
        <footer sticky='bottom' className='card-footer text-center mt-5 bg-primary'>
            <p w-50 d-block mx-auto mt-3 ><small> copyright   @{new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;