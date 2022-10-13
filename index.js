//const {inquirer} = require("inquirer");

const inquirer = requirer('inquirer');
const  fs = requier('fs');



const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "what is the Team manager's name?",
        },
        {
            type:'input',
            name:'id',
            message:"What is the Manager's ID?",
        },
        {
            type:'input',
            name:'email',
            message:"What is their email?",
        },
        {
            type:'input',
            name:'officeNumber',
            message:"What is their Office Number?",
        },

    ]).then( answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMember.push(manager);
        Menu();
    })
};

const Menu = () => {
    return inquirer.prompt([
        {
            type:'list',
            name:'menu',
            message:" Who would you like to add next:",
            choices: ['Engineer', 'Intern', 'Done with Team']
        },
    ]).then(choices => {
        switch(choices.menu){
            case 'Engineer':
                promptEngineer();
            break;
            case 'Intern':
                promptIntern();
            break;
            default:
                buildTeam();
        }
    }

    )
}