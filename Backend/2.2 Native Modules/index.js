const fs = require("fs");

fs.writeFile('practice.txt', "i am gopal trying to lern new technology which is mern and gain knowledge", (err) => {
    if (err) throw err;
     console.log('The file has been saved!');
  }); 

 

 fs.readFile('./practice.txt','utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 