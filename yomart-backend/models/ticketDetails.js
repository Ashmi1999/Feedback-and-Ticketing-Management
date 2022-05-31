const mongoose = require('mongoose');
const schema = mongoose.Schema;
const  ticketdetailsSchema = new schema({

    Category:{
        type :String,
        required: true,

    },

    FirstName: {
        type : String,
        required: true,
        
    },

    LastName : {
        type : String,
        required: true,
       
    },

    Email: {
        type : String,
        required: true,
       
    },

    
    Phone: {
        type : String,
        required: true,
        
    },

    Message: {
        type : String,
        required: true,
       
    },

    
})

const ticketdetails = mongoose.model("ticket_details", ticketdetailsSchema);

module.exports = ticketdetails;

