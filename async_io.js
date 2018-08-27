var fs = require('fs');
var line_count = undefined;

function readFile(callback){
    fs.readFile(process.argv[2], function doneReading(error, fileContent){
        if (err) return console.log(err)
        line_count = fileContent.toString().split('\n').length - 1
        callback()
    })
}
function logFileLines(){
    console.log(line_count)
}

readFile(logFileLines)