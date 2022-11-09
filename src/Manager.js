//This is where Node.js is used to include Employee.js.
const Employee = require("./Employee");
//This is where Manager inherits the methods from the class Employee.js.
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        //This is where the super() method calls the parents constructor method and gets access to the parents properties and methods.
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}
//This is where the manager is exported to be available in other parts of the application.
module.exports = Manager