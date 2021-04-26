import { faArrowRight, faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const ReserveCart = () => {
    const [user, setUser] = useContext(UserContext);
    console.log(user);

    return (
        <div className=" d-flex justify-content-center">
            <Card className="p-4 shadow" style={{ width: '24rem' }}>
                <p>$price/shift</p>
                <small><FontAwesomeIcon icon={faStar} className="star-icon"></FontAwesomeIcon >rating(totalRating reviews)</small> <br />

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
                    <small>$price x 4 nights</small>
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
                <Link to="/reserveSteps"><input className="form-control text-center gradient-btn" type="submit" value="Reserve" /></Link>
                <div className="text-center">
                    <small>You won’t be charged yet</small>
                </div>
            </Card>
        </div>
    );
};

export default ReserveCart;