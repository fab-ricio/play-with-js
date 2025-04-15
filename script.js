function hello() {
  let choix = document.querySelector("h1");
  if (choix.innerHTML === "Hello !") {
    choix.innerHTML = "Goodbye !";
  } else {
    choix.innerHTML = "Hello !";
  }
}
