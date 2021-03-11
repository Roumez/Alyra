let age = [10, 15, 16, 5005, 52390903];
for (let i = 0; i < age.length; i++) {
  console.log(`${age[i]} est égal à ${age[i].toString(2)} en binaire`);
  console.log(`${age[i]} est égal à ${age[i].toString(8)} en octal`);
  console.log(`${age[i]} est égal à ${age[i].toString(16)} en hexadecimal`);
}
