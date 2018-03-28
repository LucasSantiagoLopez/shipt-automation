# shipt-automation

### Hello, these are some automated tests for login functionality in Shipt.com website in a simple Automation Testing framework built on AngularJs javascript using Node.js

### Node.js Installation

Go to https://nodejs.org/en/ and download Node.js

### Protractor Installation

Steps to get Protractor working on MAC, windows should be same.

1. - In the Terminal install Protractor program from Node.js

            type 'sudo npm install -g protractor'


2. - In the Terminal update webdriver to drive your browser

            type 'sudo webdriver-manager update'

3. - Create a test new folder you can name it anything, and then inside

   A)  Make a file called - [test.js](shipt-automation/test.js)
   
   B) Make a new file called - [conf.js](shipt-automation/test.js)
   
3. -  Now open a new terminal
          >  Navigate to directory you created. cd <directory Name>
          >  Which should have two file you just created spec.js and conf.js
          >  Now just run command:
  
              type 'protractor conf.js'

**This should work **
