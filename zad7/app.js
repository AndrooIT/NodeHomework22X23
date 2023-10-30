const imported = require("./math");
const fs = require( 'fs');
const os = require('os');


console.log("doadawanie "+imported.add(3,5))
console.log("odejmowanie "+imported.sub(3,5))
console.log("dzielenie "+imported.div(3,5))
console.log("mnożenie "+imported.mul(3,5))
console.log("liczba Pi "+imported.pi)

fs.writeFileSync('zad6.txt', "liczba Pi "+imported.pi);
console.log(os.userInfo().username);
