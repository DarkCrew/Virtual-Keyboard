import './styles/styles.css';
import { KEYBOARD_KEYS } from './keyboards-keys';

function createBody() {
  document.body.innerHTML = `
    <div class="container">
            <div class="keyboard-container">
                <h1 class="keyboard-title">Virtual Keyboard (DarkCrew)</h1>
                <div class="keyboard-textarea-container">
                    <textarea class="keyboard-textarea" rows="15"></textarea>
                </div>
                <div class="keyboard-buttons-container">
                </div>
            </div>
        </div>
    `;
}
createBody();

const keyboardButtonsContainer = document.querySelector('.keyboard-buttons-container');

KEYBOARD_KEYS.forEach((key) => {
  if (key === 'br') {
    keyboardButtonsContainer.appendChild(document.createElement('br'));
  }
  const element = document.createElement('button');
  element.classList.add('keyboard-key');
  if (key === 'Backspace' || key === 'Tab' || key === 'Caps Lock' || key === 'Enter'
  || key === 'Shift' || key === 'Ctrl' || key === ' ') {
    switch (key) {
      case 'Backspace':
        element.classList.add('backspace');
        break;
      case 'Tab':
        element.classList.add('tab');
        break;
      case 'Caps Lock':
        element.classList.add('capslock');
        break;
      case 'Enter':
        element.classList.add('enter');
        break;
      case 'Shift':
        element.classList.add('shift');
        break;
      case 'Ctrl':
        element.classList.add('ctrl');
        break;
      case ' ':
        element.classList.add('space');
        break;
      default:
        console.log('error');
    }
  }
  element.innerHTML = `${key}`;
  keyboardButtonsContainer.appendChild(element);
});
