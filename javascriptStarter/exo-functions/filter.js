const filter = (fn, array) => {
  const newArray = []
  for (let elem of array) {
    if (fn(array[elem])) {
      newArray.push(array[elem])
    }
  } return newArray
}
const longWord = (tab) => {
  for (const elem of tab) {
    return tab[elem] > 6
  }
}
const words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
console.log(filter(longWord, words))

/*// Déclaration d'une fonction qui prend comme paramètre une fonction et un tableau
// Cette fonction appliquera cette fonction à chaque élement du tableau
// Un nouveau tableau sera retourné
const map = (fn, array) => {
  // On copie le tableau array dans tmpArray pour être sur de ne pas le modifier
  // On utilise pour cela la spread syntax
  const tmpArray = [...array] // Une copie de array.
  const newArray = []
  for (const elem of tmpArray) {
    newArray.push(fn(elem))
  }
  return newArray
}

// Déclaration d'une fonction qui prend une string comme paramètre
// et qui retourne une nouvelle string en majuscule
const capitalize = (str) => {
  return str.toUpperCase()
}

const names = ['alice', 'bob', 'charlie']
let newNames = map(capitalize, names) // Attention capitalize sans parenthèses
console.log(names) // names n'a pas été modifié, output: ['alice', 'bob', 'alice']
console.log(newNames) // output: [ 'ALICE', 'BOB', 'ALICE' ]*/