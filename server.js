const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const users = require("./routes/api/users");

// Define middleware here

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
const db = require("./config/keys").mongoURI;
app.use(passport.initialize());
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
  app.use(passport.initialize());
  require("./config/passport")(passport);
app.use("/api/users", users);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || db);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
