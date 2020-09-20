const inquirer = require("inquirer");
const { writeFile, generateMarkdown } = require('./utils/generateMarkdown.js');
joe
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
    return inquirer.prompt([
    {
            type: 'input',
            name: 'title',
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
            name: 'installation',
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
            name: 'usage',
            message: 'Provide usage information for your project',
            when: ({ confirmAbout }) => confirmAbout
        },
        {
            type: 'input',
            name: 'licenses',
            message: 'Provide license information for your project',
            when: ({ confirmAbout }) => confirmAbout
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to this project?',
            when: ({ confirmAbout }) => confirmAbout
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide test instructions for your project',
            validate: projInstructInput => {
                if (projInstructInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions for your project!')
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'How can users reach you? (Check all that apply)',
            choices: ['Email', 'Github', 'LinkedIn', 'Other']
        }
    ]);
};

promptUser()
    .then(promptSections)
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(pageTxt => {
        return writeFile(pageTxt);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
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
