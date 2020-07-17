const express = require("express");
const cors = require('cors')
const app = express();
const tweetRoute = require('./routes/tweet')
const connectDb = require('./utils/connectDb')

app.use(cors()); // add cross orgin request enable
app.use(express.json()) // middleware to pass incoming data

app.use("/", tweetRoute);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
