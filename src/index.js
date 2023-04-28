import './main.scss';

const appContainer = document.getElementById('app-keyboard');

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
    },
  ],
  [
    {
      values: 'tab',
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
    },
  ],
  [
    {
      values: 'caps',
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
    },
  ],
  [
    {
      values: 'shift',
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
    },
    {
      values: 'shift',
      action: function (keyboard) {
        keyboard.switchMode();
      },
    },
  ],
  [
    {
      values: 'ctrl',
    },
    {
      values: 'win',
    },
    {
      values: 'alt',
    },
    {
      values: 'space',
      action: function () {},
    },
    {
      values: 'alt',
    },

    {
      values: '⇦',
    },
    {
      values: '⇩',
    },
    {
      values: '⇨',
    },
    {
      values: 'ctrl',
    },
  ],
];

function createKeyboardSection() {
  const section = document.createElement('section');
  section.classList.add('keyboard');
  section.append(createKeyboardContainer());
  return section;
}

function createKeyboardContainer() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.append(createKeyboardTitle(), createKeyboardWrapper());
  return container;
}

function createKeyboardTitle() {
  const title = document.createElement('h1');
  title.classList.add('keyboard__title');
  title.innerText = 'Virtual keyboard';
  return title;
}

function createKeyboardWrapper() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('keyboard__wrapper');
  wrapper.append(createkeyboardTextarea(), createKeyboard());
  return wrapper;
}

function createkeyboardTextarea() {
  const textarea = document.createElement('textarea');
  textarea.id = 'text-display';
  textarea.classList.add('keyboard__text-display');
  return textarea;
}

function createKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.id = 'keyboard';
  keyboard.classList.add('keyboard__keys');

  let lang = 'en';
  let mode = 'lowercase';
  buttons.forEach((rowButton) => {
    const buttonRowElement = document.createElement('ul');
    buttonRowElement.classList.add('keyboard__row');

    rowButton.forEach((button) => {
      const buttonElement = document.createElement('li');
      buttonElement.classList.add('key');
      if (typeof button.values === 'object') {
        if (typeof button.values[lang] === 'object') {
          buttonElement.textContent = button.values[lang][mode];
        } else {
          buttonElement.textContent = button.values[lang];
        }
      } else {
        buttonElement.textContent = button.values;
      }
      buttonRowElement.append(buttonElement);
    });
    keyboard.append(buttonRowElement);
  });
  keyboard.addEventListener('click', function(event) {
    const target = event.target;
  
    if (target.classList.contains('key')) {
      console.log(event.target);
      const key = target.textContent;
      // Действия при нажатии на клавишу
    }
  });
  return keyboard;
}

appContainer.append(createKeyboardSection());
// let buttonB = {
//   values: {
//     en: {
//       uppercase: '<',
//       lowercase: ',',
//     },
//     ru: 'б', ⇦', '⇩', '⇨', '⇧'
//   },
// };

let buttonShift = {
  title: 'shift',
  values: function (keyboard) {
    keyboard.switchMode();
  },
};

let buttonLanguage = {
  values: function (keyboard) {
    keyboard.switchLanguage();
  },
};

let keyboard = {
  mode: 'uppercase',
  locale: 'en',

  getValue(letter) {
    if (typeof letter.values === 'function') {
      letter.values(this);
    } else {
      let value = letter.values[this.locale]; // проверка на undefined
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
    if (button.title !== 'undefined') {
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
  },
};

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
