import {initVideo} from './modules/init-video';
import {initSmoothAnchor} from './modules/init-smooth-anchor';
import {initSlider} from './modules/init-slider';
import initFormValidate from './modules/form-validate/init-form-validate';
import {initInputLabels} from './modules/init-input-labels';

window.addEventListener('load', () => {
  initSmoothAnchor();
  initVideo();
  initSlider();
  initFormValidate();
  initInputLabels();
});
