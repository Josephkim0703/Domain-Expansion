import {sorcerer} from "./data.js";

document.getElementById("darkmode").addEventListener ('click', function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")){
    document.getElementById("background").style.filter = "hue-rotate(0.7turn) brightness(95%)";
    }
    else{
        document.getElementById("background").style.filter = "";
    }
});

function powerSlide(){
    let data = '';
    let currentIndex = 0;

    data = '<h1 id="sorcerer' + currentIndex + '">' + sorcerer[currentIndex].name + '</h1>';
  
    //click right array to move forward the module makes sure it wraps around
    document.getElementById('right-arrow').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % sorcerer.length;
        update();
    });
    //click left array to move forward the module makes sure it wraps around
    document.getElementById('left-arrow').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + sorcerer.length) % sorcerer.length;
        update();
    });
    
    function update() {
        data = '<h1 id="sorcerer' + currentIndex + '">' + sorcerer[currentIndex].name + '</h1>';
        document.getElementById("domain").innerHTML = data;
    }
   
    document.getElementById("domain").innerHTML = data;
}

function nameSlide(){
    let data = '';
    let currentIndex = 0;

    data = '<h1 id="name' + currentIndex + '">' + sorcerer[currentIndex].user + '</h1>';
  
    //click right array to move forward the module makes sure it wraps around
    document.getElementById('right-arrow').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % sorcerer.length;
        update();
    });
    //click left array to move forward the module makes sure it wraps around
    document.getElementById('left-arrow').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + sorcerer.length) % sorcerer.length;
        update();
    });
    
    function update() {
        data = '<h1 id="name' + currentIndex + '">' + sorcerer[currentIndex].user + '</h1>';
        document.getElementById("name").innerHTML = data;
    }
   
    document.getElementById("name").innerHTML = data;
}

function background(){
    let currentIndex = 0;

    //click right array to move forward the module makes sure it wraps around
    document.getElementById('right-arrow').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % sorcerer.length;
        update();
    });
    //click left array to move forward the module makes sure it wraps around
    document.getElementById('left-arrow').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + sorcerer.length) % sorcerer.length;
        update();
    });
    
    function update() {  
        document.getElementById("background").src =  sorcerer[currentIndex].back;
    }
    document.getElementById("background").src =  sorcerer[currentIndex].back;
}

function charaterSlide(){
    let currentIndex = 0;

    //click right array to move forward the module makes sure it wraps around
    document.getElementById('right-arrow').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % sorcerer.length;
        update();
    });
    //click left array to move forward the module makes sure it wraps around
    document.getElementById('left-arrow').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + sorcerer.length) % sorcerer.length;
        update();
    });
    
    function update() {  
        document.getElementById("sorcerer-image").src =  sorcerer[(currentIndex + 10) % sorcerer.length].userimage;
        document.getElementById("sorcerer-image1").src = sorcerer[(currentIndex + 11) % sorcerer.length].userimage ;
        document.getElementById("sorcerer-image2").src = sorcerer[currentIndex].userimage ;
        document.getElementById("sorcerer-image3").src = sorcerer[(currentIndex + 1)% sorcerer.length].userimage ;
        document.getElementById("sorcerer-image4").src = sorcerer[(currentIndex + 2)% sorcerer.length].userimage ;
    }
   
    document.getElementById("sorcerer-image").src = sorcerer[currentIndex + 10].userimage;
    document.getElementById("sorcerer-image1").src = sorcerer[currentIndex + 11].userimage ;
    document.getElementById("sorcerer-image2").src = sorcerer[currentIndex].userimage ;
    document.getElementById("sorcerer-image3").src = sorcerer[currentIndex + 1].userimage ;
    document.getElementById("sorcerer-image4").src = sorcerer[currentIndex + 2].userimage ;
}

charaterSlide();
powerSlide();
nameSlide();


