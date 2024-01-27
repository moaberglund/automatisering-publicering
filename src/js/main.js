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

//skapa en array som lagrar listan lokalt
let fetchedData = [];

//API:n
const url = "https://dahlgren.miun.se/ramschema_ht23.php";

//Hämta hem data från API
async function fetchAPI() {
    try {
        const response = await fetch(url);
        // ! för "inte"
        if (!response.ok) {
            throw new Error(`Error! Status: ${response.status}`);
        }
        const data = await response.json();
        //skicka datan till arrayen
        fetchedData = data;
    }
    catch (error) {
        document.getElementById("error").innerHTML = "<p>Något gick fel...</p>"
    }
}

//
/*för att slippa repetition av await anrop
//callback-funktion som ska köras när fetchAPI är slutförd
//.then väntar på att fetchAPI ska slutföras
//för att hämta datan vid start*/

fetchAPI().then(() => {
    //när fetchAPI är klar anropas denna
    //för att visa data
    displayData();
})


//läs ut data
function displayData() {
    //hitta stället för utskrift
    const tableList = document.getElementById("kurser");
    //töm
    tableList.innerHTML = "";
    //skriv ut
    fetchedData.forEach((item) => {
        tableList.innerHTML += `<tr><td class="kursnummer">${item.code}</td> <td class="kursnamn">${item.coursename}</td><td class="kursprogression">${item.progression}</td></tr>`
    })
}


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
function sortCode() {
    const tableList = document.getElementById("kurser");
    tableList.innerHTML = "";

    fetchedData.sort((a, b) => (a.code > b.code) ? 1 : -1);
    displayData();
}
//kursnamn
function sortName() {
    const tableList = document.getElementById("kurser");
    tableList.innerHTML = "";

    fetchedData.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1);
    displayData();
}
//kursprogression
function sortProg() {
    const tableList = document.getElementById("kurser");
    tableList.innerHTML = "";

    fetchedData.sort((a, b) => (a.progression > b.progression) ? 1 : -1);
    displayData();
}


//funktion för SÖK
function searchFunction() {
    //ta bort ev mellanslag samt ändra till små bokstäver
    let searchX = searchInput.value.trim().toLowerCase();

    const filterData = fetchedData.filter((item) => {
        const searchCode = item.code.toLowerCase();
        const searchName = item.coursename.toLowerCase();

        return searchCode.includes(searchX) || searchName.includes(searchX);
    });

    displayFilteredData(filterData);
}

function displayFilteredData(filteredData) {
    const tableList = document.getElementById("kurser");
    tableList.innerHTML = "";

    // Visa resultaten som vanligt
    filteredData.forEach((item) => {
        tableList.innerHTML += `<tr><td class="kursnummer">${item.code}</td> <td class="kursnamn">${item.coursename}</td><td class="kursprogression">${item.progression}</td></tr>`;
    });
}
