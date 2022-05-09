/* eslint-disable max-len */
import './styles/styles.css';
import { KEYBOARD_KEYS, translate } from './keyboards-keys';

function createBody() {
  document.body.innerHTML = `
    <div class="container">
            <div class="keyboard-container">
                <h1 class="keyboard-title">Virtual Keyboard (DarkCrew)</h1>
                <div class="keyboard-textarea-container">
                    <textarea class="keyboard-textarea" rows="15" cols="100"></textarea>
                </div>
                <div class="keyboard-buttons-container">
                </div>
            </div>
            <p class="keyboard-description">Клавиатура создана в операционной системе Windows</p>
            <p class="keyboard-language-info">Для переключения языка комбинация: левыe Ctrl + Alt</p>
        </div>
    `;
}
createBody();

const KEYBOARD_BUTTONS_CONTAINER = document.querySelector('.keyboard-buttons-container');
const KEYBOARD_TEXTAREA = document.querySelector('.keyboard-textarea');

let languages = 'en';

function setLocalStorage() {
  localStorage.setItem('lang', languages);
}
window.addEventListener('beforeunload', setLocalStorage);

function changeCaps(caps, lang) {
  document.querySelectorAll('.keyboard-key').forEach((key) => {
    const currentBtn = key.innerHTML;
    if (translate[lang][currentBtn.toLowerCase()] !== undefined) {
      if (caps === 'lower') {
        document.getElementById('capslock').classList.add('light');
        // eslint-disable-next-line no-param-reassign
        key.innerHTML = key.innerHTML.toUpperCase();
      } else {
        document.getElementById('capslock').classList.remove('light');
        // eslint-disable-next-line no-param-reassign
        key.innerHTML = key.innerHTML.toLowerCase();
      }
    }
  });
}

function addAnimationBtns(element) {
  document.getElementById(element).classList.add('active');
  setTimeout(() => {
    document.getElementById(element).classList.remove('active');
  }, 150);
}

KEYBOARD_KEYS.forEach((key) => {
  const element = document.createElement('button');
  element.classList.add('keyboard-key');

  switch (key) {
    case 'Backspace':
      element.classList.add('backspace');
      element.setAttribute('id', `${key.toLowerCase()}`);
      element.addEventListener('click', () => {
        KEYBOARD_TEXTAREA.value = KEYBOARD_TEXTAREA.value.substring(0, KEYBOARD_TEXTAREA.value.length - 1);
      });
      break;

    case 'Tab':
      element.classList.add('tab');
      element.setAttribute('id', `${key.toLowerCase()}`);
      element.addEventListener('click', () => {
        KEYBOARD_TEXTAREA.value += '    ';
      });
      break;

    case 'Del':
      element.classList.add('delete');
      element.setAttribute('id', 'delete');
      element.addEventListener('click', () => {
        KEYBOARD_TEXTAREA.value = KEYBOARD_TEXTAREA.value.substring(0, KEYBOARD_TEXTAREA.value.length - 1);
      });
      break;

    case 'Caps Lock':
      element.classList.add('capslock');
      element.setAttribute('id', 'capslock');
      element.addEventListener('click', () => {
        if (document.getElementById('q').innerHTML === 'q') {
          changeCaps('lower', 'ru');
        } else if (document.getElementById('q').innerHTML === 'Q') {
          changeCaps('upper', 'ru');
        } else if (document.getElementById('q').innerHTML === 'й') {
          changeCaps('lower', 'en');
        } else if (document.getElementById('q').innerHTML === 'Й') {
          changeCaps('upper', 'en');
        }
      });
      break;

    case 'Enter':
      element.classList.add('enter');
      element.setAttribute('id', `${key.toLowerCase()}`);
      element.addEventListener('click', () => {
        KEYBOARD_TEXTAREA.value += '\n';
      });
      break;

    case 'Shift':
      element.classList.add('shift');
      if (document.getElementById('shiftleft') === null) {
        element.setAttribute('id', `${key.toLowerCase()}left`);
      } else {
        element.setAttribute('id', `${key.toLowerCase()}right`);
      }
      break;

    case 'Ctrl':
      element.classList.add('ctrl');
      if (document.getElementById('controlleft') === null) {
        element.setAttribute('id', 'controlleft');
      } else {
        element.setAttribute('id', 'controlright');
      }
      break;

    case 'Win':
      element.classList.add('Win');
      element.setAttribute('id', 'meta');
      break;

    case 'Alt':
      if (document.getElementById('altleft') === null) {
        element.setAttribute('id', `${key.toLowerCase()}left`);
      } else {
        element.setAttribute('id', `${key.toLowerCase()}right`);
      }
      break;

    case ' ':
      element.classList.add('space');
      element.setAttribute('id', `${key.toLowerCase()}`);
      element.addEventListener('click', () => {
        KEYBOARD_TEXTAREA.value += ' ';
      });
      break;

    case '&#9650':
      element.setAttribute('id', 'arrowup');
      element.addEventListener('click', () => {
        KEYBOARD_TEXTAREA.value += `${document.getElementById(`${'ArrowUp'.toLowerCase()}`).innerHTML}`;
      });
      break;

    case '&#9668':
      element.setAttribute('id', 'arrowleft');
      element.addEventListener('click', () => {
        KEYBOARD_TEXTAREA.value += `${document.getElementById(`${'ArrowLeft'.toLowerCase()}`).innerHTML}`;
      });
      break;

    case '&#9660':
      element.setAttribute('id', 'arrowdown');
      element.addEventListener('click', () => {
        KEYBOARD_TEXTAREA.value += `${document.getElementById(`${'ArrowDown'.toLowerCase()}`).innerHTML}`;
      });
      break;

    case '&#9658':
      element.setAttribute('id', 'arrowright');
      element.addEventListener('click', () => {
        KEYBOARD_TEXTAREA.value += `${document.getElementById(`${'ArrowRight'.toLowerCase()}`).innerHTML}`;
      });
      break;

    default:
      element.setAttribute('id', `${key.toLowerCase()}`);
      element.addEventListener('click', () => {
        KEYBOARD_TEXTAREA.value += element.innerHTML;
      });
  }

  element.innerHTML = `${key}`;
  element.addEventListener('click', () => {
    element.classList.add('active');
    setTimeout(() => {
      element.classList.remove('active');
    }, 100);
  });
  KEYBOARD_BUTTONS_CONTAINER.appendChild(element);
});

const KEYBOARD_CAPS_KEY = document.querySelector('.keyboard-key.capslock');

// eslint-disable-next-line no-unused-vars
function changeLanguage(language) {
  KEYBOARD_CAPS_KEY.classList.remove('light');
  document.querySelectorAll('.keyboard-key').forEach((key) => {
    const currentBtn = key.innerHTML.toLowerCase();
    if (translate[language][currentBtn] !== undefined) {
      // eslint-disable-next-line no-param-reassign
      key.innerHTML = translate[language][currentBtn];
    }
  });
}

function getLocalStorage() {
  languages = localStorage.getItem('lang');
  changeLanguage(languages);
}
window.addEventListener('load', getLocalStorage);

document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'Digit1':
      KEYBOARD_TEXTAREA.value += '1';
      addAnimationBtns('1');
      break;

    case 'Digit2':
      KEYBOARD_TEXTAREA.value += '2';
      addAnimationBtns('2');
      break;

    case 'Digit3':
      KEYBOARD_TEXTAREA.value += '3';
      addAnimationBtns('3');
      break;

    case 'Digit4':
      KEYBOARD_TEXTAREA.value += '4';
      addAnimationBtns('4');
      break;

    case 'Digit5':
      KEYBOARD_TEXTAREA.value += '5';
      addAnimationBtns('5');
      break;

    case 'Digit6':
      KEYBOARD_TEXTAREA.value += '6';
      addAnimationBtns('6');
      break;

    case 'Digit7':
      KEYBOARD_TEXTAREA.value += '7';
      addAnimationBtns('7');
      break;

    case 'Digit8':
      KEYBOARD_TEXTAREA.value += '8';
      addAnimationBtns('8');
      break;

    case 'Digit9':
      KEYBOARD_TEXTAREA.value += '9';
      addAnimationBtns('9');
      break;

    case 'Digit0':
      KEYBOARD_TEXTAREA.value += '0';
      addAnimationBtns('0');
      break;

    case 'Minus':
      KEYBOARD_TEXTAREA.value += '-';
      addAnimationBtns('-');
      break;

    case 'Equal':
      KEYBOARD_TEXTAREA.value += '=';
      addAnimationBtns('=');
      break;

    case 'Backquote':
      KEYBOARD_TEXTAREA.value += `${document.getElementById('`').innerHTML}`;
      addAnimationBtns('`');
      break;

    case 'Tab':
      event.preventDefault();
      KEYBOARD_TEXTAREA.value += '    ';
      addAnimationBtns('tab');
      break;

    case 'Backspace':
      KEYBOARD_TEXTAREA.value = KEYBOARD_TEXTAREA.value.substring(0, KEYBOARD_TEXTAREA.value.length - 1);
      addAnimationBtns('backspace');
      break;

    case 'BracketLeft':
      KEYBOARD_TEXTAREA.value += `${document.getElementById('[').innerHTML}`;
      addAnimationBtns('[');
      break;

    case 'BracketRight':
      KEYBOARD_TEXTAREA.value += `${document.getElementById(']').innerHTML}`;
      addAnimationBtns(']');
      break;

    case 'Backslash':
      KEYBOARD_TEXTAREA.value += '\\';
      addAnimationBtns('\\');
      break;

    case 'Semicolon':
      KEYBOARD_TEXTAREA.value += `${document.getElementById(';').innerHTML}`;
      addAnimationBtns(';');
      break;

    case 'Quote':
      KEYBOARD_TEXTAREA.value += `${document.getElementById('\'').innerHTML}`;
      addAnimationBtns('\'');
      break;

    case 'Delete':
      KEYBOARD_TEXTAREA.value = KEYBOARD_TEXTAREA.value.substring(0, KEYBOARD_TEXTAREA.value.length - 1);
      addAnimationBtns('delete');
      break;

    case 'Comma':
      KEYBOARD_TEXTAREA.value += `${document.getElementById(',').innerHTML}`;
      addAnimationBtns(',');
      break;

    case 'Period':
      KEYBOARD_TEXTAREA.value += `${document.getElementById('.').innerHTML}`;
      addAnimationBtns('.');
      break;

    case 'Slash':
      KEYBOARD_TEXTAREA.value += '/';
      addAnimationBtns('/');
      break;

    case 'Enter':
      KEYBOARD_TEXTAREA.value += '\n';
      addAnimationBtns('enter');
      break;

    case 'CapsLock':
      if (document.getElementById('q').innerHTML === 'q') {
        changeCaps('lower', 'ru');
        addAnimationBtns('capslock');
        break;
      }
      if (document.getElementById('q').innerHTML === 'Q') {
        changeCaps('upper', 'ru');
        addAnimationBtns('capslock');
        break;
      }
      if (document.getElementById('q').innerHTML === 'й') {
        changeCaps('lower', 'en');
        addAnimationBtns('capslock');
        break;
      }
      if (document.getElementById('q').innerHTML === 'Й') {
        changeCaps('upper', 'en');
        addAnimationBtns('capslock');
        break;
      }
      addAnimationBtns('capslock');
      break;

    case 'ArrowUp':
      KEYBOARD_TEXTAREA.value += `${document.getElementById(`${'ArrowUp'.toLowerCase()}`).innerHTML}`;
      addAnimationBtns(`${'ArrowUp'.toLowerCase()}`);
      break;

    case 'ArrowDown':
      KEYBOARD_TEXTAREA.value += `${document.getElementById(`${'ArrowDown'.toLowerCase()}`).innerHTML}`;
      addAnimationBtns(`${'ArrowDown'.toLowerCase()}`);
      break;

    case 'ArrowLeft':
      KEYBOARD_TEXTAREA.value += `${document.getElementById(`${'ArrowLeft'.toLowerCase()}`).innerHTML}`;
      addAnimationBtns(`${'ArrowLeft'.toLowerCase()}`);
      break;

    case 'ArrowRight':
      KEYBOARD_TEXTAREA.value += `${document.getElementById(`${'ArrowRight'.toLowerCase()}`).innerHTML}`;
      addAnimationBtns(`${'ArrowRight'.toLowerCase()}`);
      break;

    case 'Space':
      KEYBOARD_TEXTAREA.value += ' ';
      addAnimationBtns(' ');
      break;

    case 'ShiftLeft':
      addAnimationBtns('shiftleft');
      break;

    case 'ControlLeft':
      addAnimationBtns('controlleft');
      break;

    case 'MetaLeft':
      addAnimationBtns('meta');
      break;

    case 'AltLeft':
      addAnimationBtns('altleft');
      break;

    case 'AltRight':
      addAnimationBtns('altright');
      break;

    case 'ShiftRight':
      addAnimationBtns('shiftright');
      break;

    case 'ControlRight':
      addAnimationBtns('controlright');
      break;

    default:
      KEYBOARD_TEXTAREA.value += `${document.getElementById(`${event.code.slice(3).toLowerCase()}`).innerHTML}`;
      addAnimationBtns(`${event.code.slice(3).toLowerCase()}`);
  }
});

document.onkeydown = (event) => {
  if (event.code === 'ControlLeft') {
    document.onkeyup = (eventUp) => {
      if (eventUp.code === 'AltLeft') {
        if (document.getElementById('q').innerHTML === 'q' || document.getElementById('q').innerHTML === 'Q') {
          // eslint-disable-next-line no-undef
          changeLanguage('ru');
          languages = 'ru';
        } else {
          // eslint-disable-next-line no-undef
          changeLanguage('en');
          languages = 'en';
        }
      } else {
        document.onkeyup = null;
      }
    };
  }
};
