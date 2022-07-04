const initSmoothAnchor = () => {
  const links = document.querySelectorAll('a[href^="#"]');

  if (!links) {
    return;
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
});
};

export {initSmoothAnchor};
