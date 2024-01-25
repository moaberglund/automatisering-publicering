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

//   MOMENT 2

const url = "https://dahlgren.miun.se/ramschema_ht23.php";
async function fetchAPI() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        document.getElementById("error").innerHTML = "<p>Något gick fel...</p>"
    }

}

async function displayData() {
    let data = await fetchAPI();
    const tableList = document.getElementById("kurser");
    data.forEach((item) => {
        tableList.innerHTML += `<tr><td class="kursnummer">${item.code}</td> <td class="kursnamn">${item.coursename}</td><td class="kursprogression">${item.progression}</td></tr>`
    })


}
displayData();

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

async function sortName() {
    let data = await fetchAPI();
    const tableList = document.getElementById("kurser");
    tableList.innerHTML = "";
    data.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1);
    data.forEach((item) => {
        tableList.innerHTML += `<tr><td class="kursnummer">${item.code}</td> <td class="kursnamn">${item.coursename}</td><td class="kursprogression">${item.progression}</td></tr>`
    })
}

async function sortProg() {
    let data = await fetchAPI();
    const tableList = document.getElementById("kurser");
    tableList.innerHTML = "";
    data.sort((a, b) => (a.progression > b.progression) ? 1 : -1);
    data.forEach((item) => {
        tableList.innerHTML += `<tr><td class="kursnummer">${item.code}</td> <td class="kursnamn">${item.coursename}</td><td class="kursprogression">${item.progression}</td></tr>`
    })

}


