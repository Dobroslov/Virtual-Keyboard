import './main.scss';
import buttons from './dataButtons';

const body = document.body;

const Keyboard = {
  mode: 'lowercase',
  locale: 'en',
  textarea: null,
  shift: false,
  isCapsPressed: false,
  keyFunctions: null,

  init() {
    body.append(this.createSection());
    this.initiateKeyFunctions();
    // Для избежания дублирования символов при нажатии кнопок на физической клавиатуре

    document.addEventListener('keydown', (e) => {
      const target = e.target;
      if (target.tagName === 'TEXTAREA') {
        e.preventDefault();
      }
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
    container.append(
      this.createTitle(),
      this.createHandleToggleLang(this.locale),
      this.createWrapper()
    );
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
    wrapper.append(this.createTextarea(), this.createKeyboard());
    return wrapper;
  },

  createHandleToggleLang() {
    const handlToggle = document.createElement('div');
    handlToggle.classList.add('checkbox-wrapper');
    const input = document.createElement('input');
    input.id = 'toggle-lang';
    input.type = 'checkbox';
    const span = this.createHandleToggleSpan();
    handlToggle.append(input, span);
    this.updateLangLabel(span);
    document.addEventListener('keydown', (e) => {
      if (e.shiftKey && e.altKey) {
        this.switchLanguage();
        this.updateLangLabel(span);
      }
    });
    handlToggle.addEventListener('click', () => {
      this.switchLanguage();
      this.updateLangLabel(span);
    });
    return handlToggle;
  },

  createHandleToggleSpan() {
    const span = document.createElement('span');
    span.classList.add('keyboard__chebox-lang');
    return span;
  },

  updateLangLabel(span) {
    const language = this.locale === 'en' ? 'English' : 'Русский';
    span.innerText = `${language}`;
  },

  createTextarea() {
    const textarea = document.createElement('textarea');
    textarea.id = 'text-display';
    textarea.classList.add('keyboard__text-display');
    this.textarea = textarea;
    textarea.focus();
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
    this.renderButton(buttonObj, buttonElement);

    return buttonElement;
  },

  renderButton(buttonObj, buttonElement) {
    if (typeof buttonObj.values === 'object') {
      if (typeof buttonObj.values[this.locale] === 'object') {
        buttonElement.textContent = buttonObj.values[this.locale][this.mode];
      } else {
        buttonElement.textContent = this.handleMode(
          buttonObj.values[this.locale]
        );
      }
    } else {
      buttonElement.textContent = buttonObj.values;
    }
  },

  createKeyboard() {
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
      let button = this.findButtonById(target.id);
      let textarea = this.textarea;
      textarea.focus();
      if (target.classList.contains('key')) {
        if (!button.hasOwnProperty('isFunctional')) {
          textarea.value += target.textContent;
        } else {
          let keyFunction = this.keyFunctions[button.eventCode];
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

  handleMode(text) {
    return this.mode === 'uppercase' ? text.toUpperCase() : text.toLowerCase();
  },

  findButtonById(id) {
    const button = buttons.find((buttonObj) => buttonObj.id === id);
    return button ? button : null;
  },

  findButtonByCode(eventCode) {
    let result = buttons.find((buttonObj) => {
      if (buttonObj.eventCode === eventCode) {
        return true;
      }
    });

    return result ? result : null;
  },

  initiateHandlerKeyDown() {
    document.addEventListener('keydown', (e) => {
      if (e.repeat) {
        return;
      }
      const eventCode = e.code;
      const presedKey = e.key;
      const textarea = this.textarea;
      textarea.focus();

      let button = this.findButtonByCode(eventCode);

      // Подсветка кнопки при нажатии

      if (button) {
        const key = document.getElementById(button.id);
        if (button.eventCode === 'CapsLock') {
          this.handleCapsLock(key);
        } else {
          key.classList.add('active');
        }
      }

      if (button && !button.hasOwnProperty('isFunctional')) {
        textarea.value += presedKey;
      } else {
        let keyFunction = this.keyFunctions[button.eventCode];
        if (keyFunction) {
          keyFunction(e, textarea);
        } else {
          textarea.value = textarea.value;
        }
      }
    });
  },

  handleCapsLock(key) {
    if (this.isCapsPressed === false) {
      console.log(this.isCapsPressed);
      key.classList.add('active');
      this.isCapsPressed = true;
      console.log(this.isCapsPressed);
    } else {
      key.classList.remove('active');
      this.isCapsPressed = false;
    }
  },

  initiateHandlerKeyUp() {
    document.addEventListener('keyup', (e) => {
      const pressedEventCode = e.code;
      let button = this.findButtonByCode(pressedEventCode);
      if (button) {
        const key = document.getElementById(button.id);
        if (button.eventCode === 'CapsLock') {
          return;
        } else {
          key.classList.remove('active');
        }
      }
    });
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

  useBackspace(textarea) {
    let currentPos = textarea.selectionStart;
    let endPos = textarea.selectionEnd;
    let text = textarea.value;
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

  useDelete(textarea) {
    let currentPos = textarea.selectionStart;
    let endPos = textarea.selectionEnd;
    let text = textarea.value;
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

  useArrowRight(textarea) {
    const currentPos = textarea.selectionStart;
    textarea.setSelectionRange(currentPos + 1, currentPos + 1);
  },

  useArrowLeft(textarea) {
    const currentPos = textarea.selectionStart;
    textarea.setSelectionRange(currentPos - 1, currentPos - 1);
  },

  useArrowBottom(textarea) {
    const currentPosition = textarea.selectionStart;
    const currentLine =
      textarea.value.substr(0, currentPosition).split('\n').length - 1;
    const lineLength = textarea.value.split('\n')[currentLine].length;
    let nextPosition;
    if (currentLine === textarea.value.split('\n').length - 1) {
      nextPosition = currentPosition;
    } else {
      nextPosition = Math.min(
        currentPosition + lineLength + 1,
        textarea.value.length
      );
    }
    textarea.setSelectionRange(nextPosition, nextPosition);
  },

  useArrowTop(textarea) {
    const currentPosition = textarea.selectionStart;
    const currentLine =
      textarea.value.substr(0, currentPosition).split('\n').length - 1;
    const lineLength = textarea.value.split('\n')[currentLine].length;
    let prevPosition;
    if (currentLine === 0) {
      prevPosition = currentPosition;
    } else {
      prevPosition = Math.max(currentPosition - lineLength - 1, 0);
    }
    textarea.setSelectionRange(prevPosition, prevPosition);
  },

  switchMode() {
    this.mode = this.mode === 'uppercase' ? 'lowercase' : 'uppercase';
    this.rerender();
  },

  switchLanguage() {
    this.locale = this.locale === 'en' ? 'ru' : 'en';
    this.rerender();
  },

  initiateKeyFunctions() {
    this.keyFunctions = {
      Space: (e, textarea) => this.useSpace(),
      Enter: (e, textarea) => {
        e.preventDefault();
        this.useEnter();
      },
      Delete: (e, textarea) => {
        e.preventDefault();
        this.useDelete(textarea);
      },
      Backspace: (e, textarea) => this.useBackspace(textarea),
      AltLeft: (e, textarea) => {
        e.preventDefault();
      },
      AltRight: (e, textarea) => {
        e.preventDefault();
      },
      ControlLeft: (e, textarea) => {
        e.preventDefault();
      },
      ControlRight: (e, textarea) => {
        e.preventDefault();
      },
      ShiftLeft: (e, textarea) => {
        e.preventDefault();
        console.log(e.key);
        this.switchMode();
      },
      ShiftRight: (e, textarea) => {
        e.preventDefault();
        this.switchMode();
      },
      Tab: (e, textarea) => {
        e.preventDefault();
        this.useTab();
      },
      CapsLock: (e, textarea) => {
        console.log();
        this.switchMode();
      },
      ArrowUp: (e, textarea) => {
        this.useArrowTop(textarea);
      },
      ArrowLeft: (e, textarea) => {
        this.useArrowLeft(textarea);
      },
      ArrowDown: (e, textarea) => {
        this.useArrowBottom(textarea);
      },
      ArrowRight: (e, textarea) => {
        this.useArrowRight(textarea);
      },
      MetaLeft: (e, textarea) => {},
    };
  },

  rerenderButton(button) {},

  rerender() {
    buttons.forEach((button) => {
      if (button) {
        const buttonObj = document.getElementById(button.id);
        this.renderButton(button, buttonObj);
      }
    });
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});

// смена языка на клавиатуре ++
// смена на заглавные буквы 1) нажимаем capslock 2) нажимаем shift--
// подсветка дублирующих кнопок при нажатии ++
// фикс двойных символов ++
// фикс нажатия неизвестных кнопок которые дают undfined ++
// создание боковой панели для сочетания клавишь
// создание одной функции для switch ++
// рефакторинг кода, возможно создание класса +-
// доделать стили
// доделать удаление через backspace так же как и на del ++
