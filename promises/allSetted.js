let p1 = new Promise(function(resolve , reject){
    resolve("promise 1 resolved");
})

let p2 = new Promise(function(resolve , reject){
    reject("promise 2 rejected");
})

let p3 = new Promise(function(resolve , reject){
    resolve("promise 3 resolved");
})

Promise.allSettled([p1 , p2 , p3]).then((arr)=>{
    console.log(arr);
}).catch((err)=>{
    console.log(err);
})