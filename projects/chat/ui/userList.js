export default class UserList {
  constructor(element) {
    this.element = element;
    this.items = new Set();
  }

  buildDOM() {
    const fragment = document.createDocumentFragment();

    this.element.innerHTML = '';

    for (const name of this.items) {
      const element = document.createElement('div');
      const profPic = document.createElement('div');
      const wrapper = document.createElement('div');

      element.classList.add('user-list-item');
      element.textContent = name;

      profPic.setAttribute('data-role', 'user-avatar');
      profPic.setAttribute('data-user', `${name}`);
      profPic.classList.add('user-list-avatar');
      profPic.style.width = "26px";
      profPic.style.height = "26px";
      profPic.style.marginTop ="-2px";
      profPic.style.backgroundImage = `url(/chat/photos/${name}.png?t-${Date.now()})`;

      wrapper.classList.add('user-wrapper');
      wrapper.append(profPic);
      wrapper.append(element);
      fragment.append(wrapper);
    }

    this.element.append(fragment);
  }

  add(name) {
    this.items.add(name);
    this.buildDOM();
  }

  remove(name) {
    this.items.delete(name);
    this.buildDOM();
  }
}
