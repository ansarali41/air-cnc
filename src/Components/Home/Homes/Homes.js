import React, { useEffect, useState } from 'react';

const Homes = () => {
    const [homes, setHomes] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/homes')
            .then(response => response.json())
            .then(data => {
                setHomes(data)
            })
    }, [])
    return (
        <div className='d-flex justify-content-around'>
            {
                homes.map(home =>
                    <div style={{ width: '200px' }} key={home.id}>
                        <img className='p-1 w-75' src={home.image} alt="" />
                        <p><b><small>{home.category} · {home.location}</small></b></p>
                        <h6>{home.title}</h6>
                        <p><small>{home.rate}$ per person</small></p>
                        <p>rating</p>
                    </div>)
            }
        </div>
    );
};

export default Homes;