#! /usr/env/node
import inquirer from "inquirer";
import chalk from "chalk";
//welcome message
console.log(chalk.bold.magenta("\n\t\t ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \t\n"));
console.log(chalk.bold.italic.rgb(255, 125, 52)("\n\t\t\t\t ~~~~~~Welcome To My Project~~~~~~~\t\n"));
console.log(chalk.bold.italic.rgb(255, 125, 52)("\n\t\t\t ~~~~~~~~ OOP-Object Oriental Programming ~~~~~~~\t\n"));
console.log(chalk.bold.magenta("\n\t\t ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \t\n"));
//make student class
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
// make person class
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
//make a function
const persons = new Person();
const programStart = async (persons) => {
    console.log(chalk.bold.red("\n\t\t\t>>> WELCOME TO SCHOOL!! <<< \n"));
    do {
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: (chalk.rgb(221, 160, 221).italic("\n\t\t\tWhom Would you like to intract with?\n ")),
                choices: ["Receptionist", "Staff", "Student", "Exit"]
            }
        ]);
        if (ans.select == "Receptionist") {
            let reply = await inquirer.prompt([
                {
                    name: "useroutput",
                    type: "list",
                    message: (chalk.rgb(221, 160, 221).italic("\n\t\t\t Hello !! How may i help you!!\n\t\t\t ")),
                    choices: ["Know about school", "Admission procedure", "staff knowledge"]
                }
            ]);
            if (reply.useroutput == "Know about school") {
                console.log(chalk.rgb(0, 125, 95)("\n\t\t\tThis School has been establish in 1970.\t\t\t\n"));
                console.log(chalk.rgb(0, 125, 95)("\n\t\t\tOur aim is just built your child career.\t\t\t\n"));
                console.log(chalk.rgb(0, 125, 95)("\n\t\t\tWe will bright your child future.\t\t\t\n"));
            }
            else if (reply.useroutput == "Admission procedure") {
                console.log(chalk.rgb(0, 125, 95)("\n\t\t\tYou should attach your NIC with Admission form.\t\t\t\n"));
                console.log(chalk.rgb(0, 125, 95)("\n\t\t\there is our form fill and submit it.\t\t\t\n"));
                console.log(chalk.rgb(0, 125, 95)("\n\t\t\twe have a special package for new students.\t\t\t\n"));
            }
            else {
                console.log(chalk.rgb(0, 125, 95)("\n\t\t\tWe have 2 experinced teachers for each class.\t\t\t\n"));
                console.log(chalk.rgb(0, 125, 95)("\n\t\t\tOur staff is highly qualified.\t\t\t\n"));
                console.log(chalk.rgb(0, 125, 95)("\n\t\t\tThey give your child a learning environment.\t\t\t\n"));
            }
        }
        else if (ans.select === "Staff") {
            console.log(chalk.rgb(100, 100, 100)("\n\t\t\tyou approach the staff room\t.\n\t\t\t Please feel free to ask any question.\n"));
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: (chalk.blue("\n\t\t\tEnter a student's name, you wish to engage with:")),
                    validate: (input) => !input || /^[A-Za-z]+$/.test(input) ? true : "please enter only alphabaticl character "
                }
            ]);
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.bold.rgb(125, 268, 0)(`\n\t\t\tHello !! I am ${name.name}.\n\t\t\t Nice To Meet YOu!!\t\n`));
                console.log(chalk.bold.rgb(125, 268, 0)("\n\t\t\tNew Student Added!!\t\n"));
                console.log(chalk.bold.rgb(125, 268, 0)("\n\t\t\tCurrent Students List: \t\n"));
                console.log(persons.students);
            }
            else {
                console.log(chalk.bold.rgb(260, 100, 57) `\n\tHello!! I am ${student.name}. \n\t\t\t Nice To See You Again!!\t\n`);
                console.log(chalk.bold.rgb(260, 100, 57)("\n\t Existing Students List: \t\n"));
                console.log(persons.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log(chalk.bold.red("\n\t\t\tExciting the program....\t\n"));
            console.log(chalk.bold.italic.rgb(255, 125, 52)("\n\t\t\t\t ~~~  THank You For Visiting Us  ~~~~\t\n"));
            console.log(chalk.bold.italic.rgb(255, 125, 52)("\n\t\t\t\t ~~~~  Have a Good Day  ~~~~\t\n"));
            console.log(chalk.bold.magenta("\n\t\t ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \t\n"));
            process.exit();
        }
    } while (true);
};
programStart(persons);
