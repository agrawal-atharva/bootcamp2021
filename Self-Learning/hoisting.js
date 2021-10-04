function foo(){
    a = 10;
    console.log(a);
    var a = 20;
    console.log(a);
}

function boo(){
    if(true){
        var a = 5;
    }
    console.log(a);
}

foo();
boo();
