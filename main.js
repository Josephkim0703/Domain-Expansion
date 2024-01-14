import {sorcerer} from "./data.js";

function main(){
    
document.getElementById("darkmode").addEventListener ('click', function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")){
    document.getElementById("background").style.filter = "hue-rotate(0.7turn) brightness(95%)";
    }
    else{
        document.getElementById("background").style.filter = "";
    }
});

background();
charaterSlide();
powerSlide();
nameSlide();
}

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

    document.addEventListener("wheel", handleScroll);
    
    function handleScroll(event) {
 
    if (event.deltaY > 0) {
       
        currentIndex = (currentIndex + 1) % sorcerer.length;
        update();
    } else {
     
        currentIndex = (currentIndex - 1 + sorcerer.length) % sorcerer.length;
        update();
    }

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

            localStorage.getItem(option);

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
            color();
        },1000);

        setTimeout(function(){
          window.location.href = "./info.html";
        }, 2700);
    };
    }

    document.addEventListener("wheel", handleScroll);
    
    function handleScroll(event) {
 
    if (event.deltaY > 0) {
       
        currentIndex = (currentIndex + 1) % sorcerer.length;
        update();
    } else {
     
        currentIndex = (currentIndex - 1 + sorcerer.length) % sorcerer.length;
        update();
    }

}
   
    document.getElementById("name").innerHTML = data;

            let option = document.getElementById("name" + currentIndex)
                option.onclick = function () {
                    console.log(option);
                    
                    localStorage.getItem(option);

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
                    color();
                },1000);

                setTimeout(function(){
                  window.location.href = "./info.html";
                }, 2700);
            };             
function color(){

                switch (true) {
                    case currentIndex === 0:
                        document.getElementById("website").style.color = "white";
                        break;
                    case currentIndex === 1:
                        document.getElementById("website").style.color = "white";
                         break;
                    case currentIndex === 2:
                        document.getElementById("website").style.color = "white";
                        break;
                    case currentIndex === 3:
                        document.getElementById("website").style.color = "white";
                         break;
                    case currentIndex === 4:
                        document.getElementById("website").style.color = "black";
                         break;
                    case currentIndex === 5:
                        document.getElementById("website").style.color = "white";
                        break;
                    case currentIndex === 6:
                        document.getElementById("website").style.color = "black";
                        break;
                    case currentIndex === 7:
                        document.getElementById("website").style.color = "black";
                        break;
                    case currentIndex === 8:
                        document.getElementById("website").style.color = "white";
                        break;
                    case currentIndex === 9:
                        document.getElementById("website").style.color = "black";
                        break;
                    case currentIndex === 10:
                        document.getElementById("website").style.color = "white";
                        break;
                    case currentIndex === 11:
                        document.getElementById("website").style.color = "white";
                        break;
                    default:
                        break;
                  }
}
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
        saveIndexToLocalStorage();
    }

    function saveIndexToLocalStorage() {
        localStorage.setItem('index', currentIndex);
    }
    saveIndexToLocalStorage();
    document.getElementById("background-domain").src =  sorcerer[currentIndex].back;

    document.addEventListener("wheel", handleScroll);
    
    function handleScroll(event) {
 
    if (event.deltaY > 0) {
       
        currentIndex = (currentIndex + 1) % sorcerer.length;
        update();
    } else {
     
        currentIndex = (currentIndex - 1 + sorcerer.length) % sorcerer.length;
        update();
    }

}
   
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

    document.addEventListener("wheel", handleScroll);
    
    function handleScroll(event) {
 
    if (event.deltaY > 0) {
       
        currentIndex = (currentIndex + 1) % sorcerer.length;
        update();
    } else {
     
        currentIndex = (currentIndex - 1 + sorcerer.length) % sorcerer.length;
        update();
    }

}
}
 
main();


