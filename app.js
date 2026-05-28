// Tilføj klik-handling til alle knapper
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const valg = btn.textContent;
    alert("Du valgte: " + valg);

    // Gem dagens status i browserens localStorage
    localStorage.setItem("dagens_status", valg);

    // Vis status på siden
    let statusDiv = document.getElementById("status");
    if (!statusDiv) {
      statusDiv = document.createElement("div");
      statusDiv.id = "status";
      statusDiv.style.marginTop = "20px";
      document.body.appendChild(statusDiv);
    }
    statusDiv.textContent = "Seneste valg: " + valg;
  });
});

// Vis tidligere valg hvis det findes
window.onload = () => {
  const tidligere = localStorage.getItem("dagens_status");
  if (tidligere) {
    let statusDiv = document.getElementById("status");
    if (!statusDiv) {
      statusDiv = document.createElement("div");
      statusDiv.id = "status";
      statusDiv.style.marginTop = "20px";
      document.body.appendChild(statusDiv);
    }
    statusDiv.textContent = "Seneste valg: " + tidligere;
  }
};
