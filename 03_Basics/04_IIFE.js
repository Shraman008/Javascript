// Immediately Invoked Function Expressions (IIFE) => To prevent Global Scope pollution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ('hitesh')

