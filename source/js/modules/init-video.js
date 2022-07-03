const initVideo = () => {
  const introVideoBlock = document.querySelector('[data-video-intro]');

  if (!introVideoBlock) {
    return;
  }

  const video = introVideoBlock.querySelector('video');
  const btn = introVideoBlock.querySelector('button');
  const link = introVideoBlock.querySelector('a');
  if (!video || !btn) {
    return;
  }

  btn.addEventListener('click', () => {
    if (btn.classList.contains('play')) {
      video.pause();
      btn.classList.remove('play');
      link.classList.remove('play');
      console.log('play');
      return;
    }

    video.play();
    btn.classList.add('play');
    link.classList.add('play');
    console.log('paused');
  });
};

export {initVideo};
