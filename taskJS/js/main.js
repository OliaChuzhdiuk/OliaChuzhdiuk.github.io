"use strict";

const classes = ["first", "second", "third", "fourth"];

// Task 1

const firstParagraph = document.querySelector("#p1");
firstParagraph.style.backgroundColor = "gold";

//Task 2

const secondParagraph = document.querySelector("#p2");
secondParagraph.style.backgroundColor = "gold";
secondParagraph.style.color = "blue";
secondParagraph.style.fontSize = "2rem";

// Task 3

const thirdParagraph = document.querySelector("#p3");
thirdParagraph.classList.add(classes[2]);

// Task 4

const fourthParagraph = document.querySelector("#p4");
fourthParagraph.classList.add(classes[3]);
fourthParagraph.classList.add("border");

// Task 5

const firstButton = document.querySelector("button");
firstButton.style.backgroundColor = "gold";
firstButton.style.color = "blue";

// Task 6

const secondButton = document.querySelectorAll("button")[1];
const paragraph = document.querySelector("#p1");

secondButton.addEventListener("click", () => {
  paragraph.style.display = "none";
});

// Task 7

const thirdButton = document.querySelectorAll("button")[2];

thirdButton.addEventListener("click", () => {
  paragraph.style.display = "block";
});

// Task 8

const fourthButton = document.querySelectorAll("button")[3];

fourthButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
