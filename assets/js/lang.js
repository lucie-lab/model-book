// Simple language switcher (English/French example)
document.addEventListener('DOMContentLoaded', function() {
  const switchBtn = document.getElementById('lang-switch');
  if (!switchBtn) return;

  switchBtn.addEventListener('click', function() {
    window.location.href = window.location.pathname.replace('.html', '_fr.html');
  });
});
