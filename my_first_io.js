var fs = require('fs')
var file_path = process.argv[2]
var file_buffer = fs.readFileSync(file_path)
var indv_line = file_buffer.toString().split('\n')
console.log(indv_line.length - 1)

// shorter method by converting to string at read time

// var line_count = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
