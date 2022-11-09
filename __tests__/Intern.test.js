//This is a test for the Intern class using Jest.
const Intern = require("../src/Intern")
describe("testing Intern class", () => {
    const newIntern = new Intern("name", "id", "email", "school")
    it("can get name of Intern", () => {
        expect(newIntern.getName()).toBe("name")
    })
    it("can get the id of Intern", () => {
        expect(newIntern.getId()).toBe("id")
    })
    it("can get the email of Intern", () => {
        expect(newIntern.getEmail()).toBe("email")
    })
    it("can get the role of Intern", () => {
        expect(newIntern.getRole()).toBe("Intern")
    })
    it("can get the school of Intern", () => {
        expect(newIntern.getSchool()).toBe("school")
    })
})