const refreshButton = document.getElementById("refresh-btn");
const cpuValue = document.getElementById("cpu-value");
const cpuLarge = document.getElementById("cpu-large");
const cpuBar = document.getElementById("cpu-bar");

refreshButton.addEventListener("click", function () {
  // Generate sample CPU usage between 10% and 90%
  const cpu = Math.floor(Math.random() * 81) + 10;

  // Update the dashboard
  cpuValue.textContent = cpu + "%";
  cpuLarge.textContent = cpu + "%";
  cpuBar.style.width = cpu + "%";

  // Briefly change the button label
  refreshButton.textContent = "Updated ✓";

  setTimeout(function () {
    refreshButton.textContent = "Refresh Demo Data ↻";
  }, 1500);
});
