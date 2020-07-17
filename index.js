const express = require("express");
const cors = require('cors')
const app = express();
var port = process.env.PORT || 5000;
const tweetRoute = require('./routes/tweet')
const connectDb = require('./utils/connectDb')
app.use(cors()); // add cross orgin request enable
app.use(express.json()) // middleware to pass incoming data

app.use("/", tweetRoute);

app.listen(port, () => {
  console.log("listening on port 5000");
});
