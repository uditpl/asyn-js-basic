let p1 = new Promise(function(resolve , reject){
    resolve("promise 1 resolved");
})

let p2 = new Promise(function(resolve , reject){
    resolve("promise 2 resolved");
})

let p3 = new Promise(function(resolve , reject){
    resolve("promise 3 resolved");
})

let promiseAll = Promise.all([p1, p2, p3])
console.log(promiseAll);
promiseAll.then((PromiseArr)=>{
    console.log(PromiseArr);
}).catch((err)=>{
    console.log(err);
})