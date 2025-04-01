interface CourseInfo{
    code: string;
    name: string;
    progression: "A" | "B" | "C";
    syllabus: string;
}

//Variabler
let courseList = document.getElementById("course-list") as HTMLLIElement;
let form = document.getElementById("form-courses") as HTMLFormElement;
let codeValue = document.getElementById("code") as HTMLInputElement;
let nameValue = document.getElementById("name") as HTMLInputElement;
let progressionValue = document.getElementById("progression") as HTMLSelectElement;
let syllasbusValue = document.getElementById("syllabus") as HTMLInputElement;
let courses: CourseInfo[] = loadCourses();
printCourses();

let emptyTxt = document.getElementById("empty-text") as HTMLParagraphElement;
let clearBtn = document.getElementById("clearbutton") as HTMLButtonElement;

clearBtn.addEventListener("click", clearStorage);



//Ladda in inlagda kurser
function loadCourses(){
    let courses: string | null = localStorage.getItem("courses");
    if (courses){
        return JSON.parse(courses) as CourseInfo[];
    }else{
        emptyTxt.innerHTML= "Listan är tom";
        return [];
    }
}

//Sparar kurser till localStorage
function saveCourses(courses: CourseInfo[]): void{
    localStorage.setItem("courses", JSON.stringify(courses));
}

//Eventlyssnare
form.addEventListener("submit", (event):void =>{
    event.preventDefault();

    //Objekt för ny kurs
    const newCourse: CourseInfo = {
        code: codeValue.value,
        name: nameValue.value,
        progression: progressionValue.value as "A" | "B" | "C",
        syllabus: syllasbusValue.value
    }
    //Koll så att inte samma kurs läggs in två gånger
    courses.forEach((course: CourseInfo): void => {
        if(course.code === newCourse.code){
            alert("Kursen måste vara unik!")
            return
        }
    });
    courses.push(newCourse);
    saveCourses(courses);
    form.reset();
    printCourses();
})
//Skriver ut kurser i list-format
function printCourses(): void{
    courseList.innerHTML="";
    courses.forEach((course: CourseInfo) : void =>{
        let li = document.createElement("li") as HTMLLIElement;
        li.innerHTML = `${course.code} - ${course.name} (${course.progression}) <a href="${course.syllabus}">Länk till kursplan</a>`;
        courseList.appendChild(li);
    })
}

function clearStorage(): void{
    localStorage.clear();
    courseList.innerHTML = "";
    loadCourses();
}