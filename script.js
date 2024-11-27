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
// Toggle "Click to Know More" sections
function toggleContent(id) {
  const element = document.getElementById(id);
  element.classList.toggle('active');
}

// Function to show the custom alert
function showAlert(message) {
  const alertMessage = document.getElementById('alert-message');
  alertMessage.textContent = message; // Set the message dynamically
  const modal = document.getElementById('custom-alert');
  modal.style.display = 'flex'; // Show the modal
}

// Function to close the custom alert
function closeAlert() {
  const modal = document.getElementById('custom-alert');
  modal.style.display = 'none'; // Hide the modal
}

// Function to navigate to a new page
function navigateTo(page) {
  window.open(page, '_blank'); // Opens the page in a new tab
}
