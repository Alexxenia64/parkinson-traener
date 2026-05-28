document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const valg = btn.textContent;

    if (valg === "God") {
      window.location.href = "traening-god.html";
    } else if (valg === "Middel") {
      window.location.href = "traening-middel.html";
    } else if (valg === "Dårlig") {
      window.location.href = "traening-daarlig.html";
    }
  });
});
