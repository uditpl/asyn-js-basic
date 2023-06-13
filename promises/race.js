let p1 = new Promise(function(resolve , reject){
    setTimeout(()=>{
        resolve("promise 1 is resolve");
    }, 2000)
})

let p2 = new Promise(function(resolve , reject){
    setTimeout(()=>{
        resolve("promise 2 is resolve");
    }, 1000)
})

Promise.race([p1 , p2]).then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
})