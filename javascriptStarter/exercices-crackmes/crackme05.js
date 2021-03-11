// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '4321drowssap'
//console.log('password1234'.split('').reverse().join(''))
const crackme5 = (password) => {
  if (password.split('').reverse().join('') === 'password1234') {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme5(password)
