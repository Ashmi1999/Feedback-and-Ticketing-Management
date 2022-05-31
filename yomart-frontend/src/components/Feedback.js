import { useForm } from "react-hook-form";
import React,{useState} from "react";
import {ButtonGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import CONSTANTS from "../services/constants";

function App() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();
    
    const onSubmit = async (data) => {
        try{
            console.log(data);
            const feedBack = data;
            const response = await axios.post(`${CONSTANTS.HOST_NAME}/feedback/add_feedback`, feedBack);
            alert ("Thank you for your feedback!!!");
            reset();
        }catch (e) {
            alert ("Error in submitting feedback!!!");
        }

    }

    const handleFeedBack=()=> {
        navigate("/feedback");
    }

    const handleTickets=()=> {
        navigate("/addticket");

    }

    return (
    
        <div className="container2 pt-5">
        <div className="h1">HERE TO HELP !!</div>
        <div className="a">Your feedback and enquiry is important to us,so we will endeavour to respond to you at our earliest.</div>
        <div className="p">Your feedback will help us to continously improve ourselves to make it better for you and other valued customers.</div>
            <div className="buttonGroup">
                <ButtonGroup className="mb-2">
                    <Button className=" btn-success" onClick={handleFeedBack}>FEEDBACK</Button>
                    <Button className=" btn-success" onClick={handleTickets}>TICKETS</Button>
                </ButtonGroup>
            </div>
        <div className="row justify-content-sm-center pt-5">
            <div className="col-sm-6 shadow round pb-3">
            <h3 className="text-center pt-3 text-secondary">FEEDBACK</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="col-form-label">First Name:</label>
                <input
                    type="text"
                    placeholder="Enter your first name"
                    // onChange={(e) => {
                    //   setfName(e.target.value);
                    // }}
                    className={`form-control ${errors.name && "invalid"}`}
                    {...register("firstname", { required: "First Name is Required" })}
                    onKeyUp={async() => {
                    await trigger("firstname");
                    }}
                />
                {errors.name && (
                    <small className="text-danger">{errors.name.message}</small>
                )}
            
    
                <div className="form-group">
                <label className="col-form-label">Last Name:</label>
                <input
                    type="text"
                    placeholder="Enter your last name"
                    // onChange={(e) => {
                    //   setlName(e.target.value);
                    // }}
                    className={`form-control ${errors.name && "invalid"}`}
                    {...register("lastname", { required: "Last Name is Required" })}
                    onKeyUp={async () => {
                    await trigger("lastname");
                    }}
                />
                {errors.name && (
                    <small className="text-danger">{errors.name.message}</small>
                )}
                </div>
                
                <div className="form-group">
                <label className="col-form-label">Email:</label>
                <input
                    type="text"
                    placeholder="name@gmail.com"
                    // onChange={(e) => {
                    //   setemail(e.target.value);
                    // }}

                    className={`form-control ${errors.email && "invalid"}`}
                    {...register("email", { required: "Email is Required" ,
                    pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                    }})}
                    onKeyUp={async() => {
                    await trigger("email");
                    }}
                />
                {errors.email && (
                    <small className="text-danger">{errors.email.message}</small>
                )}
                </div>
                <div className="form-group">
                <label className="col-form-label">Phone:</label>
                <input
                    type="text"
                    placeholder="Contact number"
                    // onChange={(e) => {
                    //   setphone(e.target.value);
    
                    // }}
    
    
                    className={`form-control ${errors.phone && "invalid"}`}
                    {...register("phone", { required: "Phone is Required",
                    pattern: {
                      value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    message: "Invalid phone no",
                    },
                })}
                onKeyUp={async() => {
                    await trigger("phone");
                }}
                />
                {errors.phone && (
                    <small className="text-danger">{errors.phone.message}</small>
                )}
                </div>
                <div className="form-group">
                <label className="col-form-label">Message:</label>
                <textarea
                    className={`form-control ${errors.message && "invalid"}`}
                    {...register("message", { required: "Message is Required",
                    minLength: {
                    value: 10,
                    message: "Minimum Required length is 10",
                    },
                    maxLength: {
                    value: 50,
                    placeholder :"Type here",
                    message: "Maximum allowed length is 50 ",
                    },
                    
                })}
                onKeyUp={async() => {
                    await trigger("message");
                }}
                >
                </textarea>
                {errors.message && (
                    <small className="text-danger">{errors.message.message}</small>
                )}
                </div>

                <Button className="btn2 btn-success my-3" type="submit" >SUBMIT FEEDBACK</Button>
            </form>
            </div>
            </div>
        </div>
            
    );
    

                }           
            
    export default App;