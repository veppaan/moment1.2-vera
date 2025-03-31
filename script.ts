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
let courses: CourseInfo[] = loadCourses();

//Ladda in inlagda kurser
function loadCourses(){
    let courses: string | null = localStorage.getItem("courses");
    if (courses){
        return JSON.parse(courses) as CourseInfo[];
    }
    return [];
}

//Sparar kurser till localStorage
function saveCourses(courses: CourseInfo[]): void{
    localStorage.setItem("courses", JSON.stringify(courses));
}
