function greet(personName, age, callback , callback2){
    let msg = "hello" + personName;

    
    callback(msg);
    callback2(age);

}

function logGreeting(greeting){
    console.log(greeting);
}

function showAge(ageOfPErson){
    console.log(ageOfPErson);
}

greet("steve", 25, logGreeting, showAge);