let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let newString = str.trim().toUpperCase().split(' ')

for (let element of newString) {
  console.log(`mot : ${element}`);
}

