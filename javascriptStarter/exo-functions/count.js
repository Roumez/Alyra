const add = (min, max, step) => {
  for (let i = min; i <= max; i += step) {
    console.log(i)
  }
}
console.log(add(1, 10, 3))