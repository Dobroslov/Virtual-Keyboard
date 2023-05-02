import './main.scss';
import buttons from './dataButtons';

const appContainer = document.getElementById('app-keyboard');

const Keyboard = {
  mode: 'lowercase',
  locale: 'en',
  textarea: null,
  shift: false,
  capsLock: false,
  // keyFunctions: {
  //   Space: () => this.useSpace(),
  //   Enter: (e) => {
  //     e.preventDefault();
  //     this.useEnter();
  //   },
  //   Delete: (e) => {
  //     e.preventDefault();
  //     console.log('pressedKey Delete');
  //   },
  //   Backspace: () => this.useBackspace(),
  //   AltLeft: (e) => {
  //     console.log('pressedKey Alt');
  //     e.preventDefault();
  //   },
  //   AltRight: (e) => {
  //     console.log('pressedKey Alt');
  //     e.preventDefault();
  //   },
  //   ControlLeft: (e) => {
  //     console.log('pressedKey Control');
  //     e.preventDefault();
  //   },
  //   ControlRight: (e) => {
  //     console.log('pressedKey Control');
  //     e.preventDefault();
  //   },
  //   ShiftLeft: (e) => {
  //     console.log('pressedKey ShiftRight');
  //     e.preventDefault();
  //   },
  //   ShiftRight: (e) => {
  //     console.log('pressedKey ShiftRight');
  //     e.preventDefault();
  //   },
  //   Tab: (e) => {
  //     e.preventDefault();
  //     this.useTab();
  //   },
  //   CapsLock: () => {
  //     console.log('pressedKey Capslock');
  //   },
  //   ArrowUp: () => {
  //     this.useArrowTop(textarea);
  //     console.log('pressedKey ⇧');
  //   },
  //   ArrowLeft: () => {
  //     this.useArrowLeft(textarea);
  //     console.log('pressedKey ⇦');
  //   },
  //   ArrowDown: () => {
  //     this.useArrowBottom(textarea);
  //     console.log('pressedKey ⇩');
  //   },
  //   ArrowRight: () => {
  //     this.useArrowRight(textarea);
  //     console.log('pressedKey ⇨');
  //   },
  //   MetaLeft: (e) => {
  //     console.log('pressedKey Meta');
  //   },
  // },

  init() {
    appContainer.append(this.createSection());
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

  findButtonByCode(eventCode) {
    let result = buttons.find((buttonObj) => {
      if (buttonObj.eventCode === eventCode) {
        return true;
      }
    });

    return result;
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
          if (button.eventCode === 'Space') {
            this.useSpace();
          } else if (button.eventCode === 'Enter') {
            e.preventDefault();
            this.useEnter();
          } else if (button.eventCode === 'Delete') {
            this.useDelete(textarea)
            e.preventDefault();
            console.log('pressedKey Delete');
          } else if (button.eventCode === 'Backspace') {
            this.useBackspace();
          } else if (
            button.eventCode === 'AltLeft' ||
            button.eventCode === 'AltRight'
          ) {
            console.log('pressedKey Alt');
            e.preventDefault();
          } else if (
            button.eventCode === 'ControlRight' ||
            button.eventCode === 'ControlLeft'
          ) {
            console.log('pressedKey Control');
            e.preventDefault();
          } else if (
            button.eventCode === 'ShiftLeft' ||
            button.eventCode === 'ShiftRight'
          ) {
            e.preventDefault();
            console.log('pressedKey ShiftRight');
          } else if (button.eventCode === 'Tab') {
            e.preventDefault();
            this.useTab();
          } else if (button.eventCode === 'CapsLock') {
            console.log('pressedKey Capslock');
          } else if (button.eventCode === 'ArrowUp') {
            this.useArrowTop(textarea);
            console.log('pressedKey ⇧');
          } else if (button.eventCode === 'ArrowLeft') {
            this.useArrowLeft(textarea);
            console.log('pressedKey ⇦');
          } else if (button.eventCode === 'ArrowDown') {
            this.useArrowBottom(textarea);
            console.log('pressedKey ⇩');
          } else if (button.eventCode === 'ArrowRight') {
            this.useArrowRight(textarea);
            console.log('pressedKey ⇨');
          } else if (button.eventCode === 'MetaLeft') {
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
      const eventCode = e.code;
      const presedKey = e.key;
      const textarea = this.textarea;
      textarea.focus();

      let button = this.findButtonByCode(eventCode);
      // Подсветка кнопки при нажатии
      if (button) {
        const key = document.getElementById(button.id);
        key.classList.add('active');
      }

      if (button && !button.hasOwnProperty('isFunctional')) {
        textarea.value += presedKey;
      } else {
        // const keyFunction = this.keyFunctions[eventCode];
        // if (keyFunction) {
        //   keyFunction(e);
        // }
        if (button.eventCode === 'Space') {
          this.useSpace();
        } else if (button.eventCode === 'Enter') {
          e.preventDefault();
          this.useEnter();
        } else if (button.eventCode === 'Delete') {
          e.preventDefault();
          this.useDelete(textarea)
          console.log('pressedKey Delete');
        } else if (button.eventCode === 'Backspace') {
          this.useBackspace();
        } else if (
          button.eventCode === 'AltLeft' ||
          button.eventCode === 'AltRight'
        ) {
          console.log('pressedKey Alt');
          e.preventDefault();
        } else if (
          button.eventCode === 'ControlRight' ||
          button.eventCode === 'ControlLeft'
        ) {
          console.log('pressedKey Control');
          e.preventDefault();
        } else if (
          button.eventCode === 'ShiftLeft' ||
          button.eventCode === 'ShiftRight'
        ) {
          e.preventDefault();
          console.log('pressedKey ShiftRight');
        } else if (button.eventCode === 'Tab') {
          e.preventDefault();
          this.useTab();
        } else if (button.eventCode === 'CapsLock') {
          console.log('pressedKey Capslock');
        } else if (button.eventCode === 'ArrowUp') {
          this.useArrowTop(textarea);
          console.log('pressedKey ⇧');
        } else if (button.eventCode === 'ArrowLeft') {
          this.useArrowLeft(textarea);
          console.log('pressedKey ⇦');
        } else if (button.eventCode === 'ArrowDown') {
          this.useArrowBottom(textarea);
          console.log('pressedKey ⇩');
        } else if (button.eventCode === 'ArrowRight') {
          this.useArrowRight(textarea);
          console.log('pressedKey ⇨');
        } else if (button.eventCode === 'MetaLeft') {
          e.preventDefault();
          console.log('pressedKey Meta');
        }
        else {
          textarea.value = textarea.value;
        }
      }
    });
  },

  initiateHandlerKeyUp() {
    document.addEventListener('keyup', (e) => {
      const pressedEventCode = e.code;
      let button = this.findButtonByCode(pressedEventCode);
      if (button) {
        const key = document.getElementById(button.id);
        key.classList.remove('active');
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
    this.rerender();
  },

  switchLanguage() {
    this.locale = this.locale === 'en' ? 'ru' : 'en';

    console.log('switchLanguage', this.locale);
  },

  rerender() {},
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});

// смена языка на клавиатуре
// смена на заглавные буквы 1) нажимаем capslock 2) нажимаем shift
// подсветка дублирующих кнопок при нажатии
// фикс двойных символов ++
// фикс нажатия левых кнопок которые дают undfined
// создание боковой панели для сочетания клавишь
// создание одной функции для switch
// рефакторинг кода, возможно создание класса
// доделать стили
