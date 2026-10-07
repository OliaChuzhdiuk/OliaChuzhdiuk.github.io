"use strict";

// Task 1

const primaryButton = document.querySelector(".btn-primary");
const alertElement = document.getElementById("alert");

primaryButton.onclick = function () {
  alertElement.classList.add("alert-primary");
  alertElement.textContent = "A simple primary alert—check it out!";
};

// Task 2

const secondaryButton = document.querySelector(".btn-secondary");

secondaryButton.addEventListener("click", () => {
  alertElement.classList.add("alert-primary");
  alertElement.textContent = "A simple secondary alert—check it out!";
});

// Task 3

const successButton = document.querySelector(".btn-success");

successButton.addEventListener("mouseover", () => {
  alertElement.classList.add("alert-success");
  alertElement.textContent = "A simple success alert—check it out!";
});

successButton.addEventListener("mouseout", () => {
  alertElement.classList.remove("alert-success");
  alertElement.textContent = "";
});

// Task 4

const dangerButton = document.querySelector(".btn-danger");

dangerButton.addEventListener("focus", () => {
  alertElement.classList.add("alert-danger");
  alertElement.textContent = "A simple danger alert—check it out!";
});

dangerButton.addEventListener("focusout", () => {
  alertElement.classList.remove("alert-danger");
  alertElement.textContent = "";
});

// Task 5

const darkButton = document.querySelector(".btn-dark");
const lightButton = document.querySelector(".btn-light");

function toggleMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkButton.style.display = "none";
    lightButton.style.display = "block";
  } else {
    darkButton.style.display = "block";
    lightButton.style.display = "none";
  }
}
darkButton.addEventListener("click", toggleMode);
lightButton.addEventListener("click", toggleMode);

// Task 6

const infoButton = document.querySelector(".btn-info");

infoButton.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    alertElement.classList.add("alert-info");
    alertElement.textContent = "A simple info alert—check it out!";
  }
});

// Task 7

const cardAll = document.querySelectorAll(".card");

for (let i = 0; i < cardAll.length; i++) {
  const card = cardAll[i].querySelector(".card-title");
  console.log(card.textContent);
}

// Task 8

for (let i = 0; i < cardAll.length; i++) {
  const cardButton = cardAll[i].querySelector(".add-to-cart");
  cardButton.addEventListener("click", () => {
    const cardTitle = cardAll[i].querySelector(".card-title");
    console.log(cardTitle.textContent);
  });
}
