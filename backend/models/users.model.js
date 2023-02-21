const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  username: String,
  name: String,
  email: String,
  phone: String,
  website: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipCode: String,
  },
  company: {
    name: String,
    catchPhrase: String,
    bs: String,
  },
});

module.exports = mongoose.model("User", usersSchema);
