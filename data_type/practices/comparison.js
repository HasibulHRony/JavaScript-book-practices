let myMoney = "50";
let myFriendMoney = 50;
if(myMoney == myFriendMoney){
    console.log("we have equal money!")
}
else if(myMoney === myFriendMoney){
    console.log("now, it is really equal")
}




// Practice task 2
let note = "JavaScript";
let note2 = 'JavaScript';
if(note === note2){
    console.log("Both type and value are equal");
}
if(note == note){
    console.log("only value is equal")
}


//practice 3
if(25 == ' 25'){
    console.log("only value is equal")
}
else if(25 === '25'){
    console.log("both value and type are equal")
}
//because '25' is string and === checks both type and value


//practice 4

if("apple" == "apple"){
    console.log("value is equal")
}
if("apple" === "apple"){
    console.log("both is equal")
}


// practice 5
if("test" == "TEST"){
    console.log("== checks only value. not type or case!")
}
else if("test" === "TEST"){
    console.log("=== checks both value and case")
}
else{
    console.log("Js is case sensitive")
}


// practice 6
let variableX = 15;
let variableY = '20';
if((variableX != variableY) == true) {
    console.log("true")
}
if((variableX !== variableY) == true){
    console.log("it also true")
}



console.log(45 > 97)