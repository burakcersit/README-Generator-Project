function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Deployed
  ${data.DeployedLink}

  ## Screenshot

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

  ## Contact  
  ${data.userEmail}  
  <br /> 
  ${data.userName}
`
;
}

module.exports = generateMarkdown;


