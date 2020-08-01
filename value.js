exports.category = [
    {name: 'home', code: '100100100'},
    {name: 'women', code: '100100101'},
    {name: 'man', code: '100100102'},
    {name: 'food', code: '100100103'},
];

exports.typesCategory = exports.category.map(function(o) {
    return o.name + ' (' + o.code + ')'; // convert to one line
});