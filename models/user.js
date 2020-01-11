const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//structure of user account
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: {type: String, required: true},
  userName: { type: String, required: true },
  email: {type: String, required: true},
  password: { type: String, required: true },
  age: {type: Number, required: true},
  liked: [String],
  disliked: [String]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
