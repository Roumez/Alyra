//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max

const biggest = (array) => {
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    console.log(i)
    if (max < i) {
      max = i
    }
  } console.log(max)
}
const array = [99, 100, 101, 1]
console.log(biggest(array))

//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const sortAscend = (array) => {
  return array.sort((a, b) => a - b)
}
console.log(sortAscend([99, 101, 100, 1]))

//https://www.1formatik.com/3590/comment-supprimer-les-doublons-dun-tableau-en-javascript
const makeUnique = (array) => {
  array.sort((a, b) => a - b)
  return [...new Set(array)]
}
console.log(makeUnique([1, 1, 3, 8, 13, 4, 0, 13, 6]))