//This is a test for the Employee class using Jest.
const Employee = require("../src/Employee")
describe("testing employee class", () => {
    const newEmployee = new Employee("name", "id", "email")
    it("can get name of employee", () => {
        expect(newEmployee.getName()).toBe("name")
    })
    it("can get the id of Employee", () => {
        expect(newEmployee.getId()).toBe("id")
    })
    it("can get the email of Employee", () => {
        expect(newEmployee.getEmail()).toBe("email")
    })
    it("can get the role of Employee", () => {
        expect(newEmployee.getRole()).toBe("Employee")
    })
})