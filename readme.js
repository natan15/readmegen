const fs = require('fs');
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generate-markdown");

const questions = [
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
    },{
      type: "input",
      name: "email",
      message: "What is your email address?"
    },
    {
      type: "input",
      name: "title",
      message: "What is your project's name?"
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project"
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "contributing",
      message: "What does the user need to know about contributing to the repo?",
    }
  ];

  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
      console.log("Generating README...");
      writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
  }
  
  init();