import './main.scss';
import buttons from './dataButtons';

const appContainer = document.getElementById('app-keyboard');

const Keyboard = {
  mode: 'lowercase',
  locale: 'en',
  textarea: null,

  init() {
    appContainer.append(this.createSection());
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
    wrapper.append(this.createTextarea(), this.createKeys());
    return wrapper;
  },

  createHandleToggleLang(locale) {
    let language;
    if (locale === 'en') {
      language = 'English';
    } else if (locale === 'ru') {
      language = 'Русский';
    }

    const handlToggle = document.createElement('div');
    handlToggle.classList.add('checkbox-wrapper');
    const input = document.createElement('input');
    input.id = 'toggle-lang';
    input.type = 'checkbox';
    const span = document.createElement('span');
    span.classList.add('keyboard__chebox-lang');
    span.innerText = `${language}`;
    handlToggle.append(input, span);
    handlToggle.addEventListener('click', () => {
      this.switchLanguage();
    });
    return handlToggle;
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
        buttonElement.textContent = buttonObj.values[this.locale];
      }
    } else {
      buttonElement.textContent = buttonObj.values;
    }
  },

  findButtonById(id) {
    return buttons.find((buttonObj) => buttonObj.id === id);
  },

  findButtonByCode(keyCode) {
    let result = buttons.find((buttonObj) => {
      if (buttonObj.keyCode === keyCode) {
        return true;
      }
    });

    return result;
  },

  createKeys() {
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
          if (button.keyCode === 32) {
            this.useSpace();
          } else if (button.keyCode === 13) {
            e.preventDefault();
            this.useEnter();
          } else if (button.keyCode === 46) {
            e.preventDefault();
            console.log('pressedKey Delete');
          } else if (button.keyCode === 8) {
            this.useBackspace();
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
            this.useTab();
          } else if (button.keyCode === 20) {
            console.log('pressedKey Capslock');
          } else if (button.keyCode === 38) {
            this.useArrowTop(textarea);
            console.log('pressedKey ⇧');
          } else if (button.keyCode === 37) {
            this.useArrowLeft(textarea);
            console.log('pressedKey ⇦');
          } else if (button.keyCode === 40) {
            this.useArrowBottom(textarea);
            console.log('pressedKey ⇩');
          } else if (button.keyCode === 39) {
            this.useArrowRight(textarea);
            console.log('pressedKey ⇨');
          } else if (button.keyCode === 91) {
            e.preventDefault();
            console.log('pressedKey Meta');
          }
          this.textarea.value = this.textarea.value;
        }
      }
    });

    this.initiateHandlerKeyDown();
    this.initiateHandlerKeyUp();
    return keys;
  },

  initiateHandlerKeyDown() {
    document.addEventListener('keydown', (e) => {
      const pressedKeyCode = e.keyCode;
      const presedKey = e.key;
      const textarea = this.textarea;
      textarea.focus();
      let button = this.findButtonByCode(pressedKeyCode);

      if (button) {
        const key = document.getElementById(button.id);
        key.classList.add('active');
      }

      if (!button.hasOwnProperty('isFunctional')) {
        textarea.value += presedKey;
      } else if (pressedKeyCode === 32) {
        this.useSpace();
      } else if (pressedKeyCode === 13) {
        e.preventDefault();
        this.useEnter();
      } else if (pressedKeyCode === 46) {
        this.useDelete(textarea);
        e.preventDefault();
      } else if (pressedKeyCode === 8) {
        this.useBackspace();
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
        this.useTab();
        e.preventDefault();
      } else if (pressedKeyCode === 20) {
        console.log('pressedKey Capslock');
        // this.switchMode();
      } else if (pressedKeyCode === 38) {
        this.useArrowTop(textarea);
        console.log('pressedKey ⇧');
      } else if (pressedKeyCode === 37) {
        this.useArrowLeft(textarea);
        console.log('pressedKey ⇦');
      } else if (pressedKeyCode === 40) {
        this.useArrowBottom(textarea);
        console.log('pressedKey ⇩');
      } else if (pressedKeyCode === 39) {
        this.useArrowRight(textarea);
        console.log('pressedKey ⇨');
      } else if (pressedKeyCode === 91) {
        e.preventDefault();
        console.log('pressedKey Windows');
      } else {
        textarea.value = textarea.value;
      }
    });
  },

  initiateHandlerKeyUp() {
    document.addEventListener('keyup', (e) => {
      const pressedKeyCode = e.keyCode;
      let button = this.findButtonByCode(pressedKeyCode);
      if (button) {
        const key = document.getElementById(button.id);
        key.classList.remove('active');
      }

      // if (keyCode === 16) {
      //   console.log('pressedKey Shift');
      //   e.preventDefault();
      // this.switchMode();
      // }
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

  useBackspace() {
    this.textarea.value = this.textarea.value.slice(0, -1);
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
    console.log('switchMode', this.mode);
  },

  switchLanguage() {
    this.locale = this.locale === 'en' ? 'ru' : 'en';
    this.rerender();
    console.log('switchLanguage', this.locale);
  },

  rerender() {
    // Keyboard.createKeys();
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});
