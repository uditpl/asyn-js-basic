let p1 = Promise.resolve("promise resolved");
console.log(p1);

p1.then((val)=>{
    console.log(val);
})

let p2 = Promise.reject("promise rejected");
console.log(p2);

p2.catch((val)=>{
    console.log(val);
})


