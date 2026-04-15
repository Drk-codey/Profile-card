function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Initial render
updateTime();

// Update every 100ms for high accuracy relative to tests
setInterval(updateTime, 100);
