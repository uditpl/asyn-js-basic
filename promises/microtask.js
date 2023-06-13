console.log("programe start")

setTimeout(()=>{
    console.log("i am set time out")
}, 1000)

Promise.resolve().then((val)=>{
    console.log("promise output")
})

 console.log("programe ends");