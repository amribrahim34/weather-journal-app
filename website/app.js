/* Global Variables */
let zip = document.getElementById("zip");
const apiKey = `f076f67756a740f2111ede1f6deacf95`;
const apiEndPoint = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;
const options = {
  method: "GET",
};
// 85001

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
let feeling = document.getElementById("feelings");

async function updateUi() {
  let allData = {};
  let wetherData = await getWeatherData(apiEndPoint, options)
    .then((wetherData) => {
      setProjectData(`POST`, wetherData);
    })
    .then(async (wetherData) => {
      let projectData = await getAppData(`/projectdata`, {
        method: "GET",
      }).then((projectData) => {
        updateFrontEnd(projectData);
        console.log(projectData);
        console.log(feeling.value);
      });
    });
}

function updateFrontEnd(projectData) {
  projectData = JSON.parse(projectData);
  updateDate();
  updateTemp(projectData.main.temp);
  updateContent(projectData.feeling);
}

function updateDate() {
  let date = document.getElementById("date");
  let pa = document.createElement("p");
  pa.innerHTML = `Date :${newDate}`;
  date.append(pa);
}

function updateTemp(temp) {
  let tempDiv = document.getElementById("temp");
  let p = document.createElement("p");
  p.innerHTML = `Temp :${temp}`;
  tempDiv.append(p);
}

function updateContent(feeling) {
  let contentDiv = document.getElementById("content");
  let p = document.createElement("p");
  p.innerHtml = `I Feel :${feeling}`;
  contentDiv.append(p);
}

async function getWeatherData(apiEndPoint, options) {
  apiEndPoint += `&zip=${zip.value}`;
  let data = await fetch(apiEndPoint, options);
  try {
    let newData = await data.json();
    return newData;
  } catch (error) {
    console.log(error);
  }
}

async function getAppData(apiEndPoint, options) {
  let data = await fetch(apiEndPoint, options);
  try {
    let newData = await data.json();
    return newData;
  } catch (error) {
    console.log(error);
  }
}

async function setProjectData(httpMethod, apiData) {
  apiData["feeling"] = feeling.value;
  let jsonData = JSON.stringify(apiData);
  let data = await fetch(`http://127.0.0.1:8000/projectdata`, {
    method: httpMethod,
    body: jsonData,
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
    let projectData = await data;
    // console.log(projectData);
    return projectData;
  } catch (error) {
    console.log(error);
  }
}

const button = document.getElementById("generate");
button.addEventListener("click", () => {
  updateUi();
});

// setProjectData("POST",);
