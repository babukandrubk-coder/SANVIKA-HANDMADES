const DEMO_USER = 'admin';
const DEMO_PASS = 'sanvika123';

function isAdminPage(name) {
  return window.location.pathname.endsWith(name);
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  const errorEl = document.getElementById('loginError');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.username.value.trim();
    const password = loginForm.password.value;
    if (username === DEMO_USER && password === DEMO_PASS) {
      sessionStorage.setItem('sanvikaAdminAuth', '1');
      window.location.href = 'dashboard.html';
    } else {
      errorEl.textContent = 'Invalid username or password.';
    }
  });
}

if (isAdminPage('dashboard.html')) {
  if (!sessionStorage.getItem('sanvikaAdminAuth')) {
    window.location.href = 'login.html';
  }
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('sanvikaAdminAuth');
      window.location.href = 'login.html';
    });
  }
}
