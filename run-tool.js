const program = require('commander');
const list = require('./list');

// list(); -> 커맨드 list로 처리
program
    .command('list')    // 커맨드 이름
    .alias('ls')        // 커맨드 축약형
    .description('show categorylist')  // 설명
    .action(function () {
        list();
    });
program.parse(process.argv);