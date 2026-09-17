import {
    getEmployeesByDepartment,
    calculateAverageSalary,
    getExperiencedEmployees,
    increaseSalary,
    showEmployees
} from "./angajati.js";

const employees = [
    {
        id: 1,
        name: "Ion",
        department: "IT",
        salary: 15000,
        experience: 5
    },
    {
        id: 2,
        name: "Ana",
        department: "HR",
        salary: 10000,
        experience: 2
    },
    {
        id: 3,
        name: "Maria",
        department: "IT",
        salary: 18000,
        experience: 7
    },
    {
        id: 4,
        name: "Andrei",
        department: "Marketing",
        salary: 9000,
        experience: 4
    },
    {
        id: 5,
        name: "Elena",
        department: "HR",
        salary: 11000,
        experience: 6
    },
    {
        id: 6,
        name: "Vasile",
        department: "IT",
        salary: 12000,
        experience: 1
    },
    {
        id: 7,
        name: "Cristina",
        department: "Marketing",
        salary: 9500,
        experience: 3
    }
];



console.log("=== TOȚI ANGAJAȚII ===");

showEmployees(employees);



console.log("\n=== ANGAJAȚII DIN IT ===");

const itEmployees = getEmployeesByDepartment(
    employees,
    "IT"
);

showEmployees(itEmployees);



console.log("\n=== SALARIUL MEDIU ===");

const averageSalary = calculateAverageSalary(employees);

console.log(
    `Salariul mediu este: ${averageSalary.toFixed(2)} lei`
);



console.log("\n=== ANGAJAȚI CU EXPERIENȚĂ > 3 ANI ===");

const experiencedEmployees =
    getExperiencedEmployees(employees);

showEmployees(experiencedEmployees);



console.log("\n=== DUPĂ MAJORAREA SALARIILOR ===");

const updatedEmployees =
    increaseSalary(employees);

showEmployees(updatedEmployees);