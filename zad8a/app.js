const imported = require("./math");
const file = require('fs');

const a = file.readFileSync(__dirname+'/a.txt','utf-8').trim();
const b = file.readFileSync(__dirname+'/b.txt','utf-8').trim();
      console.log('Zawartość pliku a.txt:' + a);
      console.log('Zawartość pliku b.txt:'+ b);
      console.log('Dodawanie: ' + imported.add(a, b));
      console.log('Odejmowanie: ' + imported.sub(a, b));
      console.log('Dzielenie: ' + imported.div(a, b));
      console.log('Mnożenie: ' + imported.mul(a, b));
  
  
