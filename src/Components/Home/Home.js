import React from 'react';
import Menu from '../Menu/Menu'
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import Homes from './Homes/Homes';
import Experiences from './Experiences/Experiences';
import ExperiencesData from '../../fakeData/ExperiencesData';
import HomesData from '../../fakeData/HomesData';
import { Link } from 'react-router-dom';

const Home = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container className="container">
            <Menu />
            <div>
                <h5>Where do you want to go</h5>
            </div>

            <Row>
                <Col xs={12} md={4}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-box">
                            <label>LOCATION</label> <br />
                            <input type="text" className="form-control" name="location" placeholder="Add City, Land Mark or Address" ref={register({ required: true })} />
                            {errors.location && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                        <div className="input-box d-flex">
                            <div className="w-50">
                                <label>Arrival</label> <br />
                                <input type="date" className="form-control" name="arrival" ref={register({ required: true })} />
                                {errors.arrival && <span style={{ color: 'red' }}>This field is required</span>}
                            </div>
                            <div className="w-50">
                                <label>Departure</label> <br />
                                <input type="date" className="form-control" name="departure" ref={register({ required: true })} />
                                {errors.departure && <span style={{ color: 'red' }}>This field is required</span>}
                            </div>
                        </div>
                        {/* <input name="exampleRequired" ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>} */}

                        <div className="input-box">
                            <label>Guests</label> <br />
                            <h5>0 Adult 0 Child</h5>
                            <hr />
                            <input type="text" className="form-control" name="location" placeholder="Add City, Land Mark or Address" ref={register({ required: true })} />
                            {errors.location && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                        <Link to="/selected-location"><input className="form-control text-center gradient-btn" type="submit" value="Search " /></Link>

                    </form>
                </Col>

                <Col xs={12} md={8}>
                    <div xs={12} md={6}>
                        <h4>Experiences</h4>
                        <div className='d-flex justify-content-around'>
                            {
                                ExperiencesData.map(Ex => <Experiences Experience={Ex} key={Ex.id} ></Experiences>)
                            }
                        </div>
                    </div>
                    <div xs={12} md={6}>
                        <h4>Homes</h4>
                        <div className='d-flex justify-content-around'>
                            {
                                HomesData.map(Home => <Homes Home={Home} key={Home.id} ></Homes>)
                            }
                        </div>
                    </div>
                </Col>
            </Row>
            <div>

            </div>
            <div>

            </div>
        </Container>
    );
};

export default Home;