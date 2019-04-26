let fs = require('fs');

fs.readFile('student.json', function(err, data){
  if (err) throw err;
  
  let student = JSON.parse(data);
  console.log(student);
});

console.log('this is printed after the read call');
