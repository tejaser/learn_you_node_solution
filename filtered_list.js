var fs = require('fs')
var path = require('path')
var extFilter = "." + process.argv[3]
var folder = process.argv[2]

var list = []

// console.log('directory', folder)
// console.log('extention', extFilter)

function readFolder(callback) {
    fs.readdir(folder, function(err, files){
        if (err) return console.log(err);
        // console.log(files)
        files.forEach(file => {
            // console.log(path.extname(file))
            if (extFilter === path.extname(file)) {
                list.push(file)
            }
        })
        callback()
    })
}

function logFiles() {
    list.forEach(item => console.log(item))
}
readFolder(logFiles)

// alternate way to do it

// fs.readdir(folder, function(err, file){
//     if (err) return console.error(err)
//     files.forEach(function(file){
//         if (path.extname(file) === extFilter) {
//             console.log(file)
//         }
//     })
// })