const forEach = (fn, array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(fn(array[i]))
  }
}
const multiplier = n => n * PI

const PI = 3.14
let number = [3, 8, 42, 77, 89, 18]
forEach(multiplier, number)

