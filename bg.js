const body = document.querySelector("body");



const IMG_NUMBER = 5;


function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imageNumber){
    const image = new Image();
    image.src = `images/${imageNumber}.jpg`;
    body.appendChild(image);
    image.addEventListener("loadend", handleImgLoad)
    image.classList.add("bgImage")
}

function genRandom(){
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);

}
init();