#! /usr/bin/env node
import inquirer from "inquirer";
//Initialize user balance and pin code
let myBalance = 5000;
let mypin = 1234;
console.log("Wellcome to HABBIB BANK ");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:",
    },
]);
if (pinAnswer.pin === mypin) {
    console.log("Pin is correct login successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["withdraw Ammount", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "withdraw Ammount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdrawal method:",
                choices: ["Fast Cash", "Enter Amount"],
            },
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCaseAns = await inquirer.prompt([
                {
                    name: "FastCash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [1000, 2000, 5000, 10000, 20000],
                },
            ]);
            if (fastCaseAns.FastCash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastCaseAns.FastCash;
                console.log(`${fastCaseAns.FastCash} withdraw Successfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:",
                },
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Successfully`);
                console.log(`Your remaining balance is :${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Account Balance is:${myBalance}`);
    }
}
else {
    console.log("{Pin is Incorrect, Try Again");
}
