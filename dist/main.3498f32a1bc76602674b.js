/** *** */ (() => { // webpackBootstrap
/** *** */

  /** *** */ 	const __webpack_modules__ = ({

    /***/ './src/styles/styles.css':
    /*! *******************************!*\
  !*** ./src/styles/styles.css ***!
  \****************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      // extracted by mini-css-extract-plugin
      /***/ }),

    /***/ './src/keyboards-keys.js':
    /*! *******************************!*\
  !*** ./src/keyboards-keys.js ***!
  \****************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ KEYBOARD_KEYS: () => (/* binding */ KEYBOARD_KEYS),
        /* harmony export */ });
      const KEYBOARD_KEYS = [
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
        'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift',
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668', '&#9660', '&#9658', 'Ctrl',
      ];
      /***/ }),

    /** *** */ 	});
  /** ********************************************************************* */
  /** *** */ 	// The module cache
  /** *** */ 	const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */ 		// Check if module is in cache
    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ 		if (cachedModule !== undefined) {
      /** *** */ 			return cachedModule.exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {
      /** *** */ 			// no module.id needed
      /** *** */ 			// no module.loaded needed
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** ********************************************************************* */
  /** *** */ 	/* webpack/runtime/define property getters */
  /** *** */ 	(() => {
    /** *** */ 		// define getter functions for harmony exports
    /** *** */ 		__webpack_require__.d = (exports, definition) => {
      /** *** */ 			for (const key in definition) {
        /** *** */ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /** *** */ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /** *** */ 				}
        /** *** */ 			}
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/make namespace object */
  /** *** */ 	(() => {
    /** *** */ 		// define __esModule on exports
    /** *** */ 		__webpack_require__.r = (exports) => {
      /** *** */ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 			}
      /** *** */ 			Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** ********************************************************************* */
  const __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ './src/styles/styles.css');
    /* harmony import */ const _keyboards_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboards-keys */ './src/keyboards-keys.js');
    /* eslint-disable max-len */

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

    _keyboards_keys__WEBPACK_IMPORTED_MODULE_1__.KEYBOARD_KEYS.forEach((key) => {
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
  })();
/** *** */ })();

// # sourceMappingURL=main.3498f32a1bc76602674b.js.map
