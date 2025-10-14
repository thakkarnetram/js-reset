// 3 states of promise -> resolve , reject , pending
const myPromise = new Promise((resolve,reject) => {
   console.log("Promise Started ")
    setTimeout(() => {
        const success = Math.random() > 1.5;
        if(success) {
            console.log("Promise Resolved")
            resolve("Resolved")
        } else {
            console.log("Promised Rejected")
            reject("Rejected")
        }
    },2000)
})

// using .then
console.log("Using .then ")
myPromise
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        console.log("Promise Fulfilled ")
    })

// using await
async function run(){
    console.log("Using await ")
    try {
        const result =  await myPromise;
        console.log(result)
    } catch (err) {
        console.log(err)
    } finally {
        console.log("promise resolved")
    }
}
run()

// the difference between .then and async await is
// async await is more modern and clean for more complex chaining
// using then for complex chaining might be harder to read
// also in then the code works synchronously whereas in async its asynchronously
// executed.
