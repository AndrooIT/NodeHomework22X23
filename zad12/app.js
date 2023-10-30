const file = require('fs');


process.argv.length>3?console.log('Zbyt wiele argumentów'):(
    process.argv.length<3?console.log(file.readdirSync(__dirname, ['utf-8'])):
    console.log(file.readdirSync('/'+process.argv[2], ['utf-8']))
);