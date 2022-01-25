#!/usr/bin/env node


const helpFUN = require('./commands/help');
const organizeFUN = require('./commands/oraganize');


let inputArr = process.argv.slice(2);

const command = inputArr[0];


switch (command) {
    case "organize":
        organizeFUN(inputArr[1]);
        break;
    case "help":
        helpFUN();
        break;
    default:
        console.log("Please Input Right command");
        break;
}







