const program = require('commander');
const { catelist, typesCategory } = require('./value');

program 
    .command('select <type>')
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
