const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Otter.jpg") {
    myImage.setAttribute("src", "images/Otter 2.jpg");
  } else {
    myImage.setAttribute("src", "images/Otter.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "I LOVE OTTERS, ${myName}";
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textCotent = "I LOVE OTTERS, ${storedName}";
}
myButton.addEventListener("click", () => {
  setUserName();
});
