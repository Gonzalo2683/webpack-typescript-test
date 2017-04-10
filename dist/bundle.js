/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Libro = (function () {
    function Libro(title, paginas) {
        this.paginas = paginas;
        this.title = title;
    }
    Libro.prototype.toString = function () {
        return this.title + " " + this.paginas;
    };
    return Libro;
}());
exports.default = Libro;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Persona = (function () {
    function Persona(name, age) {
        this._name = name;
        this._age = age;
    }
    Persona.prototype.toString = function () {
        return this._name + " " + this._age;
    };
    Object.defineProperty(Persona.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    return Persona;
}());
exports.default = Persona;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils = (function () {
    function Utils() {
    }
    Utils.separadorLog = function (title, separador, repetir) {
        if (separador === void 0) { separador = '-'; }
        if (repetir === void 0) { repetir = 30; }
        var charact = separador.trim();
        var result = '';
        if (title)
            console.log(title);
        for (var i = 0; i <= repetir - 1; i++) {
            result += charact;
        }
        console.log(result);
    };
    Utils.logger = function (val, title) {
        var text = '';
        if (title) {
            text += '- ';
            text += title;
            text += ' -';
        }
        console.log(val, text);
    };
    Utils.logueante = function (item) {
        console.log(item);
        return item;
    };
    Utils.saludador = function (name) {
        var saludos = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            saludos[_i - 1] = arguments[_i];
        }
        var result = name + " " + saludos.join(" ");
        console.log(result);
    };
    return Utils;
}());
exports.default = Utils;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = __webpack_require__(1);
var Libro_1 = __webpack_require__(0);
var Utils_1 = __webpack_require__(2);
var perso = new Persona_1.default('Gonza', 33);
var libro1 = new Libro_1.default('La divina comedia', 345);
Utils_1.default.separadorLog();
Utils_1.default.separadorLog('Clases');
console.log(perso.toString());
console.log(libro1.toString());
Utils_1.default.separadorLog();
Utils_1.default.separadorLog('Descontrucción de variables');
var nombre = perso.name;
Utils_1.default.logger(nombre, 'Forma normal');
//Se le asigna a loco el valor de name
// Para age se mantiene el mismo nombre
var loco = perso.name, age = perso.age;
Utils_1.default.logger(loco, 'Forma descontructiva');
Utils_1.default.logger(age, 'Se mantiene nombre');
var foo = ["uno", "dos", "tres"];
var uno = foo[0], dos = foo[1], tres = foo[2];
Utils_1.default.separadorLog('Generics');
var miNumber = Utils_1.default.logueante(8);
//Se puede ommitir (Utils.logueante<string>) el tipo de valor que recibe la función
// se infiere por el tipo de variable en la que se recibe el valor
var miString = Utils_1.default.logueante('Texto inferido');
Utils_1.default.separadorLog('Rest parametros');
Utils_1.default.saludador('Gonza', 'como va', 'mi ritmo', 'mulata');


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map