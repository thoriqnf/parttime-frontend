// cara membuat variable bisa menggunakan var, const dan let

// tipe data number
const number1 = 100;
const number2 = 2000;
const number3 = 3;
const number4 = 40;
console.log("ini variable number1 ", number1);
console.log("ini variable number2 ", number2);
console.log("ini variable number3 ", number3);
console.log("ini variable number4 ", number4);

// tipe data string
const string1 = "thoriq";
const string2 = "1";

const namaDepan = "Thoriq@!324324234";
const namaBelakang = "Faizal's";

const namaLengkap = namaDepan + " " + namaBelakang;

console.log("ini string1", string1);
console.log("ini string2", string2);
console.log("ini nama lengkap", namaLengkap);

const angka2 = "2";
const angka1 = 1;
const gabungan = angka1 + angka2;
console.log("gabungan", gabungan);

// tipe data boolean
const boolean1 = true;
const boolean2 = false;
console.log("boolean1", boolean1);
console.log("boolean2", boolean2);

// tipe data null
const null1 = null;
const null2 = "";
console.log("null2", null1);
console.log("null1", null2);

// console.log("tulisan undefined", nama);

// tipe data objek
const object1 = {
  firstName: "thoriq",
  lastName: "faizal",
  age: 20,
  addres: "jakarta",
  hobby: {
    hobby1: "tidur",
    hobby2: "nonton",
  },
};

console.log(object1);
console.log(object1.age);
console.log(object1.age.addres);
console.log(object1.hobby.hobby2);

// variable

// contoh variable jelek >> tidak mendeskripsikan variable dengan value
const hewan = "anggrek";
const tumbuhan = "kucing";

// contoh varibale benar >> paling mendeskripsikan variable dengan value
let name = "Thoriq";
const fullName = "Thoriq Nur Faizal";
console.log(name);

// merubah value yang sudah ada
name = "Fahmi";

// var vs const vs let
var animal1 = "cat";
console.log("animal 1:", animal1);
animal1 = "catfish";
console.log("animal 1 updated:", animal1);

let animal2 = "dog";
console.log("animal 2:", animal2);
animal2 = "lion";
console.log("animal 2 updated:", animal2);

const animal3 = "bird";
console.log("animal 3: ", animal3);
// kita tidak bisa merubah pembuatan variable yang menggunakan const
// animal3 = "owl";
// console.log("animal 3 updated:", animal3);

// Aturan penamaan variable
// camelcase, semua kecil kecuali setelah ada spasi menjadi besar
// contoh: myName, myCat etc

// operator
let number = 10;
// number = number + 10;
// cara singkat
number += 10;
console.log(number);

// increment / decrement
number++;
console.log(number);
number--;
console.log(number);

// comparrison
let myName = "Thoriq";
console.log(myName !== "Thori");

// logical operator
let trafficJam = "green";

if (trafficJam === "green") {
  console.log("Gooooo");
} else {
  console.log("stop");
}

// let score = 85;

// if (score >= 85) {
//   console.log("Nilai anda A");
// } else if (score >= 75) {
//   console.log("Nilai anda B");
// } else if (score >= 65) {
//   console.log("Nilai anda C");
// } else {
//   console.log("Anda tidak lulus");
// }

// truthy / falsy
let namaSaya = "thoriq";
let newStudent = namaSaya || "malu kasih tau nama";

// switch case
let score = 74;
switch (true) {
  case score >= 85:
    console.log("Nilai anda A");
    break;
  case score >= 75:
    console.log("Nilai anda B");
    break;
  case score >= 65:
    console.log("Nilai anda C");
    break;
  default:
    console.log("Anda tidak lulus");
}

// ternary operator
let lulus = true;

lulus
  ? console.log("selamat anda lulus")
  : console.log("maaf anda belum lulus");

score >= 85
  ? console.log("nilai anda A ")
  : score >= 75
  ? console.log("nilai anda B")
  : console.log("anda tidak lulus");

//looping for loop
// standart for loop
let myNumber = 1;
// parameter di for
// 1. initialisasi / awalnya
// 2. kondisi yang diinginkan
// 3. apa yang ingin dilakukan jika tidak memenuhi kondisi
for (myNumber; myNumber <= 10; myNumber++) {
  console.log(myNumber);
}

// looping untuk mencari angka gnajil dan genap
let myNumber2 = 1;
for (myNumber2; myNumber2 <= 10; myNumber2++) {
  if (myNumber2 % 2 === 0) {
    console.log(myNumber2 + " angka genap");
  } else {
    console.log(myNumber2 + " angka ganjil");
  }
}

// nested loop
for (a = 1; a <= 3; a++) {
  for (b = 1; b <= 3; b++) {
    console.log("ini a", a);
    console.log("ini b", b);
  }
}
