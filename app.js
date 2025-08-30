// function sum(num1, num2, num3) {
//     return num1 + num2 + num3
// }

function sum(...args) {
    let total = 0

    for (let item of args) {
        total = total + item
    }

    return total
}


const resta = (...args) => {
    let total = args[0]

    args.forEach((item, index) => {
        if (index != 0) {

            total = total - item
        }
    })
    return total
}
//dry


function isUpperCase(sentence) {
    //validate only strings 
    if (typeof (sentence) != "string") return false;
    // if its a string, then test for uppercase
    return (sentence == sentence.toUpperCase());
}



module.exports = {
    sum,
    resta,
    isUpperCase
}


console.log(sum(10, 10)) // Eylin
console.log(sum(15, 45, 20)) // Daniela

console.log(resta(10, 5))