const h1 = document.getElementById("header");
h1.style.color = "green";

const input = document.getElementById("input");
input.style.color = "red";
const addItem = document.querySelector(".add-item h2");
addItem.style.background = "yellowgreen";
addItem.style.fontSize = "2rem";

const list = document.getElementsByTagName("li");
list[3].style.color = "tomato";
list[2].innerText = "Bursa";

list[4].innerHTML = `<h2>Istanbul</h2>`;

const myList = document.getElementsByClassName("list");
console.log(myList[0].innerText);
console.log(myList[2].innerHTML);

// const myListArray = Array.from(myList);
// console.log(myList);
// console.log(myListArray);

// myListArray.forEach((item) => {
//   item.style.fontSize = "1rem";
// });

//? 2.yöntem

[...myList].forEach((item) => {
  item.style.background = "aqua";
});

[...myList].forEach((e) => {
  e.style.background = "white";
});
