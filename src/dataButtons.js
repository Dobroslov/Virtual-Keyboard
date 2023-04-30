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
      // aciton: DeletedValue(),
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
      // aciton: this.DeletedValue(),
    },
  ],
  [
    {
      values: 'caps',
      key: 'Capslock',
      // action: this.switchMode(),
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
      // action: function (keyboard) {
      //   keyboard.switchMode();
      // },
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
      // aciton: this.useArr(this.key),
    },
    {
      values: 'shift',
      key: 'Shift',
      // action: function (keyboard) {
      //   keyboard.switchMode();
      // },
    },
  ],
  [
    {
      values: 'ctrl',
      key: 'Control',
      // aciton: this.useCtrl(),
    },
    {
      values: 'win',
      key: 'Meta',
      // aciton: this.useWin(),
    },
    {
      values: 'alt',
      key: 'Alt',
      // aciton: this.useAlt(),
    },
    {
      values: 'space',
      key: ' ',
      // aciton: this.addSpace(),
    },
    {
      values: 'alt',
      key: 'Alt',
      // aciton: this.useAlt(),
    },

    {
      values: '⇦',
      key: 'ArrowLeft',
      // aciton: this.useArr(this.key),
    },
    {
      values: '⇩',
      key: 'ArrowDown',
      // aciton: this.useArr(this.key),
    },
    {
      values: '⇨',
      key: 'ArrowRight',
      // aciton: this.useArr(this.key),
    },
    {
      values: 'ctrl',
      key: 'Control',
      // aciton: this.useCtrl(),
    },
  ],
];

function generateId() {
  const id = Math.random().toString(36).substring(2);
  return id;
}

const buttonsWithId = buttons.map((buttonsRow) => {
  return buttonsRow.map((button) => {
    return { id: generateId(), ...button };
  });
});

export default buttonsWithId;
