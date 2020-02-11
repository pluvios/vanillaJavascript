
const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

      const dateContainer = document.querySelector(".js-date"),
      dateTitle = dateContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
}
init();
setInterval(init,250);


function getDate(){
    const date = new Date();
    const years = date.getFullYear();
    const months = date.getMonth();
    const dates = date.getDate();
    const days = date.getDay();
    const daysList = ["monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday", "Saturday", "Sunday" ];

    dateTitle.innerText = `${years}-${months}-${dates} ${daysList[days-1]}`;
}

function initDate(){
    getDate();
}
initDate();
setInterval(initDate,3600000);

