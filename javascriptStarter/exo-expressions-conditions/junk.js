let nb = 'a'
let isOdd = isNaN(nb) ? false : nb % 2 !== 0 ? true : false
console.log(`${nb} is ${isOdd ? '' : 'not '}an odd number`)