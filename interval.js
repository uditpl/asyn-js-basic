let counter = 0;
let intervalId

function sayHi(){
    counter++;
    console.log("hii");

    if(counter>=3){
        clearInterval(intervalId)
    }
}

intervalId = setInterval(sayHi ,2000);