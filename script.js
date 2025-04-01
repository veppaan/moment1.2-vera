//Variabler
var courseList = document.getElementById("course-list");
var form = document.getElementById("form-courses");
var codeValue = document.getElementById("code");
var nameValue = document.getElementById("name");
var progressionValue = document.getElementById("progression");
var syllasbusValue = document.getElementById("syllabus");
var courses = loadCourses();
var emptyTxt = document.getElementById("empty-text");
var clearBtn = document.getElementById("clearbutton");
clearBtn.addEventListener("click", clearStorage);
window.onload = init;
function init() {
    loadCourses();
    printCourses();
}
//Ladda in inlagda kurser
function loadCourses() {
    console.log("laddar kurser");
    var courses = localStorage.getItem("courses");
    if (courses) {
        return JSON.parse(courses);
    }
    else {
        if (emptyTxt) {
            emptyTxt.innerHTML = "Listan är tom";
        }
    }
    return [];
}
//Sparar kurser till localStorage
function saveCourses(courses) {
    console.log("lagrar i storage");
    localStorage.setItem("courses", JSON.stringify(courses));
}
//Eventlyssnare
form.addEventListener("submit", function (event) {
    console.log("lägger till kurs");
    event.preventDefault();
    //Objekt för ny kurs
    var newCourse = {
        code: codeValue.value,
        name: nameValue.value,
        progression: progressionValue.value,
        syllabus: syllasbusValue.value
    };
    //Koll så att inte samma kurs läggs in två gånger
    courses.forEach(function (course) {
        if (course.code === newCourse.code) {
            alert("Kursen måste vara unik!");
            return;
        }
    });
    courses.push(newCourse);
    saveCourses(courses);
    printCourses();
    form.reset();
});
//Skriver ut kurser i list-format
function printCourses() {
    console.log("skriver ut");
    courseList.innerHTML = "";
    courses.forEach(function (course) {
        var li = document.createElement("li");
        li.innerHTML = "".concat(course.code, " - ").concat(course.name, " (").concat(course.progression, ") <a href=\"").concat(course.syllabus, "\">L\u00E4nk till kursplan</a>");
        courseList.appendChild(li);
    });
}
function clearStorage() {
    console.log("rensar");
    localStorage.clear();
    courseList.innerHTML = "";
    loadCourses();
}
