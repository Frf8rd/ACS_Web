export function showStudents(students) {
    students.forEach(student => {
        console.log(
            `ID: ${student.id} | Nume: ${student.name} | Nota: ${student.grade}`
        );
    });
}

export function getGoodStudents(students) {
    return students.filter(student => student.grade >= 8);
}

export function calculateClassAverage(students) {
    if (students.length === 0) {
        return 0;
    }

    const sum = students.reduce(
        (total, student) => total + student.grade,
        0
    );

    return sum / students.length;
}

export function findStudentById(students, id) {
    const student = students.find(student => student.id === id);

    if (!student) {
        throw new Error(`Elevul cu ID-ul ${id} nu există.`);
    }

    return student;
}

export function addStudent(students, student) {
    return [...students, student];
}