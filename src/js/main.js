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
//hämta data
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
//läs ut data
async function displayData() {
    let data = await fetchAPI();
    const tableList = document.getElementById("kurser");
    tableList.innerHTML = "";
    data.forEach((item) => {
        tableList.innerHTML += `<tr><td class="kursnummer">${item.code}</td> <td class="kursnamn">${item.coursename}</td><td class="kursprogression">${item.progression}</td></tr>`
    })

}
//anropa funktion
displayData();

//element
const kursKod = document.getElementById("titel-kurskod");
const kursNamn = document.getElementById("titel-kursnamn");
const kursProg = document.getElementById("titel-progression");
const searchInput = document.getElementById("search-input");

//lyssnare
kursKod.addEventListener("click", sortCode);
kursNamn.addEventListener("click", sortName);
kursProg.addEventListener("click", sortProg);
searchInput.addEventListener("input", searchFunction);

//funktioner för sortering
//kurskod
async function sortCode() {
    let data = await fetchAPI();
    const tableList = document.getElementById("kurser");
    tableList.innerHTML = "";
    data.sort((a, b) => (a.code > b.code) ? 1 : -1);
    data.forEach((item) => {
        tableList.innerHTML += `<tr><td class="kursnummer">${item.code}</td> <td class="kursnamn">${item.coursename}</td><td class="kursprogression">${item.progression}</td></tr>`
    })
}
//kursnamn
async function sortName() {
    let data = await fetchAPI();
    const tableList = document.getElementById("kurser");
    tableList.innerHTML = "";
    data.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1);
    data.forEach((item) => {
        tableList.innerHTML += `<tr><td class="kursnummer">${item.code}</td> <td class="kursnamn">${item.coursename}</td><td class="kursprogression">${item.progression}</td></tr>`
    })
}
//kursprogression
async function sortProg() {
    let data = await fetchAPI();
    const tableList = document.getElementById("kurser");
    tableList.innerHTML = "";
    data.sort((a, b) => (a.progression > b.progression) ? 1 : -1);
    data.forEach((item) => {
        tableList.innerHTML += `<tr><td class="kursnummer">${item.code}</td> <td class="kursnamn">${item.coursename}</td><td class="kursprogression">${item.progression}</td></tr>`
    })

}

//funktion för sök
async function searchFunction() {
    //hämta data
    let data = await fetchAPI();

    //ta bort ev mellanslag samt ändra till små bokstäver
    let searchX = searchInput.value.trim().toLowerCase();

    const filterData = data.filter((item) => {
        const searchCode = item.code.toLowerCase();
        const searchName = item.coursename.toLowerCase();

        return searchCode.includes(searchX) || searchName.includes(searchX);
    });

    displayData(filterData);
}

