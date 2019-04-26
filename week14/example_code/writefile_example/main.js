let fs = require('fs');

let myText = "This text and the random number "+Math.random()*100+" will be added to the end of the file."

fs.appendFile('textFile.txt', myText, function (err) {
  if (err) throw err;
  console.log('Saved to textFile.txt!');
});
