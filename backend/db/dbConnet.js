const mongoose = require("mongoose");
mongoose.set("strictQuery", false);


// database connection 
const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://fullstackproject:5p7JnxYmPXhgrygg@cluster0.opo73qe.mongodb.net/userProfile"
    )
    .then((data) => console.log("Connection successful"))
    .catch((error) => console.log(error));
};

module.exports = dbConnection;
