//https://fr.wikihow.com/convertir-des-miles-en-kilom%C3%A8tres

const RATIO = 1.6
const convertMiToKm = (miles) => {
  return miles * RATIO
}
console.log(convertMiToKm(50))