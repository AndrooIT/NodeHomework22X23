const imported = require("./math");
const file = require('fs').promises;

const readAndProcessFile = async (filePath) => {
  try {
    const data = await file.readFile(filePath, 'utf-8');
    return data;
  } catch (err) {
    console.error('Błąd podczas wczytywania pliku:'+ err);
    throw err;
  }
};
process.argv.length>4?console.log('Zbyt wiele argumentów'):(process.argv.length<4?console.log('Za mało argumentów'):
Promise.all([
 readAndProcessFile(__dirname + '/'+ process.argv[2]),
readAndProcessFile(__dirname + '/'+ process.argv[3])
  ])
    .then(([a, b]) => {
      console.log('Zawartość pliku a.txt:' + a);
      console.log('Zawartość pliku b.txt:'+ b);
  
      console.log('Dodawanie: ' + imported.add(a, b));
      console.log('Odejmowanie: ' + imported.sub(a, b));
      console.log('Dzielenie: ' + imported.div(a, b));
      console.log('Mnożenie: ' + imported.mul(a, b));
    })
    .catch((err) => {
      console.error('Błąd podczas przetwarzania plików:', err);
    })
);

  
