let characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let characters_copy = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let btn = document.querySelector("#password-generator");
let passwordOneDisplay = document.getElementById("password-1");
let passwordTwoDisplay = document.getElementById("password-2");

let firstPassword = "";
let secondPassword = "";



function generatePassword() {
  let lengthSelector = document.getElementById("selector-length");
  if (lengthSelector.value < 5) {
    lengthSelector.classList.add("animate__shakeX");
    setTimeout(() => {
      lengthSelector.classList.remove("animate__shakeX");
    }, 1000);
  }
  for (let i = 0; i < lengthSelector.value; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    let randomIndex2 = Math.floor(Math.random() * characters.length);
    firstPassword += characters[randomIndex];
    secondPassword += characters[randomIndex2];
  }
  passwordOneDisplay.textContent = firstPassword;
  passwordTwoDisplay.textContent = secondPassword;
}
function cleanSpace() {
  firstPassword = "";
  secondPassword = "";
  passwordOneDisplay.textContent = "";
  passwordTwoDisplay.textContent = "";
}
btn.addEventListener("click", () => {
  if (firstPassword === "" && firstPassword === "") {
    generatePassword();
  } else {
    cleanSpace();
  }
});

///Delete all characters except for the numbers

let on_off = document.getElementById("on-off");
let regex = /[A-Z]/gi;
let everything_or_letters = true;
let icon = document.getElementById("icono");

on_off.addEventListener("click", () => {
  everything_or_letters = !everything_or_letters;
  let newString = "";

  if (everything_or_letters === false) {
    icon.classList.remove("bi-lock-fill");
    icon.classList.add("bi-unlock-fill");
    alert("You have disabled the numbers and symbols on your future generated passwords");

    characters.map((word) => {
      newString += word;
    });
    characters = newString.match(regex);
  } else {
    
    characters = [...characters_copy]
    icon.classList.remove("bi-unlock-fill");
    icon.classList.add("bi-lock-fill");
    alert("Symbols and numbers are enabled again");
    
  }
});
