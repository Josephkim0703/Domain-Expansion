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

    data = '<a id="name' + currentIndex + '">' + sorcerer[currentIndex].user + '</a>';
  
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
        data = '<a id="name' + currentIndex + '">' + sorcerer[currentIndex].user + '</a>';
        document.getElementById("name").innerHTML = data;
        console.log(data);

        let option = document.getElementById("name" + currentIndex)
        option.onclick = function () {
            console.log(option);

            document.getElementById("title1").style.opacity = 1;
            document.getElementById("title").style.opacity = 0;

        setTimeout(function (){
            document.getElementById("sorcerer-image").style.opacity = 0;
            document.getElementById("sorcerer-image1").style.opacity = 0;
            document.getElementById("sorcerer-image3").style.opacity = 0;
            document.getElementById("sorcerer-image4").style.opacity = 0;
            document.getElementById("base0").style.opacity = 0;
            document.getElementById("base1").style.opacity = 0;
            document.getElementById("base3").style.opacity = 0;
            document.getElementById("base4").style.opacity = 0;
            document.getElementById("background").style.opacity = 0;
            document.getElementById("background").style.transition = "1s";
            document.getElementById("website").style.color = "white";
        },1000);

        setTimeout(function(){
          window.location.href = "./info.html";
        }, 5000);
    };
    }
   
    document.getElementById("name").innerHTML = data;

            let option = document.getElementById("name" + currentIndex)
                option.onclick = function () {
                    console.log(option);
                    
                    document.getElementById("title").style.opacity = 0;
                    document.getElementById("title1").style.opacity = 1;

                setTimeout(function (){                 
                    document.getElementById("base0").style.opacity = 0;
                    document.getElementById("base1").style.opacity = 0;
                    document.getElementById("base3").style.opacity = 0;
                    document.getElementById("base4").style.opacity = 0;
                    document.getElementById("sorcerer-image").style.opacity = 0;
                    document.getElementById("sorcerer-image1").style.opacity = 0;
                    document.getElementById("sorcerer-image3").style.opacity = 0;
                    document.getElementById("sorcerer-image4").style.opacity = 0;
                    document.getElementById("background").style.opacity = 0;
                    document.getElementById("background").style.transition = "1s";   
                    document.getElementById("website").style.color = "white";
                },1000);

                setTimeout(function(){
                  window.location.href = "./info.html";
                }, 5000);
            };         
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
        document.getElementById("background-domain").src =  sorcerer[currentIndex].back;
        console.log(currentIndex);
    }
    document.getElementById("background-domain").src =  sorcerer[currentIndex].back;
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
 
background();
charaterSlide();
powerSlide();
nameSlide();


