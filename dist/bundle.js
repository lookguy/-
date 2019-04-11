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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack */ \"./src/stack.js\");\n/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queue */ \"./src/queue.js\");\n\r\n\r\n\r\nconst stack = new _stack__WEBPACK_IMPORTED_MODULE_0__[\"Stack\"]();\r\nconst queue = new _queue__WEBPACK_IMPORTED_MODULE_1__[\"Queue\"]();\r\n\r\nconst section_stack = document.querySelector('#stack');\r\nconst input_stack = document.querySelector('#stack_number');\r\nconst template_push = function () {\r\n    let div = document.createElement(\"div\");\r\n    div.innerText = stack.peek()\r\n    return div\r\n};\r\n\r\nconst section_queue = document.querySelector('#queue');\r\nconst input_queue = document.querySelector('#queue_number');\r\nconst template_push_queue = function () {\r\n    let div = document.createElement(\"div\");\r\n    div.innerText = queue.front()\r\n    return div\r\n};\r\n\r\nsection_stack.addEventListener(\"click\", function (e) {\r\n    switch (true) {\r\n        case e.target === document.querySelector('#push'):\r\n            stack.push(input_stack.value);\r\n            input_stack.value = '';\r\n            if (this.children[3].childElementCount === 0) {\r\n                this.children[3].appendChild(template_push())\r\n            } else {\r\n                this.children[3].insertBefore(template_push(), this.children[3].firstChild)\r\n            }\r\n            console.log(stack.print())\r\n            break;\r\n        case e.target === document.querySelector('#pop'):\r\n            stack.pop();\r\n            if (this.children[3].childElementCount === 0) {\r\n                window.confirm(\"没有任何元素在栈内\")\r\n            } else {\r\n                this.children[3].removeChild(this.children[3].firstChild)\r\n            }\r\n            console.log(stack.print())\r\n            break;\r\n        default:\r\n            return;\r\n    }\r\n})\r\n\r\nsection_queue.addEventListener(\"click\", function (e) {\r\n    switch (true) {\r\n        case e.target === document.querySelector('#enqueue'):\r\n            queue.enqueue(input_queue.value);\r\n            input_queue.value = '';\r\n            if (this.children[3].childElementCount === 0) {\r\n                this.children[3].appendChild(template_push_queue())\r\n            } else {\r\n                this.children[3].insertBefore(template_push_queue(), this.children[3].firstChild)\r\n            }\r\n            console.log(queue.print())\r\n            break;\r\n        case e.target === document.querySelector('#dequeue'):\r\n            queue.dequeue();\r\n            if (this.children[3].childElementCount === 0) {\r\n                window.confirm(\"没有任何元素在队列内\")\r\n            } else {\r\n                this.children[3].removeChild(this.children[3].lastChild)\r\n            }\r\n            console.log(queue.print())\r\n            break;\r\n        default:\r\n            return;\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/queue.js":
/*!**********************!*\
  !*** ./src/queue.js ***!
  \**********************/
/*! exports provided: Queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Queue\", function() { return Queue; });\nclass Queue{\r\n    constructor(){\r\n        this.items=[];\r\n    };\r\n    // 队列尾部添加项\r\n    enqueue(e){\r\n        this.items.push(e);\r\n    }\r\n    // 移除队列首项\r\n    dequeue(){\r\n        this.items.shift();\r\n    }\r\n    // 返回第一个项\r\n    front(){\r\n        return this.items.length > 0 ? this.items[0]:''\r\n    }\r\n    // 判断队列是否为空\r\n    isEmpty(){\r\n        return this.items.length === 0\r\n    }\r\n    // 返回队列项数量\r\n    size(){\r\n        return this.items.length\r\n    }\r\n    // 打印一下\r\n    print(){\r\n        console.log(this.items.toString())\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/queue.js?");

/***/ }),

/***/ "./src/stack.js":
/*!**********************!*\
  !*** ./src/stack.js ***!
  \**********************/
/*! exports provided: Stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Stack\", function() { return Stack; });\nclass Stack {\r\n    //选用议中数据结构来保存栈里的元素\r\n    constructor() {\r\n        this.items = [];\r\n    }\r\n    //添加元素\r\n    push(el) {\r\n        this.items.push(el);\r\n    }\r\n    //移除元素\r\n    pop(el) {\r\n        this.items.pop();\r\n    }\r\n    //返回栈顶的元素\r\n    peek() {\r\n        return this.items[this.items.length - 1];\r\n    }\r\n    //判断栈里是否有元素\r\n    isEmpty() {\r\n        return this.items.length === 0;\r\n    }\r\n    //移除栈里所有元素\r\n    clear() { \r\n        for(let i =0;i<this.items.length;i++){\r\n            this.items.pop()\r\n        }\r\n    }\r\n    //返回栈里元素个数\r\n    size() { \r\n        return this.items.length;\r\n    }\r\n    //打印\r\n    print(){\r\n        console.log(this.items.toString())\r\n        return false;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/stack.js?");

/***/ })

/******/ });