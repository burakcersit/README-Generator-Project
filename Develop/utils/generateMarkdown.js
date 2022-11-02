// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Deployed](#Deployed)
  * [Contact](#Contact)


      
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.Credits}

  ## license
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}


  ## Deployed
  ${data.DeployedLink}

  ## Contact
  ${data.userEmail}
  ${data.userName}
`
;
}

module.exports = generateMarkdown;
