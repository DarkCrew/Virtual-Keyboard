/* eslint-disable no-nested-ternary */
/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
/* eslint-disable no-void */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
(() => {
  const e = {
    ru: {
      '`': 'ё', q: 'й', w: 'ц', e: 'у', r: 'к', t: 'е', y: 'н', u: 'г', i: 'ш', o: 'щ', p: 'з', '[': 'х', ']': 'ъ', a: 'ф', s: 'ы', d: 'в', f: 'а', g: 'п', h: 'р', j: 'о', k: 'л', l: 'д', ';': 'ж', "'": 'э', z: 'я', x: 'ч', c: 'с', v: 'м', b: 'и', n: 'т', m: 'ь', ',': 'б', '.': 'ю',
    },
    en: {
      ё: '`', й: 'q', ц: 'w', у: 'e', к: 'r', е: 't', н: 'y', г: 'u', ш: 'i', щ: 'o', з: 'p', х: '[', ъ: ']', ф: 'a', ы: 's', в: 'd', а: 'f', п: 'g', р: 'h', о: 'j', л: 'k', д: 'l', ж: ';', э: "'", я: 'z', ч: 'x', с: 'c', м: 'v', и: 'b', т: 'n', ь: 'm', б: ',', ю: '.',
    },
  }; document.body.innerHTML = '\n    <div class="container">\n            <div class="keyboard-container">\n                <h1 class="keyboard-title">Virtual Keyboard (DarkCrew)</h1>\n                <div class="keyboard-textarea-container">\n                    <textarea class="keyboard-textarea" rows="15" cols="100"></textarea>\n                </div>\n                <div class="keyboard-buttons-container">\n                </div>\n            </div>\n            <p class="keyboard-description">Клавиатура создана в операционной системе Windows</p>\n            <p class="keyboard-language-info">Для переключения языка комбинация: левыe Ctrl + Alt</p>\n        </div>\n    '; const t = document.querySelector('.keyboard-buttons-container'); const a = document.querySelector('.keyboard-textarea'); let r = 'en'; function n(t, a) { document.querySelectorAll('.keyboard-key').forEach(((r) => { const n = r.innerHTML; void 0 !== e[a][n.toLowerCase()] && (t === 'lower' ? (document.getElementById('capslock').classList.add('light'), r.innerHTML = r.innerHTML.toUpperCase()) : (document.getElementById('capslock').classList.remove('light'), r.innerHTML = r.innerHTML.toLowerCase())); })); } function o(e) { document.getElementById(e).classList.add('active'), setTimeout((() => { document.getElementById(e).classList.remove('active'); }), 150); }window.addEventListener('beforeunload', (() => { localStorage.setItem('lang', r); })), ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668', '&#9660', '&#9658', 'Ctrl'].forEach(((e) => { const r = document.createElement('button'); switch (r.classList.add('keyboard-key'), e) { case 'Backspace': r.classList.add('backspace'), r.setAttribute('id', `${e.toLowerCase()}`), r.addEventListener('click', (() => { a.value = a.value.substring(0, a.value.length - 1); })); break; case 'Tab': r.classList.add('tab'), r.setAttribute('id', `${e.toLowerCase()}`), r.addEventListener('click', (() => { a.value += '    '; })); break; case 'Del': r.classList.add('delete'), r.setAttribute('id', 'delete'), r.addEventListener('click', (() => { a.value = a.value.substring(0, a.value.length - 1); })); break; case 'Caps Lock': r.classList.add('capslock'), r.setAttribute('id', 'capslock'), r.addEventListener('click', (() => { document.getElementById('q').innerHTML === 'q' ? n('lower', 'ru') : document.getElementById('q').innerHTML === 'Q' ? n('upper', 'ru') : document.getElementById('q').innerHTML === 'й' ? n('lower', 'en') : document.getElementById('q').innerHTML === 'Й' && n('upper', 'en'); })); break; case 'Enter': r.classList.add('enter'), r.setAttribute('id', `${e.toLowerCase()}`), r.addEventListener('click', (() => { a.value += '\n'; })); break; case 'Shift': r.classList.add('shift'), document.getElementById('shiftleft') === null ? r.setAttribute('id', `${e.toLowerCase()}left`) : r.setAttribute('id', `${e.toLowerCase()}right`); break; case 'Ctrl': r.classList.add('ctrl'), document.getElementById('controlleft') === null ? r.setAttribute('id', 'controlleft') : r.setAttribute('id', 'controlright'); break; case 'Win': r.classList.add('Win'), r.setAttribute('id', 'meta'); break; case 'Alt': document.getElementById('altleft') === null ? r.setAttribute('id', `${e.toLowerCase()}left`) : r.setAttribute('id', `${e.toLowerCase()}right`); break; case ' ': r.classList.add('space'), r.setAttribute('id', `${e.toLowerCase()}`), r.addEventListener('click', (() => { a.value += ' '; })); break; case '&#9650': r.setAttribute('id', 'arrowup'), r.addEventListener('click', (() => { a.value += `${document.getElementById(`${'ArrowUp'.toLowerCase()}`).innerHTML}`; })); break; case '&#9668': r.setAttribute('id', 'arrowleft'), r.addEventListener('click', (() => { a.value += `${document.getElementById(`${'ArrowLeft'.toLowerCase()}`).innerHTML}`; })); break; case '&#9660': r.setAttribute('id', 'arrowdown'), r.addEventListener('click', (() => { a.value += `${document.getElementById(`${'ArrowDown'.toLowerCase()}`).innerHTML}`; })); break; case '&#9658': r.setAttribute('id', 'arrowright'), r.addEventListener('click', (() => { a.value += `${document.getElementById(`${'ArrowRight'.toLowerCase()}`).innerHTML}`; })); break; default: r.setAttribute('id', `${e.toLowerCase()}`), r.addEventListener('click', (() => { a.value += r.innerHTML; })); }r.innerHTML = `${e}`, r.addEventListener('click', (() => { r.classList.add('active'), setTimeout((() => { r.classList.remove('active'); }), 100); })), t.appendChild(r); })); const s = document.querySelector('.keyboard-key.capslock'); function c(t) { s.classList.remove('light'), document.querySelectorAll('.keyboard-key').forEach(((a) => { const r = a.innerHTML.toLowerCase(); void 0 !== e[t][r] && (a.innerHTML = e[t][r]); })); }window.addEventListener('load', (() => { r = localStorage.getItem('lang'), c(r); })), document.addEventListener('keydown', ((e) => { switch (e.code) { case 'Digit1': a.value += '1', o('1'); break; case 'Digit2': a.value += '2', o('2'); break; case 'Digit3': a.value += '3', o('3'); break; case 'Digit4': a.value += '4', o('4'); break; case 'Digit5': a.value += '5', o('5'); break; case 'Digit6': a.value += '6', o('6'); break; case 'Digit7': a.value += '7', o('7'); break; case 'Digit8': a.value += '8', o('8'); break; case 'Digit9': a.value += '9', o('9'); break; case 'Digit0': a.value += '0', o('0'); break; case 'Minus': a.value += '-', o('-'); break; case 'Equal': a.value += '=', o('='); break; case 'Backquote': a.value += `${document.getElementById('`').innerHTML}`, o('`'); break; case 'Tab': e.preventDefault(), a.value += '    ', o('tab'); break; case 'Backspace': a.value = a.value.substring(0, a.value.length - 1), o('backspace'); break; case 'BracketLeft': a.value += `${document.getElementById('[').innerHTML}`, o('['); break; case 'BracketRight': a.value += `${document.getElementById(']').innerHTML}`, o(']'); break; case 'Backslash': a.value += '\\', o('\\'); break; case 'Semicolon': a.value += `${document.getElementById(';').innerHTML}`, o(';'); break; case 'Quote': a.value += `${document.getElementById("'").innerHTML}`, o("'"); break; case 'Delete': a.value = a.value.substring(0, a.value.length - 1), o('delete'); break; case 'Comma': a.value += `${document.getElementById(',').innerHTML}`, o(','); break; case 'Period': a.value += `${document.getElementById('.').innerHTML}`, o('.'); break; case 'Slash': a.value += '/', o('/'); break; case 'Enter': a.value += '\n', o('enter'); break; case 'CapsLock': if (document.getElementById('q').innerHTML === 'q') { n('lower', 'ru'), o('capslock'); break; } if (document.getElementById('q').innerHTML === 'Q') { n('upper', 'ru'), o('capslock'); break; } if (document.getElementById('q').innerHTML === 'й') { n('lower', 'en'), o('capslock'); break; } if (document.getElementById('q').innerHTML === 'Й') { n('upper', 'en'), o('capslock'); break; }o('capslock'); break; case 'ArrowUp': a.value += `${document.getElementById(`${'ArrowUp'.toLowerCase()}`).innerHTML}`, o(`${'ArrowUp'.toLowerCase()}`); break; case 'ArrowDown': a.value += `${document.getElementById(`${'ArrowDown'.toLowerCase()}`).innerHTML}`, o(`${'ArrowDown'.toLowerCase()}`); break; case 'ArrowLeft': a.value += `${document.getElementById(`${'ArrowLeft'.toLowerCase()}`).innerHTML}`, o(`${'ArrowLeft'.toLowerCase()}`); break; case 'ArrowRight': a.value += `${document.getElementById(`${'ArrowRight'.toLowerCase()}`).innerHTML}`, o(`${'ArrowRight'.toLowerCase()}`); break; case 'Space': a.value += ' ', o(' '); break; case 'ShiftLeft': o('shiftleft'); break; case 'ControlLeft': o('controlleft'); break; case 'MetaLeft': o('meta'); break; case 'AltLeft': o('altleft'); break; case 'AltRight': o('altright'); break; case 'ShiftRight': o('shiftright'); break; case 'ControlRight': o('controlright'); break; default: a.value += `${document.getElementById(`${e.code.slice(3).toLowerCase()}`).innerHTML}`, o(`${e.code.slice(3).toLowerCase()}`); } })), document.onkeydown = (e) => { e.code === 'ControlLeft' && (document.onkeyup = (e) => { e.code === 'AltLeft' ? document.getElementById('q').innerHTML === 'q' || document.getElementById('q').innerHTML === 'Q' ? (c('ru'), r = 'ru') : (c('en'), r = 'en') : document.onkeyup = null; }); };
})();
// # sourceMappingURL=main.985f5380a5891809c93b.js.map
