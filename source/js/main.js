import {initVideo} from './modules/init-video';
import {initSmoothAnchor} from './modules/init-smooth-anchor';

window.addEventListener('load', () => {
  initSmoothAnchor();
  initVideo();
});
