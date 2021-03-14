import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Menu from '../Menu/Menu';
import Map from './Map';

const SelectedLocation = () => {
    return (
        <div>
            <Menu />
            <Row>
                <Col xs={12} md={5}>
                    section 1
            </Col>
                <Col xs={12} md={5}>
                    {/* <Map /> */}
                </Col>
            </Row>
        </div>
    );
};

export default SelectedLocation;
