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
    document.getElementById("user-info").innerHTML = sorcerer[storedIndex].userinfo;
    document.getElementById("manga").innerHTML = sorcerer[storedIndex].manga;
    document.getElementById("anime").innerHTML = sorcerer[storedIndex].anime;
    document.getElementById("domain-info").innerHTML = sorcerer[storedIndex].domain;
    document.getElementById("domain-name").innerHTML = sorcerer[storedIndex].domainname;
    document.getElementById("extra").innerHTML = sorcerer[storedIndex].extra;
    document.getElementById("appearance").src = sorcerer[storedIndex].appear;
    document.getElementById("domain-more-info").innerHTML = sorcerer[storedIndex].domaininfo;
    document.getElementById("domain-vid").src = sorcerer[storedIndex].domainvid;
    document.getElementById("translation").innerHTML = sorcerer[storedIndex].translation;
    document.getElementById("lore").innerHTML = sorcerer[storedIndex].lore;
    document.getElementById("hand").src = sorcerer[storedIndex].hand;

    //hakari's data
    if(storedIndex == 4){
        document.getElementById("button").style.display = "block";
        document.getElementById("left").style.transform = "translateX(" + 3 +"rem)";
        document.getElementById("right").style.transform = "translateX(-" + 3 +"rem)";
        document.getElementById("appearance").style.left = 14.5 +"rem";
        document.getElementById("appearance").style.top = 38.8 +"rem";
        document.getElementById("hand").style.transform = "translateX(" + 4.7 +"rem)";
        document.getElementById("domain-more-info").style.width = 47+"rem";
        document.getElementById("lore").style.width = 47+"rem";
        document.getElementById("domain-info").style.width = 25+"rem";
        document.getElementById("extra").style.width = 29+"rem";
        document.getElementById("extra").style.transform = "translate(-" + 9 +"rem)";
        document.getElementById("manga").style.marginRight = "-" + 10 +"rem)";
        document.getElementById("user-info").style.width = 47+"rem";
        document.getElementById("domain-vid").style.visibility = "hidden";
        document.getElementById("translation").style.transform = "translate("+ 10 +"rem," + 0.6 +"rem)";
        document.getElementById("translation").style.width = 22 + "rem";
        document.getElementById("hakari").style.display = "block";
        document.getElementById("manga").style.marginLeft = "-"+40+"px";
        document.getElementById("hakari").src = sorcerer[storedIndex].hakari;

        document.getElementById("button").onclick = function(){
            document.getElementById("hakari").style.width = 50 + "rem";
            document.getElementById("hakari").style.height = 50 + "rem";
            document.getElementById("hakari").style.transform = "translate(-"+ 38 +"rem,-" + 33 +"rem)";
        setTimeout(() => {
        document.getElementById("x").style.display = "block";
            document.getElementById("one").style.display = "block";
            document.getElementById("two").style.display = "block";
        }, 320);
       
       }
   
        document.getElementById("x").onclick = function(){
            document.getElementById("one").style.textDecoration = "underline";
            document.getElementById("two").style.textDecoration = "none";
            document.getElementById("hakari").src = "./assets/love.png";
            document.getElementById("one").style.display = "none";
            document.getElementById("two").style.display = "none";
            document.getElementById("x").style.display = "none";
            document.getElementById("hakari").style.width = 18 + "rem";
            document.getElementById("hakari").style.height = 18 + "rem";
            document.getElementById("hakari").style.transform = "translate(-"+ 7 +"px,-" + 16.5 +"rem)";
       }

        document.getElementById("one").onclick = function(){
            document.getElementById("two").style.textDecoration = "none";
            document.getElementById("one").style.textDecoration = "underline";
            document.getElementById("hakari").src = "./assets/love.png";
       }

        document.getElementById("two").onclick = function(){
            document.getElementById("one").style.textDecoration = "none";
            document.getElementById("two").style.textDecoration = "underline";
            document.getElementById("hakari").src = "./assets/game.png";
        }
    }
    //higuruma's data
    if(storedIndex == 5){
        document.getElementById("button").style.display = "block";
        document.getElementById("left").style.transform = "translateX(" + 3 +"rem)";
        document.getElementById("right").style.transform = "translateX(-" + 3 +"rem)";
        document.getElementById("appearance").style.left = 14.5 +"rem";
        document.getElementById("appearance").style.top = 38.8 +"rem";
        document.getElementById("hand").style.transform = "translateX(" + 4.7 +"rem)";
        document.getElementById("domain-more-info").style.width = 47+"rem";
        document.getElementById("lore").style.width = 47+"rem";
        document.getElementById("domain-info").style.width = 25+"rem";
        document.getElementById("extra").style.width = 29+"rem";
        document.getElementById("extra").style.transform = "translate(-" + 9 +"rem)";
        document.getElementById("manga").style.marginRight = "-" + 10 +"rem)";
        document.getElementById("user-info").style.width = 47+"rem";
        document.getElementById("domain-vid").style.visibility = "hidden";
        document.getElementById("translation").style.transform = "translate("+ 10 +"rem," + 0.6 +"rem)";
        document.getElementById("translation").style.width = 22 + "rem";
        document.getElementById("hakari").style.display = "block";
        document.getElementById("hakari").style.height = 13.5 +"rem";
        document.getElementById("hakari").src = sorcerer[storedIndex].hakari;
        document.getElementById("x").style.transform = "translate("+ 1.5 +"rem,"+ 2.5 +"rem)";
        document.getElementById("one").style.transform = "translate("+ 3 +"rem,-"+ 7.5 +"rem)";
        document.getElementById("two").style.transform = "translate("+ 3 +"rem,-"+ 7.5 +"rem)";
        document.getElementById("manga").style.marginLeft = "-"+40+"px";


        document.getElementById("button").onclick = function(){
            document.getElementById("hakari").style.width = 50 + "rem";
            document.getElementById("hakari").style.height = 40 + "rem";
            document.getElementById("hakari").style.transform = "translate(-"+ 36 +"rem,-" + 30 +"rem)";
        setTimeout(() => {
        document.getElementById("x").style.display = "block";
            document.getElementById("one").style.display = "block";
            document.getElementById("two").style.display = "block";
        }, 320);
       
       }
   
        document.getElementById("x").onclick = function(){
            document.getElementById("one").style.textDecoration = "underline";
            document.getElementById("two").style.textDecoration = "none";
            document.getElementById("hakari").src = "./assets/weopon.jpg";
            document.getElementById("one").style.display = "none";
            document.getElementById("two").style.display = "none";
            document.getElementById("x").style.display = "none";
            document.getElementById("hakari").style.width = 19 + "rem";
            document.getElementById("hakari").style.height = 14 + "rem";
            document.getElementById("hakari").style.transform = "translate(-"+ 7 +"px,-" + 16.5 +"rem)";
       }

        document.getElementById("one").onclick = function(){
            document.getElementById("two").style.textDecoration = "none";
            document.getElementById("one").style.textDecoration = "underline";
            document.getElementById("hakari").src = "./assets/weopon.jpg";
       }

        document.getElementById("two").onclick = function(){
            document.getElementById("one").style.textDecoration = "none";
            document.getElementById("two").style.textDecoration = "underline";
            document.getElementById("hakari").src = "./assets/judgeman.jpg";
        }
    }
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
