function getGrades(inputSelector) {
    const gradeList = document.querySelector(inputSelector).value;
    const gradesToArray = gradeList.split(',');
    const fixedGradesArray = gradesToArray.map((grade) => grade.trim().toUpperCase());
    return fixedGradesArray;
}

function lookupGrades(grade) {
    let points = 0;
    if(grade === "A") {
        points = 4.0;
    } else if(grade === "B") {
        points = 3.0;
    } else if(grade === "C") {
        points = 2.0;
    } else if(grade === "D") {
        points = 1.0;
    } else if(grade === "F") {
        points = 0.0;
    }
    return points;
}

function calculateGpa(grades) {
    const gradePoints = grades.map((grade) => lookupGrades(grade));
    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
    const outputData = document.querySelector(selector);
    outputData.innerText = gpa;
}

function clickHandler() {
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);