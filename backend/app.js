const express = require("express");
const cors = require("cors");
const app = express();
//internal imports
const userRoute = require('./routes/users.route')


//configuration
app.use(cors());
app.use(express.json());

app.use(userRoute)

app.use("/", (req, res) => {
  res.json({ massage: true });
});

module.exports = app;
