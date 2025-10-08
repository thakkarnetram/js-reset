function testScope(){
    if(true){
        var a = "i am var"; // function scoped can be used outside the if block
        let b = "i am let"; // block scoped can't be used outside the if block
        const c = " i am const"; // block scoped can't be used outside the if block
        console.log(" Inside Block " , a , b , c )
    }
    console.log(a);
    console.log(b);
    console.log(c);
}
// Keyword	Scope	    Re-declare?	 Reassign?
// var	    Function	✅ Yes	     ✅ Yes
// let	    Block	    ❌ No	     ✅ Yes
// const	Block	    ❌ No	     ❌ No

/*'var' is used instead of 'let' or 'const'  reason why IDE prompts this is because var is from older Javascript */
if(true) {
    var e = 2;
}
console.log(e) // e can be accessed, but logically it should not be accessed it might cause bugs
/* also "var" allows re-declaration but "let" and "const" prevents that which "var" silently overrides
*  "var" is hoisted that means in memory creation phase JS scans all variables var , const , let and functions
* and sets them up in memory
* JS runs our code line by line
* and during memory creation phase JS moves all declarations to their top of their scope but not its value
* so basically
*   */

// this happens
// console.log(a);
// var a = 10;

// during cleanup
// var a;
// console.log(a);
// a = 10;
// this way its executed whereas in const and let it won't allow you to call without declaring the variable

/* TL,DR;
*  "var" is function-scoped, can be redeclared, and is hoisted (initialized as undefined)
* "let" and "const" are block-scoped and hoisted but not initialized
* IDEs warn against "var" because it can leak variables, override unintentionally, and cause subtle bugs
*/
