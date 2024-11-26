// Collapsible About Section
document.getElementById('aboutToggle').addEventListener('click', () => {
  const aboutContent = document.getElementById('aboutContent');
  aboutContent.classList.toggle('hidden');
});

// Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Modal Pop-ups (optional future feature for projects)
const projectButtons = document.querySelectorAll('.project-btn');
projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert(`Details for: ${button.dataset.project}`);
  });
});
