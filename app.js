const cards = document.querySelectorAll(".game-card");

// Initial
let firstCard, secondCard;
let isFlipper = false;
let lockSelect = false;

// Random position
function randomPosition() {
  cards.forEach(function (card) {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
}

// Reset
function reset() {
  [isFlipper, lockSelect] = [false, false];
  [firstCard, secondCard] = [undefined, undefined];
}

// Check Match
function checkMatch() {
  if (firstCard.dataset.name === secondCard.dataset.name) {
    setTimeout(function () {
      firstCard.classList.add("remove");
      secondCard.classList.add("remove");
      reset();
    }, 500);
  } else {
    setTimeout(function () {
      firstCard.classList.remove("flipper");
      secondCard.classList.remove("flipper");
      reset();
    }, 500);
  }
}

// Flip Card
function flip() {
  if (lockSelect) return;
  if (this === firstCard) return;
  this.classList.add("flipper");
  if (!isFlipper) {
    firstCard = this;
    isFlipper = true;
  } else {
    secondCard = this;
    lockSelect = true;
    checkMatch();
  }
}
randomPosition();
cards.forEach(function (card) {
  card.addEventListener("click", flip);
});
