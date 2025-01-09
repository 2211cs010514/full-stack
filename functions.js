//!without parameter

function demo() {
    console.log("function is executing");   
}
demo();



//// with parameter and arguments
function add(a,b) {
    console.log(a);
    console.log(b);
    console.log(a+b);
    
}
add(6,7);

///Named function.........
function test() {

    
}

///fuction anonyumus expression
let x = function () {
    console.log("  shhhhhhh  ");
    
}
x();




/////////////   IIFE


(
    function () {
        console.log("IIFE");
        
    }
)();


//////////// arrow function

let x1 = _ => console.log("       harshu        ");
x1(); 


////! implict returns add explict returns

function test1(a,b) {
    return(a+b);
    
}
console.log(test1(5,5));


let x2 = (a,b) =>{return a*b};
console.log(x2(5,5));



let y = (a,b) => a+b;
console.log(y(100,200));
