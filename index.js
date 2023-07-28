// Importing command line questions
const CLI = require('./lib/cli.js');

// Importing classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");

const cli = new CLI();

cli.questions()