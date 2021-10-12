/* Global Variables */
let zip = document.getElementById("zip");
const apiKey = `f076f67756a740f2111ede1f6deacf95`;
const apiEndPoint = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;
const options = {
  method: "GET",
};
// 85001

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

async function getWeatherData(apiEndPoint, options) {
  apiEndPoint += `&zip=${zip.value}`;
  let data = await fetch(apiEndPoint, options);
  try {
    let newData = await data.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log(error);
  }
}

async function setProjectData(httpMethod, temperature, date, response) {
  let data = await fetch(
    `http://127.0.0.1:8000/projectdata/${temperature}/${date}/${response}`,
    {
      method: httpMethod,
    }
  );
  try {
    let projectData = await data.json();
    console.log(projectData);
    return projectData;
  } catch (error) {
    console.log(error);
  }
}

const button = document.getElementById("generate");
button.addEventListener("click", () => {
  console.log(zip.value);
  console.log("zip");
  getWeatherData(apiEndPoint, options);
});

// getWeatherData(apiEndPoint, options);
setProjectData("POST", 25, d, 1);
