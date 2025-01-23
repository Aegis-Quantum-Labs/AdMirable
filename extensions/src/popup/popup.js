document.addEventListener("DOMContentLoaded", () => {
  const statusSpan = document.getElementById("status");
  const toggleButton = document.getElementById("toggle");

  // Placeholder logic for toggling the feature
  let enabled = true;

  toggleButton.addEventListener("click", () => {
    enabled = !enabled;
    statusSpan.textContent = enabled ? "Enabled" : "Disabled";
  });

  statusSpan.textContent = enabled ? "Enabled" : "Disabled";
});