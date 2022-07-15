const initSmoothAnchor = () => {
  const links = document.querySelectorAll('a[href^="#"]');

  if (!links) {
    return;
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    if (link.getAttribute('href') === '#' || !document.querySelector(link.getAttribute('href'))) {
      return;
    }

    link.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
};

export {initSmoothAnchor};
