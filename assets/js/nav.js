/* nav.js — loads shared nav and sets active state */

async function loadNav() {
  const placeholder = document.getElementById('nav-placeholder');
  if (!placeholder) return;

  const isRoot = window.location.pathname.endsWith('/')
              || window.location.pathname.endsWith('index.html')
              || !window.location.pathname.includes('/pages/');
  const prefix = isRoot ? '' : '../';

  try {
    const res = await fetch(prefix + 'components/nav.html');
    const html = await res.text();
    placeholder.innerHTML = html;

    // Fix all link paths based on current location
    placeholder.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (isRoot) {
        link.setAttribute('href', href.replace('../', ''));
      }
    });

    setActiveLink();
    initMobileToggle();
  } catch (e) {
    console.warn('Nav load failed:', e);
  }
}

function setActiveLink() {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;

  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    }
  });
}

function initMobileToggle() {
  const btn = document.getElementById('navToggle');
  const sidebar = document.getElementById('sidebar');
  if (!btn || !sidebar) return;

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !btn.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

document.addEventListener('DOMContentLoaded', loadNav);