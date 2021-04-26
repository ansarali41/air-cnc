import React, { useContext, useState } from 'react';
import Menu from '../Menu/Menu'
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import Homes from './Homes/Homes';
import Experiences from './Experiences/Experiences';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Home = () => {
    const [user, setUser] = useContext(UserContext);

    // const [searchData, setSearchData] = useState(null)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // setSearchData(data)
        const newData = { ...user, searchData:data }
        console.log(newData);
        setUser(newData)
    };
    // console.log(searchData);
    // console.log(user);

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
                            <input type="number" className="form-control" name="passenger" placeholder="Number of Passenger" ref={register({ required: true })} />
                            {errors.Guests && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                        {/* <div onMouseEnter={handleSubmit(onSubmit)}>
                            {searchData ?
                                <Link to="/selectedLocation"><input className="form-control text-center gradient-btn" type="submit" value="Search " /></Link> :
                                <input className="form-control text-center gradient-btn" type="submit" value="Search " />
                            }
                        </div> */}
                        <Link to="/selectedLocation"><input className="form-control text-center gradient-btn" type="submit" value="Search " /></Link>

                    </form>
                </Col>

                <Col xs={12} md={8}>
                    <div xs={12} md={6}>
                        <h4>Experiences</h4>
                        <Experiences />
                    </div>
                    <div xs={12} md={6}>
                        <h4>Homes</h4>
                        <Homes />
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