function greet(user) {
    console.log(" Hi " + user.gender + " " + user.name + " your age is " + user.age);
}

let user = {
    name : "Sharvari",
    age : 23,
    gender : "Mrs"
}

greet(user);

if( user.age > 18) {
    console.log(" You are Eligible to vote");
}else{
    console.log(" Not eligible");
}
