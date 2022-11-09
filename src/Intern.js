//This is hwere node.js is used to include Employee.js.
const Employee = require("./Employee");
//This is where Intern inherits methods from the class Employee in Employee.js.
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school;
    }
}
//This is where Intern is exported to other parts of the application.
module.exports = Intern