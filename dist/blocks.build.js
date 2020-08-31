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
/*! dynamic exports provided */
/***/ (function(module, __webpack_exports__) {

"use strict";
eval("/**\n *  BLOCK: PPC Template\n *  ---\n */\n\n//  Import CSS.\n// import './editor.css'\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar RichText = wp.blockEditor.RichText;\n\n\nregisterBlockType('cgb/block-google-reviews', {\n  title: __('PCC Template'),\n  icon: 'shield',\n  category: 'layout',\n  keywords: [__('ppc'), __('template')],\n\n  // Enable or disable support for low-level features\n  supports: {\n    // Turn off ability to edit HTML of block content\n    html: false,\n    // Turn off reusable block feature\n    reusable: false,\n    // Add alignwide and alignfull options\n    align: false\n  },\n\n  // Set up data model \n  attributes: {\n    heroHeading: {\n      type: 'string',\n      selector: 'js-hero-text'\n    },\n    heroSubText: {\n      type: 'string',\n      selector: 'js-hero-subtext',\n      multiline: 'p'\n    }\n  },\n\n  // The UI for the WordPress editor\n  edit: function edit(props) {\n    // Pull out the props we'll use\n    var attributes = props.attributes,\n        className = props.className,\n        setAttributes = props.setAttributes;\n\n\n    return wp.element.createElement(\n      'div',\n      null,\n      wp.element.createElement(RichText, {\n        className: 'js-hero-text',\n        value: attributes.heroHeading,\n        onChange: function onChange(value) {\n          return setAttributes({ heroHeading: value });\n        },\n        tagName: 'h2',\n        placeholder: 'Hero Heading'\n      }),\n      wp.element.createElement(RichText, {\n        className: 'js-hero-subtext',\n        value: attributes.heroSubText,\n        onChange: function onChange(value) {\n          return setAttributes({ heroSubText: value });\n        },\n        tagName: 'h3',\n        placeholder: 'Hero Sub Text'\n      })\n    );\n  },\n\n  // The output on the live site\n  save: function save(props) {\n    return null;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay10ZW1wbGF0ZS9pbmRleC5qcz85MDY5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogIEJMT0NLOiBQUEMgVGVtcGxhdGVcbiAqICAtLS1cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbi8vIGltcG9ydCAnLi9lZGl0b3IuY3NzJ1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIFJpY2hUZXh0ID0gd3AuYmxvY2tFZGl0b3IuUmljaFRleHQ7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1nb29nbGUtcmV2aWV3cycsIHtcbiAgdGl0bGU6IF9fKCdQQ0MgVGVtcGxhdGUnKSxcbiAgaWNvbjogJ3NoaWVsZCcsXG4gIGNhdGVnb3J5OiAnbGF5b3V0JyxcbiAga2V5d29yZHM6IFtfXygncHBjJyksIF9fKCd0ZW1wbGF0ZScpXSxcblxuICAvLyBFbmFibGUgb3IgZGlzYWJsZSBzdXBwb3J0IGZvciBsb3ctbGV2ZWwgZmVhdHVyZXNcbiAgc3VwcG9ydHM6IHtcbiAgICAvLyBUdXJuIG9mZiBhYmlsaXR5IHRvIGVkaXQgSFRNTCBvZiBibG9jayBjb250ZW50XG4gICAgaHRtbDogZmFsc2UsXG4gICAgLy8gVHVybiBvZmYgcmV1c2FibGUgYmxvY2sgZmVhdHVyZVxuICAgIHJldXNhYmxlOiBmYWxzZSxcbiAgICAvLyBBZGQgYWxpZ253aWRlIGFuZCBhbGlnbmZ1bGwgb3B0aW9uc1xuICAgIGFsaWduOiBmYWxzZVxuICB9LFxuXG4gIC8vIFNldCB1cCBkYXRhIG1vZGVsIFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgaGVyb0hlYWRpbmc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc2VsZWN0b3I6ICdqcy1oZXJvLXRleHQnXG4gICAgfSxcbiAgICBoZXJvU3ViVGV4dDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBzZWxlY3RvcjogJ2pzLWhlcm8tc3VidGV4dCcsXG4gICAgICBtdWx0aWxpbmU6ICdwJ1xuICAgIH1cbiAgfSxcblxuICAvLyBUaGUgVUkgZm9yIHRoZSBXb3JkUHJlc3MgZWRpdG9yXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICAvLyBQdWxsIG91dCB0aGUgcHJvcHMgd2UnbGwgdXNlXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2pzLWhlcm8tdGV4dCcsXG4gICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmhlcm9IZWFkaW5nLFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IGhlcm9IZWFkaW5nOiB2YWx1ZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdGFnTmFtZTogJ2gyJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdIZXJvIEhlYWRpbmcnXG4gICAgICB9KSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICBjbGFzc05hbWU6ICdqcy1oZXJvLXN1YnRleHQnLFxuICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5oZXJvU3ViVGV4dCxcbiAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBoZXJvU3ViVGV4dDogdmFsdWUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRhZ05hbWU6ICdoMycsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnSGVybyBTdWIgVGV4dCdcbiAgICAgIH0pXG4gICAgKTtcbiAgfSxcblxuICAvLyBUaGUgb3V0cHV0IG9uIHRoZSBsaXZlIHNpdGVcbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay10ZW1wbGF0ZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);