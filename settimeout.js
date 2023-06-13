console.log("hello");

setTimeout(function st1(){
    console.log("i am st1");
}, 2000);

setTimeout(function st1(){
    console.log("i am st2");
}, 1000)


function sayBye(){
    console.log("bbye");
}
sayBye();
console.log("----------------------------------");
function greet(){
    console.log("hello");
}
setTimeout(greet , 5000);
console.log("bye");
