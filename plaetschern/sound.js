const audio = new Audio("assets/audio1.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.style.display = 'none';
    audio.play();
    alert("Hello! I am an alert box!!");
  });
});
