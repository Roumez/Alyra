const add = (a, b) => {
  return (a + b)
}
console.log(add(8, 10))

const sub = (a, b) => {
  return (a - b)
}
console.log(sub(8, 10))

const mul = (a, b) => {
  return (a * b)
}
console.log(mul(8, 10))

const div = (a, b) => {
  return (a / b)
}
console.log(div(8, 10))

const calc = (op, nb1, nb2) => {
  switch (op) {
    case '+': return add(nb1, nb2);
      break;
    case '-': return sub(nb1, nb2);
      break;
    case '/': return div(nb1, nb2);
      break;
    case '*': return mul(nb1, nb2);
      break;
    default:
      console.log(`Sorry, we can’t understand your operator`)
  }
}
console.log(calc(`-`, 5, 6))
