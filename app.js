/*path*/

//console.log(__filename) // path to the current file
//console.log(__dirname) // path to the current directory

//const logger= require("./log")

//logger.log("Islem");


//logger.url;

// const {sayHello, url}= require('./log');
// sayHello("islem");
// console.log(url);

// const path=require("path")
// const result = path.parse(__filename);
// console.log(result)


/*OS*/

// const os = require('os')
//  console.log("Free Memory:", os.freemem());
//  console.log("Total Memory:", os.totalmem());
//  console.log("Host Name:", os.hostname());


/*fs*/


// Syunchronous version of readdir
// Syunchronous operation means the control will be blocked 
// Until the operation is done


// const fs = require('fs');
// console.log("Operation started");
// const files = fs.readdirSync('./');
// console.log(files);
// console.log("Operation termined")


// Asyunchrounous version of readdir
// Asyunchrounous operation takes times, node.js does not wait
// it will continue working on the next operation

// const FileSystem = require('fs');
// console.log('Operation has started');
// FileSystem.readdir('./', function(error, result){
//     if (error){
//         console.log(error);
//     } else{
//         console.log(result)
//     }
// });
// console.log("Operation termined")


// const {readFile}= require("./readFile")

// readFile("C://Users/Dell/Desktop/node.js project/index.js");
//readFile("./log.js");


// const {copyMyFile}=require('./readFile')
// copyMyFile("./log.js", "./myFile.txt")



/*event*/



// const EventEmitter = require('events')
// const { } = require('worker_threads')

// class Logger extends EventEmitter{
//     logMessage(msg){
//         console.log(msg);

//         //raise event

//     }

// }



/*http*/

const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('<h1>Hello Bro!</h1>');
        res.end();
    }
    if(req.url === '/clients'){
        res.write(JSON.stringify([
            {id:1, name:'Mossy'},
            {id:2, name:'Adam'},

        ]));
        res.end()
    }
});
server.listen(3000);
console.log('Listening on port 3000...')



