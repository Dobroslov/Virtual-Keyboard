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
  eventCode: 'Backquote',
  values: {
    en: {
      lowercase: '`',
      uppercase: '~'
    },
    ru: 'ё'
  }
}, {
  eventCode: 'Digit1',
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
  eventCode: 'Digit2',
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
  eventCode: 'Digit3',
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
  eventCode: 'Digit4',
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
  eventCode: 'Digit5',
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
  eventCode: 'Digit6',
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
  eventCode: 'Digit7',
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
  eventCode: 'Digit8',
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
  eventCode: 'Digit9',
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
  eventCode: 'Digit0',
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
  eventCode: 'Minus',
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
  eventCode: 'Equal',
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
  eventCode: 'Backspace',
  isFunctional: true
}, {
  keyCode: 9,
  values: 'tab',
  eventCode: 'Tab',
  isFunctional: true
}, {
  keyCode: 81,
  eventCode: 'KeyQ',
  values: {
    en: 'q',
    ru: 'й'
  }
}, {
  keyCode: 87,
  eventCode: 'KeyW',
  values: {
    en: 'w',
    ru: 'ц'
  }
}, {
  keyCode: 69,
  eventCode: 'KeyE',
  values: {
    en: 'e',
    ru: 'у'
  }
}, {
  keyCode: 82,
  eventCode: 'KeyR',
  values: {
    en: 'r',
    ru: 'к'
  }
}, {
  keyCode: 84,
  eventCode: 'KeyT',
  values: {
    en: 't',
    ru: 'е'
  }
}, {
  keyCode: 89,
  eventCode: 'KeyY',
  values: {
    en: 'y',
    ru: 'н'
  }
}, {
  keyCode: 85,
  eventCode: 'KeyU',
  values: {
    en: 'u',
    ru: 'г'
  }
}, {
  keyCode: 73,
  eventCode: 'KeyI',
  values: {
    en: 'i',
    ru: 'ш'
  }
}, {
  keyCode: 79,
  eventCode: 'KeyO',
  values: {
    en: 'o',
    ru: 'щ'
  }
}, {
  keyCode: 80,
  eventCode: 'KeyP',
  values: {
    en: 'p',
    ru: 'з'
  }
}, {
  keyCode: 219,
  eventCode: 'BracketLeft',
  values: {
    en: {
      lowercase: '[',
      uppercase: '{'
    },
    ru: 'х'
  }
}, {
  keyCode: 221,
  eventCode: 'BracketRight',
  values: {
    en: {
      lowercase: ']',
      uppercase: '}'
    },
    ru: 'ъ'
  }
}, {
  keyCode: 220,
  eventCode: 'Backslash',
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
  eventCode: 'Delete',
  values: 'del',
  isFunctional: true
}, {
  keyCode: 20,
  eventCode: 'CapsLock',
  values: 'caps',
  isFunctional: true
}, {
  eventCode: 'KeyA',
  keyCode: 65,
  values: {
    en: 'a',
    ru: 'ф'
  }
}, {
  eventCode: 'KeyS',
  keyCode: 83,
  values: {
    en: 's',
    ru: 'ы'
  }
}, {
  eventCode: 'KeyD',
  keyCode: 68,
  values: {
    en: 'd',
    ru: 'в'
  }
}, {
  eventCode: 'KeyF',
  keyCode: 70,
  values: {
    en: 'f',
    ru: 'а'
  }
}, {
  eventCode: 'KeyG',
  keyCode: 71,
  values: {
    en: 'g',
    ru: 'п'
  }
}, {
  eventCode: 'KeyH',
  keyCode: 72,
  values: {
    en: 'h',
    ru: 'р'
  }
}, {
  eventCode: 'KeyJ',
  keyCode: 74,
  values: {
    en: 'j',
    ru: 'о'
  }
}, {
  eventCode: 'KeyK',
  keyCode: 75,
  values: {
    en: 'k',
    ru: 'л'
  }
}, {
  eventCode: 'KeyL',
  keyCode: 76,
  values: {
    en: 'l',
    ru: 'д'
  }
}, {
  eventCode: 'Semicolon',
  keyCode: 186,
  values: {
    en: {
      lowercase: ';',
      uppercase: ':'
    },
    ru: 'ж'
  }
}, {
  eventCode: 'Quote',
  keyCode: 222,
  values: {
    en: {
      lowercase: "'",
      uppercase: '"'
    },
    ru: 'э'
  }
}, {
  keyCode: 13,
  eventCode: 'Enter',
  values: 'enter',
  isFunctional: true
}, {
  keyCode: 16,
  eventCode: 'ShiftLeft',
  values: 'shift',
  isFunctional: true
}, {
  eventCode: 'KeyZ',
  keyCode: 90,
  values: {
    en: 'z',
    ru: 'я'
  }
}, {
  eventCode: 'KeyX',
  keyCode: 88,
  values: {
    en: 'x',
    ru: 'ч'
  }
}, {
  eventCode: 'KeyC',
  keyCode: 67,
  values: {
    en: 'c',
    ru: 'с'
  }
}, {
  eventCode: 'KeyV',
  keyCode: 86,
  values: {
    en: 'v',
    ru: 'м'
  }
}, {
  eventCode: 'KeyB',
  keyCode: 66,
  values: {
    en: 'b',
    ru: 'и'
  }
}, {
  eventCode: 'KeyN',
  keyCode: 78,
  values: {
    en: 'n',
    ru: 'т'
  }
}, {
  eventCode: 'KeyM',
  keyCode: 77,
  values: {
    en: 'm',
    ru: 'ь'
  }
}, {
  eventCode: 'Comma',
  keyCode: 188,
  values: {
    en: {
      lowercase: ',',
      uppercase: '<'
    },
    ru: 'б'
  }
}, {
  eventCode: 'Period',
  keyCode: 190,
  values: {
    en: {
      lowercase: '.',
      uppercase: '>'
    },
    ru: 'ю'
  }
}, {
  eventCode: 'Slash',
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
  eventCode: 'ArrowUp',
  values: '⇧',
  isFunctional: true
}, {
  keyCode: 16,
  eventCode: 'ShiftRight',
  values: 'shift',
  isFunctional: true
}, {
  keyCode: 17,
  eventCode: 'ControlLeft',
  values: 'ctrl',
  isFunctional: true
}, {
  keyCode: 91,
  eventCode: 'MetaLeft',
  values: 'win',
  isFunctional: true
}, {
  keyCode: 18,
  eventCode: 'AltLeft',
  values: 'alt',
  isFunctional: true
}, {
  keyCode: 32,
  eventCode: 'Space',
  values: 'space',
  key: ' ',
  isFunctional: true
}, {
  keyCode: 18,
  eventCode: 'AltRight',
  values: 'alt',
  key: 'AltGraph',
  isFunctional: true
}, {
  keyCode: 37,
  eventCode: 'ArrowLeft',
  values: '⇦',
  key: 'ArrowLeft',
  isFunctional: true
}, {
  keyCode: 40,
  eventCode: 'ArrowDown',
  values: '⇩',
  key: 'ArrowDown',
  isFunctional: true
}, {
  keyCode: 39,
  eventCode: 'ArrowRight',
  values: '⇨',
  key: 'ArrowRight',
  isFunctional: true
}, {
  keyCode: 17,
  eventCode: 'ControlRight',
  values: 'ctrl',
  key: 'Control',
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


var body = document.body;
var Keyboard = {
  mode: 'lowercase',
  locale: 'en',
  textarea: null,
  shift: false,
  alt: false,
  isCapsPressed: false,
  keyFunctions: null,
  init: function init() {
    body.append(this.createSection());
    this.initiateKeyFunctions();
    // Для избежания дублирования символов при нажатии кнопок на физической клавиатуре

    document.addEventListener('keydown', function (e) {
      var target = e.target;
      if (target.tagName === 'TEXTAREA') {
        e.preventDefault();
      }
    });
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
    container.append(this.createTitle(), this.createInfoPanelWrapper(), this.createWrapper());
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
    wrapper.append(this.createTextarea(), this.createKeyboard());
    return wrapper;
  },
  createInfoPanelWrapper: function createInfoPanelWrapper() {
    var panel = document.createElement('div');
    panel.classList.add('keyboard__panel-info');
    panel.append(this.createHandleToggleLang(), this.createButtonExample());
    return panel;
  },
  createHandleToggleLang: function createHandleToggleLang() {
    var _this = this;
    var handleToggle = document.createElement('div');
    handleToggle.classList.add('checkbox-wrapper');
    var input = document.createElement('input');
    input.id = 'toggle-lang';
    input.type = 'checkbox';
    var span = this.createHandleToggleSpan();
    handleToggle.append(input, span);
    this.updateLangLabel(span);
    document.addEventListener('keydown', function (e) {
      if (e.shiftKey && e.altKey) {
        input.checked = !input.checked;
        _this.switchLanguage();
        _this.updateLangLabel(span);
      }
    });
    handleToggle.addEventListener('click', function () {
      _this.switchLanguage();
      _this.updateLangLabel(span);
    });
    return handleToggle;
  },
  createHandleToggleSpan: function createHandleToggleSpan() {
    var span = document.createElement('span');
    span.classList.add('keyboard__chebox-lang');
    return span;
  },
  updateLangLabel: function updateLangLabel(span) {
    var language = this.locale === 'en' ? 'English' : 'Русский';
    span.innerText = "".concat(language);
  },
  createButtonExample: function createButtonExample() {
    var divExample = document.createElement('div');
    divExample.classList.add('info__buttons');
    var fistBtn = document.createElement('div');
    fistBtn.classList.add('key');
    fistBtn.textContent = 'Shift';
    var secondBtn = document.createElement('div');
    secondBtn.classList.add('key');
    secondBtn.textContent = 'Alt';
    var div = document.createElement('div');
    div.classList.add('info__buttons_text');
    div.textContent = '+';
    var divText = document.createElement('div');
    divText.classList.add('info__buttons_text');
    divText.textContent = 'Change language';
    divExample.append(fistBtn, div, secondBtn, divText);
    return divExample;
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
        buttonElement.textContent = this.handleMode(buttonObj.values[this.locale]);
      }
    } else {
      buttonElement.textContent = buttonObj.values;
    }
  },
  createKeyboard: function createKeyboard() {
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
          var keyFunction = _this2.keyFunctions[button.eventCode];
          if (keyFunction) {
            keyFunction(e, textarea);
          }
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
      if (e.repeat) {
        return;
      }
      var eventCode = e.code;
      var presedKey = e.key;
      var textarea = _this3.textarea;
      textarea.focus();
      var button = _this3.findButtonByCode(eventCode);

      // Подсветка кнопки при нажатии

      if (button) {
        var key = document.getElementById(button.id);
        key.classList.add('active');
      }
      if (button && !button.hasOwnProperty('isFunctional')) {
        textarea.value += presedKey;
      } else {
        var keyFunction = _this3.keyFunctions[button === null || button === void 0 ? void 0 : button.eventCode];
        if (keyFunction) {
          keyFunction(e, textarea);
        } else {
          textarea.value = textarea.value;
        }
      }
    });
  },
  initiateHandlerKeyUp: function initiateHandlerKeyUp() {
    var _this4 = this;
    document.addEventListener('keyup', function (e) {
      var pressedEventCode = e.code;
      var button = _this4.findButtonByCode(pressedEventCode);
      if (button) {
        var key = document.getElementById(button.id);
        if (button.eventCode === 'CapsLock') {
          return;
        } else if (button.eventCode === 'ShiftLeft' || button.eventCode === 'ShiftRight') {
          _this4.switchMode();
          key.classList.remove('active');
        } else {
          key.classList.remove('active');
        }
      }
    });
  },
  findButtonById: function findButtonById(id) {
    var button = dataButtons.find(function (buttonObj) {
      return buttonObj.id === id;
    });
    return button ? button : null;
  },
  findButtonByCode: function findButtonByCode(eventCode) {
    var result = dataButtons.find(function (buttonObj) {
      if (buttonObj.eventCode === eventCode) {
        return true;
      }
    });
    return result ? result : null;
  },
  switchMode: function switchMode() {
    this.mode = this.mode === 'uppercase' ? 'lowercase' : 'uppercase';
    this.rerender();
  },
  switchLanguage: function switchLanguage() {
    this.locale = this.locale === 'en' ? 'ru' : 'en';
    this.rerender();
  },
  handleMode: function handleMode(text) {
    return this.mode === 'uppercase' ? text.toUpperCase() : text.toLowerCase();
  },
  initiateKeyFunctions: function initiateKeyFunctions() {
    var _this5 = this;
    this.keyFunctions = {
      CapsLock: function CapsLock(e, textarea) {
        var button = _this5.findButtonByCode('CapsLock');
        var htmlButton = document.getElementById(button.id);
        var htmlClass = e.type === 'click' ? 'active-click' : 'active';
        if (_this5.isCapsPressed === false) {
          htmlButton.classList.add(htmlClass);
        } else {
          htmlButton.classList.remove(htmlClass);
        }
        _this5.isCapsPressed = !_this5.isCapsPressed;
        _this5.switchMode();
      },
      Space: function Space(e, textarea) {
        _this5.textarea.value += ' ';
      },
      Enter: function Enter(e, textarea) {
        e.preventDefault();
        _this5.textarea.value += '\n';
      },
      Delete: function Delete(e, textarea) {
        e.preventDefault();
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
      Backspace: function Backspace(e, textarea) {
        var currentPos = textarea.selectionStart;
        var endPos = textarea.selectionEnd;
        var text = textarea.value;
        if (currentPos === endPos) {
          // Если нет выделенного текста
          text = text.slice(0, currentPos - 1) + text.slice(currentPos); // Удаляем символ перед курсором
          textarea.selectionStart = currentPos - 1; // Сдвигаем курсор на один символ влево
          textarea.selectionEnd = currentPos - 1;
        } else {
          // Если есть выделенный текст
          text = text.slice(0, currentPos) + text.slice(endPos); // Удаляем выделенный текст
          textarea.selectionStart = currentPos; // Устанавливаем курсор на начало выделенного текста
          textarea.selectionEnd = currentPos;
        }
        textarea.value = text; // Обновляем значение textarea
      },

      AltLeft: function AltLeft(e, textarea) {},
      AltRight: function AltRight(e, textarea) {},
      ControlLeft: function ControlLeft(e, textarea) {},
      ControlRight: function ControlRight(e, textarea) {},
      ShiftLeft: function ShiftLeft(e, textarea) {
        e.preventDefault();
        _this5.switchMode();
      },
      ShiftRight: function ShiftRight(e, textarea) {
        e.preventDefault();
        _this5.switchMode();
      },
      Tab: function Tab(e, textarea) {
        e.preventDefault();
        _this5.textarea.value += '    ';
      },
      ArrowUp: function ArrowUp(e, textarea) {
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
      ArrowLeft: function ArrowLeft(e, textarea) {
        var currentPos = textarea.selectionStart;
        textarea.setSelectionRange(currentPos - 1, currentPos - 1);
      },
      ArrowDown: function ArrowDown(e, textarea) {
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
      ArrowRight: function ArrowRight(e, textarea) {
        var currentPos = textarea.selectionStart;
        textarea.setSelectionRange(currentPos + 1, currentPos + 1);
      },
      MetaLeft: function MetaLeft(e, textarea) {}
    };
  },
  rerender: function rerender() {
    var _this6 = this;
    dataButtons.forEach(function (button) {
      if (button) {
        var buttonObj = document.getElementById(button.id);
        _this6.renderButton(button, buttonObj);
      }
    });
  }
};
window.addEventListener('DOMContentLoaded', function () {
  Keyboard.init();
});
/******/ })()
;