import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HotelCard.css'

const HotelCard = () => {
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(response => response.json())
            .then(data => {
                setHotels(data);
            })
    }, [])
    
    return (
        <div>
            {
                hotels.map((hotel) =>
                    <div key={hotel.id} className="d-flex py-2" style={{ borderBottom: '1px solid #E9E9E9' }} >
                        <div>
                            <Link to={`/hotel/${hotel.id}`}>
                                <img style={{ width: '190px', padding: '5px', borderRadius: '20px' }} src={hotel.image} alt="" />
                            </Link>
                        </div>
                        <div className="card-text">
                            <p>
                                {hotel.title} <br />
                                <small>{hotel.guests} guests {hotel.bedrooms} bedrooms {hotel.beds} beds {hotel.baths} baths</small> <br />
                                {hotel.facility}
                            </p>
                            <p>{hotel.cancellation}</p>
                            <p><small><FontAwesomeIcon icon={faStar} className="star-icon"></FontAwesomeIcon >{hotel.rating}({hotel.totalRating})</small></p>

                            <div className="card-text-bottom">
                                <p>${hotel.price}/{hotel.shift} <br />
                                    <small>${hotel.totalPrice} total</small></p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default HotelCard;