const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let noScale = 1;
let yesScale = 1;

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton(event) {
  if (event) {
    event.preventDefault();
  }

  // Make NO smaller each time
  noScale -= 0.10;

  // Make YES bigger each time
  yesScale += 0.12;

  if (noScale <= 0.18) {
    noBtn.style.display = "none";
    yesBtn.style.transform = "scale(2)";
    message.textContent = "Only one choice left now 😌💖";
    return;
  }

  noBtn.style.transform = `scale(${noScale})`;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Central movement area only
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const buttonWidth = noBtn.offsetWidth * noScale;
  const buttonHeight = noBtn.offsetHeight * noScale;

  // These values keep the NO button near the center
  const minX = screenWidth * 0.25;
  const maxX = screenWidth * 0.75 - buttonWidth;

  const minY = screenHeight * 0.45;
  const maxY = screenHeight * 0.70 - buttonHeight;

  const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
  const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

yesBtn.addEventListener("click", function () {
  message.textContent = "Yayyy! I knew you would say yes 💖";
  noBtn.style.display = "none";
  yesBtn.style.transform = "scale(1.5)";
});
