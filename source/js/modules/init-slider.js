const initSlider = () => {
  const slider = document.querySelector('[data-slider]');

  if (!slider) {
    return;
  }

  const slides = slider.querySelectorAll('div');
  let breakpoint = window.matchMedia('(max-width: 767px)');
  const maxSlide = slides.length - 1;
  let curSlide = 2;

  const updateSlides = () => {
    console.log(curSlide);
    slides.forEach((slide, indx) => {
      if (indx === curSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }

      if (curSlide === maxSlide && indx === 0) {
        slide.style.transform = 'translateX(100%)';
        return;
      }

      if (curSlide === 0 && indx === maxSlide) {
        slide.style.transform = 'translateX(-100%)';
        return;
      }

      slide.style.transform = `translateX(${(indx - curSlide) * 100}%)`;
    });
  };

  const checkSize = () => {
    if (breakpoint.matches) {
      const maxHeigth = Math.max(...Array(...slides).map((slide) => slide.offsetHeight));

      slider.style.height = `${maxHeigth}px`;
    }
  };

  updateSlides();
  checkSize();

  window.addEventListener('resize', checkSize);

  const prevSlide = slider.querySelector('[data-slider-btn="prev"]');
  const nextSlide = slider.querySelector('[data-slider-btn="next"]');

  prevSlide.addEventListener('click', function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    updateSlides();
  });

  nextSlide.addEventListener('click', function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    updateSlides();
  });
};

export {initSlider};
