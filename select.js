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
