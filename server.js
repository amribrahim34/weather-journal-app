// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
import fetch from "node-fetch";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = 8000;

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
http: app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
app.listen(port, () => {
  console.log("server is running");
});

// get route to get projectData
app.get("/projectdata", (req, res) => {
  res.json(JSON.stringify(projectData));
});

// post route to add data to projectData
app.post("/projectdata/:temperature/:date/:response", (req, res) => {
  let receivedData = req.params;
  projectData.temperature = req.params.temperature;
  projectData.date = req.params.date;
  projectData.response = req.params.response;
  res.send(JSON.stringify(projectData));
});
