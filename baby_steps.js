const num_of_args = process.argv.length - 2;
// console.log('args size', num_of_args)
let result = 0
for(let i=2; i < process.argv.length; i++) {
    // console.log(process.argv[i])
    result = Number(result) + Number(process.argv[i])
}
console.log(result)