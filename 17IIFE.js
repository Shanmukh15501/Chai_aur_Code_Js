//immediately invoked function
function chai() {

    console.log("DB connected");
}
chai();

//-----lets try with IIFE 
//why iife sometimes due to global 
(
    function chayo()
    //named iife
    {
        console.log("DB connected2");
    }
)();

(()=>{
    //unnamed iife
    console.log("Db 3")
})();


((name)=>{
    //parameterized iife
    //parameterized iife

    console.log(name)
})('shanu')
