import { sorcerer } from "./data.js";

const storedIndex = parseInt(localStorage.getItem('index'));

function main(){
    document.getElementById("body").style.backgroundImage =  "url("+sorcerer[storedIndex].back+")";

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
    if(storedIndex == 5){

        
        document.getElementById("header").style.fontSize =  2.5 +"rem";
        document.getElementById("sorcerer").style.fontSize =  2.5 +"rem";
        document.getElementById("domain").style.fontSize =  2.5 +"rem";

        document.getElementById("pain1").style.display = "block";
        document.getElementById("pain1").src = sorcerer[storedIndex].hakari;

        document.getElementById("appearance").style.border = 3 +"px solid black";
        document.getElementById("hand").style.border = 3 +"px solid black";

        document.getElementById("domain-vid").style.visibility = "hidden";
    }
 
    //higuruma's data
    if(storedIndex == 6){

            
            document.getElementById("pain").style.display = "block";
            document.getElementById("pain").src = sorcerer[storedIndex].hakari;

            document.getElementById("appearance").style.border = 3 +"px solid black";
            document.getElementById("hand").style.border = 3 +"px solid black";

            document.getElementById("domain-vid").style.visibility = "hidden";
    }
    //kenjaku's data
    if(storedIndex == 7){
        document.getElementById("appearance").style.border = 3 +"px solid black";
        document.getElementById("hand").style.border = 3 +"px solid black";
        document.getElementById("domain-vid").style.border = 3 +"px solid black";
        document.getElementById("past").src = sorcerer[storedIndex].former;
        document.getElementById("past").style.display = "block";
    }
    //yoruzu's data
    if(storedIndex == 8){      
        document.getElementById("domain-vid").style.visibility = "hidden";
        document.getElementById("appearance").style.border = 3 +"px solid black";
        document.getElementById("hand").style.border = 3 +"px solid black";
        document.getElementById("true").style.display = "block";
        document.getElementById("true").src = sorcerer[storedIndex].true;
    }

    if(storedIndex == 2){      
        document.getElementById("domain-vid").style.visibility = "hidden";
        document.getElementById("appearance").style.border = 3 +"px solid black";
        document.getElementById("hand").style.border = 3 +"px solid black";
        document.getElementById("pain2").style.display = "block";
        document.getElementById("pain2").src = sorcerer[storedIndex].true;
    }
}

main();



       