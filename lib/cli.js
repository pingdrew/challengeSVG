const inquirer = require('inquirer');

class CLI {
  constructor() {
    this.response = '';
  }

  questions() {
    inquirer.prompt([
      // WHEN I am prompted for text
      // THEN I can enter up to three characters
      {
        type: 'input',
        message: 'Input up to three letters.',
        name: 'title',
      },
      // WHEN I am prompted for the text color
      // THEN I can enter a color keyword (OR a hexadecimal number)
      {
        type: 'input',
        message: 'What color do you want your text?',
        name: 'textColor',
      },
      // WHEN I am prompted for a shape
      // THEN I am presented with a list of shapes to choose from: circle, triangle, and square
      {
        type: 'rawlist',
        message: 'What shape do you want?',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
      },
      // WHEN I am prompted for the shape's color
      // THEN I can enter a color keyword (OR a hexadecimal number)
      {
        type: 'input',
        message: 'What color do you want your shape?',
        name: 'shapeColor',
      },
    ]).then((response) =>
      this.response = response
    );
  };
};

module.exports = CLI;