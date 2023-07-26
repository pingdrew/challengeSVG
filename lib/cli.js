const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

class CLI {
  constructor() {
    this.title = '';
    this.tasks = [];
  }

  questions() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'Input up to three letters.',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What do you want the description to be?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What do you want the installation section to say?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What do you want the usage section to say?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What do you want the contributions section to say?',
        name: 'contributions',
      },
      {
        type: 'input',
        message: 'What about the tests section?',
        name: 'tests',
      },
      {
        type: 'rawlist',
        message: 'What license would you like?',
        name: 'textColor',
        choices: ['MIT', 'Apache_2.0', 'MPL_2.0', 'ISC'],
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
    ]).then((response) =>
      console.log(response)
    );
  };
};

module.exports = CLI;
