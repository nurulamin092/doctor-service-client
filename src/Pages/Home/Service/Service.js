import React from 'react';
import { Card, CardGroup, Col, Row, ToggleButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './service.css'
const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/checkout`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='service-btn'>Book: {name}</button>
        </div>


    );
};

export default Service;