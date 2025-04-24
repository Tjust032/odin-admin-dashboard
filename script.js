const input = document.getElementById("odinInput");
const typeSoundSrc = "sounds/type-key.mp3";

input.addEventListener("keydown", (e) => {
  if (e.key.length === 1 || e.key === "Backspace") {
    const sound = new Audio(typeSoundSrc);
    sound.volume = 0.5; // Optional: lower volume a bit
    sound.play().catch(() => {});
  }
});
