const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let noScale = 1;
let yesScale = 1;
let moveCount = 0;

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton(event) {
  if (event) {
    event.preventDefault();
  }

  moveCount++;

  // Make NO smaller each time
  noScale -= 0.12;

  // Make YES bigger each time
  yesScale += 0.15;

  if (noScale <= 0.15) {
    noBtn.style.display = "none";
    yesBtn.style.transform = "scale(2)";
    message.textContent = "Only one choice left now 😌💖";
    return;
  }

  noBtn.style.transform = `scale(${noScale})`;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Keep NO button inside the visible screen
  const buttonWidth = noBtn.offsetWidth * noScale;
  const buttonHeight = noBtn.offsetHeight * noScale;

  const maxX = window.innerWidth - buttonWidth - 30;
  const maxY = window.innerHeight - buttonHeight - 30;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

yesBtn.addEventListener("click", function () {
  message.textContent = "Yayyy! I knew you would say yes 💖";
  noBtn.style.display = "none";
  yesBtn.style.transform = "scale(1.5)";
});
