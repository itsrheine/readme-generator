const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// user prompt for questioning (readme title)
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your project title?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        }
    ])
};

// readme sections
const promptSections = readmeData => {

    if (!readmeData.projects) {
        readmeData.projects = [];
    }
    console.log(`
    ================
    Add a New ReadMe
    ================
    `);

    return inquirer.prompt([
    {
            type: 'input',
            name: 'name',
            message: 'What is your project title? (Required)',
            validate: projTitleInput => {
                if (projTitleInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a destription of the project (Required)',
            validate: projDesInput => {
                if (projDesInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!')
                }
            }
        },
        {
            type: 'input',
            name: 'installation instructions',
            message: 'Provide installation instructions for your project (Required)',
            validate: projInstallInput => {
                if (projInstallInput) {
                    return true;
                } else {
                    console.log('Please enter a installation instructions for your project!')
                }
            }
        },
        {
            type: 'input',
            name: 'usage information',
            message: 'Provide usage information for your project',
            validate: projUsageInput => {
                if (projUsageInput) {
                    return true;
                } else {
                    console.log('Please enter a usage information for your project!')
                }
            }
        },
        {
            type: 'input',
            name: 'test instructions',
            message: 'Provide test instructions for your project',
            validate: projInstructInput => {
                if (projInstructInput) {
                    return true;
                } else {
                    console.log('Please enter a test instructions for your project!')
                }
            }
        }
    ]);
};

promptUser()
    .then(promptSections)
    // .then(readmeData => {
    //     return generateReadMe(readmeData);
    // })
    .catch(err => {
        console.log(err);
    });




// function to write README files
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
