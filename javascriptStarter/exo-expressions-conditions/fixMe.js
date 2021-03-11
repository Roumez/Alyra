let list = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eve']
for (let j = 0; j < list.length; ++j) {
  list[j] = list[j].toLowerCase()
  switch (list[j]) {
    case 'alice':
      console.log('Alice want to exchange with Bob')
      break;
    case 'bob':
      console.log('Bob want to exchange with Alice')
      break;
    case 'charlie':
      console.log('Charlie is a generic third participant')
      break;
    case 'craig':
      console.log('Craig is a password cracker')
      break
    case 'eve':
      console.log('Eve is an eavesdropper')
      break;
  }
}