let panjang = 10;
let lebar = 5;
let luas = panjang * lebar;
console.log("luas", luas);

// my first function
function halo() {
  return console.log("asd");
}

function halo() {
  console.log("tes");
}

// return didalam function adalah untuk memberikan nilai terakhir pada sebuah function
halo();

// parameter & arguments
function tambah(a = 0, b = 0) {
  return console.log(a + b);
}
tambah(10, 20);

// buat ulang untuk function hitungLuas

// function sayhello
function sayHello(name = "stranger") {
  return "hello " + name;
}

console.log(sayHello());

// function untuk convert suhu dari celcius to fahrenheit

// function CtoH(number) {
//   const final = number * (9 / 5) + 32;
//   // console.log("final", final);
//   return console.log(final);
// }

const CtoH = (number) => {
  const final = number * (9 / 5) + 32;
  // console.log("final", final);
  return console.log(final);
};

CtoH(30);

// cara membuat dengan function helper
const hitung = (number) => {
  const angka = number * (9 / 5);
  console.log(angka);
  return angka;
};

function hitungFinal(number2) {
  const final = hitung(number2) + 32;
  console.log(final);
  return final;
}

console.log(hitungFinal(90));

// contoh arrow function

// function hello() {}

// const hello = () => {};
