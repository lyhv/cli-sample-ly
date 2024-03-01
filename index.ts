#!/usr/bin/env node
const program = require("commander");

function sum(num1, num2) {
    return num1 + num2;
}

program
    .name("sum_cli")
    .version("0.1.0")
    .arguments("<num1> <num2>")
    .description("Sum two numbers")
    .action((num1, num2) => {
        const result = sum(Number(num1), Number(num2));
        console.log(`Output is ${result}`);
    });

program.parse(process.argv)