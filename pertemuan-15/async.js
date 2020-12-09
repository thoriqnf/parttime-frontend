console.log("tes");

// promise
// let janjian = new Promise((resolve, reject) => {});
// janjian
//   .then((result) => {
//     console.log("kita ngopi bareng");
//   })
//   .catch((error) => {
//     console.log("tidur dirumah aja");
//   });
// console.log(janjian);

// promise

let dataUser = {
  name: "Thoriq",
  address: {
    address1: "jakarta",
    address2: "jawa",
  },
};

// let user = [1, "thoriq", { addres: "jakarta" }];

// console.log("data user", dataUser);
// console.log("nama", dataUser.name);
// console.log("address", dataUser.address);
// console.log("address", dataUser.address.address1);

// fetch data
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (user) {
//     console.log(user);
//   });

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    console.log(users);
  });

// .catch(function())

// async await

async function hello() {
  let result = await "hello";
  return result;
}

const hello1 = async () => {
  let result = await "helllo lagi";
  return result;
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    console.log(users);
  });

async function getUsers() {
  //function kepanggil, dia mengambil data dari alamat
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  // response dari server diisi kedalam variable response
  response = await response.json();
  //kalau dapat datanya bisa ditampilkan
  console.log(response);
}

getUsers();

async function getGithubThoriq() {
  //function kepanggil, dia mengambil data dari alamat
  let response = await fetch("https://api.github.com/users/celinerosalina");
  // response dari server diisi kedalam variable response
  response = await response.json();
  //kalau dapat datanya bisa ditampilkan
  console.log(response);
}

getGithubThoriq();
