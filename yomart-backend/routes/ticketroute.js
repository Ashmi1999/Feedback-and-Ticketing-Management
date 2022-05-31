const ticketmanageroute = require("express").Router();
let ticketdetails = require("../models/ticketDetails.js");
//Add new ticket

ticketmanageroute.route("/add_ticket").post(async (req, res) => {
    try {
        const Category = req.body.category;
        const FirstName = req.body.firstname;
        const LastName = req.body.lastname;
        const Email = req.body.email;
        const Phone = req.body.phone;
        const Message = req.body.message;

        const newTicketDetails = new ticketdetails({
            Category,
            FirstName,
            LastName,
            Email,
            Phone,
            Message,
        })
        console.log("newTicketDetails", newTicketDetails);
        const savedTicketDetails = await newTicketDetails.save();
        res.status(200).send({status: "New Ticket Added", newTicketDetails});
    } catch (err) {
        console.log(err);
        res.status(500).send({status: "Error with Adding New Ticket", error: err.message});
    }
});


//update ticket

ticketmanageroute.route("/update_ticket/:id").put((req, res) => {
    console.log(req.body);
    const _id = req.params.id;
    const Category = req.body.Category;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const Phone = req.body.Phone;
    const Message = req.body.Message;

    const updateDetails = new ticketdetails({
        _id,
        Category,
        FirstName,
        LastName,
        Email,
        Phone,
        Message,
    }); // check
    console.log("updateDetails", updateDetails);
    ticketdetails.findByIdAndUpdate(_id, updateDetails).then(() => {
        res.status(200).send({status: "Ticket Updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with Updating Ticket", error: err.message});
    });
});
//View ticket

ticketmanageroute.route("/view").get(async (_req, res) => {  //check
    try {
        const tickets = await ticketdetails.find();
        res.status(200).send({status: "Data Found", tickets});
    } catch (e) {
        res.status(500).send({status: "Ërror retrieving tickets", error: e.message});

    }
})

//delete ticket
ticketmanageroute.route("/delete/:id").delete((_req, res) => {
    let ID = _req.params.id;
    ticketdetails.findByIdAndDelete(ID)
        .then(() => {
            res.status(200).send({status: "Ticket Successfully Deleted."});
        }).catch((err) => {
        console.log(err);
    })
})


module.exports = ticketmanageroute;










