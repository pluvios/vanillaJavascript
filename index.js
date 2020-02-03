console.log('Im working. Im JS. Im beautiful. Im worth it')
let a = 2;
let b = "a";
let c = a + "+" + b;
console.log(c,a,b);
//to do : finish this
const what = "Dan";
const wat = false;
const whut = 777;
const whit = 55.7;
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";

console.log(mon, tue, wed, thu, fri);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);

const meInfo = {
    Name: "dan",
    Age : "35",
    Birth: "0219",
    Occupation: "CEO",
    Home: "Seoul"
};

console.log(meInfo.Age);

const title = document.getElementById("title");
title.innerHTML = "Hi! I changed html by JS";

const contents = document.querySelector("#contents");
contents.innerHTML = "Hi! I changed this one too again";


function handleResize(){
    console.log("I have been resized");

}

window.addEventListener("resize",handleResize);

/*
function handleClick() {

    const currentColor = contents.style.color;

    if (currentColor === BASE_COLOR){
        contents.style.color = OTHER_COLOR;
    } else{
        contents.style.color = BASE_COLOR;
    }
}


const BASE_COLOR = "black";
const OTHER_COLOR = "blue";

function init(){
    contents.style.color = BASE_COLOR;
    contents.addEventListener("click",handleClick)
}

init();
*/

const CLICKED_CLASS = "clicked";
const NOTCLICKED_CLASS = "notClicked";

function handleClick(){
    const hasClass = contents.classList.contains(CLICKED_CLASS);
    const currentClass = contents.className;
    if(!hasClass){
        contents.classList.add(CLICKED_CLASS);
    } else {
        contents.classList.remove(CLICKED_CLASS);
        contents.classList.add(NOTCLICKED_CLASS);
    }
}

//CAN BE EASILY REPLACED WITH TOGGLE METHOD

function init(){
      contents.addEventListener("click",handleClick)
}

init();
