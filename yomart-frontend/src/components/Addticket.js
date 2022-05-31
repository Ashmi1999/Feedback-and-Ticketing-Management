import {useForm} from "react-hook-form";
import React, {useState} from "react";
import axios from 'axios'
import {ButtonGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import CONSTANTS from "../services/constants";


function App() {
    const navigate = useNavigate();

    const [category, setCategory] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    const newTicket = {
        category,
        firstname,
        lastname,
        email,
        phone,
        message,
    }

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        trigger,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data);
            const newTicket = data;
            console.log(CONSTANTS.HOST_NAME);
            const response = await axios.post(`${CONSTANTS.HOST_NAME}/ticketmanage/add_ticket`, newTicket);
            console.log(response);
            alert("Submitted Successfully");
            reset();
        }
        catch (e) {
            alert ("Error in submitting ticket");
        }
    }


    const handleFeedBack = () => {
        navigate("/feedback");
    }

    const handleTickets = () => {
        navigate("/addticket");

    }

    const handleViewTicket =()=> {
        navigate("/viewticket");

    }
    // console.log(watch());

    // console.log(errors.name)

    const handleChange= async (event)=>{
        setCategory(event.target.value);
        console.log(event.target.value);

       await trigger("category");

    }



    return (

        <div className="container1 pt-5">
            <div className="h1">HERE TO HELP !!</div>
            <div className="a">Your feedback and enquiry is important to us,so we will endeavour to respond to youat our
                earliest.
            </div>
            <div className="p">Your feedback will help us to continously improve ourselves to make it better for you and
                other valued customers.
            </div>
            <div className="buttonGroup">
                <ButtonGroup className="mb-2">
                    <Button className=" btn-success" onClick={handleFeedBack}>FEEDBACK</Button>
                    <Button className=" btn-success" onClick={handleTickets}>TICKETS</Button>
                </ButtonGroup>
            </div>
            <div className="row justify-content-sm-center pt-5">
                <div className="col-sm-6 shadow round pb-3">
                    <h1 className="text-center pt-3 text-secondary">Add ticket</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="form-group mx-sm-3" >
                                <label for="categorey" htmlFor="exampleFormControlSelect1"  className="col-form-label"> Select a category:</label>
                                <select className="form-control" id="exampleFormControlSelect1" value={category}
                                        {...register("category", {required: "Name is Required"})}
                                        onChange={handleChange}>
                                    <option value="Delivery">Delivery</option>
                                    <option value="Product">Product</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group mx-sm-3">
                            <label className="col-form-label">First Name:</label>
                            <input
                                type="text"
                                placeholder="Enter your first name"

                                className={`form-control ${errors.name && "invalid"}`}
                                onChange={(e) => {
                                    setFirstname(e.target.value);
                                }}
                                {...register("firstname", {required: "Name is Required"})}
                                onKeyUp={async() => {
                                    await trigger("firstname");
                                }}
                            />
                            {errors.name && (
                                <small className="text-danger">{errors.name.message}</small>
                            )}
                        </div>
                        </div>
                        <div className="form-group mx-sm-3">
                            <label className="col-form-label">Last Name:</label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                onChange={(e) => {
                                    setLastname(e.target.value);
                                }}
                                className={`form-control ${errors.name && "invalid"}`}
                                {...register("lastname", {required: "Name is Required"})}
                                onKeyUp={async() => {
                                    await trigger("lastname");
                                }}
                            />
                            {errors.name && (
                                <small className="text-danger">{errors.name.message}</small>
                            )}
                        </div>

                        <div className="form-group mx-sm-3">
                            <label className="col-form-label">Email:</label>
                            <input
                                type="text"
                                placeholder="name@gmail.com"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                className={`form-control ${errors.email && "invalid"}`}
                                {...register("email", {
                                    required: "Email is Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    }
                                })}
                                onKeyUp={async () => {
                                    await trigger("email");
                                }}
                            />
                            {errors.email && (
                                <small className="text-danger">{errors.email.message}</small>
                            )}
                        </div>
                        <div className="form-group mx-sm-3">
                            <label className="col-form-label">Phone:</label>
                            <input
                                type="text"
                                placeholder="Contact number"
                                onChange={(e) => {
                                    setPhone(e.target.value);

                                }}

                                className={`form-control ${errors.phone && "invalid"}`}
                                {...register("phone", {
                                    required: "Phone is Required",
                                    pattern: {
                                        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                        message: "Invalid phone no",
                                    },
                                })}
                                onKeyUp={async () => {
                                    await trigger("phone");
                                }}
                            />
                            {errors.phone && (
                                <small className="text-danger">{errors.phone.message}</small>
                            )}
                        </div>
                        <div className="form-group mx-sm-3">
                            <label className="col-form-label">Message:</label>
                            <textarea
                                className={`form-control ${errors.message && "invalid"}`}
                                {...register("message", {
                                    required: "Message is Required",
                                    minLength: {
                                        value: 10,
                                        message: "Minimum Required length is 10",
                                    },
                                    maxLength: {
                                        value: 50,
                                        placeholder: "Type here",

                                        message: "Maximum allowed length is 50 ",
                                    }
                                })}
                                onKeyUp={async () => {
                                    await trigger("message");
                                }}
                            ></textarea>
                            {errors.message && (
                                <small className="text-danger">{errors.message.message}</small>
                            )}
                        </div>
                        {/* <input
              type="submit"
              className="btn1 btn-primary my-3"
              value="SUBMIT TICKET"
              
            /> */}
                        <Button className="btn1 btn-success my-3" type="submit">SUBMIT TICKET</Button>

                        <Button className="btn2 btn-success my-3" onClick={handleViewTicket}>VIEW TICKET
                        </Button>
                        {/* <Alert color="primary" isOpen={this.state.visible} toggle={this.toggle.bind(this)}>Successfully submitted</Alert> */}
                    </form>
                </div>
            </div>
        </div>

    );
}

export default App;
