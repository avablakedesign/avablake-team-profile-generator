//This is where node.js is used to include Employee.js.
const Employee = require("./Employee");
//This is where Engineer inherits methods from the class Employee in Employee.js.
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }
    getRole() {
        return "Engineer"    
    }
    getGithub() {
        return this.github;
    }
}
//This is where Engineer is exported to other parts of the application.
module.exports = Engineer