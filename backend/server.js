const port = process.env.PORT || 8081;
const dotenv = require("dotenv");
const app = require("./app");

const dbConnection = require("./db/dbConnet");


dotenv.config()
dbConnection();



app.listen(port, () => {
  console.log("listening on port", port);
});
