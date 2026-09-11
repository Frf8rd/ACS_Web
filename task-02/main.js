import {
    showStudents,
    getGoodStudents,
    calculateClassAverage,
    findStudentById,
    addStudent
} from "./students.js";

let students = [
    { id: 1, name: "Ana", grade: 9 },
    { id: 2, name: "Ion", grade: 7 },
    { id: 3, name: "Maria", grade: 10 },
    { id: 4, name: "Andrei", grade: 6 },
    { id: 5, name: "Elena", grade: 8 }
];

//  Afișarea tuturor elevilor
console.log("Toti elevii");

showStudents(students);


// Elevii cu nota >= 8
console.log("\nelevii cu noata >= 8");

const goodStudents = getGoodStudents(students);

goodStudents.forEach(student => {
    console.log(
        `${student.name} are nota ${student.grade}`
    );
});


//  Media clasei
console.log("\nMedia clasei");

const average = calculateClassAverage(students);

console.log(`Media clasei este: ${average.toFixed(2)}`);


//  Căutarea unui elev după ID
console.log("\nfind elev");

try {
    const student = findStudentById(students, 3);

    console.log(
        `Elev găsit: ${student.name}, nota: ${student.grade}`
    );
} catch (error) {
    console.log(`Eroare: ${error.message}`);
}


//cautare elev ce nu exista
console.log("\ncautare elev inexistent");

try {
    const student = findStudentById(students, 99);

    console.log(student);
} catch (error) {
    console.log(`Eroare: ${error.message}`);
}


// add elev nou
console.log("\nadaugare elev");

students = addStudent(students, {
    id: 6,
    name: "Vasile",
    grade: 9
});

console.log("Elev nou adăugat:");
console.log(`ID: ${students[5].id}`);
console.log(`Nume: ${students[5].name}`);
console.log(`Nota: ${students[5].grade}`);


//afisarea
console.log("\nlisat auctualizata");

showStudents(students);