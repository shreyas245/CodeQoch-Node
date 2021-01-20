var fs = require('fs');

fs.readFile('read.txt','utf8',function(error,data){
    if (error) {
        throw error;
    }
    console.log(data);
});

process.on('uncaughtException',function(error){
    console.log("The exception was caught");
});
