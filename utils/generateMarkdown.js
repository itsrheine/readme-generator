const fs = require('fs');

// readme text file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.MD', fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};
  

// function to generate markdown for README
const generateMarkdown = 
function generateMarkdown(data) {

  //start of markdown syntax
  return `
  
  # ${data.title}
  
  ![License: ${data.licenses}](https://img.shields.io/badge/License-${data.licenses}-0298c3.svg)
  
  <br>

  # Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution)
  - [Test Instructions](#test)
  
  <br>

  # Description
  ${data.description}

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contribution Guidelines
  ${data.contribution}

  # Test Instructions
  ${data.test}

  # Licenses
  This README is covered under ${data.licenses} license(s).

  # Questions
  If you have any questions or concerns, please feel free to reach out to my:
  
  ##
  Email: [${data.email}](${data.email})
  ##
  Github: [${data.username}](https://github.com/${data.username})
  `;
};

module.exports = { writeFile, generateMarkdown };


