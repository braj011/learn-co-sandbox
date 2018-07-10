function doNothing() {}
doNothing()


function sayHellotoI() {
  console.log("Hello, Isabel")
}
sayHellotoI()     // must call the function for anything to happen


// better way with arguments

/* Arguments are the actual values that we pass to the function, 
   and the parameters are the named references where we store those passed-in values.
    - firstName is the parameter below*/


/*

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`)
}
sayHelloTo("Dick")
sayHelloTo("Dom")

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`)
}
say ("Go F yourself", "Jimmy")  


*/


function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`
}
say ("Go F yourself", "Jimmy")
