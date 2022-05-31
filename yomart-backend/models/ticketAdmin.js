const mongoose = require('mongoose');

const schema = mongoose.Schema;

const ticketadminSchema = new schema({

    ticket_ID : {
        type : String,
        required : true,
        unique : true

    },
    AdminID : { // there is an issue
        type : String,
        required : true,
        unique : true
    },
    first_name: {
        type : String,
        required : true
    },
     last_name: {
        type : String,
        required : true
    },
    email:{
        type :String,
        required : true
    },
    reportID : {
        type : String,
        required : true
    },
    
    phone : {
        type :Number,
        required : true
    }
})

const ticketadmin = mongoose.model("ticket_admin", ticketadminSchema);

module.exports = ticketadmin;