const buttons = [
  {
    keyCode: 192,
    values: {
      en: {
        lowercase: '`',
        uppercase: '~',
      },
      ru: 'ё',
    },
  },
  {
    keyCode: 49,
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
    keyCode: 50,
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
    keyCode: 51,
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
    keyCode: 52,
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
    keyCode: 53,
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
    keyCode: 54,
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
    keyCode: 55,
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
    keyCode: 56,
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
    keyCode: 57,
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
    keyCode: 48,
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
    keyCode: 189,
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
    keyCode: 187,
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
    keyCode: 8,
    values: 'backspace',
    key: 'Backspace',
    isFunctional: true,
  },
  {
    keyCode: 9,
    values: 'tab',
    key: 'Tab',
    isFunctional: true,
  },
  {
    keyCode: 81,
    values: {
      en: 'q',
      ru: 'й',
    },
  },
  {
    keyCode: 87,
    values: {
      en: 'w',
      ru: 'ц',
    },
  },
  {
    keyCode: 69,
    values: {
      en: 'e',
      ru: 'у',
    },
  },
  {
    keyCode: 82,
    values: {
      en: 'r',
      ru: 'к',
    },
  },
  {
    keyCode: 84,
    values: {
      en: 't',
      ru: 'е',
    },
  },
  {
    keyCode: 89,
    values: {
      en: 'y',
      ru: 'н',
    },
  },
  {
    keyCode: 85,
    values: {
      en: 'u',
      ru: 'г',
    },
  },
  {
    keyCode: 73,
    values: {
      en: 'i',
      ru: 'ш',
    },
  },
  {
    keyCode: 79,
    values: {
      en: 'o',
      ru: 'щ',
    },
  },
  {
    keyCode: 80,
    values: {
      en: 'p',
      ru: 'з',
    },
  },
  {
    keyCode: 219,
    values: {
      en: {
        lowercase: '[',
        uppercase: '{',
      },
      ru: 'х',
    },
  },
  {
    keyCode: 221,
    values: {
      en: {
        lowercase: ']',
        uppercase: '}',
      },
      ru: 'ъ',
    },
  },
  {
    keyCode: 220,
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
    keyCode: 46,
    values: 'del',
    key: 'Delete',
    isFunctional: true,
  },
  {
    keyCode: 20,
    values: 'caps',
    key: 'CapsLock',
    isFunctional: true,
  },
  {
    keyCode: 65,
    values: {
      en: 'a',
      ru: 'ф',
    },
  },
  {
    keyCode: 83,
    values: {
      en: 's',
      ru: 'ы',
    },
  },
  {
    keyCode: 68,
    values: {
      en: 'd',
      ru: 'в',
    },
  },
  {
    keyCode: 70,
    values: {
      en: 'f',
      ru: 'а',
    },
  },
  {
    keyCode: 71,
    values: {
      en: 'g',
      ru: 'п',
    },
  },
  {
    keyCode: 72,
    values: {
      en: 'h',
      ru: 'р',
    },
  },
  {
    keyCode: 74,
    values: {
      en: 'j',
      ru: 'о',
    },
  },
  {
    keyCode: 75,
    values: {
      en: 'k',
      ru: 'л',
    },
  },
  {
    keyCode: 76,
    values: {
      en: 'l',
      ru: 'д',
    },
  },
  {
    keyCode: 186,
    values: {
      en: {
        lowercase: ';',
        uppercase: ':',
      },
      ru: 'ж',
    },
  },
  {
    keyCode: 222,
    values: {
      en: {
        lowercase: "\'",
        uppercase: '"',
      },
      ru: 'э',
    },
  },
  {
    keyCode: 13,
    values: 'enter',
    key: 'Enter',
    isFunctional: true,
  },
  {
    keyCode: 16,
    values: 'shift',
    code: 'ShiftLeft',
    isFunctional: true,
  },
  {
    keyCode: 90,
    values: {
      en: 'z',
      ru: 'я',
    },
  },
  {
    keyCode: 88,
    values: {
      en: 'x',
      ru: 'ч',
    },
  },
  {
    keyCode: 67,
    values: {
      en: 'c',
      ru: 'с',
    },
  },
  {
    keyCode: 86,
    values: {
      en: 'v',
      ru: 'м',
    },
  },
  {
    keyCode: 66,
    values: {
      en: 'b',
      ru: 'и',
    },
  },
  {
    keyCode: 78,
    values: {
      en: 'n',
      ru: 'т',
    },
  },
  {
    keyCode: 77,
    values: {
      en: 'm',
      ru: 'ь',
    },
  },
  {
    keyCode: 188,
    values: {
      en: {
        lowercase: ',',
        uppercase: '<',
      },
      ru: 'б',
    },
  },
  {
    keyCode: 190,
    values: {
      en: {
        lowercase: '.',
        uppercase: '>',
      },
      ru: 'ю',
    },
  },
  {
    keyCode: 191,
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
    keyCode: 38,
    values: '⇧',
    code: 'ArrowUp',
    isFunctional: true,
  },
  {
    keyCode: 16,
    values: 'shift',
    code: 'ShiftLeft',
    isFunctional: true,
  },
  {
    keyCode: 17,
    values: 'ctrl',
    code: 'ControlLeft',
    isFunctional: true,
  },
  {
    keyCode: 91,
    values: 'win',
    code: 'MetaLeft',
    isFunctional: true,
  },
  {
    keyCode: 18,
    values: 'alt',
    code: 'AltLeft',
    isFunctional: true,
  },
  {
    keyCode: 32,
    values: 'space',
    key: ' ',
    code: 'Space',
    isFunctional: true,
  },
  {
    keyCode: 18,
    values: 'alt',
    key: 'AltGraph',
    code: 'AltRight',
    isFunctional: true,
  },
  {
    keyCode: 37,
    values: '⇦',
    key: 'ArrowLeft',
    code: 'ArrowLeft',
    isFunctional: true,
  },
  {
    keyCode: 40,
    values: '⇩',
    key: 'ArrowDown',
    code: 'ArrowDown',
    isFunctional: true,
  },
  {
    keyCode: 39,
    values: '⇨',
    key: 'ArrowRight',
    code: 'ArrowRight',
    isFunctional: true,
  },
  {
    keyCode: 17,
    values: 'ctrl',
    key: 'Control',
    code: 'ControlRight',
    isFunctional: true,
  },
];

function generateId() {
  const id = Math.random().toString(36).substring(2);
  return id;
}

const buttonsWithId = buttons.map((button) => {
  return { id: generateId(), ...button };
});

export default buttonsWithId;
