let isRainy = false;
let isWindy = false;

if (isRainy && isWindy) {
  console.log('Take your coat and your umbrella')
} else if (isRainy && !isWindy) {
  console.log('Take your umbrella')
} else if (!isRainy && isWindy) {
  console.log('Take your coat')
} else {
  console.log('sunny day')
}