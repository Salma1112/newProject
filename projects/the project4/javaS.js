function darkMode() {
    var body = document.body;  
    body.style.backgroundColor = "black";
    body.style.color = "white";

    var carouselDiv = document.getElementById("carouselDiv");
    carouselDiv.style.backgroundImage = "linear-gradient(gold,black)";
    carouselDiv.style.color = "white";

    var theDiv4 = document.getElementById("theDiv4");
    theDiv4.style.backgroundImage = "linear-gradient(black,gold)";

    var theAicon1 = document.getElementById("theAicon1");
    theAicon1.style.color = "white";

    var theAicon2 = document.getElementById("theAicon2");
    theAicon2.style.color = "white";

    var myName = document.getElementById("myH3");
    myName.style.color = "white";
}


function lightMode() {
    var body = document.body;
    body.style.backgroundColor = "white";
    body.style.color = "black";

    var carouselDiv = document.getElementById("carouselDiv");
    carouselDiv.style.backgroundImage = "linear-gradient(gold,white)";
    carouselDiv.style.color = "black";

    var theDiv4 = document.getElementById("theDiv4");
    theDiv4.style.backgroundImage = "linear-gradient(white,gold)";

    var theAicon1 = document.getElementById("theAicon1");
    theAicon1.style.color = "black";

    var theAicon2 = document.getElementById("theAicon2");
    theAicon2.style.color = "black";

    var myName = document.getElementById("myH3");
    myName.style.color = "black";
    
}