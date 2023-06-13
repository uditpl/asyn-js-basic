const fs = require('fs');

let fileRead1 = fs.promises.readFile('./f1.txt')
console.log(fileRead1)

let fileRead2 = fs.promises.readFile('./f2.txt')
console.log(fileRead2)

let fileRead3 = fs.promises.readFile('./f3.txt')
console.log(fileRead3)

fileRead1.then((data)=>{
    console.log('data '+ data)
})

fileRead2.then((data)=>{
    console.log('data '+ data)
})

fileRead3.then((data)=>{
    console.log('data '+ data)
})