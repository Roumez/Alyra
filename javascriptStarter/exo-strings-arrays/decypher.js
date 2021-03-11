let caesar = `YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU`
let alpha = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`

for (let dec = 0; dec < 26; dec++) {
  let str = ' '
  for (let i = 0; i < caesar.length; i++) {
    if (caesar[i] !== ' ') {
      str += alpha[(alpha.indexOf(caesar[i]) + dec) % 26]
    } else {
      str += ' '
    }
  }
  console.log(str)
}