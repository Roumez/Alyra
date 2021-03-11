const isOdd = (x) => {
  if (x % 2 !== 0) {
    return true
  } else {
    return false
  }
}
const isEven = (x) => {
  return !isOdd(x)
}
console.log(isOdd(3))
console.log(isEven(3))