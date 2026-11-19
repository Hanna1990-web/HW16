const price = Number(prompt("Enter the product price"));
const quantity = Number(prompt("Enter the quantity of products"));
const total = price * quantity;
console.log(total); 

let value = total;
value -= value * 0.15;
console.log(value);

console.log(typeof price);
console.log(typeof quantity);
console.log(typeof total);
console.log(typeof value);

console.log(Number.isNaN(value));

const city = prompt("Enter the city name");
const country = prompt("Enter the country name");

const cleanCity = city.trim();
const cleanCountry = country.trim();
console.log(cleanCity.toUpperCase());
console.log(cleanCountry.toLowerCase());

console.log(cleanCity.length);
console.log(cleanCountry.length);

console.log(cleanCity.toLowerCase().includes("a"));
console.log(cleanCity.toLowerCase().indexOf("a"));
console.log(cleanCity.toLowerCase().lastIndexOf("a"));

console.log(`I live in ${cleanCity}, ${cleanCountry}.`);

const a = 200;
const b = 9;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

const result = a / b;
console.log(Math.round(result));
console.log(Math.floor(result));
console.log(Math.ceil(result));

console.log(Math.max(a, b));
console.log(Math.min(a, b));