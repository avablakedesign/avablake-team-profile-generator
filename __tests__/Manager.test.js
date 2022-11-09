//This is a test for the Manager class using Jest.
const Manager = require("../src/Manager")
describe("testing Manager class", () => {
    const newManager = new Manager("name", "id", "email", "officeNumber")
    it("can get name of Manager", () => {
        expect(newManager.getName()).toBe("name")
    })
    it("can get the id of Manager", () => {
        expect(newManager.getId()).toBe("id")
    })
    it("can get the email of Manager", () => {
        expect(newManager.getEmail()).toBe("email")
    })
    it("can get the role of Manager", () => {
        expect(newManager.getRole()).toBe("Manager")
    })
    it("can get office number of Manager", () => {
        expect(newManager.getOfficeNumber()).toBe("officeNumber")
    })
})