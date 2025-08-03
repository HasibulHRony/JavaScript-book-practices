
/**
 * Discount only for upto 5000
 */

// let price = 6500;
// if(price >= 5000){
//     const discount = (price*10)/100;
//     price = price - discount;
//     console.log("Your payable amount is: ", price);
// }
// else{
//     console.log("Pay full amount: ", price);
// }


/**
 * discount for upto 5000 and upto 2500
 */

// let price = 3500;
// if(price >= 5000){
//     let discount = price*10 / 100;
//     price = price - discount;
//     console.log("Your 10% discounted price is: ", price)
// }
// else if(price >= 2500){
//     let discount = price*5 / 100;
//     price = price - discount;
//     console.log("Your 5% discounted price is: ", price)
// }
// else{
//     console.log("You should pay total amount. ", price)
// }


/**
 * practices
 */

//practice 1
// let productPrice = 4500;
// if(productPrice > 3000){
//     let discount = (productPrice * 15) / 100;
//     let productNewPrice = productPrice - discount;
//     console.log("Your 15% discounted price is: ", productNewPrice); 
// }
// else if(productPrice > 3000){
//     let discount = (productPrice * 5) / 100;
//     let productNewPrice = productPrice - discount;
//     console.log("Your 5% discounted price is: ", productNewPrice)
// }


//practice 2
let age = 11;
if(age < 12){
    console.log("Your meal is free.")
}
else if(age > 60){
    console.log("You have got 50% discount.")
}
else{
    console.log("You should pay 10%")
}

//practice 3
let balance = 1500;
if(balance < 1000){
    console.log("Deposit kor.")
}
else if(balance > 1000 && balance < 5000){
    console.log("Enjoy Bindas life.")
}
else{
    console.log("You are super rich.")
}


//practice 4
let score = 89;
if(score < 50){
    console.log("You are fail.")
}
else if(score > 50 && score < 80){
    console.log("You are pass.")
}
else{
    console.log("You have got A+")
}



//practice 5
let page = 896;
if(page < 100){
    console.log("small book. Total page is: ", page)
}
else if(page > 100 && page < 500){
    console.log("Medium size book. Total page is: ", page)
}
else{
    console.log("Large size book")
}

//practice 6
let temp = 19;
if(temp < 0){
    console.log("Ice.")
}
else if(temp > 0 && temp < 20){
    console.log("cool cool")
}
else {
    console.log("Hot Hot")
}

//practice 7
let level = 17;
if(level < 20){
    console.log("Your level is: novice");
}
else if(level > 20 && level < 50){
    console.log("Your level is: expert")
}
else{
    console.log("You are a pro player.")
}