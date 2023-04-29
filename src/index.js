import './main.scss';

const buttons = [
  [
    {
      values: {
        en: {
          lowercase: '`',
          uppercase: '~',
        },
        ru: 'ё',
      },
    },
    {
      values: {
        en: {
          lowercase: '1',
          uppercase: '!',
        },
        ru: {
          lowercase: '1',
          uppercase: '!',
        },
      },
    },
    {
      values: {
        en: {
          lowercase: '2',
          uppercase: '@',
        },
        ru: {
          lowercase: '2',
          uppercase: '"',
        },
      },
    },
    {
      values: {
        en: {
          lowercase: '3',
          uppercase: '#',
        },
        ru: {
          lowercase: '3',
          uppercase: '№',
        },
      },
    },
    {
      values: {
        en: {
          lowercase: '4',
          uppercase: '$',
        },
        ru: {
          lowercase: '4',
          uppercase: ';',
        },
      },
    },
    {
      values: {
        en: {
          lowercase: '5',
          uppercase: '%',
        },
        ru: {
          lowercase: '5',
          uppercase: '%',
        },
      },
    },
    {
      values: {
        en: {
          lowercase: '6',
          uppercase: '^',
        },
        ru: {
          lowercase: '6',
          uppercase: ': ',
        },
      },
    },
    {
      values: {
        en: {
          lowercase: '7',
          uppercase: '&',
        },
        ru: {
          lowercase: '7',
          uppercase: '?',
        },
      },
    },
    {
      values: {
        en: {
          lowercase: '8',
          uppercase: '*',
        },
        ru: {
          lowercase: '8',
          uppercase: '*',
        },
      },
    },
    {
      values: {
        en: {
          lowercase: '9',
          uppercase: '(',
        },
        ru: {
          lowercase: '9',
          uppercase: '(',
        },
      },
    },
    {
      values: {
        en: {
          lowercase: '0',
          uppercase: ')',
        },
        ru: {
          lowercase: '0',
          uppercase: ')',
        },
      },
    },
    {
      values: {
        en: {
          lowercase: '-',
          uppercase: '_',
        },
        ru: {
          lowercase: '-',
          uppercase: '_',
        },
      },
    },
    {
      values: {
        en: {
          lowercase: '=',
          uppercase: '+',
        },
        ru: {
          lowercase: '=',
          uppercase: '+',
        },
      },
    },
    {
      values: 'backspace',
      key: 'Backspace',
    },
  ],
  [
    {
      values: 'tab',
      key: 'Tab',
    },
    {
      values: {
        en: 'q',
        ru: 'й',
      },
    },
    {
      values: {
        en: 'w',
        ru: 'ц',
      },
    },
    {
      values: {
        en: 'e',
        ru: 'у',
      },
    },
    {
      values: {
        en: 'r',
        ru: 'к',
      },
    },
    {
      values: {
        en: 't',
        ru: 'е',
      },
    },
    {
      values: {
        en: 'y',
        ru: 'н',
      },
    },
    {
      values: {
        en: 'u',
        ru: 'г',
      },
    },
    {
      values: {
        en: 'i',
        ru: 'ш',
      },
    },
    {
      values: {
        en: 'o',
        ru: 'щ',
      },
    },
    {
      values: {
        en: 'p',
        ru: 'з',
      },
    },
    {
      values: {
        en: {
          lowercase: '[',
          uppercase: '{',
        },
        ru: 'х',
      },
    },
    {
      values: {
        en: {
          lowercase: ']',
          uppercase: '}',
        },
        ru: 'ъ',
      },
    },
    {
      values: {
        en: {
          lowercase: '\\',
          uppercase: '|',
        },
        ru: {
          lowercase: '/',
          uppercase: '\\',
        },
      },
    },
    {
      values: 'del',
      key: 'Delete',
    },
  ],
  [
    {
      values: 'caps',
      key: 'Capslock',
    },
    {
      values: {
        en: 'a',
        ru: 'ф',
      },
    },
    {
      values: {
        en: 's',
        ru: 'ы',
      },
    },
    {
      values: {
        en: 'd',
        ru: 'в',
      },
    },
    {
      values: {
        en: 'f',
        ru: 'а',
      },
    },
    {
      values: {
        en: 'g',
        ru: 'п',
      },
    },
    {
      values: {
        en: 'h',
        ru: 'р',
      },
    },
    {
      values: {
        en: 'j',
        ru: 'о',
      },
    },
    {
      values: {
        en: 'k',
        ru: 'л',
      },
    },
    {
      values: {
        en: 'l',
        ru: 'д',
      },
    },
    {
      values: {
        en: {
          lowercase: ';',
          uppercase: ':',
        },
        ru: 'ж',
      },
    },
    {
      values: {
        en: {
          lowercase: "'",
          uppercase: '"',
        },
        ru: 'э',
      },
    },
    {
      values: 'enter',
      key: 'Enter',
    },
  ],
  [
    {
      values: 'shift',
      key: 'Shift',
      action: function (keyboard) {
        keyboard.switchMode();
      },
    },
    {
      values: {
        en: 'z',
        ru: 'я',
      },
    },
    {
      values: {
        en: 'x',
        ru: 'ч',
      },
    },
    {
      values: {
        en: 'c',
        ru: 'с',
      },
    },
    {
      values: {
        en: 'v',
        ru: 'м',
      },
    },
    {
      values: {
        en: 'b',
        ru: 'и',
      },
    },
    {
      values: {
        en: 'n',
        ru: 'т',
      },
    },
    {
      values: {
        en: 'm',
        ru: 'ь',
      },
    },
    {
      values: {
        en: {
          lowercase: ',',
          uppercase: '<',
        },
        ru: 'б',
      },
    },
    {
      values: {
        en: {
          lowercase: '.',
          uppercase: '>',
        },
        ru: 'ю',
      },
    },
    {
      values: {
        en: {
          lowercase: '/',
          uppercase: '?',
        },
        ru: {
          lowercase: '.',
          uppercase: ',',
        },
      },
    },
    {
      values: '⇧',
      key: 'ArrowUp',
    },
    {
      values: 'shift',
      key: 'Shift',
      action: function (keyboard) {
        keyboard.switchMode();
      },
    },
  ],
  [
    {
      values: 'ctrl',
      key: 'Control',
    },
    {
      values: 'win',
      key: 'Meta',
    },
    {
      values: 'alt',
      key: 'Alt',
    },
    {
      values: 'space',
      key: ' ',
      action: function () {},
    },
    {
      values: 'alt',
      key: 'Alt',
    },

    {
      values: '⇦',
      key: 'ArrowLeft',
    },
    {
      values: '⇩',
      key: 'ArrowDown',
    },
    {
      values: '⇨',
      key: 'ArrowRight',
    },
    {
      values: 'ctrl',
      key: 'Control',
    },
  ],
];
const appContainer = document.getElementById('app-keyboard');
const toggleButton = document.getElementById('toggle-lang');

const Keyboard = {
  mode: 'uppercase',
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
    return textarea;
  },

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

    keys.addEventListener('click', (event) => {
      if (event.target.classList.contains('key')) {
        const pressedKey = event.key;
        const key = event.target.textContent;
        console.log('Pressed key:', pressedKey);

        // Действия при нажатии на клавишу
        const value = this.getValue(
          buttons.find((button) => button.values === key)
        );
        console.log('Value:', value);
      }
    });

    return keys;
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

  getTitle(button) {
    if (button.title !== undefined) {
      return button.title;
    } else {
      return this.getValue(button);
    }
  },

  switchMode() {
    this.mode = this.mode === 'uppercase' ? 'lowercase' : 'uppercase';
  },

  switchLanguage() {
    this.locale = this.locale === 'en' ? 'ru' : 'en';
    console.log(this.locale);
  }, 
};

window.addEventListener('DOMContentLoaded', function () {
  Keyboard.init();
});

// let space = document.querySelector('.space');
// let textareaDiv = document.getElementById('text-display');
// console.dir('file: index.js:590 ~ textareaDiv:', textareaDiv.value);
// console.log('file: index.js:589 ~ space:', space);
// space.addEventListener('click', () => {
//   textareaDiv.value += ' ';
// });
// textareaDiv.addEventListener('input', () => {
//   console.log(textareaDiv.value);
// });
