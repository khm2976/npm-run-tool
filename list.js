const { category } = require('./value');

module.exports = function() {
    console.log('List');
    console.log('----');

    category.forEach(cate => {
        console.log(`${cate.name} code: ${cate.code}`);
    });
};