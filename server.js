const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const tripRouter = require("./routes/api");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv").config();
const uri = process.env.ATLAS_URI;
app.use(bodyParser.json());

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api", tripRouter);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
