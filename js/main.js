/**
 * ============================================================================
 * DAVID ABRAHAM - PORTFOLIO INTERACTION ENGINE (main.js)
 * ============================================================================
 */

import { PORTFOLIO_CONFIG } from './projects-data.js';

document.addEventListener('DOMContentLoaded', () => {
  initDynamicProjects();
  initNavigation();
  initScrollSpy();
  initScrollReveals();
  initClipboardButtons();
  initContactForm();
  initScrollToTop();
  updateFooterYear();
});

/**
 * Render dynamic project cards from PORTFOLIO_CONFIG.projects
 * and initialize category filter pills.
 */
function initDynamicProjects() {
  const grid = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (!grid) return;

  function renderCards(filterCategory = 'all') {
    grid.innerHTML = '';
    
    const filteredProjects = filterCategory === 'all'
      ? PORTFOLIO_CONFIG.projects
      : PORTFOLIO_CONFIG.projects.filter(p => p.category === filterCategory);

    if (filteredProjects.length === 0) {
      grid.innerHTML = `
        <div class="glass-card" style="grid-column: 1 / -1; padding: 2.5rem; text-align: center;">
          <p style="color: var(--text-muted); font-size: 1.05rem;">No projects listed under this category yet. You can easily add one in <code>js/projects-data.js</code>!</p>
        </div>
      `;
      return;
    }

    filteredProjects.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = `glass-card project-card reveal active stagger-${(idx % 4) + 1} ${proj.isTemplate ? 'is-template' : ''}`;
      card.setAttribute('data-category', proj.category);

      const featuresHtml = proj.features && proj.features.length > 0
        ? `<div class="project-features-list">
            ${proj.features.map(f => `
              <div class="project-feature-bullet">
                <span>▹</span>
                <div>${escapeHtml(f)}</div>
              </div>
            `).join('')}
           </div>`
        : '';

      const techTagsHtml = proj.technologies && proj.technologies.length > 0
        ? `<div class="project-tech-tags">
            ${proj.technologies.map(t => `<span class="tech-tag-sm">${escapeHtml(t)}</span>`).join('')}
           </div>`
        : '';

      const liveDemoHtml = proj.liveDemoUrl
        ? `<a href="${escapeHtml(proj.liveDemoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="View Live Demo">
             <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
             <span>Live Demo</span>
           </a>`
        : '';

      card.innerHTML = `
        <div>
          <div class="project-card-header">
            <span class="project-category-tag">${escapeHtml(proj.categoryLabel || proj.category.toUpperCase())}</span>
            <h3 class="project-title">${escapeHtml(proj.title)}</h3>
          </div>
          <p class="project-desc">${escapeHtml(proj.description)}</p>
          ${featuresHtml}
          ${proj.skillsDemonstrated ? `
            <div class="project-skills-demo">
              <div class="skills-demo-label">Skills Demonstrated</div>
              <div class="skills-demo-text">${escapeHtml(proj.skillsDemonstrated)}</div>
            </div>
          ` : ''}
          ${techTagsHtml}
        </div>
        <div class="project-card-footer">
          <a href="${escapeHtml(proj.githubUrl || PORTFOLIO_CONFIG.personalInfo.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" title="View on GitHub">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
          ${liveDemoHtml}
        </div>
      `;

      grid.appendChild(card);
    });
  }

  // Initial render of all projects
  renderCards('all');

  // Filter pills click handling
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderCards(cat);
    });
  });
}

/**
 * Navigation Bar Scroll & Mobile Menu interactions
 */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-resume-btn');

  // Sticky Navbar style change on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Toggle mobile menu drawer
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      // Toggle icon SVG
      if (isOpen) {
        toggleBtn.innerHTML = `
          <svg class="nav-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        `;
      } else {
        toggleBtn.innerHTML = `
          <svg class="nav-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      }
    });

    // Close mobile menu when clicking any link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = `
          <svg class="nav-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      });
    });
  }
}

/**
 * ScrollSpy to update active link in navbar
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/**
 * Scroll reveal elements as they enter viewport
 */
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    reveals.forEach(el => el.classList.add('active'));
  }
}

/**
 * One-click copy buttons for email and phone number
 */
function initClipboardButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied: ${textToCopy}`);
      } catch (err) {
        // Fallback
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(`Copied: ${textToCopy}`);
      }
    });
  });
}

/**
 * Toast notification banner
 */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/**
 * Contact Form Interactive Handling
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !subject || !message) {
      return;
    }

    // Success response presentation
    if (status) {
      status.className = 'form-status success';
      status.innerHTML = `
        <strong>Thank you, ${escapeHtml(name)}!</strong><br>
        Your message has been received. You can also send this directly via your email client using the button below.
      `;
    }

    showToast("Message prepared! Thank you for reaching out.");

    // Trigger mailto fallback for direct sending
    const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi David,\n\nMy name is ${name} (${email}).\n\n${message}`)}`;
    
    // Create subtle send button in status banner
    const directSendBtn = document.createElement('a');
    directSendBtn.href = mailtoUrl;
    directSendBtn.className = 'btn btn-outline btn-sm';
    directSendBtn.style.marginTop = '0.75rem';
    directSendBtn.style.display = 'inline-flex';
    directSendBtn.innerHTML = `
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      <span>Open in Email App</span>
    `;
    
    if (status && !status.querySelector('a')) {
      status.appendChild(document.createElement('br'));
      status.appendChild(directSendBtn);
    }

    form.reset();
  });
}

/**
 * Scroll to top button handling
 */
function initScrollToTop() {
  const scrollBtn = document.getElementById('scroll-top-btn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Dynamically update footer year
 */
function updateFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Utility to escape HTML and prevent XSS
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
