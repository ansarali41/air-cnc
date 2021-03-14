import React from 'react';

const Homes = (props) => {
    const { title, category, image, rate,location } = props.Home;
    return (
        <div style={{ width: '200px' }}>
            <img className='p-1 w-75' src={image} alt="" />
            <p><b><small>{category} · {location}</small></b></p>
            <h6>{title}</h6>
            <p><small>{rate}$ per person</small></p>
            <p>rating</p>
        </div>
    );
};

export default Homes;