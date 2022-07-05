import {initVideo} from './modules/init-video';
import {initSmoothAnchor} from './modules/init-smooth-anchor';
import {initSlider} from './modules/init-slider';

window.addEventListener('load', () => {
  initSmoothAnchor();
  initVideo();
  initSlider();
});
