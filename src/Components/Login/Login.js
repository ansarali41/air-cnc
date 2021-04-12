import React from 'react';
import Menu from '../Menu/Menu';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container">
            <Menu />
            <div className="d-flex justify-content-center">
                <h3 className="py-5">Login</h3>
            </div>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-box">
                        <label>Country / Region</label> <br />
                        <input type="text" className="form-control" name="country" placeholder="Add City, Land Mark or Address" ref={register({ required: true })} />
                        {errors.country && <span style={{ color: 'red' }}>This field is required</span>}
                    </div>
                    <div className="input-box">
                        <label>Country / Region</label> <br />
                        <input type="tel" className="form-control" name="phone" placeholder="Enter Phone Number" ref={register({ required: true })} />
                        {errors.phone && <span style={{ color: 'red' }}>This field is required</span>}
                    </div>
                    <input className="form-control text-center gradient-btn" type="submit" value="Continue  " />
                </form>
            </div>
        </div>
    );
};

export default Login;