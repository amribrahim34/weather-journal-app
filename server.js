// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express =  require("express");
const bodyParser =  require("body-parser");
const cors =  require("cors");


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
app.post("/projectdata", (req, res) => {
  projectData = req.body;
  res.send(JSON.stringify(projectData));
});
