//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate)
document.querySelector("#myList").innerHTML = stepsHtml.join();

let grades = ["A", "B", "A",];

function gradesToGpa(){
    let points = 0;
    if (grade === "A") {
    points = 4.0; 
    } else if (grade === "B") {
        points = 3.0;
    }
    return points;
}
const gpaArray = grades.map(gradesToGpa);

const gpaTotal = gpaArray.reduce(function(total, item) {
  return total + item;
});

const gpa = gpaTotal / gpaArray.length;

const fruits = ["watermelon", "peach", 'apple', 'tomato', 'grape'];

let smallFruits = fruits.filter(function(fruit){
  return fruit.length < 6;
});

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let index = numbers.indexOf(luckyNumber);