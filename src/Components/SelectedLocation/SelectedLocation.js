import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Menu from '../Menu/Menu';
import HotelCard from './HotelCard/HotelCard';
import Map from './Map/Map';
import './SelectedLocation.css';

const SelectedLocation = () => {
    const allFilterData = ['Cancellation flexibility', 'Type of place', 'Price', 'Instant Book', 'More Filters'];
    const [filterData] = useState(allFilterData);
    return (
        <div className="container">
            <Menu />
            <Row>
                <Col xs={12} md={6}>
                    <p><small>252 stays Apr 13-17 3 guests</small></p>
                    <h5>Stay in  location division</h5>
                    <div className="d-flex location-filter">
                        {
                            filterData.map((element, idx) => <p key={idx}><small className="border rounded-pill p-2 mr-1">{element}</small></p>)
                        }
                    </div>
                    <HotelCard />
                </Col>
                <Col xs={12} md={6}>
                    <Map />
                </Col>
            </Row>
        </div>
    );
};

export default SelectedLocation;
