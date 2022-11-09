//This is the class Employee which has methods that are inherited by Engineer, Intern, and Manager.
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole() {
        return "Employee"
    }
}
//This is where Employee is exported to other parts of the application.
module.exports = Employee