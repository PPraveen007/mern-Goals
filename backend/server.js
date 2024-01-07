const express = require("express");
const colors = require("colors"); 
const dotenv = require("dotenv").config();
const { errorhandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//useing own error handler and writhng it here make it over write it to other inbuild error         
app.use(errorhandler);


app.listen(port, () => console.log(`server started on port ${port}`));
