let btn= document.querySelector("button")

btn.addEventListener("click", function(){
    // console.log("You just click the button");
    let para= document.querySelector("p");
    let randomColor= getRandomColor();
    para.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.background= randomColor;


    console.log("Color updated");
}
)

function getRandomColor(){
    let red = Math.floor(Math.random()  * 255);
    let green = Math.floor(Math.random()  * 255);
    let blue = Math.floor(Math.random()  * 255);

    let color= `rgb(${red}, ${green}, ${blue})`;
    return color;
}