//This is where I include inquirer and fs and the js files for engineer, intern and manager using require from node.js.
const Inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const Manager = require("./src/Manager");

//This renders the HTML by setting and using using template literals. This creates instances of classes for Manager, Engineer and Intern.
function renderHTML(manager, engineers, interns) {
   const newManager = new Manager(manager.manager_name, manager.employee_id, manager.email, manager.office_number)  
   const newEngineers = engineers.map(({engineer_name, engineer_email, engineer_id, engineer_github}) => {
    return new Engineer(engineer_name, engineer_id, engineer_email, engineer_github)
   });
   const newInterns = interns.map(({intern_name, intern_email, intern_id, intern_school}) => {
    return new Intern(intern_name, intern_id, intern_email, intern_school) 
   }) 
   //This updates the html with engineer information dynamically through template literals set from Inquirer.
   function renderEngineers() {
        return newEngineers.map((engineer) => {
            return `
            <div class="card">
            <div class="cardheader">
                <div>
                    <h3>${engineer.getName()}</h3>
                </div>
                <div>
                    <h3><span>🏢</span>Engineer</h3>
                </div>
            </div>
            <div class="cardcontent">
                <p>
                    ID: ${engineer.getId()}
                </p>
                <p>
                    email: <span><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span>
                </p>
                <p>
                    GitHub: <span><a href = "https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></span>
                </p>
            </div>
        </div>
            `
        }).join("\n")
   }
   //This updates the HTML with intern information dynamically from Inquirer through template literals. 
   function renderInterns() {
    return newInterns.map((intern) => {
        return `
        <div class="card">
        <div class="cardheader">
            <div>
                <h3>${intern.getName()}</h3>
            </div>
            <div>
                <h3><span>🏢</span>Intern</h3>
            </div>
        </div>
        <div class="cardcontent">
            <p>
                ID: ${intern.getId()}
            </p>
            <p>
                email: <span><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></span>
            </p>
            <p>
                school: ${intern.getSchool()}
            </p>
        </div>
    </div>
        `
    }).join("\n")
   }
   //Here is where the HTML document is designed. CSS is included through <style></style>. The Managers information is updated through template literals.
   const html = `
   <!DOCTYPE html>
   <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <meta http-quiv="X-UA-Compatible" content="ie=edge">
           <title>Team Profile Generator</title>
           <style>
               body {
                   margin: 0;
                   font-family: Helvetica, sans-serif;
                   background-color:#269;
                   background-image:
                        linear-gradient(white 2px, transparent 2px),
                        linear-gradient(90deg, white 2px, transparent 2px),
                        linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);
                   background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
                   background-position:-2px -2px, -2px -2px, -1px, -1px, -1px, -1px;
               }
               .banner {
                   background:
                        radial-gradient(black 15%, transparent 16%) 0 0,
                        radial-gradient(black 15%, transparent 16%) 8px 8px,
                        radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
                        radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
                        background-color:#282828;
                        background-size:16px 16px;
                   color: white;
                   text-align: center;
                   font-size: 18px;
                   padding: 10px;
                   margin-bottom: 15vh;
               }
               .card {
                   min-width:20vw;
                   min-height:40vh;
                   height:50vh;
               }
               .cardheader {
                   padding: 10px;
                   background-color: #1B065E;
                   color: white;
                   max-width:100%;
                   min-height:15%;
                   text-align: center;
               }
               .cardcontent {
                    display: flex;
                    align-items: left;
                    justify-content: center;
                    flex-direction: column;
                    padding: 10px;
                    max-width: 100%;
                    background-color: white;
                    height: 20vh;
               }
               .cardcontent p {
                   background-color: white;
                   padding: 5px;
                   border: 1px solid black;
                   margin: 0;
               }
               main {
                padding: 0 15vw;
                display: grid;
                grid-template-columns: repeat(3,1fr);
                grid-template-rows: auto;
                grid-gap: 25px;
                max-width:100%;
                }
               @media screen and (max-width:280px){
                  main {
                    display:block;
                  }  
                }
               @media screen and (max-width:360){
                  main {
                    display:block;
                  }
                }
               @media screen and (max-width:375){
                  main {
                    display:block;
                  }
               }
               @media screen and (max-width:414){
                  main {
                    display:block;
                  }
               }
           </style>
       </head>
       <body>
           <header class = "banner">
               <h1>My Team</h1>
           </header>
           <main>
               <div class="card">
                   <div class="cardheader">
                       <div>
                           <h3>${newManager.getName()}</h3>
                       </div>
                       <div>
                           <h3><span>🏢</span>Manager</h3>
                       </div>
                   </div>
                   <div class="cardcontent">
                       <p>
                           ID: ${newManager.getId()}
                       </p>
                       <p>
                           email: <span><a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></span>
                       </p>
                       <p>
                           office number: ${newManager.getOfficeNumber()}
                       </p>
                   </div>
               </div>
                    ${renderEngineers()}
                    ${renderInterns()}
           </main>
       </body>        
   </html>
   `
   //This is where the file index.html is written too through FS.
   try {
      fs.writeFileSync("index.html", html, "utf-8");
    } catch(err) {
        console.log(err.message)
    }    
} 
//This is where Inquirer asks questions, data is saved as properties of a key and value.
async function runApp() {
    const engineers = [];
    const interns = [];
    let employeeSelected = true;
    const manager = await Inquirer.prompt([
        {
            type:"input",
            name:"manager_name",
            message:"What is your name?"
        },
        {
            type:"input",
            name:"employee_id",
            message:"What is your employee id?"
        },
        {
            type:"input",
            name:"email",
            message:"What is your email?"
        },
        {
            type:"input",
            name:"office_number",
            message:"What is your office number?"
        },
        
    ])
    //This is a while loop that checks if a employee is selected and then it prompts additional Inquirer questions. 
    while (employeeSelected === true) {
        const employeeAnswers = await Inquirer.prompt([
            {
                type:"list",
                name:"employee_type",
                message:"Would you like to add a employee?",
                choices:["engineer", "intern", "finish"]
            }, 
            {
                type:"input",
                name:"engineer_name",
                message:"What is your engineers name?",
                when: (answers) => answers.employee_type === "engineer"
            },
            {
                type:"input",
                name:"engineer_id",
                message:"What is your engineers id?",
                when: (answers) => answers.employee_type === "engineer"
            },
            {
                type:"input",
                name:"engineer_email",
                message:"What is your engineers email?",
                when: (answers) => answers.employee_type === "engineer"
            },
            {
                type:"input",
                name:"engineer_github",
                message:"What is your engineers github?",
                when: (answers) => answers.employee_type === "engineer"
            },
            {
                type:"input",
                name:"intern_name",
                message:"What is your intern name?",
                when: (answers) => answers.employee_type === "intern"
            },
            {
                type:"input",
                name:"intern_id",
                message:"What is your interns id?",
                when: (answers) => answers.employee_type === "intern"
            },
            {
                type:"input",
                name:"intern_email",
                message:"What is your intern email?",
                when: (answers) => answers.employee_type === "intern"
            },
            {
                type:"input",
                name:"intern_school",
                message:"What is your interns school?",
                when: (answers) => answers.employee_type === "intern"
            }   
        ])
        switch(employeeAnswers.employee_type){
            case "engineer":{
                engineers.push(employeeAnswers)
            break;    
            }
            case "intern":{
                interns.push(employeeAnswers)
            break;    
            }
            case "finish":{
                employeeSelected = false;
            break;    
            }
        }
    }
    // console.log(answers); 
    // console.log(engineers);
    // console.log(interns); 
    renderHTML(manager, engineers, interns); 
}
//This is where runApp is called, which is an async function awaiting inquirer prompts.
runApp()