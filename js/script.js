"use strict";


document.addEventListener("DOMContentLoaded",loadScript);

async function loadScript(){

        let jsonObject = await fetch("https://kea-alt-del.dk/kata-distortion/");
        let mitJson = await jsonObject.json();

        console.log(mitJson);



let taskNumber = document.querySelector("h1");
let queue = mitJson.inQueue;
console.log("Queue", queue);


function range_change_event() {
    taskNumber.textContent = queue;
   
    let i;  
    for (i = 0; i < queue; i++) {
        let addDiv = document.createElement('div')
        addDiv.classList.add("beer")
        document.querySelector('#beerContainer').appendChild(addDiv)
    }
}
//slider.addEventListener("input", range_change_event);

range_change_event();
}
setInterval(function(){ 
    loadScript();    
}, 10000);
