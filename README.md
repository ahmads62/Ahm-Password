# Javascript Passowrd Generator

## Description
Ask requires to create an application that an employee can use to generate a random password based on criteria they’ve selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. This week’s coursework will teach you all the skills you need to succeed in this assignment.

## User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria 
* GIVEN I need a new, secure password
  * WHEN I click the button to generate a password
    * THEN I am presented with a series of prompts for password criteria
  * WHEN prompted for password criteria
    * THEN I select which criteria to include in the password
  * WHEN prompted for the length of the password
    * THEN I choose a length of at least 8 characters and no more than 128 characters
  * WHEN asked for character types to include in the password
    * THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  * WHEN I answer each prompt
    * THEN my input should be validated and at least one character type should be selected
  * WHEN all prompts are answered
    * THEN a password is generated that matches the selected criteria
  * WHEN the password is generated
    * THEN the password is either displayed in an alert or written to the page
    
### Tasks Accomplished to achieve the acceptance criteria 
* 1 used arrays to hold different characters strings to be used to generate password
* 2 develop getUserInput function to get user input , validate and show proper messages, used an object to store user selection 
* 3 Enhance generatepassword function to generate a random password based on user selection, based on user selection added must have character   
* 4 Added media query for smaller screens

### Desktop Screen Images
Main Pages / Header / Body / Footer
![Main](./Develop/assets/pic/pic-main.jpg?raw=true "Main Pages / Header / Body / Footer")
User Input
![User-Input-1](./Develop/assets/pic/pic-2.jpg?raw=true "User Selection")
![User-Input-2](./Develop/assets/pic/pic-3.jpg?raw=true "User Selection")
Generated Password
![Password](./Develop/assets/pic/pic-passwd.jpg?raw=true "Generated Password")

### Links
* Code Repository Link  (https://github.com/ahmads62/Ahm-Password)
* Deployed Website Link (https://ahmads62.github.io/Ahm-Password/Develop/index.html)

## Installation
Upload index.html, and assets folder, assets folder contains JS and CSS folder and releated files.