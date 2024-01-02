const express = require("express");
const dotenv = require("dotenv").config();
const { errorhandler } = require("./middleware/errorMiddleware");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorhandler);

app.listen(port, () => console.log(`server started on port ${port}`));
