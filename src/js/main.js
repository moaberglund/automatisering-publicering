"use strict";

import { courses, getCourseID, getCourseName, getProgression } from './courses.js'


let courseList = courses;

const tableEl = document.getElementById("kurser");
courseList.forEach((item) => {
    tableEl.innerHTML += `<tr><th>${ item.code }</th> <th>${ item.coursename }</th><th>${ item.progression }</th></tr>`
})





//element
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");

//lyssnare
openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

//funktion
function toggleMenu() {
    //hitta menyn
    let navMenuEl = document.getElementById("nav-menu");

    //kolla vad display är inställt som (none/block)
    let style = window.getComputedStyle(navMenuEl);

    //ändra mellan none/block beroende på
    if(style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }


}