//This is a test for the Engineer class using Jest.
const Engineer = require("../src/Engineer")
describe("testing Engineer class", () => {
    const newEngineer = new Engineer("name", "id", "email", "github")
    it("can get name of Engineer", () => {
        expect(newEngineer.getName()).toBe("name")
    })
    it("can get the id of Engineer", () => {
        expect(newEngineer.getId()).toBe("id")
    })
    it("can get the email of Engineer", () => {
        expect(newEngineer.getEmail()).toBe("email")
    })
    it("can get the role of Engineer", () => {
        expect(newEngineer.getRole()).toBe("Engineer")
    })
    it("can get the gitHub of Engineer", () => {
        expect(newEngineer.getGithub()).toBe("github")
    })
})