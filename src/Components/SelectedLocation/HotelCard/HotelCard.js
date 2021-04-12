import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './HotelCard.css'

const HotelCard = ({ hotel }) => {
    console.log(hotel);
    const { id, title, image, guests, bedrooms, beds, baths, facility, cancellation, rating, totalRating, price, shift, totalPrice } = hotel;

    return (
        <div className="d-flex py-2" style={{ borderBottom: '1px solid #E9E9E9' }}>
            <div>
                <Link to={`/hotel/${id}`}>
                    <img style={{ width: '190px', padding: '5px', borderRadius: '20px' }} src={image} alt="" />
                </Link>
            </div>
            <div className="card-text">
                <p>
                    {title} <br />
                    <small>{guests} guests {bedrooms} bedrooms {beds} beds {baths} baths</small> <br />
                    {facility}
                </p>
                <p>{cancellation}</p>
                <p><small><FontAwesomeIcon icon={faStar} className="star-icon"></FontAwesomeIcon >{rating}({totalRating})</small></p>

                <div className="card-text-bottom">
                    <p>${price}/{shift} <br />
                        <small>${totalPrice} total</small></p>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;