const inputCheck = (input, wrap) => {
  if (input.value.trim() !== '' && input.value.trim() !== '+7' ||
    input === document.activeElement || input.type === 'date') {
    wrap.classList.add('active');
  } else {
    wrap.classList.remove('active');
  }
};

const initInputLabels = () => {
  const inputWrappers = document.querySelectorAll('[data-input-wrap]');

  if (inputWrappers.length) {
    inputWrappers.forEach((inputWrapper) => {
      const input = inputWrapper.querySelector('input, textarea');

      if (input) {
        inputCheck(input, inputWrapper);

        input.addEventListener('input', () => {
          inputCheck(input, inputWrapper);
        });
        input.addEventListener('focus', () => {
          inputCheck(input, inputWrapper);
        });
        input.addEventListener('blur', () => {
          inputCheck(input, inputWrapper);
        });
      }
    });
  }
};

export {initInputLabels};
