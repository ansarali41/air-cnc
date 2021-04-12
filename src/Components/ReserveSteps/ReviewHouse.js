import { faBabyCarriage, faBeer, faChevronDown, faPaw, faSmoking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const dateStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: '#EAEAEA',
    textAlign: 'center',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: '500',
    marginRight: '5px',
}
const iconStyle = {

}
const readMoreStyle = {
    color: '#0377FF',
    cursor: 'pointer'
}

const ReviewHouse = ({ steps, setStep }) => {
    const agreeButton = () => {
        let newSteps= {...steps}
        newSteps.firstStep= false;
        newSteps.secondStep= true;
        setStep(newSteps)
    }
    const icons = [
        {
            icon: faBabyCarriage,
            description: 'Suitable for children and infants'
        },
        {
            icon: faPaw,
            description: 'Pets allowed'
        },
        {
            icon: faBeer,
            description: 'No parties or events'
        },
        {
            icon: faSmoking,
            description: 'Smoking allowed'
        }
    ];


    return (
        <section className="container">
            <h3>Review house rules</h3>
            <h6>3 nights in Dhaka</h6>

            <Row >
                <Col xs={6} md={6} className="d-flex">
                    <p style={dateStyle}>APR <br />13</p>
                    <p><small>monday check in <br /> after 12.00 PM </small></p>
                </Col>
                <Col xs={6} md={6} className="d-flex">
                    <p style={dateStyle}>APR <br />17</p>
                    <p><small>Thursday checkout <br /> 11:00 AM </small></p>
                </Col>
            </Row>
            <small>Self check-in with building staff</small>
            <hr />
            <h6>Things to keep in mind</h6>
            {
                icons.map((element, idx) => <p key={idx}><FontAwesomeIcon style={iconStyle} icon={element.icon}></FontAwesomeIcon><small>{element.description}</small></p>)
            }
            <p style={readMoreStyle}>Read more <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></p>

            <button onClick={() => agreeButton()} className="gradient-btn">Agree and continue </button>
        </section>
    );
};

export default ReviewHouse;