// let's work with the filesystem modules some more!
const fs = require('fs');
const path = require('path');

/*
 * create a folder:
 * args:
 * 1st - the path you want to give the new folder
 * 2nd - options object - if nothing then just pass in empty object literal
 * 3rd - callback function

fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder created...');
});
*/

/*
 * writeFile
 * Args:
 * path for the new file to occupy
 * name of the new file
 * content for the new file
 * callback function

 let new_file = path.join(__dirname, '/test', 'hello.txt')
 fs.writeFile(
     new_file,
     'Hello World',
     err => {
         if(err) throw err;
         console.log('New file has been written...');

         // now, put something else on there!
         fs.appendFile(
             new_file, '\nNODE ROCKS!',
             err => {
                 console.log('File has MORE content on it now!');
             }
         )
 });
 */

 // Read from a file
 /* Args:
  * path of file
  * encoding - helps you get the actual data!
  * callback function
  */
 let new_file = path.join(__dirname, '/test', 'hello.txt');
 fs.readFile(new_file, 'utf8',
    (err, data) => {
        console.log(`This is what's in your file: ${data}`);
    }
)

// Renaming a file
/* Args:
 * path to current file
 * path to file, with new name
 * callback function, goes on asynchronously as your method call executes
 */

let newNameOfFile = path.join(__dirname, '/test', 'helloWorld.txt');
fs.rename(new_file, newNameOfFile,
    err => {
        if (err) throw err;
        console.log('File renamed...');
    })
