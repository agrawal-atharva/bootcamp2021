var a = 6;
function test() {
    var a = 7;
    function again() {
        var a = 8;
        console.log(a); 
    }
    again();
    console.log(a); 
}
test();
console.log(a)