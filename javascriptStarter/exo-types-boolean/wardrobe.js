let isRainy = false
let isSnowy = true
let temperature = 2
let clothes = 't-shirt, '

if (isRainy) {
  clothes += 'umbrella, ' // concatenation de string
}
if (isSnowy) {
  clothes += 'bonnet, écharpe, '
}

if (temperature < 15) {
  clothes += 'coat, sweater, pant, bottes, socks'
} else if (temperature >= 15 && temperature <= 25) {
  clothes += 'sweater, pants, shoes, socks'
} else {
  clothes += 'short, tong'
}
console.log(`You need to wear: ${clothes}`)