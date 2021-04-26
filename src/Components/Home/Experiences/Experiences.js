import React, { useEffect, useState } from 'react';
import './Experiences.css';

const Experiences = (props) => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch('https://frozen-journey-04607.herokuapp.com/experiences')
            .then(response => response.json())
            .then(data => {
                setExperiences(data)
            })
    }, [])
    return (
        <div className='d-flex justify-content-around'>
            {
                experiences.map((experience) => 
                    <div style={{ width: '150px' }} key={experience.id}>
                        <img className='p-1 experiences-img' src={experience.image} alt="" />
                        <p><b><small>{experience.category} · {experiences.location}</small></b></p>
                        <h6>{experience.title}</h6>
                        <p><small>{experience.rate}$ per person</small></p>
                    </div>
                )
            }
        </div>
    );
};

export default Experiences;