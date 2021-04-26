import { faCheckSquare, faChevronDown, faHome, faPumpSoap, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Menu from '../../Menu/Menu';
import ReserveCart from '../../ReserveCart/ReserveCart';

const HotelDetails = () => {
    const { hotelId } = useParams();
    const [SearchHotels, setSearchHotels] = useState([]);

    useEffect(() => {
        fetch('https://frozen-journey-04607.herokuapp.com/hotels')
            .then(response => response.json())
            .then(data => {
                setSearchHotels(data);
            })
    }, [])
    const hotel = SearchHotels.find(htl => htl.id === parseInt(hotelId));
    console.log(SearchHotels);
    console.log(hotel);
    return (
        <>
            <div className="container">
                <Menu />
            </div>
            {hotel ?
                <div className="container">

                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <img style={{ width: '100%' }} className="img-fluid" src={hotel.image2} alt="" />
                        </Col>
                        <Col xs={12} md={6}>
                            <img style={{ width: '100%' }} className="img-fluid" src={hotel.image} alt="" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <h3>{hotel.title}</h3>
                            <p><small>{hotel.city}, {hotel.country}</small></p>
                            <p><small>{hotel.guests} guests {hotel.bedrooms} bedrooms {hotel.beds} beds {hotel.baths} baths</small></p>
                            <hr />

                            <p><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> <small> Entire home <br /> &emsp; {hotel.EntireHome}</small></p>
                            <p><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon> <small> Self check-in <br /> &emsp; {hotel.SelfCheckIn}</small></p>
                            <p><FontAwesomeIcon icon={faPumpSoap}></FontAwesomeIcon> <small>Sparkling clean <br /> &emsp; {hotel.SparklingClean}</small></p>
                            <p><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <small>Rowdra is a Superhost <br /> &emsp; {hotel.Superhost}</small></p>

                            <p><small>{hotel.description}</small></p>

                            <p><small>Read Read more about the space <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></small></p>

                            <p>
                                Reviews <br />
                                <small><FontAwesomeIcon icon={faStar} className="star-icon"></FontAwesomeIcon >{hotel.rating}({hotel.totalRating} reviews)</small>
                            </p>

                        </Col>

                        {/* Reserve card */}
                        <Col xs={12} md={6}>
                            <ReserveCart />

                            {/* <Card className="p-4 shadow" style={{ width: '24rem' }}>
                        <p>${price}/{shift}</p>
                        <small><FontAwesomeIcon icon={faStar} className="star-icon"></FontAwesomeIcon >{rating}({totalRating} reviews)</small> <br />

                        <small>Dates</small>
                        <div className="d-flex justify-content-between border pt-3 px-2 rounded">
                            <p>4/13/2020</p>
                            <p><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
                            <p>4/17/2020</p>
                        </div>

                        <small>Guests</small>
                        <div className="d-flex justify-content-between border pt-3 px-2 rounded">
                            <p>3 Guests</p>
                            <p><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></p>
                        </div>

                        <div className="d-flex justify-content-between p-2 border-bottom">
                            <small>${price} x 4 nights</small>
                            <small>$136</small>
                        </div>
                        <div className="d-flex justify-content-between p-2 border-bottom">
                            <small>Cleaning fee</small>
                            <small>$10</small>
                        </div>
                        <div className="d-flex justify-content-between p-2 border-bottom">
                            <small>Service fee</small>
                            <small>$21</small>
                        </div>
                        <div className="d-flex justify-content-between p-2 border-bottom">
                            <small>Total</small>
                            <small>$167</small>
                        </div>
                        <input className="form-control text-center gradient-btn" type="submit" value="Reserve" />
                        <div className="text-center">
                            <small>You won’t be charged yet</small>
                        </div>
                    </Card> */}
                        </Col>
                    </Row>
                </div>
                : null
            }
        </>
    );
};

export default HotelDetails;