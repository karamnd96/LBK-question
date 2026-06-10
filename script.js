const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let noScale = 1;
let yesScale = 1;

noBtn.addEventListener("pointerdown", moveNoButton);
noBtn.addEventListener("mouseenter", moveNoButton);

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

  noBtn.style.transform = `translate(-50%, -50%) scale(${noScale})`;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Use the visible screen size, especially for phones
  const viewportWidth = window.visualViewport ? window.visualViewport.width : window.innerWidth;
  const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;

  // Small safe center area only
  const centerX = viewportWidth * 0.50;
  const centerY = viewportHeight * 0.62;

  const rangeX = Math.min(90, viewportWidth * 0.18);
  const rangeY = Math.min(55, viewportHeight * 0.08);

  const randomX = centerX + (Math.random() * rangeX * 2 - rangeX);
  const randomY = centerY + (Math.random() * rangeY * 2 - rangeY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

yesBtn.addEventListener("click", function () {
  message.textContent = "Yayyy! I knew you would say yes 💖";
  noBtn.style.display = "none";
  yesBtn.style.transform = "scale(1.5)";
});
