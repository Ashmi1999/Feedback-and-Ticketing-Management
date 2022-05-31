const mongoose = require('mongoose');
const schema = mongoose.Schema;
const feedbackSchema = new schema({

    FirstName: {
        type: String,
        required: true,

    },

    LastName: {
        type: String,
        required: true,

    },

    Email: {
        type: String,
        required: true,

    },


    Phone: {
        type: String,
        required: true,

    },

    Message: {
        type: String,
        required: true,

    },


})

const feedbackdetails = mongoose.model("feedback_details", feedbackSchema);

module.exports = feedbackdetails;

