

import { calculateAverage, calculateSum} from "./utils.js"

const grades = [7, 9, 5, 10, 8, 6];


const students = [
{ id: 1, name: "Ana", grade: 9 },
{ id: 2, name: "Ion", grade: 7 }
];



//1.

//identificarea elevilor cu nota >= 8;
console.log("Notele ami mari sau egale cu 8", grades.filter(grads => grads >= 8));


//media notelor;
console.log("media notelor",calculateAverage(grades) );

//fiecare notă mărită cu 1 punct, fără a depăși 10.
console.log(grades.map(grade => Math.min(grade + 1, 10)))


