// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = ''
let l = "ABCDEFGHIZ"

const crackme11 = password => {
  if (password[1].charCodeAt() === 82 || password[3].charCodeAt !== 78) {
    str = ''
    for (let i = 0; i < l[i]; i++) {
      str += l[i].split('').reverse()
      str.includes('js').slice(-10)
    } console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme11(password)