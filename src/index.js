import './main.scss';
import buttons from './dataButtons';

const appContainer = document.getElementById('app-keyboard');
const toggleButton = document.getElementById('toggle-lang');

const Keyboard = {
  mode: 'lowercase',
  locale: 'en',

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
    return textarea;
  },

  // {
  //   values: {
  //     en: {
  //       lowercase: '1',
  //       uppercase: '!',
  //     },
  //     ru: {
  //       lowercase: '1',
  //       uppercase: '!',
  //     },
  //   },
  // },

  createKeys() {
    const keys = document.createElement('div');
    keys.id = 'keyboard';
    keys.classList.add('keyboard__keys');

    buttons.forEach((rowButton) => {
      const buttonRowElement = document.createElement('ul');
      buttonRowElement.classList.add('keyboard__row');

      rowButton.forEach((button) => {
        const buttonElement = document.createElement('li');
        buttonElement.classList.add('key');
        buttonElement.id = button.id;
        if (typeof button.values === 'object') {
          if (typeof button.values[this.locale] === 'object') {
            buttonElement.textContent = button.values[this.locale][this.mode];
          } else {
            buttonElement.textContent = button.values[this.locale];
          }
        } else {
          buttonElement.textContent = button.values;
        }
        buttonRowElement.append(buttonElement);
      });
      keys.append(buttonRowElement);
    });

    keys.addEventListener('click', (e) => {
      if (e.target.classList.contains('key')) {
        const textArea = document.getElementById('text-display');
        const buttonText = e.target.textContent;
        textArea.value += buttonText;
      }
    });

    document.addEventListener('keydown', (event) => {
      console.log('file: index.js:554 ~ keys.addEventListener ~ event:', event);

      const pressedKey = event.key;
      console.log('Pressed key:', pressedKey);
      const textArea = document.getElementById('text-display');
      console.log(
        'file: index.js:106 ~ document.addEventListener ~ textArea:',
        textArea
      );
      const buttonText = e.target.textContent;
      textArea.value += buttonText;
      // if (this.getValue(pressedKey)) {
      //   console.log(getValue(pressedKey));
      // }

      // Действия при нажатии на клавишу
      // const value = this.getValue(
      //   buttons.find((button) => button.values === key)
      // );
      // console.log('Value:', value);
    });

    return keys;
  },
  switchMode() {
    this.mode = this.mode === 'uppercase' ? 'lowercase' : 'uppercase';
  },

  switchLanguage() {
    this.locale = this.locale === 'en' ? 'ru' : 'en';
    console.log(this.locale);
  },

  getValue(letter) {
    if (typeof letter.values === 'function') {
      letter.values(this);
    } else {
      let value = letter.values[this.locale];
      if (typeof value === 'object') {
        return value[this.mode];
      } else {
        return this.mode === 'uppercase'
          ? value.toUpperCase()
          : value.toLowerCase();
      }
    }
  },
};

window.addEventListener('DOMContentLoaded', function () {
  Keyboard.init();
});
