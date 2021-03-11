let cypher = `BREAK THE CODE BABY IF YOU CAN AND BUY ME A CAR BECAUSE I KNOW THE TRUTH ABOUT YOU`
let letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
let dec = 15
let str = ' '

for (let i = 0; i < cypher.length; i++) {
  if (cypher[i] !== ' ') {
    str += letters[(letters.indexOf(cypher[i]) + dec) % 26]
  } else {
    str += ' '
  }
}
console.log(str)