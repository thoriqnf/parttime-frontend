// global scope
// dideklarasikan diluar block sehingga bisa diakses dari mana saja
let umur = 20;
{
  console.log("umur 1", umur);
}
console.log("umur 2", umur);

///////////
// local scope
// dideklarasikan didalam sebuah block sehingga hanya bisa diakses secara lokal saja
{
  let myName = "thoriq";
  console.log("myName", myName);
}
// console diluar blocks pasti akan error
console.log("myName2", myName);
