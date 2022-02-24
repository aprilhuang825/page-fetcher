const request = require('request');
const fs = require('fs');

const domain = process.argv[2];
const newpath = process.argv[3]
request(domain, (error, response, body) => {
  if (error){
    console.log('error:', error); 
  }
  fs.writeFile(`${newpath}`, body, (err) => {
    if (err){
      console.log('error:', err); 
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${newpath}`);
    }
  });
});