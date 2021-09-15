function simpleInterest(amount, rate, time){
    let simpleInterest = (amount * rate * time) / 100;
    return simpleInterest;
}

let amount = prompt("Enter the amount");
let rate = prompt("Enter the rate");
let time = prompt("Enter number of years");
window.alert("Simple Interest:" + simpleInterest(amount, rate, time));

