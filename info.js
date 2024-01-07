import { sorcerer } from "./data.js";

const storedIndex = parseInt(localStorage.getItem('index'));

function main(){
    document.getElementById("background-domain").src =  sorcerer[storedIndex].back;

    color();
    setup();
}

function setup(){
    document.getElementById("user").src = sorcerer[storedIndex].full;
    document.getElementById("domain").innerHTML = sorcerer[storedIndex].name;
    document.getElementById("sorcerer").innerHTML = sorcerer[storedIndex].user;
}

function color(){

    switch (true) {
        case storedIndex === 0:
            document.getElementById("website1").style.color = "white";
            break;
        case storedIndex === 1:
            document.getElementById("website1").style.color = "white";
             break;
        case storedIndex === 2:
            document.getElementById("website1").style.color = "white";
            break;
        case storedIndex === 3:
            document.getElementById("website1").style.color = "white";
             break;
        case storedIndex === 4:
            document.getElementById("website1").style.color = "black";
             break;
        case storedIndex === 5:
            document.getElementById("website1").style.color = "white";
            break;
        case storedIndex === 6:
            document.getElementById("website1").style.color = "black";
            break;
        case storedIndex === 7:
            document.getElementById("website1").style.color = "black";
            break;
        case storedIndex === 8:
            document.getElementById("website1").style.color = "white";
            break;
        case storedIndex === 9:
            document.getElementById("website1").style.color = "black";
            break;
        case storedIndex === 10:
            document.getElementById("website1").style.color = "white";
            break;
        case storedIndex === 11:
            document.getElementById("website1").style.color = "white";
            break;
        default:
            break;
      }
}

main();
