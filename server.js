// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8000;
const apiKey = f076f67756a740f2111ede1f6deacf95;
const zip = document.getElementById('zip').value;
const apiEndPoint = api.openweathermap.org/data/2.5/weather?zip=zip&appid=apiKey;

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
app.listen(port, () => {
  console.log("server is running");
});


 let ss = fetch(apiEndPoint);
console.log(ss);

// get request that sends the project data
app.get("/projectdata", (req, res) => {
  res.send(projectData);
});

app.post("/projectdata", (req, res) => {
  let recievedData = req.body;
  projectData.push(recievedData);
});
