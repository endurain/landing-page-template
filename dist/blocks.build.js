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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_index_js__ = __webpack_require__(/*! ./template/index.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi90ZW1wbGF0ZS9pbmRleC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************!*\
  !*** ./src/template/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: Coupon\n */\n\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    InspectorControls = _wp$editor.InspectorControls;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    ColorPalette = _wp$components.ColorPalette;\n\n// Import our CSS files\n\n\n\n\nregisterBlockType('template/main', {\n  title: 'PPC Template',\n  icon: 'tickets',\n  category: 'common',\n  attributes: {\n    title: {\n      source: 'text',\n      selector: '.coupon__title'\n    },\n    body: {\n      type: 'array',\n      source: 'children',\n      selector: '.coupon__body'\n    },\n    lowerBody: {\n      type: 'array',\n      source: 'children',\n      selector: '.lower__coupon__body'\n    },\n    imageAlt: {\n      attribute: 'alt',\n      selector: '.coupon__image'\n    },\n    imageUrl: {\n      attribute: 'src'\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        className = _ref.className,\n        setAttributes = _ref.setAttributes;\n\n\n    var getImageButton = function getImageButton(openEvent) {\n      if (attributes.imageUrl) {\n        return wp.element.createElement('img', {\n          src: attributes.imageUrl,\n          onClick: openEvent,\n          className: 'image'\n        });\n      } else {\n        return wp.element.createElement(\n          'div',\n          { className: 'button-container' },\n          wp.element.createElement(\n            Button,\n            {\n              onClick: openEvent,\n              className: 'button button-large'\n            },\n            'Pick an image'\n          )\n        );\n      }\n    };\n\n    return wp.element.createElement(\n      'div',\n      { className: 'container' },\n      wp.element.createElement(\n        'div',\n        { className: 'couponEditorWrapper' },\n        wp.element.createElement(\n          'div',\n          { className: 'couponContentContainer' },\n          wp.element.createElement(RichText, {\n            onChange: function onChange(content) {\n              return setAttributes({ body: content });\n            },\n            value: attributes.body,\n            multiline: 'p',\n            placeholder: 'Upper coupon text',\n            formattingControls: ['bold', 'italic', 'underline'],\n            isSelected: attributes.isSelected\n          }),\n          wp.element.createElement(RichText, {\n            onChange: function onChange(content) {\n              return setAttributes({ lowerBody: content });\n            },\n            value: attributes.lowerBody,\n            multiline: 'p',\n            placeholder: 'Lower coupon text',\n            formattingControls: ['bold', 'italic', 'underline'],\n            isSelected: attributes.isSelected\n          })\n        ),\n        wp.element.createElement(\n          'div',\n          { className: 'couponImageContainer' },\n          wp.element.createElement(MediaUpload, {\n            onSelect: function onSelect(media) {\n              setAttributes({ imageAlt: media.alt, imageUrl: media.url });\n            },\n            type: 'image',\n            value: attributes.imageUrl,\n            render: function render(_ref2) {\n              var open = _ref2.open;\n              return getImageButton(open);\n            }\n          })\n        )\n      )\n    );\n  },\n  save: function save(_ref3) {\n    var attributes = _ref3.attributes;\n\n\n    return wp.element.createElement(\n      'div',\n      { 'class': 'coupon__image__wrapper', style: { backgroundImage: \"url(\" + attributes.imageUrl + \")\" } },\n      wp.element.createElement(\n        'div',\n        { className: 'coupon__content' },\n        wp.element.createElement(\n          'h3',\n          { className: 'coupon__title' },\n          attributes.title\n        ),\n        wp.element.createElement(\n          'div',\n          { className: 'coupon__body' },\n          attributes.body\n        ),\n        wp.element.createElement(\n          'div',\n          { className: 'lower__body' },\n          attributes.lowerBody\n        )\n      )\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZS9pbmRleC5qcz8yMWFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IENvdXBvblxuICovXG5cbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBCdXR0b24gPSBfd3AkY29tcG9uZW50cy5CdXR0b24sXG4gICAgQ29sb3JQYWxldHRlID0gX3dwJGNvbXBvbmVudHMuQ29sb3JQYWxldHRlO1xuXG4vLyBJbXBvcnQgb3VyIENTUyBmaWxlc1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgndGVtcGxhdGUvbWFpbicsIHtcbiAgdGl0bGU6ICdQUEMgVGVtcGxhdGUnLFxuICBpY29uOiAndGlja2V0cycsXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgYXR0cmlidXRlczoge1xuICAgIHRpdGxlOiB7XG4gICAgICBzb3VyY2U6ICd0ZXh0JyxcbiAgICAgIHNlbGVjdG9yOiAnLmNvdXBvbl9fdGl0bGUnXG4gICAgfSxcbiAgICBib2R5OiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgc291cmNlOiAnY2hpbGRyZW4nLFxuICAgICAgc2VsZWN0b3I6ICcuY291cG9uX19ib2R5J1xuICAgIH0sXG4gICAgbG93ZXJCb2R5OiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgc291cmNlOiAnY2hpbGRyZW4nLFxuICAgICAgc2VsZWN0b3I6ICcubG93ZXJfX2NvdXBvbl9fYm9keSdcbiAgICB9LFxuICAgIGltYWdlQWx0OiB7XG4gICAgICBhdHRyaWJ1dGU6ICdhbHQnLFxuICAgICAgc2VsZWN0b3I6ICcuY291cG9uX19pbWFnZSdcbiAgICB9LFxuICAgIGltYWdlVXJsOiB7XG4gICAgICBhdHRyaWJ1dGU6ICdzcmMnXG4gICAgfVxuICB9LFxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXM7XG5cblxuICAgIHZhciBnZXRJbWFnZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldEltYWdlQnV0dG9uKG9wZW5FdmVudCkge1xuICAgICAgaWYgKGF0dHJpYnV0ZXMuaW1hZ2VVcmwpIHtcbiAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgICAgIHNyYzogYXR0cmlidXRlcy5pbWFnZVVybCxcbiAgICAgICAgICBvbkNsaWNrOiBvcGVuRXZlbnQsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnaW1hZ2UnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2J1dHRvbi1jb250YWluZXInIH0sXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbkNsaWNrOiBvcGVuRXZlbnQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tbGFyZ2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ1BpY2sgYW4gaW1hZ2UnXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ2NvbnRhaW5lcicgfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnY291cG9uRWRpdG9yV3JhcHBlcicgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY291cG9uQ29udGVudENvbnRhaW5lcicgfSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb250ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogY29udGVudCB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5ib2R5LFxuICAgICAgICAgICAgbXVsdGlsaW5lOiAncCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1VwcGVyIGNvdXBvbiB0ZXh0JyxcbiAgICAgICAgICAgIGZvcm1hdHRpbmdDb250cm9sczogWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGF0dHJpYnV0ZXMuaXNTZWxlY3RlZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBsb3dlckJvZHk6IGNvbnRlbnQgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMubG93ZXJCb2R5LFxuICAgICAgICAgICAgbXVsdGlsaW5lOiAncCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0xvd2VyIGNvdXBvbiB0ZXh0JyxcbiAgICAgICAgICAgIGZvcm1hdHRpbmdDb250cm9sczogWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGF0dHJpYnV0ZXMuaXNTZWxlY3RlZFxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvdXBvbkltYWdlQ29udGFpbmVyJyB9LFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuICAgICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KG1lZGlhKSB7XG4gICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBpbWFnZUFsdDogbWVkaWEuYWx0LCBpbWFnZVVybDogbWVkaWEudXJsIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5pbWFnZVVybCxcbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhciBvcGVuID0gX3JlZjIub3BlbjtcbiAgICAgICAgICAgICAgcmV0dXJuIGdldEltYWdlQnV0dG9uKG9wZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYzKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmMy5hdHRyaWJ1dGVzO1xuXG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICdjb3Vwb25fX2ltYWdlX193cmFwcGVyJywgc3R5bGU6IHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGF0dHJpYnV0ZXMuaW1hZ2VVcmwgKyBcIilcIiB9IH0sXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2NvdXBvbl9fY29udGVudCcgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdoMycsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdjb3Vwb25fX3RpdGxlJyB9LFxuICAgICAgICAgIGF0dHJpYnV0ZXMudGl0bGVcbiAgICAgICAgKSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY291cG9uX19ib2R5JyB9LFxuICAgICAgICAgIGF0dHJpYnV0ZXMuYm9keVxuICAgICAgICApLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdsb3dlcl9fYm9keScgfSxcbiAgICAgICAgICBhdHRyaWJ1dGVzLmxvd2VyQm9keVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************!*\
  !*** ./src/template/style.scss ***!
  \*********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZS9zdHlsZS5zY3NzPzEwZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**********************************!*\
  !*** ./src/template/editor.scss ***!
  \**********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZS9lZGl0b3Iuc2Nzcz8yNDNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGUvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);