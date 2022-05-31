const feedbackroute = require("express").Router();
const feedbackdetails = require("../models/feedbackDetails.js");
const ticketdetails = require("../models/ticketDetails.js");

feedbackroute.route("/add_feedback").post(async(req, res) =>{
    try{
        const FirstName= req.body.firstname;
        const LastName = req.body.lastname;
        const Email= req.body.email;
        const Phone= req.body.phone;
        const Message = req.body.message;

        const newFeedbackDetails = new feedbackdetails({
            FirstName,
            LastName,
            Email,
            Phone,
            Message,
        })
        console.log("newTicketDetails",newFeedbackDetails);
        const savedFeedbackDetails = await newFeedbackDetails.save();
        res.status(200).send({status : "New Ticket Added", newFeedbackDetails});
    }
    catch(err){
        console.log(err);
        res.status(500).send({status : "Error with Adding New Ticket", error: err.message});
    }
});

feedbackroute.route("/view").get(async (_req, res) => {  //check
    try {
        const feedbacks = await feedbackdetails.find();
        res.status(200).send({status: "Data Found", feedbacks});
    } catch (e) {
        res.status(500).send({status: "Ërror retrieving feedbacks", error: e.message});

    }
});

module.exports = feedbackroute;