function updateTime(){

let seattleElement = document.querySelector("#seattle");
let seattleDateElement =  seattleElement.querySelector(".date");
let seattleTimeElement = seattleElement.querySelector(".time");
let seattleTime = moment().tz("America/Los_Angeles");
seattleDateElement.innerHTML = seattleTime.format("MMMM Do YYYY");
seattleTimeElement.innerHTML = seattleTime.format("h:mm:ss [<small>]A[</small>]");


let singaporeElement = document.querySelector("#singapore");
let singaporeDateElement = singaporeElement.querySelector(".date");
let singaporeTimeElement = singaporeElement.querySelector(".time");
let singaporeTime = moment().tz("Asia/Singapore");
singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
singaporeTimeElement.innerHTML = singaporeTime.format("h:mm:ss [<small>]A[</small>]");
}


function updateCity(event){
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="cities">
      <div class="city">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
    <a href="index.html">All cities</a>
  `;
}


updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);