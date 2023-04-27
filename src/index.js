import './main.scss';

function createKeyboardSection() {
  const keyboardSection = document.createElement('section');
  keyboardSection.classList.add('keyboard');
}

function createKeyboardContainer() {
  const keyboardContainer = document.createElement('div');
  keyboardSection.classList.add('container');
}

function createKeyboardTitle() {
  const keyboardTitle = document.createElement('h1');
  keyboardTitle.classList.add('keyboard__title');
  keyboardTitle.innerText = 'Virtual keyboard';
}

function createKeyboardWrapper() {
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard__wrapper');
}

function createTextArea() {
  const keyboardWrapper = document.createElement('textarea');
  keyboardWrapper.classList.add('keyboard-input');
}

function createKeyboard() {
  const keyboard = document.createElement('ul');
  keyboardWrapper.classList.add('keyboard__keys');
}

const rows = [
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
      values: '&uarr;',
    },
    {
      values: 'shift',
    },
  ],
  [
    {
      values: 'ctrl',
    },
    {
      values: 'windows',
    },
    {
      values: 'alt',
    },
    {
      values: 'space',
    },
    {
      values: 'alt',
    },
    {
      values: 'ctrl',
    },
    {
      values: '&larr;',
    },
    {
      values: '&darr;',
    },
    {
      values: '&rarr;',
    },
  ],
];

function createRowKeys() {
  const keyboardWrapper = document.createElement('textarea');
  keyboardWrapper.classList.add('keyboard-input');
}
// rows.forEach((row) => {
//   const row = document.createElement('li');
//   row.classList.add('keyboard__row')
// });

let letterQ = {
  values: {
    en: 'q',
    ru: 'й',
  },
};

let buttonB = {
  values: {
    en: {
      uppercase: '<',
      lowercase: ',',
    },
    ru: 'б',
  },
};
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

  mode: 'uppercase',
  locale: 'en',
};
