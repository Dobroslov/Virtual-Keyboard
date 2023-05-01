import './main.scss';
import buttons from './dataButtons';

const appContainer = document.getElementById('app-keyboard');
const toggleButton = document.getElementById('toggle-lang');

const Keyboard = {
  mode: 'lowercase',
  locale: 'en',
  textarea: null,
  keyboard: null,

  init() {
    appContainer.append(this.createSection());
    toggleButton.addEventListener('click', () => {
      Keyboard.switchLanguage();
    });
  },

  createSection() {
    const section = document.createElement('section');
    section.classList.add('keyboard');
    section.append(this.createContainer());
    return section;
  },

  createContainer() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.append(this.createTitle(), this.createWrapper());
    return container;
  },

  createTitle() {
    const title = document.createElement('h1');
    title.classList.add('keyboard__title');
    title.innerText = 'Virtual keyboard';
    return title;
  },

  createWrapper() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('keyboard__wrapper');
    wrapper.append(this.createTextarea(), this.createKeys());
    return wrapper;
  },

  createTextarea() {
    const textarea = document.createElement('textarea');
    textarea.id = 'text-display';
    textarea.classList.add('keyboard__text-display');
    textarea.readOnly = true;
    this.textarea = textarea;
    return textarea;
  },

  createRow(startRow, endRow, arrButtons) {
    const buttonsRowElement = document.createElement('ul');
    buttonsRowElement.classList.add('keyboard__row');

    for (startRow; startRow < endRow; startRow++) {
      const newButton = this.createButton(arrButtons[startRow]);
      buttonsRowElement.append(newButton);
    }

    return buttonsRowElement;
  },

  createButton(buttonObj) {
    const buttonElement = document.createElement('li');
    buttonElement.classList.add('key');
    buttonElement.id = buttonObj.id;
    if (typeof buttonObj.values === 'object') {
      if (typeof buttonObj.values[this.locale] === 'object') {
        buttonElement.textContent = buttonObj.values[this.locale][this.mode];
      } else {
        buttonElement.textContent = buttonObj.values[this.locale];
      }
    } else {
      buttonElement.textContent = buttonObj.values;
    }
    return buttonElement;
  },

  findButtonById(id) {
    return buttons.find((buttonObj) => buttonObj.id === id);
  },

  findButtonByValue(value) {
    console.log(value);
    return buttons.find((buttonObj) => {
      if (buttonObj.values === value || buttonObj.key === value) {
        // console.log('buttonObj.values === value || buttonObj.key === value');
        return true;
      } else if (typeof buttonObj.values === 'object') {
        // console.log('typeof buttonObj.values === object');
        const valueObj = buttonObj.values[this.locale];
        if (typeof valueObj === 'object' && valueObj[this.mode] === value) {
          // console.log(
          //   'typeof valueObj === object && valueObj[this.mode] === value'
          // );
          return true;
        } else if (valueObj === value) {
          // console.log('valueObj === value');
          return true;
        }
      }
      return false;
    });
  },

  createKeys() {
    const keys = document.createElement('div');
    keys.id = 'keyboard';
    keys.classList.add('keyboard__keys');
    keys.append(this.createRow(0, 14, buttons));
    keys.append(this.createRow(14, 29, buttons));
    keys.append(this.createRow(29, 42, buttons));
    keys.append(this.createRow(42, 55, buttons));
    keys.append(this.createRow(55, 64, buttons));

    keys.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('key')) {
        if (!this.findButtonById(target.id).hasOwnProperty('isFunctional')) {
          this.textarea.value += target.textContent;
        } else if (1) {
        } else {
          this.textarea.value = this.textarea.value;
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      const pressedKey = e.key;
      const pressedKeyCode = e.keyCode;
      console.log(
        'file: index.js:136 ~ document.addEventListener ~ pressedKeyCode:',
        pressedKeyCode
      );
      // console.log("file: index.js:144 ~ document.addEventListener ~ pressedKey:", pressedKey)
      if (!this.findButtonByValue(pressedKey).hasOwnProperty('isFunctional')) {
        this.textarea.value += e.key;
      } else if (pressedKeyCode === 32) {
        this.useSpace();
      } else if (pressedKeyCode === 13) {
        e.preventDefault();
        this.useEnter();
      } else if (pressedKeyCode === 46) {
        console.log('pressedKey Delete');
      } else if (pressedKeyCode === 8) {
        this.useBackspace();
      } else if (pressedKeyCode === 18) {
        console.log('pressedKey Alt');
        e.preventDefault();
      } else if (pressedKeyCode === 17) {
        console.log('pressedKey Control');
        e.preventDefault();
      } else if (pressedKeyCode === 16) {
        console.log('pressedKey Shift');
        e.preventDefault();
        this.switchMode();
      } else if (pressedKeyCode === 9) {
        e.preventDefault();
        this.useTab();
      } else if (pressedKey === 20) {
        console.log('pressedKey Capslock');
      } else if (pressedKeyCode === 38) {
        console.log('pressedKey ⇧');
      } else if (pressedKeyCode === 37) {
        console.log('pressedKey ⇦');
      } else if (pressedKeyCode === 40) {
        console.log('pressedKey ⇩');
      } else if (pressedKeyCode === 39) {
        console.log('pressedKey ⇨');
      } else if (pressedKeyCode === 91) {
        e.preventDefault();
        console.log('pressedKey Meta');
      }
    });
    keys.focus();
    return keys;
  },

  useSpace() {
    this.textarea.value += ' ';
  },

  useTab() {
    this.textarea.value += '    ';
  },

  useEnter() {
    this.textarea.value += '\n';
  },

  useBackspace() {
    this.textarea.value = this.textarea.value.slice(0, -1);
  },

  switchMode() {
    this.mode = this.mode === 'uppercase' ? 'lowercase' : 'uppercase';
    console.log('switchMode', this.mode);
  },

  switchLanguage() {
    this.locale = this.locale === 'en' ? 'ru' : 'en';
    console.log('switchLanguage', this.locale);
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});
