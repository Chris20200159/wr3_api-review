let employees = [
    {
        id: 1,
        name: 'Bo Smith',
        title: 'Manager'
    },
    {
        id: 2,
        name: 'Lucy Lim',
        title: 'CEO'
    },
    {
        id: 3,
        name: 'Logan Paul',
        title: 'Unpaid Intern'
    }
]

let id = 4;

module.exports = {
    getEmployees: (req, res) => {
        res.status(200).send(employees);
    },
    addEmployee: (req, res) => {
        const { name, title } = req.body

        const newEmployee = {
            id,
            name,
            title
        };

        id++;
        employees.push(newEmployee);

        res.status(200).send(employees)
    },
    editEmployee: (req, res) => {
        console.log(req.body);
        const { empId, nameStr } = req.body;

        const tgtIndex = employees.findIndex((emp) => emp.id === empId)

        employees[tgtIndex].name = nameStr;

        console.l

        res.status(200).send(employees);
    }
}