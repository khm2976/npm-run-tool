const program = require('commander');
const inquirer = require('inquirer');
const list = require('./list');
const { catelist, typesCategory } = require('./value');

list();

program 
    .command('select')
    .alias('s')
    .description('select category')
    .action((type, args)=>{
        const questions = [
            { type: 'list', name: '카테고리', message: 'Choose category', choices: typesCategory },
        ];
        
        inquirer
            .prompt(questions)
            .then(function (answers) {
                console.log(answers);
        });
    });
program.parse(process.argv);
