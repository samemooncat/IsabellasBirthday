document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("touchstart", () => {
    card.classList.add("hover");
  });

  card.addEventListener("touchend", () => {
    card.classList.remove("hover");
  });
});
