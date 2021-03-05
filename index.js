// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const customFunctions = require('./utils/customFunctions');
const { writeFile } = require('./utils/customFunctions');
// we only want the write file method from the entire exported object from customFunctions

// TODO: Create an array of objects to give inquirer questions for user input
const questions = [
  // prompt users with questions
  {
    type: 'input',
    message: 'Enter title.',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Enter a description.',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Enter installation instructions.',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Enter usage information.',
    name: 'usage'
  },
  {
    type: 'list',
    message: 'Choose a license option.',
    choices: ['Apache License 2.0', 'MIT License', 'GNU GPL v3.0', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU AGPL v3.0', 'GNU GPL v2.0', 'GNU LGPL v3', 'Mozilla Public License 2.0', 'The Unilicense'],
    name: 'license'
  },
  {
    type: 'input',
    message: 'Enter contribution guidelines.',
    name: 'contributing'
  },
  {
    type: 'input',
    message: 'Enter test instructions.',
    name: 'tests'
  },
  {
    type: 'input',
    message: 'Enter GitHub username.',
    name: 'questions'
  },
  {
    type: 'input',
    message: 'Enter email.',
    name: 'email'
  }

];

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      // Use user feedback for... whatever!!
      const markdown = generateMarkdown(answers);
      console.log(markdown);
      writeFile('test.md', markdown);
    })
    .catch(error => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
