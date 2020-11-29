var mybutton = document.getElementById("to_top_button"); // Muutuja kuhu on salvestatud ülesse minemise nupp

window.onscroll = function() {scrollFunction()}; // Kui aken liigub, siis kutsub välja funktsiooni scrollFunktsion()

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { // Kui ekraan on vähemalt 20px alla liikunud
    mybutton.style.display = "block"; // siis näita nuppu
  } else {
    mybutton.style.display = "none"; // muidu kaota nupp ära
  }
}

function topFunction() { // Funktsioon, mida kutsutakse, kui kasutaja klikib ülesse minemise nuppue
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;  // Vii aken tagasi üles
} /* Allikas (modifitseeritud) https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */

pilt = 0
i = 0
imgTotal = 9

function changePicture() {
  current = document.getElementById("sl-" + String(i));
  next = document.getElementById("sl-" + String((i + 1) % imgTotal));
  current.style.display = "none";
  next.style.display = "inline-block";
  i = (i + 1) % imgTotal
}

console.log("kaka");
setInterval(() => {
  changePicture()
}, 2000)