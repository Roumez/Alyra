
const pyramid = (nbBase, reverse, string) => {
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      console.log(string.repeat(i))
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      console.log(string.repeat(i))
    }
  }
}
pyramid(5, false, `7`)