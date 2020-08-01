const program = require('commander');

program 
    .command('select <type>')
    .alias('s')
    .description('select category')
    .option('-c, --catename [value]', 'Sugar level', "defautlcate")
    .action((type, args)=>{
        console.log(type);
        console.log(args.catename);
    });
program.parse(process.argv);
