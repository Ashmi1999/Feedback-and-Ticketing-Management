//impoting packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 8070;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

const URL = process.env.MONGODB_URL;

//no need to use this line because of the security reasons(because anyone, who can access the code can get the cluster password)
//const URL = 'mongodb+srv://00prabashwara123:<ClusterPassWord>*@demoitp.mx8hm.mongodb.net/student_db?retryWrites=true&w=majority'

mongoose.connect(URL, {
    //remved this line -> useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFrndAndModify: false
});
//having some problems with the usecreateindex and usefindandmodify.

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Connection Success!!!!");
});

//create a constat and assign the path to get access to paymentroute
// const paymentroute = require("./routes/paymentroute.js");
// app.use("/pays", paymentroute);

//create a constant and assign the path to get access to deliveryroute
// const deliveryroute = require("./routes/deliveryroute.js");
// app.use("/delivery", deliveryroute);

//create a constant and assign the path to get access to customerrout
// const customerrout = require("./routes/customerroute.js");
// app.use("/customer", customerrout);

//create a constant and assign the path to get access to customermanageroute
// const customerManageroute = require("./routes/customerManageroute.js");
// app.use("/customermanager", customerManageroute);

//create a constant and assign the path to get access to tickerManagementroute
const ticketmanageroute = require("./routes/ticketroute.js");
app.use("/ticketmanage", ticketmanageroute);

//create a constant and assign the path to get access to branchroute
// const branchroute = require("./routes/branchroute.js");
// app.use("/branch", branchroute);

//create a constant and assign the path to get access to branchProductroute
// const branchmanagerroute = require("./routes/branchManagerroute.js");
// app.use("/branch", branchmanagerroute);

const feedbackroute = require("./routes/feedbackroute.js");
app.use("/feedback", feedbackroute);

//create a constant and assign the path to get access to branchManagerroute
//const branchManagerroute = require('./routes/branchManagerroute.js');
//app.use("/branchmanager", branchManagerroute);


app.listen(port, () => {
    console.log('Server is up and running on port : %d', port);
})

//test