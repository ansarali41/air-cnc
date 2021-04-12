import React from 'react';
import { Col, Row } from 'react-bootstrap';

const WhoComing = ({ steps, setStep}) => {
    const continueButton = () => {
        let newSteps= {...steps}
        newSteps.firstStep= false;
        newSteps.secondStep= false;
        newSteps.thirdStep= true;
        setStep(newSteps)
    }
    return (
        <section>
            <h6>Traveling for work?</h6>
            <Row>
                <Col xs={9} md={9}>
                    <p><small>Say hello to your host <br /> Let Rowdra know a little about yourself and why you’re coming.</small></p>
                    <textarea className="form-control" name="clientMessage" rows="5" cols="80">
                    </textarea>
                    <button onClick={()=> continueButton()} className="gradient-btn my-3">Continue</button>
                </Col>
                <Col xs={3} md={3}>
                    <img className="w-50 rounded-circle" src="https://i.ibb.co/1vmz8DV/user.jpg" alt="" />
                </Col>
            </Row>
        </section>

    );
};

export default WhoComing;