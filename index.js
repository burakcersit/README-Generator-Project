// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs");
const generateMarkdown = require('./Develop/utils/generateMarkdown')



// TODO: Create an array of questions for user input
const questions = [
    // Question for the Title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",        
    },
    // Question for the project Description
    {
        type: "input",
        name: "description",
        message: "Description of your project.",
    },

    // Table of Contents, andling this in the markdown.js

    // Question for Installation
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
       
    },

    // Question for Usage
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use",
        
    },
    // Question for Credits
    {
        type: "input",
        name: "Credits",
        message: "Please list your collaborators ",
        
    },

    // Question for License 
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "MIT", "ISC", "GNUAGPLv3", "GNUGPLv3", "GNULGPLv3", "Apache2",],
        
    },

    // Question for Contributing 
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project.",
        
    },

    // Question for Tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project.",
        
    },

    // QUESTIONS section -- github 
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        
    },
      // QUESTIONS section -- deployed link 
      {
        type: "input",
        name: "DeployedLink",
        message: "What is your Deployed Link?",
        
    },

    // QUESTIONS section -- email address
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address that contributors may contact?",
      
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
        return console.log(err);
    }
});}

// TODO: Create a function to initialize app
function init() {
     inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, ""));        
        writeToFile("./README.md", data);
      
})
}

// Function call to initialize app
init();
