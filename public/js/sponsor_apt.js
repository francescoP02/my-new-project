/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/sponsor_apt.js":
/*!*************************************!*\
  !*** ./resources/js/sponsor_apt.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  // metto il logo rosso
  $('.logobnb').attr('src', 'http://localhost:8000/img/LOGO_UNO_MOD.png'); // chiudo in variabile i tag header con i suoi link

  var header = $('header');
  var links = $('header a'); // cambio stile css dell'header

  header.css({
    'background-color': 'white',
    'box-shadow': '1px 1px 15px rgba(0, 0, 0, .1)'
  }); // cambio stile css dei link nell'header

  links.css({
    'color': 'rgb(225, 60, 60)'
  });
  $('#button_basic').click(function () {
    $('#dropdown_sponsor_standard').hide();
    $('#dropdown_sponsor_premium').hide();
    $('#button_standard').text('Scegli');
    $('#button_premium').text('Scegli');
    $('#dropdown_sponsor_basic').slideToggle(500);

    if ($(this).text() === 'Scegli') {
      $(this).text('Chiudi');
    } else if ($(this).text() === 'Chiudi') {
      $(this).text('Scegli');
    }
  });
  $('#button_standard').click(function () {
    $('#dropdown_sponsor_basic').hide();
    $('#dropdown_sponsor_premium').hide();
    $('#button_basic').text('Scegli');
    $('#button_premium').text('Scegli');
    $('#dropdown_sponsor_standard').slideToggle(500);

    if ($(this).text() === 'Scegli') {
      $(this).text('Chiudi');
    } else if ($(this).text() === 'Chiudi') {
      $(this).text('Scegli');
    }
  });
  $('#button_premium').click(function () {
    $('#dropdown_sponsor_basic').hide();
    $('#dropdown_sponsor_standard').hide();
    $('#button_basic').text('Scegli');
    $('#button_standard').text('Scegli');
    $('#dropdown_sponsor_premium').slideToggle(500);

    if ($(this).text() === 'Scegli') {
      $(this).text('Chiudi');
    } else if ($(this).text() === 'Chiudi') {
      $(this).text('Scegli');
    }
  });
});

/***/ }),

/***/ 8:
/*!*******************************************!*\
  !*** multi ./resources/js/sponsor_apt.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Boolean\bnb\BoolBnb\resources\js\sponsor_apt.js */"./resources/js/sponsor_apt.js");


/***/ })

/******/ });