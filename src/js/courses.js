"use strict";

//array med alla kurser
const courses = [
    {
        "code": "dt057g",
        "coursename": "Webbutveckling I",
        "progression": "A",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32498"
    },
    {
        "code": "dt084g",
        "coursename": "Introduktion till programmering i JavaScript",
        "progression": "A",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=31961"
    },
    {
        "code": "dt200g",
        "coursename": "Grafisk teknik för webb",
        "progression": "A",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32133"
    },
    {
        "code": "dt068g",
        "coursename": "Webbanvändbarhet",
        "progression": "B",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32586"
    },
    {
        "code": "dt003g",
        "coursename": "Databaser",
        "progression": "A",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32257"
    },
    {
        "code": "dt211g",
        "coursename": "Frontend-baserad webbutveckling",
        "progression": "B",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=31780"
    },
    {
        "code": "dt207g",
        "coursename": "Backend-baserad webbutveckling",
        "progression": "B",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=31775"
    },
    {
        "code": "dt208g",
        "coursename": "Programmering i TypeScript",
        "progression": "B",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=33568"
    },
    {
        "code": "ik060g",
        "coursename": "Projektledning",
        "progression": "B",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=31886"
    },
    {
        "code": "dt071g",
        "coursename": "Programmering i C#.net",
        "progression": "A",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32587"
    },
    {
        "code": "dt193g",
        "coursename": "Fullstacks-utveckling med ramverk",
        "progression": "B",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=33879"
    },
    {
        "code": "dt209g",
        "coursename": "Webbutveckling för WordPress",
        "progression": "B",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=31777"
    },    
    {
        "code": "dt191g",
        "coursename": "Webbutveckling med .NET",
        "progression": "B",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32290"
    },
    {
        "code": "dt210g",
        "coursename": "Fördjupad frontend-utveckling",
        "progression": "A",
        "syllabus": "https://www.miun.se/kursplaner"
    },
    {
        "code": "dt140g",
        "coursename": "Självständigt arbete",
        "progression": "B",
        "syllabus": "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32439"
    }
]

//return kursID
function getCourseID() {
    return courses.map(courses => courses.code);
}
//return kursnamn
function getCourseName() {
    return courses.map(courses => courses.coursename);
}
//return progression 
function getProgression() {
    return courses.map(courses => courses.progression);
}

export { courses, getCourseID, getCourseName, getProgression }