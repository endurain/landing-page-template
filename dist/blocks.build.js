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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_template_index_js__ = __webpack_require__(/*! ./block-template/index.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_template_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_template_index_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay10ZW1wbGF0ZS9pbmRleC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************!*\
  !*** ./src/block-template/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * Template\n */\n\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    InspectorControls = _wp$editor.InspectorControls;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    ColorPalette = _wp$components.ColorPalette;\n\n// Import our CSS files\n\n\n\n\nregisterBlockType('template/main', {\n  title: 'PPC Template',\n  icon: 'smiley',\n  category: 'common',\n  attributes: {\n    heroImage: {\n      type: 'string',\n      source: 'attribute',\n      selector: 'img',\n      attribute: 'src'\n    },\n    heroAlt: {\n      attribute: 'alt',\n      selector: '.coupon__image'\n    }\n  },\n\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n\n\n    var getImageButton = function getImageButton(openEvent) {\n      if (attributes.heroImage) {\n        return wp.element.createElement('img', {\n          src: attributes.heroImage,\n          onClick: openEvent,\n          className: 'image'\n        });\n      } else {\n        return wp.element.createElement(\n          'div',\n          { className: 'button-container' },\n          wp.element.createElement(\n            Button,\n            {\n              onClick: openEvent,\n              className: 'button button-large'\n            },\n            'Pick an image'\n          )\n        );\n      }\n    };\n\n    return wp.element.createElement(\n      'div',\n      null,\n      wp.element.createElement(\n        'div',\n        { className: 'couponImageContainer' },\n        wp.element.createElement(MediaUpload, {\n          onSelect: function onSelect(media) {\n            setAttributes({ heroImage: media.url });\n          },\n          type: 'image',\n          value: attributes.heroImage,\n          render: function render(_ref2) {\n            var open = _ref2.open;\n            return getImageButton(open);\n          }\n        })\n      )\n    );\n  },\n  save: function save(_ref3) {\n    var attributes = _ref3.attributes;\n\n\n    return wp.element.createElement(\n      'div',\n      null,\n      wp.element.createElement(\n        'div',\n        { className: 'hero-image' },\n        wp.element.createElement('img', { src: attributes.heroImage })\n      )\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay10ZW1wbGF0ZS9pbmRleC5qcz85MDY5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVtcGxhdGVcbiAqL1xuXG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBSaWNoVGV4dCA9IF93cCRlZGl0b3IuUmljaFRleHQsXG4gICAgTWVkaWFVcGxvYWQgPSBfd3AkZWRpdG9yLk1lZGlhVXBsb2FkLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGVkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuQnV0dG9uLFxuICAgIENvbG9yUGFsZXR0ZSA9IF93cCRjb21wb25lbnRzLkNvbG9yUGFsZXR0ZTtcblxuLy8gSW1wb3J0IG91ciBDU1MgZmlsZXNcblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3RlbXBsYXRlL21haW4nLCB7XG4gIHRpdGxlOiAnUFBDIFRlbXBsYXRlJyxcbiAgaWNvbjogJ3NtaWxleScsXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgYXR0cmlidXRlczoge1xuICAgIGhlcm9JbWFnZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxuICAgICAgc2VsZWN0b3I6ICdpbWcnLFxuICAgICAgYXR0cmlidXRlOiAnc3JjJ1xuICAgIH0sXG4gICAgaGVyb0FsdDoge1xuICAgICAgYXR0cmlidXRlOiAnYWx0JyxcbiAgICAgIHNlbGVjdG9yOiAnLmNvdXBvbl9faW1hZ2UnXG4gICAgfVxuICB9LFxuXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzO1xuXG5cbiAgICB2YXIgZ2V0SW1hZ2VCdXR0b24gPSBmdW5jdGlvbiBnZXRJbWFnZUJ1dHRvbihvcGVuRXZlbnQpIHtcbiAgICAgIGlmIChhdHRyaWJ1dGVzLmhlcm9JbWFnZSkge1xuICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgICAgICAgc3JjOiBhdHRyaWJ1dGVzLmhlcm9JbWFnZSxcbiAgICAgICAgICBvbkNsaWNrOiBvcGVuRXZlbnQsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnaW1hZ2UnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2J1dHRvbi1jb250YWluZXInIH0sXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbkNsaWNrOiBvcGVuRXZlbnQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tbGFyZ2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ1BpY2sgYW4gaW1hZ2UnXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdjb3Vwb25JbWFnZUNvbnRhaW5lcicgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG4gICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KG1lZGlhKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgaGVyb0ltYWdlOiBtZWRpYS51cmwgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmhlcm9JbWFnZSxcbiAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMikge1xuICAgICAgICAgICAgdmFyIG9wZW4gPSBfcmVmMi5vcGVuO1xuICAgICAgICAgICAgcmV0dXJuIGdldEltYWdlQnV0dG9uKG9wZW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYzKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmMy5hdHRyaWJ1dGVzO1xuXG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdoZXJvLWltYWdlJyB9LFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBhdHRyaWJ1dGVzLmhlcm9JbWFnZSB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrLXRlbXBsYXRlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************!*\
  !*** ./src/block-template/style.scss ***!
  \***************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay10ZW1wbGF0ZS9zdHlsZS5zY3NzPzE3MjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay10ZW1wbGF0ZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!****************************************!*\
  !*** ./src/block-template/editor.scss ***!
  \****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay10ZW1wbGF0ZS9lZGl0b3Iuc2Nzcz9hMTlhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2stdGVtcGxhdGUvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);