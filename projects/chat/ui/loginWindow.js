export default class LoginWindow {
  constructor(element, onLogin) {
    this.element = element;
    this.onLogin = onLogin;

    const loginNameInput = element.querySelector('[data-role=login-name-input]');
    const submitButton = element.querySelector('[data-role=login-submit]');
    const loginError = element.querySelector('[data-role=login-error]');

    function doLogin() {
      loginError.textContent = '';
      const name = loginNameInput.value.trim();

      if (!name) {
        loginError.textContent = 'Enter your nickname';
      } else {
        onLogin(name);
      }
    }

    submitButton.addEventListener('click', () => {
      doLogin();
    });

    loginNameInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        doLogin();
      }
    });
  }

  show() {
    this.element.classList.remove('hidden');
  }

  hide() {
    this.element.classList.add('hidden');
  }
}
