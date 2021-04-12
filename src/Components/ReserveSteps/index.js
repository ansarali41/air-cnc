import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Menu from '../Menu/Menu';
import ReserveCart from '../ReserveCart/ReserveCart';
import Payment from './Payment';
import ReviewHouse from './ReviewHouse';
import WhoComing from './WhoComing';

let secondStepStyle={};
let thirdStepStyle={};

const Index = () => {
    const [steps, setSteps] = useState({
        firstStep: true,
        secondStep: false,
        thirdStep: false,
    });
    if(steps.secondStep === true){
        secondStepStyle={
            fontWeight:'bold',
        }
    }
    if(steps.thirdStep === true){
        thirdStepStyle={
            fontWeight:'bold',
        }
        secondStepStyle={
            fontWeight:'bold',
        }
    }
    
    console.log(steps);
    return (
        <section className="container">
            <Menu />
            <div className="d-flex">
                <p style={{ fontWeight: 'bold' }}>1. Reviews house rules {'>'}</p>
                <p style={secondStepStyle}>2. Who’s coming?{'>'}</p>
                <p style={thirdStepStyle}>3. Confirm and pay</p>
            </div>
            <Row>
                <Col xs={12} md={6}>
                    {steps.firstStep && <ReviewHouse steps={steps} setStep={setSteps}/>}
                    {steps.secondStep && <WhoComing steps={steps} setStep={setSteps}/>}
                    {steps.thirdStep && <Payment steps={steps} setStep={setSteps}/>}

                    {/* {steps.secondStep ? <WhoComing steps={steps} setStep={setSteps}/>  : <ReviewHouse steps={steps} setStep={setSteps}/>} */}
                </Col>
                <Col xs={12} md={6}>
                    <ReserveCart />
                </Col>
            </Row>
        </section>
    );
};

export default Index;