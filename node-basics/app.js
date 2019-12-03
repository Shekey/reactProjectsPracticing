const fs = require('fs');
const os = require('os');

const user = os.userInfo();
const date = new Date();

let message = `User ${user.username} started APP at ${date}`;


fs.appendFile('hello.txt', message,(error) => {
  if(error) {
    console.log('not able to append file'); 
  }
})