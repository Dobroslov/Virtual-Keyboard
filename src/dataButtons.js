const buttons = [
  {
    keyCode: 192,
    eventCode: 'Backquote',
    values: {
      en: {
        lowercase: '`',
        uppercase: '~',
      },
      ru: 'ё',
    },
  },
  {
    eventCode: 'Digit1',
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
    eventCode: 'Digit2',
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
    eventCode: 'Digit3',
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
    eventCode: 'Digit4',
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
    eventCode: 'Digit5',
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
    eventCode: 'Digit6',
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
    eventCode: 'Digit7',
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
    eventCode: 'Digit8',
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
    eventCode: 'Digit9',
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
    eventCode: 'Digit0',
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
    eventCode: 'Minus',
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
    eventCode: 'Equal',
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
    eventCode: 'Backspace',
    isFunctional: true,
  },
  {
    keyCode: 9,
    values: 'tab',
    eventCode: 'Tab',
    isFunctional: true,
  },
  {
    keyCode: 81,
    eventCode: 'KeyQ',
    values: {
      en: 'q',
      ru: 'й',
    },
  },
  {
    keyCode: 87,
    eventCode: 'KeyW',
    values: {
      en: 'w',
      ru: 'ц',
    },
  },
  {
    keyCode: 69,
    eventCode: 'KeyE',
    values: {
      en: 'e',
      ru: 'у',
    },
  },
  {
    keyCode: 82,
    eventCode: 'KeyR',
    values: {
      en: 'r',
      ru: 'к',
    },
  },
  {
    keyCode: 84,
    eventCode: 'KeyT',
    values: {
      en: 't',
      ru: 'е',
    },
  },
  {
    keyCode: 89,
    eventCode: 'KeyY',
    values: {
      en: 'y',
      ru: 'н',
    },
  },
  {
    keyCode: 85,
    eventCode: 'KeyU',
    values: {
      en: 'u',
      ru: 'г',
    },
  },
  {
    keyCode: 73,
    eventCode: 'KeyI',
    values: {
      en: 'i',
      ru: 'ш',
    },
  },
  {
    keyCode: 79,
    eventCode: 'KeyO',
    values: {
      en: 'o',
      ru: 'щ',
    },
  },
  {
    keyCode: 80,
    eventCode: 'KeyP',
    values: {
      en: 'p',
      ru: 'з',
    },
  },
  {
    keyCode: 219,
    eventCode: 'BracketLeft',
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
    eventCode: 'BracketRight',
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
    eventCode: 'Backslash',
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
    eventCode: 'Delete',
    values: 'del',
    isFunctional: true,
  },
  {
    keyCode: 20,
    eventCode: 'CapsLock',
    values: 'caps',
    isFunctional: true,
  },
  {
    eventCode: 'KeyA',
    keyCode: 65,
    values: {
      en: 'a',
      ru: 'ф',
    },
  },
  {
    eventCode: 'KeyS',
    keyCode: 83,
    values: {
      en: 's',
      ru: 'ы',
    },
  },
  {
    eventCode: 'KeyD',
    keyCode: 68,
    values: {
      en: 'd',
      ru: 'в',
    },
  },
  {
    eventCode: 'KeyF',
    keyCode: 70,
    values: {
      en: 'f',
      ru: 'а',
    },
  },
  {
    eventCode: 'KeyG',
    keyCode: 71,
    values: {
      en: 'g',
      ru: 'п',
    },
  },
  {
    eventCode: 'KeyH',
    keyCode: 72,
    values: {
      en: 'h',
      ru: 'р',
    },
  },
  {
    eventCode: 'KeyJ',
    keyCode: 74,
    values: {
      en: 'j',
      ru: 'о',
    },
  },
  {
    eventCode: 'KeyK',
    keyCode: 75,
    values: {
      en: 'k',
      ru: 'л',
    },
  },
  {
    eventCode: 'KeyL',
    keyCode: 76,
    values: {
      en: 'l',
      ru: 'д',
    },
  },
  {
    eventCode: 'Semicolon',
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
    eventCode: 'Quote',
    keyCode: 222,
    values: {
      en: {
        lowercase: "'",
        uppercase: '"',
      },
      ru: 'э',
    },
  },
  {
    keyCode: 13,
    eventCode: 'Enter',
    values: 'enter',
    isFunctional: true,
  },
  {
    keyCode: 16,
    eventCode: 'ShiftLeft',
    values: 'shift',
    isFunctional: true,
  },
  {
    eventCode: 'KeyZ',
    keyCode: 90,
    values: {
      en: 'z',
      ru: 'я',
    },
  },
  {
    eventCode: 'KeyX',
    keyCode: 88,
    values: {
      en: 'x',
      ru: 'ч',
    },
  },
  {
    eventCode: 'KeyC',
    keyCode: 67,
    values: {
      en: 'c',
      ru: 'с',
    },
  },
  {
    eventCode: 'KeyV',
    keyCode: 86,
    values: {
      en: 'v',
      ru: 'м',
    },
  },
  {
    eventCode: 'KeyB',
    keyCode: 66,
    values: {
      en: 'b',
      ru: 'и',
    },
  },
  {
    eventCode: 'KeyN',
    keyCode: 78,
    values: {
      en: 'n',
      ru: 'т',
    },
  },
  {
    eventCode: 'KeyM',
    keyCode: 77,
    values: {
      en: 'm',
      ru: 'ь',
    },
  },
  {
    eventCode: 'Comma',
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
    eventCode: 'Period',
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
    eventCode: 'Slash',
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
    eventCode: 'ArrowUp',
    values: '⇧',
    isFunctional: true,
  },
  {
    keyCode: 16,
    eventCode: 'ShiftRight',
    values: 'shift',
    isFunctional: true,
  },
  {
    keyCode: 17,
    eventCode: 'ControlLeft',
    values: 'ctrl',
    isFunctional: true,
  },
  {
    keyCode: 91,
    eventCode: 'MetaLeft',
    values: 'win',
    isFunctional: true,
  },
  {
    keyCode: 18,
    eventCode: 'AltLeft',
    values: 'alt',
    isFunctional: true,
  },
  {
    keyCode: 32,
    eventCode: 'Space',
    values: 'space',
    key: ' ',
    isFunctional: true,
  },
  {
    keyCode: 18,
    eventCode: 'AltRight',
    values: 'alt',
    key: 'AltGraph',
    isFunctional: true,
  },
  {
    keyCode: 37,
    eventCode: 'ArrowLeft',
    values: '⇦',
    key: 'ArrowLeft',
    isFunctional: true,
  },
  {
    keyCode: 40,
    eventCode: 'ArrowDown',
    values: '⇩',
    key: 'ArrowDown',
    isFunctional: true,
  },
  {
    keyCode: 39,
    eventCode: 'ArrowRight',
    values: '⇨',
    key: 'ArrowRight',
    isFunctional: true,
  },
  {
    keyCode: 17,
    eventCode: 'ControlRight',
    values: 'ctrl',
    key: 'Control',
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
