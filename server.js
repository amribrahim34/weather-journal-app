// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
import fetch from "node-fetch";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = 8000;
const apiKey = `f076f67756a740f2111ede1f6deacf95`;
const zip = 85001;
const apiEndPoint = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;
const options = {
  method: "GET",
};

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

let ss = fetch(apiEndPoint);
console.log(ss);
// console.log("asda");

// get request that sends the project data
app.get("/projectdata", async (req, res) => {
  let projectData = await fetch(apiEndPoint, options).then((res) => res.json());
  res.json(projectData);
});

app.post("/projectdata", (req, res) => {
  let recievedData = req.body;
  projectData.push(recievedData);
});
