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

const myLi = document.querySelector("li");
console.log(myLi.innerText);

const itemList = document.querySelector(".item-list");

itemList.style.color = "green";

const input1 = document.querySelector("#input");
console.log(input1);
input1.style.background = "yellow";
console.log(input1.value);

const h2 = document.querySelector(".item-list h3");
h2.style.color = "blue";

const lists = document.querySelectorAll("ol li");
console.log(lists);
lists.forEach((li) => console.log(li));

///* Traversing

const listT = document.querySelector(".list");
const ol = listT.parentNode;
console.log(ol);
const ols =
  document.querySelector(".list").parentElement.parentElement.parentElement;

ols.style.border = "2px solid red";
console.log(myList[0].innerText);
const ankara = myList[0];

const mySibling = ankara.nextElementSibling;
console.log(mySibling);

const adana = myList[2];
const izmir = adana.previousElementSibling;
console.log(izmir.innerText);

//? yeni bir  element oluşturma
const newP = document.createElement("p");
newP.id = "par1";
newP.setAttribute("class", "new-class");
const text = document.createTextNode("This is a new element");
newP.appendChild(text);
console.log(newP);
