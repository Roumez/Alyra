const reverseStr = str => str.split('').reverse().join('')


const isPalindrome = str => {
  if (str === reverseStr(str)) {
    return true
  } else {
    return false
  }
}

console.log(reverseStr(`sucelecus`))
console.log(isPalindrome(`sucelecus`))