import FormsValidate from './form-validate';
const formWrappers = document.querySelectorAll('[data-validate]');

const resetForm = (form) => {
  setTimeout(() => {
    window.clearForm(form);
  }, 1000);
};

const sending = (e) => {
  const form = e.srcElement;
  if (form.classList.contains('error')) {
    form.classList.remove('error');
  }

  form.classList.add('sending');
};

const errorSending = (e) => {
  const form = e.srcElement;
  form.classList.add('error');
  form.classList.remove('sending');
};

const successSending = (e) => {
  const form = e.srcElement;
  const defaultPlaceholder = form.dataset.emailPlaceholder;
  const successMessage = form.dataset.successPlaceholder;
  const emailInput = form.querySelector('input[name="user-email"]');
  const refreshBtn = form.querySelector('.form-email__refresh');

  form.classList.remove('sending');
  form.classList.add('success');
  emailInput.value = '';
  emailInput.placeholder = successMessage;

  refreshBtn.addEventListener('click', () => {
    form.classList.remove('success');
    emailInput.placeholder = defaultPlaceholder;
    resetForm(e.target);
  });
};

const baseValidationSuccessCallback = (e) => {
  e.preventDefault();
  e.target.parentElement.classList.add('success');
  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке
  resetForm(e.target);
};

const baseValidationErrorCallback = (e) => {
  e.preventDefault();
};

const customExampleValidationSuccessCallback = (e) => {
  e.preventDefault();
  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке
  const xhr = new XMLHttpRequest();

  const email = e.srcElement.querySelector('input[name="user-email"]').value;

  const body = '&email=' + email;

  sending(e);
  xhr.open('POST', 'send.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(body);

  xhr.onload = function () {
    // console.log(xhr.status);

    if (xhr.status === 200) {
      setTimeout(() => {
        successSending(e);
      }, 2000);
    } else {
      setTimeout(() => {
      }, 2000);
    }
  };
};

const customExampleValidationErrorCallback = (e) => {
  e.preventDefault();
  errorSending(e);
};

const callbacks = {
  base: {
    // Колбек при успешной валидации формы при попытке её отправки
    validationSuccessCallback: baseValidationSuccessCallback,
    // Колбек при не успешной валидации формы при попытке её отправки, не связан с запросами на сервер
    validationErrorCallback: baseValidationErrorCallback,
  },
  customExample: {
    validationSuccessCallback: customExampleValidationSuccessCallback,
    validationErrorCallback: customExampleValidationErrorCallback,
  },
};

const setCustomPhoneInputsEvent = () => {
  if (document.querySelectorAll('[data-validate-type="phone"] input').length) {
    document.querySelector('html').addEventListener('input', ({target}) => {
      if (target.closest('[data-validate-type="phone"]')) {
        target.closest('[data-validate-type="phone"]').querySelector('input').dispatchEvent(new Event('input'));
      }
    });
  }
};

const initFormValidate = () => {
  if (formWrappers.length) {
    setCustomPhoneInputsEvent();
    formWrappers.forEach((wrapper) => {
      let callback = wrapper.dataset.callback;

      if (!callback) {
        callback = 'base';
      }

      const formValidate = new FormsValidate(wrapper, callbacks[callback]);
      return formValidate.init();
    });
  }
};

export default initFormValidate;
