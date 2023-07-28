const inquirer = require('inquirer');

const { Triangle, Square, Circle } = require("./shapes");

const fs = require("fs");

class CLI {
  constructor() {
    this.response = '';
  }

  questions() {
    inquirer
      .prompt([
        // Text prompt
        {
          type: "input",
          message: "What text would you like you logo to display? (Enter up to three characters)",
          name: "text",
        },
        // Text color prompt
        {
          type: "input",
          message: "Choose text color (Enter color keyword OR a hexadecimal number)",
          name: "textColor",
        },
        // Shape choice prompt
        {
          type: "list",
          message: "What shape would you like the logo to render?",
          choices: ["Triangle", "Square", "Circle"],
          name: "shape",
        },
        // Shape color prompt
        {
          type: "input",
          message: "Choose shapes color (Enter color keyword OR a hexadecimal number)",
          name: "shapeColor",
        },
      ])
      .then((answers) => {
        // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
        if (answers.text.length > 3) {
          console.log("Must enter a value of no more than 3 characters");
          this.questions();
        } else {
          // Calling write file function to generate SVG file
          this.writeToFile(answers);
        }
      });
  };

  writeToFile(answers) {
    // Size snippet
    let snippet = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>`
    // Shape snippet
    if (answers.shape === "Triangle") {
        let userShape = new Triangle(answers.shapeColor)
        snippet += userShape.render()
    } else if (answers.shape === "Square") {
        let userShape = new Square(answers.shapeColor)
        snippet += userShape.render()
    } else {
        let userShape = new Circle(answers.shapeColor)
        snippet += userShape.render()
    }
    // Text gets added on too
    snippet += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text></g></svg>`;
  
    // Name the file for multiple uses
    let logoName = `${answers.shapeColor}_${answers.shape}_${answers.text}_logo`
  
    // Create the svg file with our inputs, log any errors
    fs.writeFile(`./examples/${logoName}.svg`, snippet, (err) => {
        err ? console.log(err) : console.log(`Generated ${logoName}.svg`);
    });
  }
};

module.exports = CLI;