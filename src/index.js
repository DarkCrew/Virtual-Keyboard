/* eslint-disable max-len */
import './styles/styles.css';
import { KEYBOARD_KEYS } from './keyboards-keys';

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
        </div>
    `;
}
createBody();

const KEYBOARD_BUTTONS_CONTAINER = document.querySelector('.keyboard-buttons-container');
const KEYBOARD_TEXTAREA = document.querySelector('.keyboard-textarea');

function addEventList(element, type) {
  switch (type) {
    case 'classic':
      element.addEventListener('click', () => {
        KEYBOARD_TEXTAREA.value += element.innerHTML;
      });
      break;

    case 'Backspace':
      element.addEventListener('click', () => {
        KEYBOARD_TEXTAREA.value = KEYBOARD_TEXTAREA.value.substring(0, KEYBOARD_TEXTAREA.value.length - 1);
      });
      break;

    case 'delete':
      element.addEventListener('click', () => {
        KEYBOARD_TEXTAREA.value = KEYBOARD_TEXTAREA.value.substring(0, KEYBOARD_TEXTAREA.value.length - 1);
      });
      break;

    default:
      console.log('no');
  }
}

KEYBOARD_KEYS.forEach((key) => {
  const element = document.createElement('button');
  element.classList.add('keyboard-key');
  switch (key) {
    case 'Backspace':
      element.classList.add('backspace');
      element.setAttribute('id', `${key.toLowerCase()}`);
      addEventList(element, 'Backspace');
      break;

    case 'Tab':
      element.classList.add('tab');
      element.setAttribute('id', `${key.toLowerCase()}`);
      break;

    case 'Del':
      element.classList.add('delete');
      element.setAttribute('id', 'delete');
      addEventList(element, 'delete');
      break;

    case 'Caps Lock':
      element.classList.add('capslock');
      element.setAttribute('id', 'capslock');
      break;

    case 'Enter':
      element.classList.add('enter');
      element.setAttribute('id', `${key.toLowerCase()}`);
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
      break;

    case '&#9650':
      element.setAttribute('id', 'arrowup');
      break;

    case '&#9668':
      element.setAttribute('id', 'arrowleft');
      break;

    case '&#9660':
      element.setAttribute('id', 'arrowdown');
      break;

    case '&#9658':
      element.setAttribute('id', 'arrowright');
      break;

    default:
      element.setAttribute('id', `${key.toLowerCase()}`);
      addEventList(element, 'classic');
  }
  element.innerHTML = `${key}`;

  KEYBOARD_BUTTONS_CONTAINER.appendChild(element);
});

document.addEventListener('keydown', (event) => {
  console.log(event);
  KEYBOARD_TEXTAREA.focus();
  KEYBOARD_TEXTAREA.selectionStart = KEYBOARD_TEXTAREA.value.length;
  if (event.key === 'Control' || event.key === 'Alt' || event.key === 'Shift') {
    document.getElementById(`${event.code.toLowerCase()}`).classList.add('active');
  } else {
    document.getElementById(`${event.key.toLowerCase()}`).classList.add('active');
  }
  setTimeout(() => {
    if (event.key === 'Control' || event.key === 'Alt' || event.key === 'Shift') {
      document.getElementById(`${event.code.toLowerCase()}`).classList.remove('active');
    } else {
      document.getElementById(`${event.key.toLowerCase()}`).classList.remove('active');
    }
  }, 150);
});
