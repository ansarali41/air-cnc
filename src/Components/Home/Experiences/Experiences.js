import React from 'react';
import './Experiences.css';

const Experiences = (props) => {
    const { title, location, image, rate, category } = props.Experience;
    return (
        <div style={{ width: '150px' }}>
            <img className='p-1 experiences-img' src={image} alt="" />
            <p><b><small>{category} · {location}</small></b></p>
            <h6>{title}</h6>
            <p><small>{rate}$ per person</small></p>
        </div>
    );
};

export default Experiences;