/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/dataButtons.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var buttons = [{
  keyCode: 192,
  values: {
    en: {
      lowercase: '`',
      uppercase: '~'
    },
    ru: 'ё'
  }
}, {
  keyCode: 49,
  values: {
    en: {
      lowercase: '1',
      uppercase: '!'
    },
    ru: {
      lowercase: '1',
      uppercase: '!'
    }
  }
}, {
  keyCode: 50,
  values: {
    en: {
      lowercase: '2',
      uppercase: '@'
    },
    ru: {
      lowercase: '2',
      uppercase: '"'
    }
  }
}, {
  keyCode: 51,
  values: {
    en: {
      lowercase: '3',
      uppercase: '#'
    },
    ru: {
      lowercase: '3',
      uppercase: '№'
    }
  }
}, {
  keyCode: 52,
  values: {
    en: {
      lowercase: '4',
      uppercase: '$'
    },
    ru: {
      lowercase: '4',
      uppercase: ';'
    }
  }
}, {
  keyCode: 53,
  values: {
    en: {
      lowercase: '5',
      uppercase: '%'
    },
    ru: {
      lowercase: '5',
      uppercase: '%'
    }
  }
}, {
  keyCode: 54,
  values: {
    en: {
      lowercase: '6',
      uppercase: '^'
    },
    ru: {
      lowercase: '6',
      uppercase: ': '
    }
  }
}, {
  keyCode: 55,
  values: {
    en: {
      lowercase: '7',
      uppercase: '&'
    },
    ru: {
      lowercase: '7',
      uppercase: '?'
    }
  }
}, {
  keyCode: 56,
  values: {
    en: {
      lowercase: '8',
      uppercase: '*'
    },
    ru: {
      lowercase: '8',
      uppercase: '*'
    }
  }
}, {
  keyCode: 57,
  values: {
    en: {
      lowercase: '9',
      uppercase: '('
    },
    ru: {
      lowercase: '9',
      uppercase: '('
    }
  }
}, {
  keyCode: 48,
  values: {
    en: {
      lowercase: '0',
      uppercase: ')'
    },
    ru: {
      lowercase: '0',
      uppercase: ')'
    }
  }
}, {
  keyCode: 189,
  values: {
    en: {
      lowercase: '-',
      uppercase: '_'
    },
    ru: {
      lowercase: '-',
      uppercase: '_'
    }
  }
}, {
  keyCode: 187,
  values: {
    en: {
      lowercase: '=',
      uppercase: '+'
    },
    ru: {
      lowercase: '=',
      uppercase: '+'
    }
  }
}, {
  keyCode: 8,
  values: 'backspace',
  key: 'Backspace',
  isFunctional: true
}, {
  keyCode: 9,
  values: 'tab',
  key: 'Tab',
  isFunctional: true
}, {
  keyCode: 81,
  values: {
    en: 'q',
    ru: 'й'
  }
}, {
  keyCode: 87,
  values: {
    en: 'w',
    ru: 'ц'
  }
}, {
  keyCode: 69,
  values: {
    en: 'e',
    ru: 'у'
  }
}, {
  keyCode: 82,
  values: {
    en: 'r',
    ru: 'к'
  }
}, {
  keyCode: 84,
  values: {
    en: 't',
    ru: 'е'
  }
}, {
  keyCode: 89,
  values: {
    en: 'y',
    ru: 'н'
  }
}, {
  keyCode: 85,
  values: {
    en: 'u',
    ru: 'г'
  }
}, {
  keyCode: 73,
  values: {
    en: 'i',
    ru: 'ш'
  }
}, {
  keyCode: 79,
  values: {
    en: 'o',
    ru: 'щ'
  }
}, {
  keyCode: 80,
  values: {
    en: 'p',
    ru: 'з'
  }
}, {
  keyCode: 219,
  values: {
    en: {
      lowercase: '[',
      uppercase: '{'
    },
    ru: 'х'
  }
}, {
  keyCode: 221,
  values: {
    en: {
      lowercase: ']',
      uppercase: '}'
    },
    ru: 'ъ'
  }
}, {
  keyCode: 220,
  values: {
    en: {
      lowercase: '\\',
      uppercase: '|'
    },
    ru: {
      lowercase: '/',
      uppercase: '\\'
    }
  }
}, {
  keyCode: 46,
  values: 'del',
  key: 'Delete',
  isFunctional: true
}, {
  keyCode: 20,
  values: 'caps',
  key: 'CapsLock',
  isFunctional: true
}, {
  keyCode: 65,
  values: {
    en: 'a',
    ru: 'ф'
  }
}, {
  keyCode: 83,
  values: {
    en: 's',
    ru: 'ы'
  }
}, {
  keyCode: 68,
  values: {
    en: 'd',
    ru: 'в'
  }
}, {
  keyCode: 70,
  values: {
    en: 'f',
    ru: 'а'
  }
}, {
  keyCode: 71,
  values: {
    en: 'g',
    ru: 'п'
  }
}, {
  keyCode: 72,
  values: {
    en: 'h',
    ru: 'р'
  }
}, {
  keyCode: 74,
  values: {
    en: 'j',
    ru: 'о'
  }
}, {
  keyCode: 75,
  values: {
    en: 'k',
    ru: 'л'
  }
}, {
  keyCode: 76,
  values: {
    en: 'l',
    ru: 'д'
  }
}, {
  keyCode: 186,
  values: {
    en: {
      lowercase: ';',
      uppercase: ':'
    },
    ru: 'ж'
  }
}, {
  keyCode: 222,
  values: {
    en: {
      lowercase: "\'",
      uppercase: '"'
    },
    ru: 'э'
  }
}, {
  keyCode: 13,
  values: 'enter',
  key: 'Enter',
  isFunctional: true
}, {
  keyCode: 16,
  values: 'shift',
  code: 'ShiftLeft',
  isFunctional: true
}, {
  keyCode: 90,
  values: {
    en: 'z',
    ru: 'я'
  }
}, {
  keyCode: 88,
  values: {
    en: 'x',
    ru: 'ч'
  }
}, {
  keyCode: 67,
  values: {
    en: 'c',
    ru: 'с'
  }
}, {
  keyCode: 86,
  values: {
    en: 'v',
    ru: 'м'
  }
}, {
  keyCode: 66,
  values: {
    en: 'b',
    ru: 'и'
  }
}, {
  keyCode: 78,
  values: {
    en: 'n',
    ru: 'т'
  }
}, {
  keyCode: 77,
  values: {
    en: 'm',
    ru: 'ь'
  }
}, {
  keyCode: 188,
  values: {
    en: {
      lowercase: ',',
      uppercase: '<'
    },
    ru: 'б'
  }
}, {
  keyCode: 190,
  values: {
    en: {
      lowercase: '.',
      uppercase: '>'
    },
    ru: 'ю'
  }
}, {
  keyCode: 191,
  values: {
    en: {
      lowercase: '/',
      uppercase: '?'
    },
    ru: {
      lowercase: '.',
      uppercase: ','
    }
  }
}, {
  keyCode: 38,
  values: '⇧',
  code: 'ArrowUp',
  isFunctional: true
}, {
  keyCode: 16,
  values: 'shift',
  code: 'ShiftLeft',
  isFunctional: true
}, {
  keyCode: 17,
  values: 'ctrl',
  code: 'ControlLeft',
  isFunctional: true
}, {
  keyCode: 91,
  values: 'win',
  code: 'MetaLeft',
  isFunctional: true
}, {
  keyCode: 18,
  values: 'alt',
  code: 'AltLeft',
  isFunctional: true
}, {
  keyCode: 32,
  values: 'space',
  key: ' ',
  code: 'Space',
  isFunctional: true
}, {
  keyCode: 18,
  values: 'alt',
  key: 'AltGraph',
  code: 'AltRight',
  isFunctional: true
}, {
  keyCode: 37,
  values: '⇦',
  key: 'ArrowLeft',
  code: 'ArrowLeft',
  isFunctional: true
}, {
  keyCode: 40,
  values: '⇩',
  key: 'ArrowDown',
  code: 'ArrowDown',
  isFunctional: true
}, {
  keyCode: 39,
  values: '⇨',
  key: 'ArrowRight',
  code: 'ArrowRight',
  isFunctional: true
}, {
  keyCode: 17,
  values: 'ctrl',
  key: 'Control',
  code: 'ControlRight',
  isFunctional: true
}];
function generateId() {
  var id = Math.random().toString(36).substring(2);
  return id;
}
var buttonsWithId = buttons.map(function (button) {
  return _objectSpread({
    id: generateId()
  }, button);
});
/* harmony default export */ const dataButtons = (buttonsWithId);
;// CONCATENATED MODULE: ./src/index.js
function src_typeof(obj) { "@babel/helpers - typeof"; return src_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, src_typeof(obj); }


var appContainer = document.getElementById('app-keyboard');
var Keyboard = {
  mode: 'lowercase',
  locale: 'en',
  textarea: null,
  init: function init() {
    appContainer.append(this.createSection());
  },
  createSection: function createSection() {
    var section = document.createElement('section');
    section.classList.add('keyboard');
    section.append(this.createContainer());
    return section;
  },
  createContainer: function createContainer() {
    var container = document.createElement('div');
    container.classList.add('container');
    container.append(this.createTitle(), this.createHandleToggleLang(this.locale), this.createWrapper());
    return container;
  },
  createTitle: function createTitle() {
    var title = document.createElement('h1');
    title.classList.add('keyboard__title');
    title.innerText = 'Virtual keyboard';
    return title;
  },
  createWrapper: function createWrapper() {
    var wrapper = document.createElement('div');
    wrapper.classList.add('keyboard__wrapper');
    wrapper.append(this.createTextarea(), this.createKeys());
    return wrapper;
  },
  createHandleToggleLang: function createHandleToggleLang(locale) {
    var _this = this;
    var language;
    if (locale === 'en') {
      language = 'English';
    } else if (locale === 'ru') {
      language = 'Русский';
    }
    var handlToggle = document.createElement('div');
    handlToggle.classList.add('checkbox-wrapper');
    var input = document.createElement('input');
    input.id = 'toggle-lang';
    input.type = 'checkbox';
    var span = document.createElement('span');
    span.classList.add('keyboard__chebox-lang');
    span.innerText = "".concat(language);
    handlToggle.append(input, span);
    handlToggle.addEventListener('click', function () {
      _this.switchLanguage();
    });
    return handlToggle;
  },
  createTextarea: function createTextarea() {
    var textarea = document.createElement('textarea');
    textarea.id = 'text-display';
    textarea.classList.add('keyboard__text-display');
    this.textarea = textarea;
    textarea.focus();
    return textarea;
  },
  createRow: function createRow(startRow, endRow, arrButtons) {
    var buttonsRowElement = document.createElement('ul');
    buttonsRowElement.classList.add('keyboard__row');
    for (startRow; startRow < endRow; startRow++) {
      var newButton = this.createButton(arrButtons[startRow]);
      buttonsRowElement.append(newButton);
    }
    return buttonsRowElement;
  },
  createButton: function createButton(buttonObj) {
    var buttonElement = document.createElement('li');
    buttonElement.classList.add('key');
    buttonElement.id = buttonObj.id;
    this.renderButton(buttonObj, buttonElement);
    return buttonElement;
  },
  renderButton: function renderButton(buttonObj, buttonElement) {
    if (src_typeof(buttonObj.values) === 'object') {
      if (src_typeof(buttonObj.values[this.locale]) === 'object') {
        buttonElement.textContent = buttonObj.values[this.locale][this.mode];
      } else {
        buttonElement.textContent = buttonObj.values[this.locale];
      }
    } else {
      buttonElement.textContent = buttonObj.values;
    }
  },
  findButtonById: function findButtonById(id) {
    return dataButtons.find(function (buttonObj) {
      return buttonObj.id === id;
    });
  },
  findButtonByCode: function findButtonByCode(keyCode) {
    var result = dataButtons.find(function (buttonObj) {
      if (buttonObj.keyCode === keyCode) {
        return true;
      }
    });
    return result;
  },
  createKeys: function createKeys() {
    var _this2 = this;
    var keys = document.createElement('div');
    keys.id = 'keyboard';
    keys.classList.add('keyboard__keys');
    keys.append(this.createRow(0, 14, dataButtons));
    keys.append(this.createRow(14, 29, dataButtons));
    keys.append(this.createRow(29, 42, dataButtons));
    keys.append(this.createRow(42, 55, dataButtons));
    keys.append(this.createRow(55, 64, dataButtons));
    keys.addEventListener('click', function (e) {
      var target = e.target;
      var button = _this2.findButtonById(target.id);
      var textarea = _this2.textarea;
      textarea.focus();
      if (target.classList.contains('key')) {
        if (!button.hasOwnProperty('isFunctional')) {
          textarea.value += target.textContent;
        } else {
          if (button.keyCode === 32) {
            _this2.useSpace();
          } else if (button.keyCode === 13) {
            e.preventDefault();
            _this2.useEnter();
          } else if (button.keyCode === 46) {
            e.preventDefault();
            console.log('pressedKey Delete');
          } else if (button.keyCode === 8) {
            _this2.useBackspace();
          } else if (button.keyCode === 18) {
            console.log('pressedKey Alt');
            e.preventDefault();
          } else if (button.keyCode === 17) {
            console.log('pressedKey Control');
            e.preventDefault();
          } else if (button.keyCode === 16) {
            e.preventDefault();
            console.log('pressedKey Shift');
          } else if (button.keyCode === 9) {
            e.preventDefault();
            _this2.useTab();
          } else if (button.keyCode === 20) {
            console.log('pressedKey Capslock');
          } else if (button.keyCode === 38) {
            _this2.useArrowTop(textarea);
            console.log('pressedKey ⇧');
          } else if (button.keyCode === 37) {
            _this2.useArrowLeft(textarea);
            console.log('pressedKey ⇦');
          } else if (button.keyCode === 40) {
            _this2.useArrowBottom(textarea);
            console.log('pressedKey ⇩');
          } else if (button.keyCode === 39) {
            _this2.useArrowRight(textarea);
            console.log('pressedKey ⇨');
          } else if (button.keyCode === 91) {
            e.preventDefault();
            console.log('pressedKey Meta');
          }
          _this2.textarea.value = _this2.textarea.value;
        }
      }
    });
    this.initiateHandlerKeyDown();
    this.initiateHandlerKeyUp();
    return keys;
  },
  initiateHandlerKeyDown: function initiateHandlerKeyDown() {
    var _this3 = this;
    document.addEventListener('keydown', function (e) {
      var pressedKeyCode = e.keyCode;
      var presedKey = e.key;
      var textarea = _this3.textarea;
      textarea.focus();
      var button = _this3.findButtonByCode(pressedKeyCode);
      if (button) {
        var key = document.getElementById(button.id);
        key.classList.add('active');
      }
      if (!button.hasOwnProperty('isFunctional')) {
        textarea.value += presedKey;
      } else if (pressedKeyCode === 32) {
        _this3.useSpace();
      } else if (pressedKeyCode === 13) {
        e.preventDefault();
        _this3.useEnter();
      } else if (pressedKeyCode === 46) {
        _this3.useDelete(textarea);
        e.preventDefault();
      } else if (pressedKeyCode === 8) {
        _this3.useBackspace();
      } else if (pressedKeyCode === 18) {
        console.log('pressedKey Alt');
        e.preventDefault();
      } else if (pressedKeyCode === 17) {
        console.log('pressedKey Control');
        e.preventDefault();
      } else if (button.code === 'ShiftLeft') {
        e.preventDefault();
        console.log('pressedKey ShiftLeft');
        // this.switchMode();
      } else if (pressedKeyCode === 9) {
        _this3.useTab();
        e.preventDefault();
      } else if (pressedKeyCode === 20) {
        console.log('pressedKey Capslock');
        // this.switchMode();
      } else if (pressedKeyCode === 38) {
        _this3.useArrowTop(textarea);
        console.log('pressedKey ⇧');
      } else if (pressedKeyCode === 37) {
        _this3.useArrowLeft(textarea);
        console.log('pressedKey ⇦');
      } else if (pressedKeyCode === 40) {
        _this3.useArrowBottom(textarea);
        console.log('pressedKey ⇩');
      } else if (pressedKeyCode === 39) {
        _this3.useArrowRight(textarea);
        console.log('pressedKey ⇨');
      } else if (pressedKeyCode === 91) {
        e.preventDefault();
        console.log('pressedKey Windows');
      } else {
        textarea.value = textarea.value;
      }
    });
  },
  initiateHandlerKeyUp: function initiateHandlerKeyUp() {
    var _this4 = this;
    document.addEventListener('keyup', function (e) {
      var pressedKeyCode = e.keyCode;
      var button = _this4.findButtonByCode(pressedKeyCode);
      if (button) {
        var key = document.getElementById(button.id);
        key.classList.remove('active');
      }

      // if (keyCode === 16) {
      //   console.log('pressedKey Shift');
      //   e.preventDefault();
      // this.switchMode();
      // }
    });
  },
  useSpace: function useSpace() {
    this.textarea.value += ' ';
  },
  useTab: function useTab() {
    this.textarea.value += '    ';
  },
  useEnter: function useEnter() {
    this.textarea.value += '\n';
  },
  useBackspace: function useBackspace() {
    this.textarea.value = this.textarea.value.slice(0, -1);
  },
  useDelete: function useDelete(textarea) {
    var currentPos = textarea.selectionStart;
    var endPos = textarea.selectionEnd;
    var text = textarea.value;
    if (currentPos === endPos) {
      // Если нет выделенного текста
      text = text.slice(0, currentPos) + text.slice(currentPos + 1); // Удаляем символ после курсора
    } else {
      // Если есть выделенный текст
      text = text.slice(0, currentPos) + text.slice(endPos); // Удаляем выделенный текст
    }

    textarea.value = text; // Обновляем значение textarea
    textarea.selectionStart = currentPos; // Устанавливаем курсор на том же месте
    textarea.selectionEnd = currentPos;
  },
  useArrowRight: function useArrowRight(textarea) {
    var currentPos = textarea.selectionStart;
    textarea.setSelectionRange(currentPos + 1, currentPos + 1);
  },
  useArrowLeft: function useArrowLeft(textarea) {
    var currentPos = textarea.selectionStart;
    textarea.setSelectionRange(currentPos - 1, currentPos - 1);
  },
  useArrowBottom: function useArrowBottom(textarea) {
    var currentPosition = textarea.selectionStart;
    var currentLine = textarea.value.substr(0, currentPosition).split('\n').length - 1;
    var lineLength = textarea.value.split('\n')[currentLine].length;
    var nextPosition;
    if (currentLine === textarea.value.split('\n').length - 1) {
      nextPosition = currentPosition;
    } else {
      nextPosition = Math.min(currentPosition + lineLength + 1, textarea.value.length);
    }
    textarea.setSelectionRange(nextPosition, nextPosition);
  },
  useArrowTop: function useArrowTop(textarea) {
    var currentPosition = textarea.selectionStart;
    var currentLine = textarea.value.substr(0, currentPosition).split('\n').length - 1;
    var lineLength = textarea.value.split('\n')[currentLine].length;
    var prevPosition;
    if (currentLine === 0) {
      prevPosition = currentPosition;
    } else {
      prevPosition = Math.max(currentPosition - lineLength - 1, 0);
    }
    textarea.setSelectionRange(prevPosition, prevPosition);
  },
  switchMode: function switchMode() {
    this.mode = this.mode === 'uppercase' ? 'lowercase' : 'uppercase';
    console.log('switchMode', this.mode);
  },
  switchLanguage: function switchLanguage() {
    this.locale = this.locale === 'en' ? 'ru' : 'en';
    this.rerender();
    console.log('switchLanguage', this.locale);
  },
  rerender: function rerender() {
    // Keyboard.createKeys();
  }
};
window.addEventListener('DOMContentLoaded', function () {
  Keyboard.init();
});
/******/ })()
;