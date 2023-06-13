loader = true

function test(){
    var a = 1+1
    return new Promise(function(resolve, reject){
        if(a===2){
            resolve("promise resolve yes");
        }
        else{
            reject("promise rejected noooooooo");
        }
    })

}



test().then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("experiment completed");
    loader = false
})