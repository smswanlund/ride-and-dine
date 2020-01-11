const mongoose = require("mongoose");
const db = require("../models");

// This file empties the users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactuserlist"
);

const userSeed = [
  {
    firstName: "Samuel",
    lastName: "Swanlund",
    userName: "smswanlund",
    email: "muelmac@gmail.com",
    password: "testpswd1",
    age: 23,
    liked: [],
    disliked: [],
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
