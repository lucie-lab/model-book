document.addEventListener('DOMContentLoaded', function() {
  const switchBtn = document.getElementById('lang-switch');
  if (!switchBtn) return;

  // Vérifie si on est sur une page française (_fr.html)
  const isFrench = window.location.pathname.includes('_fr.html');
  switchBtn.textContent = isFrench ? 'EN' : 'FR';

  switchBtn.addEventListener('click', function() {
    const current = window.location.pathname;
    if (isFrench) {
      // Revient à la version anglaise
      window.location.href = current.replace('_fr.html', '.html');
    } else {
      // Va à la version française
      window.location.href = current.replace('.html', '_fr.html');
    }
  });
});
