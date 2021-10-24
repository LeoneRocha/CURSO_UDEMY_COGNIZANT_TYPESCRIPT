type EmployeeType = {
    email: string;
    roles?: string[];
}

let data: {employees?: EmployeeType[]};

data = {
    employees: [
        {email: "test@example.com", roles: ["admin", "superAdmin"]},
        {email: "test2@example.com"},
        {email: "test3@example.com"},
    ]
}

// let formattedEmployees;

// if (data && data.employees) {
//     formattedEmployees = data.employees.map((employee: EmployeeType) => {
//         let roles;
//         if (employee.roles) {
//             roles = employee.roles.join(", ");
//         }
//         return `${employee.email.toUpperCase()} ${roles}`;
//     })
// }

const formattedEmployees = data?.employees?.map((employee: EmployeeType) => {
    return `${employee.email.toUpperCase()} ${employee.roles?.join(", ")}`;
})

console.log(formattedEmployees)