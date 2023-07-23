/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from "fs";
import inquirer from 'inquirer';
import qr from 'qr-image';


inquirer
  .prompt([
    {
        name: 'enteredURL',
        message: 'Enter URL',
        type: 'input'
    }
  ])
  .then((answers) => {
    var myQR = qr.image(answers.enteredURL, {type: 'png'});
    myQR.pipe(fs.createWriteStream('generatedQR.png'));
    var svg_string = qr.imageSync(answers.enteredURL, { type: 'png' });
    fs.writeFile('myURL.txt', answers.enteredURL, (err) => {
        if (err) throw err;
        console.log('URL has been saved!');
    });
    
  });

 
  
