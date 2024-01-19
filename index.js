// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require("inquirer");
const fs = require("fs");
const path= require("path");
const generateMarkdown = require("./generateMarkdown");
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "Installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "Usage",
    message: "What are the usage instructions?",
  },
  {
    type: "input",
    name: "Contribution",
    message: "What is the contributation instructions?",
  },
  {
    type: "input",
    name: "Test",
    message: "What is the testing instructions?",
  },
  {
    type: "input",
    name: "email",
    message: "Run that email",
  },
  {
    type: "input",
    name: "Github",
    message: "What is your github username?",
  },
  {
    type: "list",
    name: "License",
    message: "Which license are you using?",
    choices: ["MIT", "Mozilla", "Boost", "NONE"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    fs.writeFileSync(path.join(process.cwd(),"project.md"),generateMarkdown(answers))
  });
}

// Function call to initialize app
init();
