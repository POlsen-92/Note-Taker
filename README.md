 # Note_Taker
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Description

  This app takes user input to get and post notes and deletes when the icon has been pushed. It utilizes Express.js to manage the servers, Heroku to deploy the app and several NPM's listed in the credits to manage the flow between the back and front ends.

  This app can be accessed through the link below and if cloned can be run once the necessary NPMs listed below are installed. 
  
  [Heroku App](https://paige-note-taker.herokuapp.com/)

  The Github Repository can be found [here](https://github.com/POlsen-92/Note-Taker)
  ## Table Of Contents
  
  - [Installation and Usage](#installation/Usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Credits](#credits)
  - [Creator](#creator)
  
  ## Installation/Usage

This project requires the use of a number of npms which are listed as dependencies so upon loading one must type "npm init" and then "npm i" and ensure that "Express", "Path", "Heroku" and "UUID" are all downloaded for use through My Visual Studio Code. 

Upon loading the app through Github or Heroku a user is met with a large Note Taker heading across the center of the screen with a "Get Started" button. Upon clicking this button the user will then be transferred to another page where the notes present in the JSON database are present. 

At this point a user can enter in a title for their note, the description and then click the save icon that appears at the top right of the screen. Once that is clicked their note will populate in the list to the left of the screen. 
  
If a note on the left is clicked the Title and description will be displayed in the text spaces in the main screen. Here, the notes can be adjusted or the user can press the "+" button at the top right to add a new note.

Beside the list of notes there is a red garbage icon and if the user clicks that the note will be removed from the JSON database and disappear from the list. If the user refreshes the screen after adding or removing notes the changes will persist.
  
  ![ScreenShot of My Program](./public/images/screenshot_1.png)

  ![ScreenShot of My Program](./public/images/screenshot_2.png)
  ## Contributing
  
  ### Contributor Covenant Code of Conduct
  
  #### Our Pledge
  
We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation. 
We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
  
  #### Our Standards
  
  Examples of behavior that contributes to a positive environment for our community include:
  
  * Demonstrating empathy and kindness toward other people
  * Being respectful of differing opinions, viewpoints, and experiences
  * Giving and gracefully accepting constructive feedback
  * Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
  * Focusing on what is best not just for us as individuals, but for the
  overall community
  
  Examples of unacceptable behavior include:
  
  * The use of sexualized language or imagery, and sexual attention or
  advances of any kind
  * Trolling, insulting or derogatory comments, and personal or political attacks
  * Public or private harassment
  * Publishing others’ private information, such as a physical or email
  address, without their explicit permission
  * Other conduct which could reasonably be considered inappropriate in a
  professional setting
  
  #### Enforcement Responsibilities
  
  Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.
  Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.
  
  #### Scope
  
  This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
  
  #### Enforcement
  
  Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at Paige.El.Olsen@gmail.com. All complaints will be reviewed and investigated promptly and fairly. All community leaders are obligated to respect the privacy and security of the reporter of any incident.
  
  #### Enforcement Guidelines
  
  Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:
  1. Correction
      - Community Impact: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.
      - Consequence: A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.
  2. Warning
      - Community Impact: A violation through a single incident or series of actions.
      - Consequence: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.
  3. Temporary Ban
      - Community Impact: A serious violation of community standards, including sustained inappropriate behavior.
      - Consequence: A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.
  4. Permanent Ban
      - Community Impact: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior,  harassment of an individual, or aggression toward or disparagement of classes of individuals.
      - Consequence: A permanent ban from any sort of public interaction within the community.
  
  #### Attribution
  
  This Code of Conduct is adapted from the Contributor Covenant,
  version 2.1, available at
  https://www.contributor-covenant.org/version/2/1/code_of_conduct.html.
  
  Community Impact Guidelines were inspired by Mozilla’s code of conduct enforcement ladder.
  
  For answers to common questions about this code of conduct, see the FAQ at
  https://www.contributor-covenant.org/faq. Translations are available
  at https://www.contributor-covenant.org/translations.
  
  
  ## License
  
  MIT License

    Copyright (c) [2021] [Paige Olsen]
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
  
## Credits
  Built with [JavaScript](https://www.javascript.com/) and [BootStrap](https://getbootstrap.com/)

  Run using [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/)

  Deployed through [Heroku](https://devcenter.heroku.com/)

  Fonts from [Font Awesome](https://fontawesome.com/)

  Other NPMs Used
  - [Path](https://www.npmjs.com/package/path)
  - [UUID](https://www.npmjs.com/package/uuid)
  - [Util](https://www.npmjs.com/package/util)
  - [Fs](https://www.npmjs.com/package/file-system)

## Creator
  
  <img src="./public/images/cover_photo.jpg" width="100px"> <br>
  ### Paige Olsen 

  Contact Me At...

  [Github](https://github.com/POlsen-92) or 
  [Email](Paige.El.Olsen@gmail.com)
