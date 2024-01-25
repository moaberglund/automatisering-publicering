"use strict";

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
    if (style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }

}

//MOMENT 2

import { courses, getCourseID, getCourseName, getProgression } from './courses.js'

let courseList = courses;

const tableEl = document.getElementById("kurser");
courseList.forEach((item) => {
    tableEl.innerHTML += `<tr><td class="kursnummer">${item.code}</td> <td class="kursnamn">${item.coursename}</td><td class="kursprogression">${item.progression}</td></tr>`
})

//element för soreteringen
let kursKod = document.getElementById("titel-kurskod");
let kursNamn = document.getElementById("titel-kursnamn");
let kursProg = document.getElementById("titel-progression");

//lyssnare
kursKod.addEventListener("click", sortCode);
kursNamn.addEventListener("click", sortName);
kursProg.addEventListener("click", sortProg);

//funktioner för sortering

function sortCode() {

}

function sortName() {
    
    courseList.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1);

}

function sortProg() {

}


