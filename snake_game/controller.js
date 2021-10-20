document.addEventListener("keydown", handleKeydown);

restartBtn.addEventListener("click", handleClick);

function handleKeydown(event) {
  // обрабатывает нажатие клавиатуры;
  if (event.code === "Enter") {
    finishGame();
    startNewGame();
  } else if (event.code === "ArrowUp" && direction !== "down") {
    setDirection("up");
  } else if (event.code === "ArrowDown" && direction !== "up") {
    setDirection("down");
  } else if (event.code === "ArrowLeft" && direction !== "right") {
    setDirection("left");
  } else if (event.code === "ArrowRight" && direction !== "left") {
    setDirection("right");
  }
}

function handleClick(event) {
  //обрабатывает нажатие кнопки;
  if (event.target.classList.contains("restartBtn")) {
    startNewGame();
  }
}
