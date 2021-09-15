function isPalindrome(string){
    console.log(string);
    for(let i = 0; i < string.length/2; i++ ){
        if(string[i] !== string[string.length - 1 - i]){
            return (string + " " + "is not a Plaindrome");
        }
    } return (string + " " + "is a Palindrome");
}


let userString = prompt("Enter the string you want to check for Palindrome");
userString.trim()
userString.toLowerCase();
window.alert(isPalindrome(userString));