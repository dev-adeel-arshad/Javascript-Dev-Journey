// sometime there is a problem from the pollution of global scope that contains many variables and to avoid from that pollution we have to make IIFE(Immediately Invoked Function Expression)

// to make a function IIFE we have to close it in parenthesis () and put a () at the end as
function nonIIFE() {
    // this function is non IIFE
    console.log('this wil not be invoked immediately');

}
// the IIFE function is given below
(function IIFE() {
    console.log('This function is IIFE and will be invoked immediately.');

})();
/*
++++++QUESTIONS++++++++
Here are few questions that are asked in the interviews:
#1. how to creat a main IIFE
#2. how to pass value to IIFE
#3. how to run two IIFE consecutively
#4. how to creat two IIFE
*/
// and the answer of all question is here:

(function chai() {
    console.log("This is main IIFE aw it has a name(chai).");//#1(by naming a function)

})();//when we creat an IIFe than we have to stop that by using the semicolon(;). if we donot do that in many systems IIFE created after that will not work.#3 &#4(by semicolon at the end of IIFE we will write our next IIFE and now we can run both IIFE without that second will not be executed)

((learner) => { //#2
    console.log(`we warmly welcome to ${learner}`);

})("Adeel Arshad");//#2 as we pass value in simple functions same we will pass any value in second paranthesis