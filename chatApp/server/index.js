const url = require('url');
const http = require('http');

const app = http.createServer((request, response) => {
    let messages = ["You are great!", "You can accomplish anything!", "Success is in your future!"];
    messages.forEach( (m) => { 
      console.log(m);
    });
});

app.listen(3000)


