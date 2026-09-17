export function getEmployeesByDepartment(employees, department) {
    return employees.filter(
        employee => employee.department === department
    );
}


export function calculateAverageSalary(employees) {
    if (employees.length === 0) {
        return 0;
    }

    const totalSalary = employees.reduce(
        (sum, employee) => sum + employee.salary,
        0
    );

    return totalSalary / employees.length;
}


export function getExperiencedEmployees(employees) {
    return employees.filter(
        employee => employee.experience > 3
    );
}


export function increaseSalary(employees) {
    return employees.map(employee => {
        if (employee.experience > 3) {
            return {
                ...employee,
                salary: employee.salary * 1.10
            };
        }

        return { ...employee };
    });
}


export function showEmployees(employees) {
    employees.forEach(
        ({ id, name, department, salary, experience }) => {
            console.log(
                `ID: ${id} | ${name} | ${department} | ` +
                `Salariu: ${salary.toFixed(2)} lei | ` +
                `Experiență: ${experience} ani`
            );
        }
    );
}