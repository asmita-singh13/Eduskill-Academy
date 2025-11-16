// Simple shared JS for small UI behaviors

document.addEventListener('DOMContentLoaded', function () {
  // set current year in footers if needed (keeps existing text)
  try {
    const footers = document.querySelectorAll('footer');
    const year = new Date().getFullYear();
    footers.forEach(function (el) {
      // if footer already includes a year (e.g. © 2025) we keep it; otherwise set a default
      if (!/©\s*\d{4}/.test(el.textContent)) {
        el.innerHTML = `© ${year} Eduskill Academy. All Rights Reserved.`;
      }
    });
  } catch (e) {
    // ignore
  }

  // Keyboard focus styles enhancement for nav links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('focus', () => link.classList.add('focused'));
    link.addEventListener('blur', () => link.classList.remove('focused'));
  });
});
