const inquirer = require("inquirer");
const { writeFile, generateMarkdown } = require('./utils/generateMarkdown.js');

// readme question
const promptSections = () => {
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
            message: 'Provide a description of the project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for your project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information for your project',
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Provide license information for your project. (Choose one)',
            choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_2.0', 'Apache_2.0', 'MIT', 'Boost_Software_1.0', 'Unlicense'],
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide test instructions for your project',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
    ]);
};

promptSections()
    .then(generateMarkdown)
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
