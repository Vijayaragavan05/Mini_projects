// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.querySelector('i').classList.toggle('ri-menu-line');
  menuBtn.querySelector('i').classList.toggle('ri-close-line');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuBtn.querySelector('i').classList.add('ri-menu-line');
    menuBtn.querySelector('i').classList.remove('ri-close-line');
  });
});

// Booking Modal
const bookNowBtn = document.getElementById('book-now-btn');
const bookingModal = document.getElementById('booking-modal');
const closeModal = document.getElementById('close-modal');
const bookingForm = document.getElementById('booking-form');

bookNowBtn.addEventListener('click', () => {
  bookingModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
  bookingModal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
  if (e.target === bookingModal) {
    bookingModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const tentType = document.getElementById('tent-type').value;
  const dates = document.getElementById('dates').value;
  
  // Simple validation
  if (!name || !email || !tentType || !dates) {
    alert('Please fill in all fields');
    return;
  }
  
  // In a real application, you would send this data to a server
  console.log('Booking details:', { name, email, tentType, dates });
  
  // Show success message
  alert(`Thank you ${name}! Your booking for the ${tentType} from ${dates} has been received. We will send a confirmation to ${email} shortly.`);
  
  // Reset form and close modal
  bookingModal.style.display = 'none';
  document.body.style.overflow = 'auto';
  bookingForm.reset();
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  if (body.classList.contains('light-mode')) {
    // Light mode colors
    body.style.setProperty('--bg-color', '#f0f8ff');
    body.style.setProperty('--snd-bg-color', '#e0f0ff');
    body.style.setProperty('--text-color', '#1a2c3e');
    body.style.setProperty('--gradient-start', '#f0f8ff');
    body.style.setProperty('--gradient-end', '#d4eaff');
    themeIcon.classList.remove('ri-moon-line');
    themeIcon.classList.add('ri-sun-line');
    
    // Store preference in localStorage
    localStorage.setItem('theme', 'light');
  } else {
    // Dark mode colors (default)
    body.style.setProperty('--bg-color', '#0c1b2a');
    body.style.setProperty('--snd-bg-color', '#1a2c3e');
    body.style.setProperty('--text-color', '#f0f8ff');
    body.style.setProperty('--gradient-start', '#0c1b2a');
    body.style.setProperty('--gradient-end', '#14344e');
    themeIcon.classList.remove('ri-sun-line');
    themeIcon.classList.add('ri-moon-line');
    
    // Store preference in localStorage
    localStorage.setItem('theme', 'dark');
  }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  body.style.setProperty('--bg-color', '#f0f8ff');
  body.style.setProperty('--snd-bg-color', '#e0f0ff');
  body.style.setProperty('--text-color', '#1a2c3e');
  body.style.setProperty('--gradient-start', '#f0f8ff');
  body.style.setProperty('--gradient-end', '#d4eaff');
  themeIcon.classList.remove('ri-moon-line');
  themeIcon.classList.add('ri-sun-line');
}

// Particle Background
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 30;
  
  // Clear existing particles
  particlesContainer.innerHTML = '';
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size, position and animation
    const size = Math.random() * 20 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random animation
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    
    // Random color based on theme
    if (body.classList.contains('light-mode')) {
      particle.style.background = 'rgba(33, 150, 243, 0.1)';
    } else {
      particle.style.background = 'rgba(76, 175, 80, 0.1)';
    }
    
    particlesContainer.appendChild(particle);
  }
}

// Initialize particles
createParticles();

// Update particles when theme changes
themeToggle.addEventListener('click', () => {
  setTimeout(createParticles, 100);
});

// Scroll Reveal Anim