const inquirer = require('inquirer')
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require('./lib/Intern');
const generatePage = require('./src/template');
const fs = require('fs');

const employees = [];


const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Id',
            message: 'What is their Employee Id?',
            validate: IdInput => {
                if (IdInput) {
                    return true;
                } else {
                    console.log('Please enter an Id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is their email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their officeNumber?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter their office number!');
                    return false;
                }
            }
        }
    ])
    .then(managerData => {
        ({name, Id, Email, officeNumber} = managerData);
        manager = new Manager(name, Id, Email, officeNumber);
        employees.push(manager);
    })
}

const buildTeam = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'teamAdd',
            message: 'please choose to add an Engineer or an intern',
            choices: ['Engineer', 'Intern', 'Finish building my team']
        }
    ])
    .then( teamChoice => {
        ({teamAdd} = teamChoice);
        if(teamAdd === 'Engineer') {
            addEngineer();
        } else if (teamAdd === 'Intern') {
            addIntern();
        } else {
            console.log('Done building Team');
            console.log(employees);
            writeFile(generatePage(employees));
        }

    })
}

const addEngineer = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Id',
            message: 'What is their Employee Id?',
            validate: IdInput => {
                if (IdInput) {
                    return true;
                } else {
                    console.log('Please enter an Id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is their email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Github',
            message: 'What is the engineers Github?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers Github!');
                    return false;
                }
            }
        }
    ])
    .then(engineerData => {
        ({name, Id, Email, Github} = engineerData);
        engineer = new Engineer(name, Id, Email, Github);
        employees.push(engineer);

        buildTeam()
    })
}

const addIntern = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Id',
            message: 'What is their Employee Id?',
            validate: IdInput => {
                if (IdInput) {
                    return true;
                } else {
                    console.log('Please enter an Id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is their email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'School',
            message: '?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the interns school!');
                    return false;
                }
            }
        }
    ])
    .then(internData => {
        ({name, Id, Email, School} = internData);
        intern = new Intern(name, Id, Email, School);
        employees.push(intern);

        buildTeam()
    })
}

const writeFile = fileContent => {
    return new Promise((resolve, reject)=> {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

promptUser()
    .then(() => {
        buildTeam()
    })
    .catch(err => console.log(err)); 



