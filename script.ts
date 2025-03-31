interface CourseInfo{
    code: string,
    name: string,
    progression: "A" | "B" | "C",
    syllabus: string
}

//Variabler
let courseList = document.getElementById("course-list") as HTMLLIElement;
let form = document.getElementById("form-courses") as HTMLFormElement;
let codeValue = document.getElementById("code") as HTMLInputElement;
let nameValue = document.getElementById("name") as HTMLInputElement;
let progressionValue = document.getElementById("progression") as HTMLSelectElement;
let syllasbusValue = document.getElementById("syllabus") as HTMLInputElement;