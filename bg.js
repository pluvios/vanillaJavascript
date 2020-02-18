const body = document.querySelector("body");



const IMG_NUMBER = 5;


function handleImageLoad(event){
    if(event === "loadstart"){
        console.log("image load start");
    } else if(event === "load"){
        console.log("image load");
    } else if(event === "loadend"){
        console.log("image load end");
    } else if(event === "progress"){
        console.log("image load progress");
    } else if(event === "error"){
        console.log("image load error");
    } else if(event === "abort"){
        console.log("image load abort");
    } 

}


function paintImage(imageNumber){
    const image = new Image();
    image.src = `images/${imageNumber}.jpg`;
    body.appendChild(image);
    image.addEventListener("loadstart", handleImageLoad)
    image.addEventListener("load", handleImageLoad)
    image.addEventListener("loadend", handleImageLoad)
    image.addEventListener("progress", handleImageLoad)
    image.addEventListener("error", handleImageLoad)
    image.addEventListener("abort", handleImageLoad)
    image.classList.add("bgImage");

    
    /*function(image){
            console.log("image loaded");
            body.appendChild(image);
            image.classList.add("bgImage");
    });
    */
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