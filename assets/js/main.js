/* ===== YOUTUBE CLICK-TO-LOAD ===== */
function loadYTVideo(container) {
  container.onclick = null;
  container.style.cursor = 'default';
  container.innerHTML = '';

  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/DPMbmAIxEDg?autoplay=1&rel=0&modestbranding=1';
  iframe.title = 'Automate With Ease – UiPath Tutorial';
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('allowfullscreen', '');
  container.appendChild(iframe);
}

const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

/* ===== HEADER SCROLL EFFECT ===== */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/* ===== MOBILE MENU ===== */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  const icon = navToggle.querySelector('i');
  icon.className = navMenu.classList.contains('show') ? 'bx bx-x' : 'bx bx-menu';
});

/* ===== ACTIVE NAV ON SCROLL ===== */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id], footer[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

navLinks.forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('show');
  navToggle.querySelector('i').className = 'bx bx-menu';
}));

/* ===== COPY EMAIL ===== */
const copy = document.getElementById('copy');
if (copy) {
  copy.addEventListener('click', () => {
    navigator.clipboard.writeText('biswajeetkumar55@gmail.com');
    copy.innerHTML = '✓ copied';
    copy.style.color = '#00d4ff';
    setTimeout(() => {
      copy.innerHTML = '';
      copy.className = 'bx bx-copy';
      copy.style.color = '';
    }, 1500);
  });
}

/* ===== TYPEWRITER ===== */
const roles = ['RPA Developer', 'Automation Architect', 'UiPath Expert', 'Full Stack Developer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const jobTitleEl = document.getElementById('jobTitle');

function typewriter() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    jobTitleEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    jobTitleEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 300;
  }

  setTimeout(typewriter, speed);
}

window.addEventListener('load', typewriter);

/* ===== SCROLL REVEAL (vanilla) ===== */
const srElements = document.querySelectorAll('.project-img, .uipath-card, .education-data, .highlight-item, .skills-data, .yt-feature-item, .stat-item');

srElements.forEach(el => el.setAttribute('data-sr', ''));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-sr]').forEach(el => observer.observe(el));

/* ===== STAGGER delays for grids ===== */
document.querySelectorAll('.uipath-grid .uipath-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 0.05) + 's';
});

document.querySelectorAll('.project-container .project-img').forEach((card, i) => {
  card.style.transitionDelay = (i * 0.1) + 's';
});

document.querySelectorAll('.skills-container .skills-data').forEach((card, i) => {
  card.style.transitionDelay = (i * 0.07) + 's';
});

/* ===== DARK/LIGHT THEME TOGGLE ===== */
const themeIcon = document.getElementById('themeIcon');

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateThemeIcon(isLight);
}

function updateThemeIcon(isLight) {
  if (!themeIcon) return;
  // sumoon.png = sun icon shown in dark mode, moon.png = moon icon shown in light mode
  themeIcon.src = isLight ? './assets/img/moon.png' : './assets/img/sumoon.png';
  themeIcon.title = isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode';
}

// Restore saved theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
  updateThemeIcon(true);
} else {
  updateThemeIcon(false);
}

/* ===== UIPATH CARD HOVER GLOW ===== */
document.querySelectorAll('.uipath-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', x + '%');
    card.style.setProperty('--mouse-y', y + '%');
  });
});
