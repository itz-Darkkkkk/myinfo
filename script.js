// Navigation to other pages
function navigateTo(page) {
  window.location.href = page;
}

// Toggle "Click to Know More"
function toggleContent(id) {
  const element = document.getElementById(id);
  element.style.display = element.style.display === 'block' ? 'none' : 'block';
}

// Show Modal
function showModal(projectName) {
  alert(`Details about ${projectName} coming soon!`);
}
