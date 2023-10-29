/* 
1. Use the inquirer npm package to get user input.


2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
// var inquirer = require('inquirer');
import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([
    {message: "enter your url: ",
  name: "URL"
  }
  ])
  .then((answers) => {
    const url1 = answers.URL;
    console.log(url1);
    var qr_svg = qr.image(url1);
 qr_svg.pipe(fs.createWriteStream('google.png'));

fs.writeFile('URL.txt', url1, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrongcd
    }
  });


  // var qr = require('qr-image');
 

 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });