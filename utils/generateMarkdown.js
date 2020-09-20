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
  
  # Title
  ${ data.title }

  ## Description
  ${ data.description }

  ### Table of Contents

  - [Description](#description)

  ## Installation
  ${ data.installation }

  ## Usage
  ${ data.usage }

  ## Contributing
  ${ data.contribution }

  ## Test Instruct  ions
  ${ data.test }

  ## Licenses
  [![License:](https://img.shields.io/badge/License-${ data.licenses }-lightgrey.svg)]

  ## Questions
  ${ data.questions }
  `;
}

module.exports = { writeFile, generateMarkdown };


