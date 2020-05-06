function changeColour() {
    var element = document.getElementById("button");element.classList.toggle("startClicked");
    if (element.innerHTML === "Start"){
        element.innerHTML = "Help";
    } else {
        element.innerHTML = "Start";}
}