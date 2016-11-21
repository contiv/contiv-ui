/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by vjain3 on 10/6/16.
	 */
	// Polyfills
	"use strict";
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(464); // Internet Explorer 9 support
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	__webpack_require__(461); // Internet Explorer 9 support
=======
<<<<<<< HEAD
	__webpack_require__(459); // Internet Explorer 9 support
>>>>>>> adding chart.js
>>>>>>> adding chart.js
	// import 'core-js/es6';
	// Added parts of es6 which are necessary for your project or your browser support requirements.
	__webpack_require__(314);
	__webpack_require__(307);
	__webpack_require__(303);
	__webpack_require__(309);
	__webpack_require__(308);
	__webpack_require__(306);
	__webpack_require__(305);
	__webpack_require__(313);
	__webpack_require__(302);
	__webpack_require__(301);
	__webpack_require__(311);
	__webpack_require__(304);
	__webpack_require__(312);
	__webpack_require__(316);
	__webpack_require__(317);
	__webpack_require__(315);
	__webpack_require__(310);
	// see issue https://github.com/AngularClass/angular2-webpack-starter/issues/709
	// import 'core-js/es6/promise';
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(318);
	__webpack_require__(738);
	__webpack_require__(737);
=======
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	__webpack_require__(315);
	__webpack_require__(735);
	__webpack_require__(734);
=======
	__webpack_require__(313);
	__webpack_require__(733);
	__webpack_require__(732);
=======
	__webpack_require__(602); // Internet Explorer 9 support
	// import 'core-js/es6';
	// Added parts of es6 which are necessary for your project or your browser support requirements.
	__webpack_require__(452);
	__webpack_require__(445);
	__webpack_require__(441);
	__webpack_require__(447);
	__webpack_require__(446);
	__webpack_require__(444);
	__webpack_require__(443);
	__webpack_require__(451);
	__webpack_require__(440);
	__webpack_require__(439);
	__webpack_require__(449);
	__webpack_require__(442);
	__webpack_require__(450);
	__webpack_require__(454);
=======
	__webpack_require__(617); // Internet Explorer 9 support
	// import 'core-js/es6';
	// Added parts of es6 which are necessary for your project or your browser support requirements.
	__webpack_require__(467);
	__webpack_require__(460);
	__webpack_require__(456);
	__webpack_require__(462);
	__webpack_require__(461);
	__webpack_require__(459);
	__webpack_require__(458);
	__webpack_require__(466);
>>>>>>> regenerating bundle
	__webpack_require__(455);
	__webpack_require__(454);
	__webpack_require__(464);
	__webpack_require__(457);
	__webpack_require__(465);
	__webpack_require__(469);
	__webpack_require__(470);
	__webpack_require__(468);
	__webpack_require__(463);
	// see issue https://github.com/AngularClass/angular2-webpack-starter/issues/709
	// import 'core-js/es6/promise';
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	__webpack_require__(456);
	__webpack_require__(877);
	__webpack_require__(876);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
	__webpack_require__(471);
	__webpack_require__(892);
	__webpack_require__(891);
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
	

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< HEAD
	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(13)
	  , hide      = __webpack_require__(34)
	  , redefine  = __webpack_require__(32)
	  , ctx       = __webpack_require__(60)
=======
=======
>>>>>>> regenerating bundle
	var global    = __webpack_require__(13)
	  , core      = __webpack_require__(14)
	  , hide      = __webpack_require__(35)
	  , redefine  = __webpack_require__(32)
	  , ctx       = __webpack_require__(62)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var store      = __webpack_require__(99)('wks')
=======
<<<<<<< HEAD
	var store      = __webpack_require__(98)('wks')
>>>>>>> adding chart.js
	  , uid        = __webpack_require__(64)
	  , Symbol     = __webpack_require__(12).Symbol
=======
	var store      = __webpack_require__(96)('wks')
=======
	var store      = __webpack_require__(99)('wks')
>>>>>>> regenerating bundle
	  , uid        = __webpack_require__(66)
	  , Symbol     = __webpack_require__(13).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 15 */,
=======
>>>>>>> adding chart.js
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< HEAD
	var anObject       = __webpack_require__(8)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , IE8_DOM_DEFINE = __webpack_require__(199)
=======
	  , IE8_DOM_DEFINE = __webpack_require__(196)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
>>>>>>> adding chart.js
	  , toPrimitive    = __webpack_require__(56)
=======
	  , toPrimitive    = __webpack_require__(55)
=======
	var anObject       = __webpack_require__(9)
	  , IE8_DOM_DEFINE = __webpack_require__(191)
	  , toPrimitive    = __webpack_require__(56)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
	  , dP             = Object.defineProperty;

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	exports.f = __webpack_require__(20) ? Object.defineProperty : function defineProperty(O, P, Attributes){
=======
	exports.f = __webpack_require__(19) ? Object.defineProperty : function defineProperty(O, P, Attributes){
=======
	var anObject       = __webpack_require__(9)
	  , IE8_DOM_DEFINE = __webpack_require__(198)
	  , toPrimitive    = __webpack_require__(57)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(20) ? Object.defineProperty : function defineProperty(O, P, Attributes){
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 18 */,
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 19 */,
/* 20 */
=======
/* 19 */
=======
<<<<<<< HEAD
/* 17 */,
=======
>>>>>>> 024b7b6... adding chart.js
/* 18 */
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 18 */,
/* 19 */,
/* 20 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
/* 20 */,
=======
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var toInteger = __webpack_require__(55)
=======
<<<<<<< HEAD
	var toInteger = __webpack_require__(54)
=======
	var toInteger = __webpack_require__(55)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var toInteger = __webpack_require__(56)
>>>>>>> regenerating bundle
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 30 */,
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 31 */,
/* 32 */
=======
/* 31 */
>>>>>>> adding chart.js
=======
/* 31 */,
/* 32 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< HEAD
	var global    = __webpack_require__(12)
	  , hide      = __webpack_require__(34)
	  , has       = __webpack_require__(28)
	  , SRC       = __webpack_require__(64)('src')
=======
=======
>>>>>>> regenerating bundle
	var global    = __webpack_require__(13)
	  , hide      = __webpack_require__(35)
	  , has       = __webpack_require__(29)
	  , SRC       = __webpack_require__(66)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(14).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 33 */
=======
/* 32 */
>>>>>>> adding chart.js
=======
/* 33 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	var $export = __webpack_require__(3)
	  , fails   = __webpack_require__(10)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , defined = __webpack_require__(46)
=======
<<<<<<< HEAD
	  , defined = __webpack_require__(45)
=======
	  , defined = __webpack_require__(46)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $export = __webpack_require__(4)
	  , fails   = __webpack_require__(11)
	  , defined = __webpack_require__(47)
>>>>>>> regenerating bundle
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 32 */,
/* 33 */,
>>>>>>> adding chart.js
/* 34 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var dP         = __webpack_require__(17)
	  , createDesc = __webpack_require__(54);
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	module.exports = __webpack_require__(20) ? function(object, key, value){
=======
	module.exports = __webpack_require__(19) ? function(object, key, value){
=======
	var dP         = __webpack_require__(16)
	  , createDesc = __webpack_require__(53);
=======
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(17)
	  , createDesc = __webpack_require__(54);
>>>>>>> 024b7b6... adding chart.js
	module.exports = __webpack_require__(18) ? function(object, key, value){
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(17)
	  , createDesc = __webpack_require__(55);
	module.exports = __webpack_require__(20) ? function(object, key, value){
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(46);
=======
<<<<<<< HEAD
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(45);
=======
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(46);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(47);
>>>>>>> regenerating bundle
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
=======
<<<<<<< HEAD
/* 35 */,
>>>>>>> adding chart.js
/* 36 */
=======
/* 36 */,
/* 37 */
>>>>>>> 024b7b6... adding chart.js
=======
/* 37 */,
/* 38 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(11);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	var IObject = __webpack_require__(78)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , defined = __webpack_require__(46);
=======
<<<<<<< HEAD
	  , defined = __webpack_require__(45);
=======
	  , defined = __webpack_require__(46);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var IObject = __webpack_require__(79)
	  , defined = __webpack_require__(47);
>>>>>>> regenerating bundle
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< HEAD
/* 38 */,
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 39 */,
/* 40 */
=======
/* 39 */
=======
/* 39 */,
/* 40 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 40 */,
/* 41 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< HEAD
	var ctx      = __webpack_require__(60)
	  , IObject  = __webpack_require__(78)
	  , toObject = __webpack_require__(35)
	  , toLength = __webpack_require__(25)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , asc      = __webpack_require__(321);
=======
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , asc      = __webpack_require__(318);
=======
	  , asc      = __webpack_require__(316);
=======
	var ctx      = __webpack_require__(62)
	  , IObject  = __webpack_require__(78)
	  , toObject = __webpack_require__(35)
	  , toLength = __webpack_require__(25)
	  , asc      = __webpack_require__(459);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
	var ctx      = __webpack_require__(62)
	  , IObject  = __webpack_require__(79)
	  , toObject = __webpack_require__(36)
	  , toLength = __webpack_require__(26)
	  , asc      = __webpack_require__(474);
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 41 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 40 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(28)
	  , toObject    = __webpack_require__(35)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , IE_PROTO    = __webpack_require__(133)('IE_PROTO')
=======
	  , IE_PROTO    = __webpack_require__(132)('IE_PROTO')
=======
/* 41 */
=======
/* 42 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var has         = __webpack_require__(27)
	  , toObject    = __webpack_require__(35)
	  , IE_PROTO    = __webpack_require__(129)('IE_PROTO')
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var has         = __webpack_require__(29)
	  , toObject    = __webpack_require__(36)
	  , IE_PROTO    = __webpack_require__(133)('IE_PROTO')
>>>>>>> regenerating bundle
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 42 */
=======
<<<<<<< HEAD
/* 41 */
=======
/* 42 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 43 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(4)
	  , core    = __webpack_require__(14)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 42 */,
>>>>>>> adding chart.js
/* 43 */,
/* 44 */,
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 45 */,
/* 46 */
=======
/* 45 */
=======
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 47 */
=======
<<<<<<< HEAD
/* 46 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(216)
	  , $export = __webpack_require__(3)
	  , shared  = __webpack_require__(99)('metadata')
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , store   = shared.store || (shared.store = new (__webpack_require__(224)));
=======
	  , store   = shared.store || (shared.store = new (__webpack_require__(221)));
=======
/* 47 */
=======
/* 48 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var Map     = __webpack_require__(208)
	  , $export = __webpack_require__(3)
	  , shared  = __webpack_require__(96)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(216)));
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var Map     = __webpack_require__(215)
	  , $export = __webpack_require__(4)
	  , shared  = __webpack_require__(99)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(223)));
>>>>>>> regenerating bundle

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 48 */
=======
<<<<<<< HEAD
/* 47 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(98)
	  , createDesc     = __webpack_require__(54)
	  , toIObject      = __webpack_require__(37)
	  , toPrimitive    = __webpack_require__(56)
	  , has            = __webpack_require__(28)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , IE8_DOM_DEFINE = __webpack_require__(199)
=======
	  , IE8_DOM_DEFINE = __webpack_require__(196)
=======
/* 48 */
=======
/* 49 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var pIE            = __webpack_require__(95)
	  , createDesc     = __webpack_require__(54)
	  , toIObject      = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(56)
	  , has            = __webpack_require__(27)
	  , IE8_DOM_DEFINE = __webpack_require__(191)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(20) ? gOPD : function getOwnPropertyDescriptor(O, P){
=======
	var pIE            = __webpack_require__(98)
	  , createDesc     = __webpack_require__(55)
	  , toIObject      = __webpack_require__(39)
	  , toPrimitive    = __webpack_require__(57)
	  , has            = __webpack_require__(29)
	  , IE8_DOM_DEFINE = __webpack_require__(198)
	  , gOPD           = Object.getOwnPropertyDescriptor;

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	exports.f = __webpack_require__(19) ? gOPD : function getOwnPropertyDescriptor(O, P){
=======
	exports.f = __webpack_require__(20) ? gOPD : function getOwnPropertyDescriptor(O, P){
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 49 */
=======
<<<<<<< HEAD
/* 48 */
=======
/* 49 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(20)){
	  var LIBRARY             = __webpack_require__(79)
<<<<<<< HEAD
	    , global              = __webpack_require__(12)
	    , fails               = __webpack_require__(10)
	    , $export             = __webpack_require__(3)
	    , $typed              = __webpack_require__(101)
	    , $buffer             = __webpack_require__(136)
	    , ctx                 = __webpack_require__(60)
	    , anInstance          = __webpack_require__(77)
	    , propertyDesc        = __webpack_require__(54)
	    , hide                = __webpack_require__(34)
	    , redefineAll         = __webpack_require__(80)
	    , toInteger           = __webpack_require__(55)
	    , toLength            = __webpack_require__(25)
	    , toIndex             = __webpack_require__(63)
	    , toPrimitive         = __webpack_require__(56)
	    , has                 = __webpack_require__(28)
	    , same                = __webpack_require__(211)
	    , classof             = __webpack_require__(120)
	    , isObject            = __webpack_require__(11)
	    , toObject            = __webpack_require__(35)
	    , isArrayIter         = __webpack_require__(125)
	    , create              = __webpack_require__(61)
	    , getPrototypeOf      = __webpack_require__(41)
	    , gOPN                = __webpack_require__(62).f
	    , getIterFn           = __webpack_require__(137)
	    , uid                 = __webpack_require__(64)
	    , wks                 = __webpack_require__(14)
	    , createArrayMethod   = __webpack_require__(40)
	    , createArrayIncludes = __webpack_require__(119)
	    , speciesConstructor  = __webpack_require__(212)
	    , ArrayIterators      = __webpack_require__(102)
	    , Iterators           = __webpack_require__(70)
	    , $iterDetect         = __webpack_require__(129)
	    , setSpecies          = __webpack_require__(81)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	    , arrayFill           = __webpack_require__(118)
	    , arrayCopyWithin     = __webpack_require__(191)
=======
	    , arrayFill           = __webpack_require__(117)
	    , arrayCopyWithin     = __webpack_require__(188)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	    , $DP                 = __webpack_require__(17)
	    , $GOPD               = __webpack_require__(48)
=======
	    , $DP                 = __webpack_require__(16)
	    , $GOPD               = __webpack_require__(47)
=======
=======
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(20)){
	  var LIBRARY             = __webpack_require__(80)
>>>>>>> regenerating bundle
	    , global              = __webpack_require__(13)
	    , fails               = __webpack_require__(11)
	    , $export             = __webpack_require__(4)
	    , $typed              = __webpack_require__(101)
	    , $buffer             = __webpack_require__(136)
	    , ctx                 = __webpack_require__(62)
	    , anInstance          = __webpack_require__(78)
	    , propertyDesc        = __webpack_require__(55)
	    , hide                = __webpack_require__(35)
	    , redefineAll         = __webpack_require__(81)
	    , toInteger           = __webpack_require__(56)
	    , toLength            = __webpack_require__(26)
	    , toIndex             = __webpack_require__(65)
	    , toPrimitive         = __webpack_require__(57)
	    , has                 = __webpack_require__(29)
	    , same                = __webpack_require__(210)
	    , classof             = __webpack_require__(120)
	    , isObject            = __webpack_require__(12)
	    , toObject            = __webpack_require__(36)
	    , isArrayIter         = __webpack_require__(125)
	    , create              = __webpack_require__(63)
	    , getPrototypeOf      = __webpack_require__(42)
	    , gOPN                = __webpack_require__(64).f
	    , getIterFn           = __webpack_require__(137)
	    , uid                 = __webpack_require__(66)
	    , wks                 = __webpack_require__(15)
	    , createArrayMethod   = __webpack_require__(41)
	    , createArrayIncludes = __webpack_require__(119)
	    , speciesConstructor  = __webpack_require__(211)
	    , ArrayIterators      = __webpack_require__(102)
<<<<<<< ca1977b2e739cc91a22b0074fa2a1a7d21e59b60
	    , Iterators           = __webpack_require__(71)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	    , $iterDetect         = __webpack_require__(125)
	    , setSpecies          = __webpack_require__(81)
	    , arrayFill           = __webpack_require__(114)
	    , arrayCopyWithin     = __webpack_require__(183)
>>>>>>> adding chart.js
=======
=======
	    , Iterators           = __webpack_require__(72)
>>>>>>> Adding Service lbs to dashboard
	    , $iterDetect         = __webpack_require__(129)
	    , setSpecies          = __webpack_require__(82)
	    , arrayFill           = __webpack_require__(118)
	    , arrayCopyWithin     = __webpack_require__(190)
>>>>>>> regenerating bundle
	    , $DP                 = __webpack_require__(17)
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	    , $GOPD               = __webpack_require__(48)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	    , $GOPD               = __webpack_require__(49)
>>>>>>> regenerating bundle
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 50 */,
/* 51 */,
/* 52 */
=======
<<<<<<< HEAD
/* 49 */,
/* 50 */,
/* 51 */
=======
/* 50 */,
/* 51 */,
/* 52 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 51 */,
/* 52 */,
/* 53 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 53 */
=======
<<<<<<< HEAD
/* 52 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(64)('meta')
	  , isObject = __webpack_require__(11)
	  , has      = __webpack_require__(28)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , setDesc  = __webpack_require__(17).f
=======
	  , setDesc  = __webpack_require__(16).f
=======
/* 53 */
=======
/* 54 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(66)('meta')
	  , isObject = __webpack_require__(12)
	  , has      = __webpack_require__(29)
	  , setDesc  = __webpack_require__(17).f
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
>>>>>>> regenerating bundle
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(11)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 54 */
=======
<<<<<<< HEAD
/* 53 */
=======
/* 54 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 55 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 55 */
=======
<<<<<<< HEAD
/* 54 */
=======
/* 55 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 56 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 56 */
=======
<<<<<<< HEAD
/* 55 */
=======
/* 56 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 57 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(12);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
=======
<<<<<<< HEAD
/* 56 */,
=======
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
/* 57 */,
=======
>>>>>>> regenerating bundle
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var aFunction = __webpack_require__(52);
=======
<<<<<<< HEAD
	var aFunction = __webpack_require__(51);
=======
	var aFunction = __webpack_require__(52);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var aFunction = __webpack_require__(53);
>>>>>>> regenerating bundle
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< HEAD
	var anObject    = __webpack_require__(8)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , dPs         = __webpack_require__(206)
	  , enumBugKeys = __webpack_require__(121)
	  , IE_PROTO    = __webpack_require__(133)('IE_PROTO')
=======
	  , dPs         = __webpack_require__(203)
	  , enumBugKeys = __webpack_require__(120)
	  , IE_PROTO    = __webpack_require__(132)('IE_PROTO')
=======
	var anObject    = __webpack_require__(9)
	  , dPs         = __webpack_require__(198)
	  , enumBugKeys = __webpack_require__(117)
	  , IE_PROTO    = __webpack_require__(129)('IE_PROTO')
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var anObject    = __webpack_require__(9)
	  , dPs         = __webpack_require__(205)
	  , enumBugKeys = __webpack_require__(121)
	  , IE_PROTO    = __webpack_require__(133)('IE_PROTO')
>>>>>>> regenerating bundle
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  var iframe = __webpack_require__(197)('iframe')
=======
<<<<<<< HEAD
	  var iframe = __webpack_require__(194)('iframe')
=======
	  var iframe = __webpack_require__(189)('iframe')
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  var iframe = __webpack_require__(196)('iframe')
>>>>>>> regenerating bundle
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  __webpack_require__(198).appendChild(iframe);
=======
<<<<<<< HEAD
	  __webpack_require__(195).appendChild(iframe);
=======
	  __webpack_require__(190).appendChild(iframe);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  __webpack_require__(197).appendChild(iframe);
>>>>>>> regenerating bundle
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	var $keys      = __webpack_require__(208)
	  , hiddenKeys = __webpack_require__(121).concat('length', 'prototype');
=======
<<<<<<< HEAD
	var $keys      = __webpack_require__(205)
	  , hiddenKeys = __webpack_require__(120).concat('length', 'prototype');
=======
	var $keys      = __webpack_require__(200)
	  , hiddenKeys = __webpack_require__(117).concat('length', 'prototype');
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $keys      = __webpack_require__(207)
	  , hiddenKeys = __webpack_require__(121).concat('length', 'prototype');
>>>>>>> regenerating bundle

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var toInteger = __webpack_require__(55)
=======
<<<<<<< HEAD
	var toInteger = __webpack_require__(54)
=======
	var toInteger = __webpack_require__(55)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var toInteger = __webpack_require__(56)
>>>>>>> regenerating bundle
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	var classof = __webpack_require__(120)
=======
<<<<<<< HEAD
	var classof = __webpack_require__(119)
=======
	var classof = __webpack_require__(116)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
	  , test    = {};
	test[__webpack_require__(15)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  __webpack_require__(32)(Object.prototype, 'toString', function toString(){
=======
	  __webpack_require__(31)(Object.prototype, 'toString', function toString(){
>>>>>>> adding chart.js
=======
	var classof = __webpack_require__(120)
	  , test    = {};
	test[__webpack_require__(15)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(32)(Object.prototype, 'toString', function toString(){
>>>>>>> regenerating bundle
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	var $keys       = __webpack_require__(208)
	  , enumBugKeys = __webpack_require__(121);
=======
<<<<<<< HEAD
	var $keys       = __webpack_require__(205)
	  , enumBugKeys = __webpack_require__(120);
=======
	var $keys       = __webpack_require__(200)
	  , enumBugKeys = __webpack_require__(117);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $keys       = __webpack_require__(207)
	  , enumBugKeys = __webpack_require__(121);
>>>>>>> regenerating bundle

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(15)('unscopables')
	  , ArrayProto  = Array.prototype;
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(34)(ArrayProto, UNSCOPABLES, {});
=======
<<<<<<< HEAD
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(33)(ArrayProto, UNSCOPABLES, {});
=======
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(34)(ArrayProto, UNSCOPABLES, {});
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(35)(ArrayProto, UNSCOPABLES, {});
>>>>>>> regenerating bundle
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(61);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	var redefine = __webpack_require__(32);
=======
	var redefine = __webpack_require__(31);
>>>>>>> adding chart.js
=======
	var redefine = __webpack_require__(32);
>>>>>>> regenerating bundle
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< HEAD
	var global      = __webpack_require__(12)
	  , dP          = __webpack_require__(17)
	  , DESCRIPTORS = __webpack_require__(20)
	  , SPECIES     = __webpack_require__(14)('species');
=======
=======
>>>>>>> regenerating bundle
	var global      = __webpack_require__(13)
	  , dP          = __webpack_require__(17)
	  , DESCRIPTORS = __webpack_require__(20)
	  , SPECIES     = __webpack_require__(15)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var def = __webpack_require__(17).f
=======
<<<<<<< HEAD
	var def = __webpack_require__(16).f
>>>>>>> adding chart.js
	  , has = __webpack_require__(28)
	  , TAG = __webpack_require__(14)('toStringTag');
=======
=======
>>>>>>> regenerating bundle
	var def = __webpack_require__(17).f
	  , has = __webpack_require__(29)
	  , TAG = __webpack_require__(15)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(12)
	  , $export           = __webpack_require__(3)
	  , redefine          = __webpack_require__(32)
	  , redefineAll       = __webpack_require__(80)
	  , meta              = __webpack_require__(53)
	  , forOf             = __webpack_require__(96)
	  , anInstance        = __webpack_require__(77)
	  , isObject          = __webpack_require__(11)
	  , fails             = __webpack_require__(10)
	  , $iterDetect       = __webpack_require__(129)
	  , setToStringTag    = __webpack_require__(82)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , inheritIfRequired = __webpack_require__(124);
=======
	  , inheritIfRequired = __webpack_require__(123);
=======
/* 91 */
=======
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(13)
	  , $export           = __webpack_require__(4)
	  , redefine          = __webpack_require__(32)
	  , redefineAll       = __webpack_require__(81)
	  , meta              = __webpack_require__(54)
	  , forOf             = __webpack_require__(96)
	  , anInstance        = __webpack_require__(78)
	  , isObject          = __webpack_require__(12)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	  , fails             = __webpack_require__(10)
	  , $iterDetect       = __webpack_require__(125)
	  , setToStringTag    = __webpack_require__(82)
	  , inheritIfRequired = __webpack_require__(120);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , fails             = __webpack_require__(11)
	  , $iterDetect       = __webpack_require__(129)
	  , setToStringTag    = __webpack_require__(83)
	  , inheritIfRequired = __webpack_require__(124);
>>>>>>> regenerating bundle

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 95 */
=======
<<<<<<< HEAD
/* 94 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(34)
	  , redefine = __webpack_require__(32)
	  , fails    = __webpack_require__(10)
	  , defined  = __webpack_require__(46)
	  , wks      = __webpack_require__(14);
=======
/* 92 */
=======
/* 95 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(35)
	  , redefine = __webpack_require__(32)
	  , fails    = __webpack_require__(11)
	  , defined  = __webpack_require__(47)
	  , wks      = __webpack_require__(15);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 96 */
=======
<<<<<<< HEAD
/* 95 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(60)
	  , call        = __webpack_require__(201)
	  , isArrayIter = __webpack_require__(125)
	  , anObject    = __webpack_require__(8)
	  , toLength    = __webpack_require__(25)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , getIterFn   = __webpack_require__(137)
=======
	  , getIterFn   = __webpack_require__(136)
=======
/* 93 */
=======
/* 96 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(62)
	  , call        = __webpack_require__(200)
	  , isArrayIter = __webpack_require__(125)
	  , anObject    = __webpack_require__(9)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	  , toLength    = __webpack_require__(25)
	  , getIterFn   = __webpack_require__(133)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , toLength    = __webpack_require__(26)
	  , getIterFn   = __webpack_require__(137)
>>>>>>> regenerating bundle
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 97 */
=======
<<<<<<< HEAD
/* 96 */
=======
/* 94 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 97 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 98 */
=======
<<<<<<< HEAD
/* 97 */
=======
/* 95 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 98 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 99 */
=======
<<<<<<< HEAD
/* 98 */
=======
/* 96 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 99 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(13)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 100 */
=======
<<<<<<< HEAD
/* 99 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(3)
	  , defined = __webpack_require__(46)
	  , fails   = __webpack_require__(10)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , spaces  = __webpack_require__(135)
=======
	  , spaces  = __webpack_require__(134)
=======
/* 97 */
=======
/* 100 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var $export = __webpack_require__(3)
	  , defined = __webpack_require__(46)
	  , fails   = __webpack_require__(10)
	  , spaces  = __webpack_require__(131)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $export = __webpack_require__(4)
	  , defined = __webpack_require__(47)
	  , fails   = __webpack_require__(11)
	  , spaces  = __webpack_require__(135)
>>>>>>> regenerating bundle
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 101 */
=======
<<<<<<< HEAD
/* 100 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12)
	  , hide   = __webpack_require__(34)
	  , uid    = __webpack_require__(64)
=======
/* 98 */
=======
/* 101 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(13)
	  , hide   = __webpack_require__(35)
	  , uid    = __webpack_require__(66)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 102 */
=======
<<<<<<< HEAD
/* 101 */
=======
/* 99 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 102 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var addToUnscopables = __webpack_require__(76)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , step             = __webpack_require__(203)
=======
<<<<<<< HEAD
	  , step             = __webpack_require__(200)
>>>>>>> adding chart.js
	  , Iterators        = __webpack_require__(70)
	  , toIObject        = __webpack_require__(37);
=======
	  , step             = __webpack_require__(195)
=======
	var addToUnscopables = __webpack_require__(77)
	  , step             = __webpack_require__(202)
<<<<<<< ca1977b2e739cc91a22b0074fa2a1a7d21e59b60
>>>>>>> regenerating bundle
	  , Iterators        = __webpack_require__(71)
=======
	  , Iterators        = __webpack_require__(72)
>>>>>>> Adding Service lbs to dashboard
	  , toIObject        = __webpack_require__(39);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
=======
<<<<<<< HEAD
	module.exports = __webpack_require__(127)(Array, 'Array', function(iterated, kind){
=======
	module.exports = __webpack_require__(124)(Array, 'Array', function(iterated, kind){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
>>>>>>> regenerating bundle
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 103 */
=======
<<<<<<< HEAD
/* 102 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(213)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(128)(String, 'String', function(iterated){
=======
	__webpack_require__(127)(String, 'String', function(iterated){
=======
/* 100 */
=======
/* 103 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(212)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	__webpack_require__(124)(String, 'String', function(iterated){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(128)(String, 'String', function(iterated){
>>>>>>> regenerating bundle
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
=======
<<<<<<< HEAD
=======
/* 101 */,
/* 102 */,
>>>>>>> 024b7b6... adding chart.js
/* 103 */,
>>>>>>> adding chart.js
=======
>>>>>>> regenerating bundle
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 117 */,
/* 118 */
=======
/* 117 */
=======
/* 114 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 117 */,
/* 118 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var toObject = __webpack_require__(35)
=======
<<<<<<< HEAD
	var toObject = __webpack_require__(34)
>>>>>>> adding chart.js
	  , toIndex  = __webpack_require__(63)
=======
	var toObject = __webpack_require__(35)
=======
	var toObject = __webpack_require__(36)
>>>>>>> regenerating bundle
	  , toIndex  = __webpack_require__(65)
	  , toLength = __webpack_require__(26);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 119 */
=======
<<<<<<< HEAD
/* 118 */
=======
/* 115 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 119 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(39)
	  , toLength  = __webpack_require__(26)
	  , toIndex   = __webpack_require__(65);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 120 */
=======
<<<<<<< HEAD
/* 119 */
=======
/* 116 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 120 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(61)
	  , TAG = __webpack_require__(15)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 121 */
=======
<<<<<<< HEAD
/* 120 */
=======
/* 117 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 121 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 122 */
=======
<<<<<<< HEAD
/* 121 */
=======
/* 118 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 122 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(15)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 123 */
=======
<<<<<<< HEAD
/* 122 */
=======
/* 119 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 123 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(9);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(11)
	  , setPrototypeOf = __webpack_require__(132).set;
=======
<<<<<<< HEAD
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(11)
	  , setPrototypeOf = __webpack_require__(131).set;
=======
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(12)
	  , setPrototypeOf = __webpack_require__(128).set;
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(12)
	  , setPrototypeOf = __webpack_require__(132).set;
>>>>>>> regenerating bundle
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 125 */
=======
<<<<<<< HEAD
/* 124 */
=======
/* 121 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 125 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(72)
	  , ITERATOR   = __webpack_require__(15)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 126 */
=======
<<<<<<< HEAD
/* 125 */
=======
/* 122 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 126 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(61);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 127 */
=======
<<<<<<< HEAD
/* 126 */
=======
/* 123 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 127 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(12)
	  , cof      = __webpack_require__(61)
	  , MATCH    = __webpack_require__(15)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 128 */
=======
<<<<<<< HEAD
/* 127 */
=======
/* 124 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 128 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	var LIBRARY        = __webpack_require__(79)
	  , $export        = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , redefine       = __webpack_require__(32)
=======
<<<<<<< HEAD
	  , redefine       = __webpack_require__(30)
>>>>>>> adding chart.js
	  , hide           = __webpack_require__(34)
	  , has            = __webpack_require__(28)
	  , Iterators      = __webpack_require__(70)
	  , $iterCreate    = __webpack_require__(202)
	  , setToStringTag = __webpack_require__(82)
	  , getPrototypeOf = __webpack_require__(41)
	  , ITERATOR       = __webpack_require__(14)('iterator')
=======
	  , redefine       = __webpack_require__(31)
	  , hide           = __webpack_require__(34)
	  , has            = __webpack_require__(27)
=======
	var LIBRARY        = __webpack_require__(80)
	  , $export        = __webpack_require__(4)
	  , redefine       = __webpack_require__(32)
	  , hide           = __webpack_require__(35)
	  , has            = __webpack_require__(29)
<<<<<<< 9cc5add699776d06c032baa0b51a6c0eb5c6b9fd
>>>>>>> regenerating bundle
	  , Iterators      = __webpack_require__(71)
=======
	  , Iterators      = __webpack_require__(72)
>>>>>>> Adding Service lbs to dashboard
	  , $iterCreate    = __webpack_require__(201)
	  , setToStringTag = __webpack_require__(83)
	  , getPrototypeOf = __webpack_require__(42)
	  , ITERATOR       = __webpack_require__(15)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 129 */
=======
<<<<<<< HEAD
/* 128 */
=======
/* 125 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 129 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(15)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 130 */
=======
<<<<<<< HEAD
/* 129 */
=======
/* 126 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 130 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 131 */
=======
<<<<<<< HEAD
/* 130 */
=======
/* 127 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 131 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 132 */
=======
<<<<<<< HEAD
/* 131 */
=======
/* 128 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 132 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(12)
	  , anObject = __webpack_require__(9);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	        set = __webpack_require__(60)(Function.call, __webpack_require__(48).f(Object.prototype, '__proto__').set, 2);
=======
<<<<<<< HEAD
	        set = __webpack_require__(60)(Function.call, __webpack_require__(47).f(Object.prototype, '__proto__').set, 2);
=======
	        set = __webpack_require__(62)(Function.call, __webpack_require__(48).f(Object.prototype, '__proto__').set, 2);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	        set = __webpack_require__(62)(Function.call, __webpack_require__(49).f(Object.prototype, '__proto__').set, 2);
>>>>>>> regenerating bundle
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 133 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 132 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(99)('keys')
	  , uid    = __webpack_require__(64);
=======
/* 129 */
=======
/* 133 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(99)('keys')
	  , uid    = __webpack_require__(66);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(127)
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(126)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , defined  = __webpack_require__(46);
=======
	  , defined  = __webpack_require__(45);
=======
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(123)
>>>>>>> adding chart.js
	  , defined  = __webpack_require__(46);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(127)
	  , defined  = __webpack_require__(47);
>>>>>>> regenerating bundle

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 135 */
=======
<<<<<<< HEAD
/* 134 */
=======
/* 131 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 135 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 136 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 135 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(12)
	  , DESCRIPTORS    = __webpack_require__(20)
	  , LIBRARY        = __webpack_require__(79)
	  , $typed         = __webpack_require__(101)
	  , hide           = __webpack_require__(34)
	  , redefineAll    = __webpack_require__(80)
	  , fails          = __webpack_require__(10)
	  , anInstance     = __webpack_require__(77)
	  , toInteger      = __webpack_require__(55)
	  , toLength       = __webpack_require__(25)
	  , gOPN           = __webpack_require__(62).f
	  , dP             = __webpack_require__(17).f
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , arrayFill      = __webpack_require__(118)
=======
	  , arrayFill      = __webpack_require__(117)
=======
/* 132 */
=======
/* 136 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(13)
	  , DESCRIPTORS    = __webpack_require__(20)
	  , LIBRARY        = __webpack_require__(80)
	  , $typed         = __webpack_require__(101)
	  , hide           = __webpack_require__(35)
	  , redefineAll    = __webpack_require__(81)
	  , fails          = __webpack_require__(11)
	  , anInstance     = __webpack_require__(78)
	  , toInteger      = __webpack_require__(56)
	  , toLength       = __webpack_require__(26)
	  , gOPN           = __webpack_require__(64).f
	  , dP             = __webpack_require__(17).f
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	  , arrayFill      = __webpack_require__(114)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
	  , setToStringTag = __webpack_require__(82)
=======
	  , arrayFill      = __webpack_require__(118)
	  , setToStringTag = __webpack_require__(83)
>>>>>>> regenerating bundle
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 137 */
=======
<<<<<<< HEAD
/* 136 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(120)
	  , ITERATOR  = __webpack_require__(14)('iterator')
	  , Iterators = __webpack_require__(70);
	module.exports = __webpack_require__(13).getIteratorMethod = function(it){
=======
/* 133 */
=======
/* 137 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(120)
	  , ITERATOR  = __webpack_require__(15)('iterator')
	  , Iterators = __webpack_require__(72);
	module.exports = __webpack_require__(14).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 138 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 137 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(102)
	  , redefine      = __webpack_require__(32)
	  , global        = __webpack_require__(12)
	  , hide          = __webpack_require__(34)
	  , Iterators     = __webpack_require__(70)
	  , wks           = __webpack_require__(14)
=======
/* 134 */
=======
/* 138 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(102)
	  , redefine      = __webpack_require__(32)
	  , global        = __webpack_require__(13)
	  , hide          = __webpack_require__(35)
	  , Iterators     = __webpack_require__(72)
	  , wks           = __webpack_require__(15)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
=======
<<<<<<< HEAD
=======
/* 135 */,
/* 136 */,
/* 137 */,
>>>>>>> 024b7b6... adding chart.js
/* 138 */,
>>>>>>> adding chart.js
=======
>>>>>>> regenerating bundle
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
=======
/* 187 */
=======
/* 182 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 187 */,
/* 188 */,
/* 189 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(61);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 191 */
=======
<<<<<<< HEAD
/* 188 */
=======
/* 183 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 190 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var toObject = __webpack_require__(35)
=======
<<<<<<< HEAD
	var toObject = __webpack_require__(34)
>>>>>>> adding chart.js
	  , toIndex  = __webpack_require__(63)
=======
	var toObject = __webpack_require__(35)
=======
	var toObject = __webpack_require__(36)
>>>>>>> regenerating bundle
	  , toIndex  = __webpack_require__(65)
	  , toLength = __webpack_require__(26);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 192 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 189 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var aFunction = __webpack_require__(52)
	  , toObject  = __webpack_require__(35)
=======
	var aFunction = __webpack_require__(51)
	  , toObject  = __webpack_require__(34)
=======
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(52)
	  , toObject  = __webpack_require__(35)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
	  , IObject   = __webpack_require__(78)
	  , toLength  = __webpack_require__(25);
=======
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(53)
	  , toObject  = __webpack_require__(36)
	  , IObject   = __webpack_require__(79)
	  , toLength  = __webpack_require__(26);
>>>>>>> regenerating bundle

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 193 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 190 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(52)
	  , isObject   = __webpack_require__(11)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , invoke     = __webpack_require__(324)
=======
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , invoke     = __webpack_require__(321)
=======
	  , invoke     = __webpack_require__(319)
=======
/* 185 */
=======
/* 192 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(53)
	  , isObject   = __webpack_require__(12)
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	  , invoke     = __webpack_require__(462)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
	  , invoke     = __webpack_require__(477)
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 194 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 191 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(17).f
	  , create      = __webpack_require__(61)
	  , redefineAll = __webpack_require__(80)
	  , ctx         = __webpack_require__(60)
	  , anInstance  = __webpack_require__(77)
	  , defined     = __webpack_require__(46)
	  , forOf       = __webpack_require__(96)
	  , $iterDefine = __webpack_require__(128)
	  , step        = __webpack_require__(203)
	  , setSpecies  = __webpack_require__(81)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , DESCRIPTORS = __webpack_require__(20)
=======
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , DESCRIPTORS = __webpack_require__(19)
>>>>>>> adding chart.js
	  , fastKey     = __webpack_require__(53).fastKey
=======
	  , DESCRIPTORS = __webpack_require__(18)
	  , fastKey     = __webpack_require__(52).fastKey
=======
/* 186 */
=======
/* 193 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(17).f
	  , create      = __webpack_require__(63)
	  , redefineAll = __webpack_require__(81)
	  , ctx         = __webpack_require__(62)
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	  , anInstance  = __webpack_require__(77)
	  , defined     = __webpack_require__(46)
	  , forOf       = __webpack_require__(93)
	  , $iterDefine = __webpack_require__(124)
	  , step        = __webpack_require__(195)
	  , setSpecies  = __webpack_require__(81)
	  , DESCRIPTORS = __webpack_require__(18)
	  , fastKey     = __webpack_require__(53).fastKey
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , anInstance  = __webpack_require__(78)
	  , defined     = __webpack_require__(47)
	  , forOf       = __webpack_require__(96)
	  , $iterDefine = __webpack_require__(128)
	  , step        = __webpack_require__(202)
	  , setSpecies  = __webpack_require__(82)
	  , DESCRIPTORS = __webpack_require__(20)
	  , fastKey     = __webpack_require__(54).fastKey
>>>>>>> regenerating bundle
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 195 */
=======
<<<<<<< HEAD
/* 192 */
=======
/* 187 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 194 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	var redefineAll       = __webpack_require__(80)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , getWeak           = __webpack_require__(53).getWeak
=======
<<<<<<< HEAD
	  , getWeak           = __webpack_require__(52).getWeak
>>>>>>> adding chart.js
	  , anObject          = __webpack_require__(8)
	  , isObject          = __webpack_require__(11)
	  , anInstance        = __webpack_require__(77)
	  , forOf             = __webpack_require__(96)
	  , createArrayMethod = __webpack_require__(40)
	  , $has              = __webpack_require__(28)
=======
	  , getWeak           = __webpack_require__(53).getWeak
=======
	var redefineAll       = __webpack_require__(81)
	  , getWeak           = __webpack_require__(54).getWeak
>>>>>>> regenerating bundle
	  , anObject          = __webpack_require__(9)
	  , isObject          = __webpack_require__(12)
	  , anInstance        = __webpack_require__(78)
	  , forOf             = __webpack_require__(96)
	  , createArrayMethod = __webpack_require__(41)
	  , $has              = __webpack_require__(29)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 196 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 193 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var $defineProperty = __webpack_require__(17)
	  , createDesc      = __webpack_require__(54);
=======
	var $defineProperty = __webpack_require__(16)
	  , createDesc      = __webpack_require__(53);
=======
/* 188 */
=======
/* 195 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(17)
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	  , createDesc      = __webpack_require__(54);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , createDesc      = __webpack_require__(55);
>>>>>>> regenerating bundle

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 197 */
=======
<<<<<<< HEAD
/* 194 */
=======
/* 189 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 196 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12)
	  , document = __webpack_require__(13).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 198 */
=======
<<<<<<< HEAD
/* 195 */
=======
/* 190 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 197 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13).document && document.documentElement;

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 199 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 196 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(20) && !__webpack_require__(10)(function(){
	  return Object.defineProperty(__webpack_require__(197)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 200 */
=======
/* 197 */
=======
/* 191 */
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 198 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(20) && !__webpack_require__(11)(function(){
	  return Object.defineProperty(__webpack_require__(196)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(12)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 201 */
=======
<<<<<<< HEAD
/* 198 */
=======
/* 193 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 200 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(9);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 202 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 199 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(61)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , descriptor     = __webpack_require__(54)
=======
	  , descriptor     = __webpack_require__(53)
=======
/* 194 */
=======
/* 201 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(63)
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	  , descriptor     = __webpack_require__(54)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
	  , setToStringTag = __webpack_require__(82)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	__webpack_require__(34)(IteratorPrototype, __webpack_require__(14)('iterator'), function(){ return this; });
=======
<<<<<<< HEAD
	__webpack_require__(33)(IteratorPrototype, __webpack_require__(14)('iterator'), function(){ return this; });
=======
	__webpack_require__(34)(IteratorPrototype, __webpack_require__(15)('iterator'), function(){ return this; });
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , descriptor     = __webpack_require__(55)
	  , setToStringTag = __webpack_require__(83)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(35)(IteratorPrototype, __webpack_require__(15)('iterator'), function(){ return this; });
>>>>>>> regenerating bundle

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 203 */
=======
<<<<<<< HEAD
/* 200 */
=======
/* 195 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 202 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 204 */
=======
<<<<<<< HEAD
/* 201 */
=======
/* 196 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 203 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 205 */
=======
<<<<<<< HEAD
/* 202 */
=======
/* 197 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 204 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
<<<<<<< 9cc5add699776d06c032baa0b51a6c0eb5c6b9fd
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< HEAD
	var getKeys  = __webpack_require__(71)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , gOPS     = __webpack_require__(97)
	  , pIE      = __webpack_require__(98)
	  , toObject = __webpack_require__(35)
=======
	  , gOPS     = __webpack_require__(96)
	  , pIE      = __webpack_require__(97)
	  , toObject = __webpack_require__(34)
=======
	var getKeys  = __webpack_require__(72)
	  , gOPS     = __webpack_require__(94)
	  , pIE      = __webpack_require__(95)
	  , toObject = __webpack_require__(35)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
	  , IObject  = __webpack_require__(78)
=======
	var getKeys  = __webpack_require__(72)
=======
	var getKeys  = __webpack_require__(73)
>>>>>>> Adding Service lbs to dashboard
	  , gOPS     = __webpack_require__(97)
	  , pIE      = __webpack_require__(98)
	  , toObject = __webpack_require__(36)
	  , IObject  = __webpack_require__(79)
>>>>>>> regenerating bundle
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(11)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 206 */
=======
<<<<<<< HEAD
/* 203 */
=======
/* 198 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 205 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(17)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , anObject = __webpack_require__(8)
	  , getKeys  = __webpack_require__(71);
=======
	  , anObject = __webpack_require__(9)
<<<<<<< 9cc5add699776d06c032baa0b51a6c0eb5c6b9fd
	  , getKeys  = __webpack_require__(72);
>>>>>>> adding chart.js
=======
	  , getKeys  = __webpack_require__(73);
>>>>>>> Adding Service lbs to dashboard

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	module.exports = __webpack_require__(20) ? Object.defineProperties : function defineProperties(O, Properties){
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	module.exports = __webpack_require__(19) ? Object.defineProperties : function defineProperties(O, Properties){
=======
	module.exports = __webpack_require__(20) ? Object.defineProperties : function defineProperties(O, Properties){
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 207 */
=======
<<<<<<< HEAD
/* 204 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(37)
	  , gOPN      = __webpack_require__(62).f
=======
/* 199 */
=======
/* 206 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(39)
	  , gOPN      = __webpack_require__(64).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 208 */
=======
<<<<<<< HEAD
/* 205 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(28)
	  , toIObject    = __webpack_require__(37)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , arrayIndexOf = __webpack_require__(119)(false)
	  , IE_PROTO     = __webpack_require__(133)('IE_PROTO');
=======
	  , arrayIndexOf = __webpack_require__(118)(false)
	  , IE_PROTO     = __webpack_require__(132)('IE_PROTO');
=======
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(27)
	  , toIObject    = __webpack_require__(38)
	  , arrayIndexOf = __webpack_require__(115)(false)
	  , IE_PROTO     = __webpack_require__(129)('IE_PROTO');
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(29)
	  , toIObject    = __webpack_require__(39)
	  , arrayIndexOf = __webpack_require__(119)(false)
	  , IE_PROTO     = __webpack_require__(133)('IE_PROTO');
>>>>>>> regenerating bundle

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 209 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 206 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(12).parseFloat
	  , $trim       = __webpack_require__(100).trim;

<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	module.exports = 1 / $parseFloat(__webpack_require__(135) + '-0') !== -Infinity ? function parseFloat(str){
=======
	module.exports = 1 / $parseFloat(__webpack_require__(134) + '-0') !== -Infinity ? function parseFloat(str){
=======
/* 201 */
=======
/* 208 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(13).parseFloat
	  , $trim       = __webpack_require__(100).trim;

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	module.exports = 1 / $parseFloat(__webpack_require__(131) + '-0') !== -Infinity ? function parseFloat(str){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	module.exports = 1 / $parseFloat(__webpack_require__(135) + '-0') !== -Infinity ? function parseFloat(str){
>>>>>>> regenerating bundle
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 210 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 207 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(12).parseInt
	  , $trim     = __webpack_require__(100).trim
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , ws        = __webpack_require__(135)
=======
	  , ws        = __webpack_require__(134)
=======
/* 202 */
=======
/* 209 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(13).parseInt
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	  , $trim     = __webpack_require__(97).trim
	  , ws        = __webpack_require__(131)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , $trim     = __webpack_require__(100).trim
	  , ws        = __webpack_require__(135)
>>>>>>> regenerating bundle
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 211 */
=======
<<<<<<< HEAD
/* 208 */
=======
/* 203 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 210 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 212 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 209 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(8)
	  , aFunction = __webpack_require__(52)
	  , SPECIES   = __webpack_require__(14)('species');
=======
/* 204 */
=======
/* 211 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(9)
	  , aFunction = __webpack_require__(53)
	  , SPECIES   = __webpack_require__(15)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 213 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 210 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var toInteger = __webpack_require__(55)
	  , defined   = __webpack_require__(46);
=======
	var toInteger = __webpack_require__(54)
	  , defined   = __webpack_require__(45);
=======
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(55)
	  , defined   = __webpack_require__(46);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(56)
	  , defined   = __webpack_require__(47);
>>>>>>> regenerating bundle
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 214 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 211 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var toInteger = __webpack_require__(55)
	  , defined   = __webpack_require__(46);
=======
	var toInteger = __webpack_require__(54)
	  , defined   = __webpack_require__(45);
=======
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(55)
	  , defined   = __webpack_require__(46);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(56)
	  , defined   = __webpack_require__(47);
>>>>>>> regenerating bundle

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 215 */
=======
<<<<<<< HEAD
/* 212 */
=======
/* 207 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 214 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(15);

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 216 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 213 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(194);

	// 23.1 Map Objects
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	module.exports = __webpack_require__(94)('Map', function(get){
=======
	module.exports = __webpack_require__(93)('Map', function(get){
=======
/* 208 */
=======
/* 215 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(193);

	// 23.1 Map Objects
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	module.exports = __webpack_require__(91)('Map', function(get){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	module.exports = __webpack_require__(94)('Map', function(get){
>>>>>>> regenerating bundle
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 217 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 214 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(20) && /./g.flags != 'g')__webpack_require__(17).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(123)
	});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	__webpack_require__(95)('match', 1, function(defined, MATCH, $match){
=======
	__webpack_require__(94)('match', 1, function(defined, MATCH, $match){
=======
/* 209 */
=======
/* 216 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(20) && /./g.flags != 'g')__webpack_require__(17).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(123)
	});

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	__webpack_require__(92)('match', 1, function(defined, MATCH, $match){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(95)('match', 1, function(defined, MATCH, $match){
>>>>>>> regenerating bundle
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 219 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 216 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	__webpack_require__(95)('replace', 2, function(defined, REPLACE, $replace){
=======
	__webpack_require__(94)('replace', 2, function(defined, REPLACE, $replace){
=======
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(92)('replace', 2, function(defined, REPLACE, $replace){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(95)('replace', 2, function(defined, REPLACE, $replace){
>>>>>>> regenerating bundle
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 220 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 217 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	__webpack_require__(95)('search', 1, function(defined, SEARCH, $search){
=======
	__webpack_require__(94)('search', 1, function(defined, SEARCH, $search){
=======
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(92)('search', 1, function(defined, SEARCH, $search){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(95)('search', 1, function(defined, SEARCH, $search){
>>>>>>> regenerating bundle
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 221 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 218 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(95)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  var isRegExp   = __webpack_require__(127)
=======
	  var isRegExp   = __webpack_require__(126)
=======
/* 213 */
=======
/* 220 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(95)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	  var isRegExp   = __webpack_require__(123)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  var isRegExp   = __webpack_require__(127)
>>>>>>> regenerating bundle
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 222 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 219 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(194);

	// 23.2 Set Objects
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	module.exports = __webpack_require__(94)('Set', function(get){
=======
	module.exports = __webpack_require__(93)('Set', function(get){
=======
/* 214 */
=======
/* 221 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(193);

	// 23.2 Set Objects
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	module.exports = __webpack_require__(91)('Set', function(get){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	module.exports = __webpack_require__(94)('Set', function(get){
>>>>>>> regenerating bundle
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 223 */
=======
<<<<<<< HEAD
/* 220 */
=======
/* 215 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 222 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< HEAD
	var global         = __webpack_require__(12)
	  , has            = __webpack_require__(28)
	  , DESCRIPTORS    = __webpack_require__(20)
	  , $export        = __webpack_require__(3)
	  , redefine       = __webpack_require__(32)
	  , META           = __webpack_require__(53).KEY
	  , $fails         = __webpack_require__(10)
	  , shared         = __webpack_require__(99)
	  , setToStringTag = __webpack_require__(82)
	  , uid            = __webpack_require__(64)
	  , wks            = __webpack_require__(14)
	  , wksExt         = __webpack_require__(215)
	  , wksDefine      = __webpack_require__(327)
	  , keyOf          = __webpack_require__(325)
	  , enumKeys       = __webpack_require__(323)
	  , isArray        = __webpack_require__(126)
	  , anObject       = __webpack_require__(8)
	  , toIObject      = __webpack_require__(37)
	  , toPrimitive    = __webpack_require__(56)
	  , createDesc     = __webpack_require__(54)
	  , _create        = __webpack_require__(61)
	  , gOPNExt        = __webpack_require__(207)
	  , $GOPD          = __webpack_require__(48)
	  , $DP            = __webpack_require__(17)
	  , $keys          = __webpack_require__(71)
=======
=======
>>>>>>> regenerating bundle
	var global         = __webpack_require__(13)
	  , has            = __webpack_require__(29)
	  , DESCRIPTORS    = __webpack_require__(20)
	  , $export        = __webpack_require__(4)
	  , redefine       = __webpack_require__(32)
	  , META           = __webpack_require__(54).KEY
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(99)
	  , setToStringTag = __webpack_require__(83)
	  , uid            = __webpack_require__(66)
	  , wks            = __webpack_require__(15)
	  , wksExt         = __webpack_require__(214)
	  , wksDefine      = __webpack_require__(480)
	  , keyOf          = __webpack_require__(478)
	  , enumKeys       = __webpack_require__(476)
	  , isArray        = __webpack_require__(126)
	  , anObject       = __webpack_require__(9)
	  , toIObject      = __webpack_require__(39)
	  , toPrimitive    = __webpack_require__(57)
	  , createDesc     = __webpack_require__(55)
	  , _create        = __webpack_require__(63)
	  , gOPNExt        = __webpack_require__(206)
	  , $GOPD          = __webpack_require__(49)
	  , $DP            = __webpack_require__(17)
	  , $keys          = __webpack_require__(73)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< HEAD
	  __webpack_require__(62).f = gOPNExt.f = $getOwnPropertyNames;
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  __webpack_require__(98).f  = $propertyIsEnumerable;
	  __webpack_require__(97).f = $getOwnPropertySymbols;
=======
	  __webpack_require__(97).f  = $propertyIsEnumerable;
	  __webpack_require__(96).f = $getOwnPropertySymbols;
=======
	  __webpack_require__(64).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(95).f  = $propertyIsEnumerable;
	  __webpack_require__(94).f = $getOwnPropertySymbols;
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  __webpack_require__(64).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(98).f  = $propertyIsEnumerable;
	  __webpack_require__(97).f = $getOwnPropertySymbols;
>>>>>>> regenerating bundle

	  if(DESCRIPTORS && !__webpack_require__(80)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(34)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
=======
<<<<<<< HEAD
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(33)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
=======
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(34)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(35)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
>>>>>>> regenerating bundle
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 224 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 221 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(40)(0)
	  , redefine     = __webpack_require__(32)
	  , meta         = __webpack_require__(53)
	  , assign       = __webpack_require__(205)
	  , weak         = __webpack_require__(195)
	  , isObject     = __webpack_require__(11)
=======
/* 216 */
=======
/* 223 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(41)(0)
	  , redefine     = __webpack_require__(32)
	  , meta         = __webpack_require__(54)
	  , assign       = __webpack_require__(204)
	  , weak         = __webpack_require__(194)
	  , isObject     = __webpack_require__(12)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var $WeakMap = module.exports = __webpack_require__(94)('WeakMap', wrapper, methods, weak, true, true);
=======
<<<<<<< HEAD
	var $WeakMap = module.exports = __webpack_require__(93)('WeakMap', wrapper, methods, weak, true, true);
=======
	var $WeakMap = module.exports = __webpack_require__(91)('WeakMap', wrapper, methods, weak, true, true);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $WeakMap = module.exports = __webpack_require__(94)('WeakMap', wrapper, methods, weak, true, true);
>>>>>>> regenerating bundle

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 225 */
=======
<<<<<<< HEAD
/* 222 */
=======
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
=======
>>>>>>> regenerating bundle
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
/* 326 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
/* 223 */,
/* 224 */,
/* 225 */,
>>>>>>> adding chart.js
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(103);
	__webpack_require__(337);
	__webpack_require__(335);
	__webpack_require__(341);
	__webpack_require__(338);
	__webpack_require__(344);
	__webpack_require__(346);
	__webpack_require__(334);
	__webpack_require__(340);
	__webpack_require__(331);
	__webpack_require__(345);
	__webpack_require__(329);
	__webpack_require__(343);
	__webpack_require__(342);
	__webpack_require__(336);
	__webpack_require__(339);
	__webpack_require__(328);
	__webpack_require__(330);
	__webpack_require__(333);
	__webpack_require__(332);
	__webpack_require__(347);
	__webpack_require__(102);
	module.exports = __webpack_require__(13).Array;

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(348);
	__webpack_require__(350);
	__webpack_require__(349);
	__webpack_require__(352);
	__webpack_require__(351);
	module.exports = Date;

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(353);
	__webpack_require__(355);
	__webpack_require__(354);
	module.exports = __webpack_require__(13).Function;

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	__webpack_require__(103);
	__webpack_require__(138);
	__webpack_require__(216);
	module.exports = __webpack_require__(13).Map;

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(356);
	__webpack_require__(357);
	__webpack_require__(358);
	__webpack_require__(359);
	__webpack_require__(360);
	__webpack_require__(361);
	__webpack_require__(362);
	__webpack_require__(363);
	__webpack_require__(364);
	__webpack_require__(365);
	__webpack_require__(366);
	__webpack_require__(367);
	__webpack_require__(368);
	__webpack_require__(369);
	__webpack_require__(370);
	__webpack_require__(371);
	__webpack_require__(372);
	module.exports = __webpack_require__(13).Math;

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(373);
	__webpack_require__(383);
	__webpack_require__(384);
	__webpack_require__(374);
	__webpack_require__(375);
	__webpack_require__(376);
	__webpack_require__(377);
	__webpack_require__(378);
	__webpack_require__(379);
	__webpack_require__(380);
	__webpack_require__(381);
	__webpack_require__(382);
	module.exports = __webpack_require__(13).Number;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223);
	__webpack_require__(386);
	__webpack_require__(388);
	__webpack_require__(387);
	__webpack_require__(390);
	__webpack_require__(392);
	__webpack_require__(397);
	__webpack_require__(391);
	__webpack_require__(389);
	__webpack_require__(399);
	__webpack_require__(398);
	__webpack_require__(394);
	__webpack_require__(395);
	__webpack_require__(393);
	__webpack_require__(385);
	__webpack_require__(396);
	__webpack_require__(400);
	__webpack_require__(65);

	module.exports = __webpack_require__(13).Object;

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(401);
	module.exports = __webpack_require__(13).parseFloat;

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(402);
	module.exports = __webpack_require__(13).parseInt;

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(403);
	__webpack_require__(404);
	__webpack_require__(405);
	__webpack_require__(406);
	__webpack_require__(407);
	__webpack_require__(410);
	__webpack_require__(408);
	__webpack_require__(409);
	__webpack_require__(411);
	__webpack_require__(412);
	__webpack_require__(413);
	__webpack_require__(414);
	__webpack_require__(416);
	__webpack_require__(415);
	module.exports = __webpack_require__(13).Reflect;

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(417);
	__webpack_require__(418);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(220);
	__webpack_require__(221);
	module.exports = __webpack_require__(13).RegExp;

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	__webpack_require__(103);
	__webpack_require__(138);
	__webpack_require__(222);
	module.exports = __webpack_require__(13).Set;

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(428);
	__webpack_require__(432);
	__webpack_require__(439);
	__webpack_require__(103);
	__webpack_require__(423);
	__webpack_require__(424);
	__webpack_require__(429);
	__webpack_require__(433);
	__webpack_require__(435);
	__webpack_require__(419);
	__webpack_require__(420);
	__webpack_require__(421);
	__webpack_require__(422);
	__webpack_require__(425);
	__webpack_require__(426);
	__webpack_require__(427);
	__webpack_require__(430);
	__webpack_require__(431);
	__webpack_require__(434);
	__webpack_require__(436);
	__webpack_require__(437);
	__webpack_require__(438);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(220);
	__webpack_require__(221);
	module.exports = __webpack_require__(13).String;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223);
	__webpack_require__(65);
	module.exports = __webpack_require__(13).Symbol;

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(440);
	__webpack_require__(441);
	__webpack_require__(446);
	__webpack_require__(449);
	__webpack_require__(450);
	__webpack_require__(444);
	__webpack_require__(447);
	__webpack_require__(445);
	__webpack_require__(448);
	__webpack_require__(442);
	__webpack_require__(443);
	__webpack_require__(65);
	module.exports = __webpack_require__(13);

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	__webpack_require__(102);
	__webpack_require__(224);
	module.exports = __webpack_require__(13).WeakMap;

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	__webpack_require__(138);
	__webpack_require__(451);
	module.exports = __webpack_require__(13).WeakSet;

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(452);
	__webpack_require__(453);
	__webpack_require__(455);
	__webpack_require__(454);
	__webpack_require__(457);
	__webpack_require__(456);
	__webpack_require__(458);
	__webpack_require__(459);
	__webpack_require__(460);
	module.exports = __webpack_require__(13).Reflect;


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	var forOf = __webpack_require__(96);
=======
	var forOf = __webpack_require__(95);
=======
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
=======
>>>>>>> regenerating bundle
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(103);
	__webpack_require__(490);
	__webpack_require__(488);
	__webpack_require__(494);
	__webpack_require__(491);
	__webpack_require__(497);
	__webpack_require__(499);
	__webpack_require__(487);
	__webpack_require__(493);
	__webpack_require__(484);
	__webpack_require__(498);
	__webpack_require__(482);
	__webpack_require__(496);
	__webpack_require__(495);
	__webpack_require__(489);
	__webpack_require__(492);
	__webpack_require__(481);
	__webpack_require__(483);
	__webpack_require__(486);
	__webpack_require__(485);
	__webpack_require__(500);
	__webpack_require__(102);
	module.exports = __webpack_require__(14).Array;

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(501);
	__webpack_require__(503);
	__webpack_require__(502);
	__webpack_require__(505);
	__webpack_require__(504);
	module.exports = Date;

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(506);
	__webpack_require__(508);
	__webpack_require__(507);
	module.exports = __webpack_require__(14).Function;

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	__webpack_require__(103);
	__webpack_require__(138);
	__webpack_require__(215);
	module.exports = __webpack_require__(14).Map;

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(509);
	__webpack_require__(510);
	__webpack_require__(511);
	__webpack_require__(512);
	__webpack_require__(513);
	__webpack_require__(514);
	__webpack_require__(515);
	__webpack_require__(516);
	__webpack_require__(517);
	__webpack_require__(518);
	__webpack_require__(519);
	__webpack_require__(520);
	__webpack_require__(521);
	__webpack_require__(522);
	__webpack_require__(523);
	__webpack_require__(524);
	__webpack_require__(525);
	module.exports = __webpack_require__(14).Math;

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(526);
	__webpack_require__(536);
	__webpack_require__(537);
	__webpack_require__(527);
	__webpack_require__(528);
	__webpack_require__(529);
	__webpack_require__(530);
	__webpack_require__(531);
	__webpack_require__(532);
	__webpack_require__(533);
	__webpack_require__(534);
	__webpack_require__(535);
	module.exports = __webpack_require__(14).Number;

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(222);
	__webpack_require__(539);
	__webpack_require__(541);
	__webpack_require__(540);
	__webpack_require__(543);
	__webpack_require__(545);
	__webpack_require__(550);
	__webpack_require__(544);
	__webpack_require__(542);
	__webpack_require__(552);
	__webpack_require__(551);
	__webpack_require__(547);
	__webpack_require__(548);
	__webpack_require__(546);
	__webpack_require__(538);
	__webpack_require__(549);
	__webpack_require__(553);
	__webpack_require__(67);

	module.exports = __webpack_require__(14).Object;

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(554);
	module.exports = __webpack_require__(14).parseFloat;

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(555);
	module.exports = __webpack_require__(14).parseInt;

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(556);
	__webpack_require__(557);
	__webpack_require__(558);
	__webpack_require__(559);
	__webpack_require__(560);
	__webpack_require__(563);
	__webpack_require__(561);
	__webpack_require__(562);
	__webpack_require__(564);
	__webpack_require__(565);
	__webpack_require__(566);
	__webpack_require__(567);
	__webpack_require__(569);
	__webpack_require__(568);
	module.exports = __webpack_require__(14).Reflect;

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(570);
	__webpack_require__(571);
	__webpack_require__(216);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(220);
	module.exports = __webpack_require__(14).RegExp;

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	__webpack_require__(103);
	__webpack_require__(138);
	__webpack_require__(221);
	module.exports = __webpack_require__(14).Set;

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(581);
	__webpack_require__(585);
	__webpack_require__(592);
	__webpack_require__(103);
	__webpack_require__(576);
	__webpack_require__(577);
	__webpack_require__(582);
	__webpack_require__(586);
	__webpack_require__(588);
	__webpack_require__(572);
	__webpack_require__(573);
	__webpack_require__(574);
	__webpack_require__(575);
	__webpack_require__(578);
	__webpack_require__(579);
	__webpack_require__(580);
	__webpack_require__(583);
	__webpack_require__(584);
	__webpack_require__(587);
	__webpack_require__(589);
	__webpack_require__(590);
	__webpack_require__(591);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(220);
	module.exports = __webpack_require__(14).String;

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(222);
	__webpack_require__(67);
	module.exports = __webpack_require__(14).Symbol;

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(593);
	__webpack_require__(594);
	__webpack_require__(599);
	__webpack_require__(602);
	__webpack_require__(603);
	__webpack_require__(597);
	__webpack_require__(600);
	__webpack_require__(598);
	__webpack_require__(601);
	__webpack_require__(595);
	__webpack_require__(596);
	__webpack_require__(67);
	module.exports = __webpack_require__(14);

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	__webpack_require__(102);
	__webpack_require__(223);
	module.exports = __webpack_require__(14).WeakMap;

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	__webpack_require__(138);
	__webpack_require__(604);
	module.exports = __webpack_require__(14).WeakSet;

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(605);
	__webpack_require__(606);
	__webpack_require__(608);
	__webpack_require__(607);
	__webpack_require__(610);
	__webpack_require__(609);
	__webpack_require__(611);
	__webpack_require__(612);
	__webpack_require__(613);
	module.exports = __webpack_require__(14).Reflect;


/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	var forOf = __webpack_require__(93);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var forOf = __webpack_require__(96);
>>>>>>> regenerating bundle

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 320 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 317 */
=======
<<<<<<< HEAD
/* 315 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11)
	  , isArray  = __webpack_require__(126)
	  , SPECIES  = __webpack_require__(14)('species');
=======
/* 458 */
=======
/* 473 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12)
	  , isArray  = __webpack_require__(126)
	  , SPECIES  = __webpack_require__(15)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(320);
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(317);
=======
<<<<<<< HEAD
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(315);
=======
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(458);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(473);
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 322 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 319 */
=======
<<<<<<< HEAD
/* 317 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(8)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , toPrimitive = __webpack_require__(56)
=======
	  , toPrimitive = __webpack_require__(55)
=======
/* 460 */
=======
/* 475 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(9)
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	  , toPrimitive = __webpack_require__(56)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , toPrimitive = __webpack_require__(57)
>>>>>>> regenerating bundle
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 323 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 320 */
=======
<<<<<<< HEAD
/* 318 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(71)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , gOPS    = __webpack_require__(97)
	  , pIE     = __webpack_require__(98);
=======
	  , gOPS    = __webpack_require__(96)
	  , pIE     = __webpack_require__(97);
=======
/* 461 */
=======
/* 476 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
<<<<<<< 9cc5add699776d06c032baa0b51a6c0eb5c6b9fd
	var getKeys = __webpack_require__(72)
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	  , gOPS    = __webpack_require__(94)
	  , pIE     = __webpack_require__(95);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
=======
	var getKeys = __webpack_require__(73)
>>>>>>> Adding Service lbs to dashboard
	  , gOPS    = __webpack_require__(97)
	  , pIE     = __webpack_require__(98);
>>>>>>> regenerating bundle
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 324 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 321 */
=======
<<<<<<< HEAD
/* 319 */
=======
/* 462 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 477 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 325 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 322 */
=======
<<<<<<< HEAD
/* 320 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(71)
	  , toIObject = __webpack_require__(37);
=======
/* 463 */
=======
/* 478 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(73)
	  , toIObject = __webpack_require__(39);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 326 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 323 */
=======
<<<<<<< HEAD
/* 321 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(62)
	  , gOPS     = __webpack_require__(97)
	  , anObject = __webpack_require__(8)
	  , Reflect  = __webpack_require__(12).Reflect;
=======
/* 464 */
=======
/* 479 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(64)
	  , gOPS     = __webpack_require__(97)
	  , anObject = __webpack_require__(9)
	  , Reflect  = __webpack_require__(13).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 327 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 324 */
=======
<<<<<<< HEAD
/* 322 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(12)
	  , core           = __webpack_require__(13)
	  , LIBRARY        = __webpack_require__(79)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , wksExt         = __webpack_require__(215)
=======
	  , wksExt         = __webpack_require__(212)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
>>>>>>> adding chart.js
	  , defineProperty = __webpack_require__(17).f;
=======
	  , defineProperty = __webpack_require__(16).f;
=======
/* 465 */
=======
/* 480 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(13)
	  , core           = __webpack_require__(14)
	  , LIBRARY        = __webpack_require__(80)
	  , wksExt         = __webpack_require__(214)
	  , defineProperty = __webpack_require__(17).f;
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
>>>>>>> regenerating bundle
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 328 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 325 */
=======
<<<<<<< HEAD
/* 323 */
=======
/* 466 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 481 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(4);

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.P, 'Array', {copyWithin: __webpack_require__(191)});
=======
<<<<<<< HEAD
	$export($export.P, 'Array', {copyWithin: __webpack_require__(188)});
=======
	$export($export.P, 'Array', {copyWithin: __webpack_require__(183)});
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	$export($export.P, 'Array', {copyWithin: __webpack_require__(190)});
>>>>>>> regenerating bundle

	__webpack_require__(77)('copyWithin');

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 329 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 326 */
=======
<<<<<<< HEAD
/* 324 */
=======
/* 467 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $every  = __webpack_require__(40)(4);
=======
<<<<<<< HEAD
	  , $every  = __webpack_require__(39)(4);
>>>>>>> adding chart.js
=======
=======
/* 482 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4)
	  , $every  = __webpack_require__(41)(4);
>>>>>>> regenerating bundle

	$export($export.P + $export.F * !__webpack_require__(38)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 330 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 327 */
=======
<<<<<<< HEAD
/* 325 */
=======
/* 468 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 483 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(4);

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.P, 'Array', {fill: __webpack_require__(118)});
=======
<<<<<<< HEAD
	$export($export.P, 'Array', {fill: __webpack_require__(117)});
=======
	$export($export.P, 'Array', {fill: __webpack_require__(114)});
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	$export($export.P, 'Array', {fill: __webpack_require__(118)});
>>>>>>> regenerating bundle

	__webpack_require__(77)('fill');

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 331 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 328 */
=======
<<<<<<< HEAD
/* 326 */
=======
/* 469 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $filter = __webpack_require__(40)(2);
=======
<<<<<<< HEAD
	  , $filter = __webpack_require__(39)(2);
>>>>>>> adding chart.js

	$export($export.P + $export.F * !__webpack_require__(36)([].filter, true), 'Array', {
=======
	  , $filter = __webpack_require__(40)(2);
=======
=======
/* 484 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4)
	  , $filter = __webpack_require__(41)(2);
>>>>>>> regenerating bundle

	$export($export.P + $export.F * !__webpack_require__(38)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 332 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 329 */
=======
<<<<<<< HEAD
/* 327 */
=======
/* 470 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 485 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $find   = __webpack_require__(40)(6)
=======
<<<<<<< HEAD
	  , $find   = __webpack_require__(39)(6)
=======
	  , $find   = __webpack_require__(40)(6)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $export = __webpack_require__(4)
	  , $find   = __webpack_require__(41)(6)
>>>>>>> regenerating bundle
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(77)(KEY);

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 333 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 330 */
=======
<<<<<<< HEAD
/* 328 */
=======
/* 471 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 486 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $find   = __webpack_require__(40)(5)
=======
<<<<<<< HEAD
	  , $find   = __webpack_require__(39)(5)
=======
	  , $find   = __webpack_require__(40)(5)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $export = __webpack_require__(4)
	  , $find   = __webpack_require__(41)(5)
>>>>>>> regenerating bundle
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(77)(KEY);

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 334 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 331 */
=======
<<<<<<< HEAD
/* 329 */
=======
/* 472 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $forEach = __webpack_require__(40)(0)
=======
<<<<<<< HEAD
	  , $forEach = __webpack_require__(39)(0)
>>>>>>> adding chart.js
	  , STRICT   = __webpack_require__(36)([].forEach, true);
=======
	  , $forEach = __webpack_require__(40)(0)
	  , STRICT   = __webpack_require__(37)([].forEach, true);
>>>>>>> 024b7b6... adding chart.js
=======
=======
/* 487 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(4)
	  , $forEach = __webpack_require__(41)(0)
	  , STRICT   = __webpack_require__(38)([].forEach, true);
>>>>>>> regenerating bundle

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 335 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 332 */
=======
<<<<<<< HEAD
/* 330 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(60)
	  , $export        = __webpack_require__(3)
	  , toObject       = __webpack_require__(35)
	  , call           = __webpack_require__(201)
	  , isArrayIter    = __webpack_require__(125)
	  , toLength       = __webpack_require__(25)
	  , createProperty = __webpack_require__(196)
	  , getIterFn      = __webpack_require__(137);

<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.S + $export.F * !__webpack_require__(129)(function(iter){ Array.from(iter); }), 'Array', {
=======
	$export($export.S + $export.F * !__webpack_require__(128)(function(iter){ Array.from(iter); }), 'Array', {
=======
/* 473 */
=======
/* 488 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(62)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	  , $export        = __webpack_require__(3)
	  , toObject       = __webpack_require__(35)
	  , call           = __webpack_require__(193)
	  , isArrayIter    = __webpack_require__(121)
	  , toLength       = __webpack_require__(25)
	  , createProperty = __webpack_require__(188)
	  , getIterFn      = __webpack_require__(133);

	$export($export.S + $export.F * !__webpack_require__(125)(function(iter){ Array.from(iter); }), 'Array', {
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , $export        = __webpack_require__(4)
	  , toObject       = __webpack_require__(36)
	  , call           = __webpack_require__(200)
	  , isArrayIter    = __webpack_require__(125)
	  , toLength       = __webpack_require__(26)
	  , createProperty = __webpack_require__(195)
	  , getIterFn      = __webpack_require__(137);

	$export($export.S + $export.F * !__webpack_require__(129)(function(iter){ Array.from(iter); }), 'Array', {
>>>>>>> regenerating bundle
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 336 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 333 */
=======
<<<<<<< HEAD
/* 331 */
=======
/* 474 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $indexOf      = __webpack_require__(119)(false)
=======
<<<<<<< HEAD
	  , $indexOf      = __webpack_require__(118)(false)
>>>>>>> adding chart.js
=======
=======
/* 489 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(4)
	  , $indexOf      = __webpack_require__(119)(false)
>>>>>>> regenerating bundle
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(38)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 337 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 334 */
=======
<<<<<<< HEAD
/* 332 */
=======
/* 475 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 490 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(4);

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.S, 'Array', {isArray: __webpack_require__(126)});

/***/ },
/* 338 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
	$export($export.S, 'Array', {isArray: __webpack_require__(125)});

/***/ },
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 335 */
=======
/* 333 */
=======
	$export($export.S, 'Array', {isArray: __webpack_require__(122)});

/***/ },
/* 476 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
	$export($export.S, 'Array', {isArray: __webpack_require__(126)});

/***/ },
/* 491 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(4)
	  , toIObject = __webpack_require__(39)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(79) != Object || !__webpack_require__(38)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 339 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 336 */
=======
<<<<<<< HEAD
/* 334 */
=======
/* 477 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(3)
<<<<<<< HEAD
	  , toIObject     = __webpack_require__(37)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , toInteger     = __webpack_require__(55)
=======
	  , toInteger     = __webpack_require__(54)
=======
	  , toIObject     = __webpack_require__(38)
	  , toInteger     = __webpack_require__(55)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
	  , toLength      = __webpack_require__(25)
=======
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(4)
	  , toIObject     = __webpack_require__(39)
	  , toInteger     = __webpack_require__(56)
	  , toLength      = __webpack_require__(26)
>>>>>>> regenerating bundle
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(38)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 340 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 337 */
=======
<<<<<<< HEAD
/* 335 */
=======
/* 478 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $map    = __webpack_require__(40)(1);
=======
<<<<<<< HEAD
	  , $map    = __webpack_require__(39)(1);
>>>>>>> adding chart.js
=======
=======
/* 493 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4)
	  , $map    = __webpack_require__(41)(1);
>>>>>>> regenerating bundle

	$export($export.P + $export.F * !__webpack_require__(38)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 341 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 338 */
=======
<<<<<<< HEAD
/* 336 */
=======
/* 479 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , createProperty = __webpack_require__(196);
=======
<<<<<<< HEAD
	  , createProperty = __webpack_require__(193);
=======
	  , createProperty = __webpack_require__(188);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
=======
/* 494 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(4)
	  , createProperty = __webpack_require__(195);
>>>>>>> regenerating bundle

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 342 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 339 */
=======
<<<<<<< HEAD
/* 337 */
=======
/* 480 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $reduce = __webpack_require__(192);
=======
<<<<<<< HEAD
	  , $reduce = __webpack_require__(189);
>>>>>>> adding chart.js

	$export($export.P + $export.F * !__webpack_require__(36)([].reduceRight, true), 'Array', {
=======
	  , $reduce = __webpack_require__(184);
=======
=======
/* 495 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4)
	  , $reduce = __webpack_require__(191);
>>>>>>> regenerating bundle

	$export($export.P + $export.F * !__webpack_require__(38)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 343 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 340 */
=======
<<<<<<< HEAD
/* 338 */
=======
/* 481 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $reduce = __webpack_require__(192);
=======
<<<<<<< HEAD
	  , $reduce = __webpack_require__(189);
>>>>>>> adding chart.js

	$export($export.P + $export.F * !__webpack_require__(36)([].reduce, true), 'Array', {
=======
	  , $reduce = __webpack_require__(184);
=======
=======
/* 496 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4)
	  , $reduce = __webpack_require__(191);
>>>>>>> regenerating bundle

	$export($export.P + $export.F * !__webpack_require__(38)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 344 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 341 */
=======
<<<<<<< HEAD
/* 339 */
=======
/* 482 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , html       = __webpack_require__(198)
=======
<<<<<<< HEAD
	  , html       = __webpack_require__(195)
>>>>>>> adding chart.js
	  , cof        = __webpack_require__(59)
	  , toIndex    = __webpack_require__(63)
=======
	  , html       = __webpack_require__(190)
=======
=======
/* 497 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(4)
	  , html       = __webpack_require__(197)
>>>>>>> regenerating bundle
	  , cof        = __webpack_require__(61)
	  , toIndex    = __webpack_require__(65)
	  , toLength   = __webpack_require__(26)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(11)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 345 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 342 */
=======
<<<<<<< HEAD
/* 340 */
=======
/* 483 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $some   = __webpack_require__(40)(3);
=======
<<<<<<< HEAD
	  , $some   = __webpack_require__(39)(3);
>>>>>>> adding chart.js
=======
=======
/* 498 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4)
	  , $some   = __webpack_require__(41)(3);
>>>>>>> regenerating bundle

	$export($export.P + $export.F * !__webpack_require__(38)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 346 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 343 */
=======
<<<<<<< HEAD
/* 341 */
=======
/* 484 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(3)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , aFunction = __webpack_require__(52)
	  , toObject  = __webpack_require__(35)
=======
<<<<<<< HEAD
	  , aFunction = __webpack_require__(51)
	  , toObject  = __webpack_require__(34)
=======
	  , aFunction = __webpack_require__(52)
	  , toObject  = __webpack_require__(35)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
	  , fails     = __webpack_require__(10)
=======
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(4)
	  , aFunction = __webpack_require__(53)
	  , toObject  = __webpack_require__(36)
	  , fails     = __webpack_require__(11)
>>>>>>> regenerating bundle
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(38)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 347 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 344 */
=======
<<<<<<< HEAD
/* 342 */
=======
/* 485 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 500 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(82)('Array');

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 348 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 345 */
=======
<<<<<<< HEAD
/* 343 */
=======
/* 486 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 501 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(4);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 349 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 346 */
=======
<<<<<<< HEAD
/* 344 */
=======
/* 487 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 502 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(4)
	  , fails   = __webpack_require__(11)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 350 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 347 */
=======
<<<<<<< HEAD
/* 345 */
=======
/* 488 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(3)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , toObject    = __webpack_require__(35)
	  , toPrimitive = __webpack_require__(56);
=======
<<<<<<< HEAD
	  , toObject    = __webpack_require__(34)
	  , toPrimitive = __webpack_require__(55);
=======
	  , toObject    = __webpack_require__(35)
	  , toPrimitive = __webpack_require__(56);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js

	$export($export.P + $export.F * __webpack_require__(10)(function(){
=======
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(4)
	  , toObject    = __webpack_require__(36)
	  , toPrimitive = __webpack_require__(57);

	$export($export.P + $export.F * __webpack_require__(11)(function(){
>>>>>>> regenerating bundle
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 351 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 348 */
=======
<<<<<<< HEAD
/* 346 */
=======
/* 489 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 504 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(15)('toPrimitive')
	  , proto        = Date.prototype;

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	if(!(TO_PRIMITIVE in proto))__webpack_require__(34)(proto, TO_PRIMITIVE, __webpack_require__(322));

/***/ },
/* 352 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	if(!(TO_PRIMITIVE in proto))__webpack_require__(34)(proto, TO_PRIMITIVE, __webpack_require__(319));

/***/ },
/* 349 */
=======
<<<<<<< HEAD
	if(!(TO_PRIMITIVE in proto))__webpack_require__(33)(proto, TO_PRIMITIVE, __webpack_require__(317));

/***/ },
/* 347 */
=======
	if(!(TO_PRIMITIVE in proto))__webpack_require__(34)(proto, TO_PRIMITIVE, __webpack_require__(460));

/***/ },
/* 490 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
	if(!(TO_PRIMITIVE in proto))__webpack_require__(35)(proto, TO_PRIMITIVE, __webpack_require__(475));

/***/ },
/* 505 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  __webpack_require__(32)(DateProto, TO_STRING, function toString(){
=======
	  __webpack_require__(31)(DateProto, TO_STRING, function toString(){
>>>>>>> adding chart.js
=======
	  __webpack_require__(32)(DateProto, TO_STRING, function toString(){
>>>>>>> regenerating bundle
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 353 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 350 */
=======
<<<<<<< HEAD
/* 348 */
=======
/* 491 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(3);

<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.P, 'Function', {bind: __webpack_require__(193)});
=======
<<<<<<< HEAD
	$export($export.P, 'Function', {bind: __webpack_require__(190)});
>>>>>>> adding chart.js
=======
=======
/* 506 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(4);
>>>>>>> regenerating bundle

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(11)
	  , getPrototypeOf = __webpack_require__(41)
	  , HAS_INSTANCE   = __webpack_require__(14)('hasInstance')
=======
	$export($export.P, 'Function', {bind: __webpack_require__(185)});
=======
	$export($export.P, 'Function', {bind: __webpack_require__(192)});
>>>>>>> regenerating bundle

/***/ },
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(12)
	  , getPrototypeOf = __webpack_require__(42)
	  , HAS_INSTANCE   = __webpack_require__(15)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(17).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 355 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 352 */
=======
<<<<<<< HEAD
/* 350 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(17).f
	  , createDesc = __webpack_require__(54)
	  , has        = __webpack_require__(28)
=======
/* 493 */
=======
/* 508 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(17).f
	  , createDesc = __webpack_require__(55)
	  , has        = __webpack_require__(29)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	NAME in FProto || __webpack_require__(20) && dP(FProto, NAME, {
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	NAME in FProto || __webpack_require__(19) && dP(FProto, NAME, {
=======
	NAME in FProto || __webpack_require__(20) && dP(FProto, NAME, {
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 356 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 353 */
=======
<<<<<<< HEAD
/* 351 */
=======
/* 494 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , log1p   = __webpack_require__(204)
=======
<<<<<<< HEAD
	  , log1p   = __webpack_require__(201)
=======
	  , log1p   = __webpack_require__(196)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
=======
/* 509 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(4)
	  , log1p   = __webpack_require__(203)
>>>>>>> regenerating bundle
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 357 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 354 */
=======
<<<<<<< HEAD
/* 352 */
=======
/* 495 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 510 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(4)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 358 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 355 */
=======
<<<<<<< HEAD
/* 353 */
=======
/* 496 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 511 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(4)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 359 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 356 */
=======
<<<<<<< HEAD
/* 354 */
=======
/* 497 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , sign    = __webpack_require__(131);
=======
<<<<<<< HEAD
	  , sign    = __webpack_require__(130);
=======
	  , sign    = __webpack_require__(127);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
=======
/* 512 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(4)
	  , sign    = __webpack_require__(131);
>>>>>>> regenerating bundle

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 360 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 357 */
=======
<<<<<<< HEAD
/* 355 */
=======
/* 498 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 513 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(4);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 361 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 358 */
=======
<<<<<<< HEAD
/* 356 */
=======
/* 499 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 514 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(4)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 362 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 359 */
=======
<<<<<<< HEAD
/* 357 */
=======
/* 500 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $expm1  = __webpack_require__(130);
=======
<<<<<<< HEAD
	  , $expm1  = __webpack_require__(129);
=======
	  , $expm1  = __webpack_require__(126);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
=======
/* 515 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(4)
	  , $expm1  = __webpack_require__(130);
>>>>>>> regenerating bundle

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 363 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 360 */
=======
<<<<<<< HEAD
/* 358 */
=======
/* 501 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , sign      = __webpack_require__(131)
=======
<<<<<<< HEAD
	  , sign      = __webpack_require__(130)
=======
	  , sign      = __webpack_require__(127)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
=======
/* 516 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(4)
	  , sign      = __webpack_require__(131)
>>>>>>> regenerating bundle
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 364 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 361 */
=======
<<<<<<< HEAD
/* 359 */
=======
/* 502 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 517 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(4)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 365 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 362 */
=======
<<<<<<< HEAD
/* 360 */
=======
/* 503 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 518 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(4)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 366 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 363 */
=======
<<<<<<< HEAD
/* 361 */
=======
/* 504 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 519 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(4);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 367 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 364 */
=======
<<<<<<< HEAD
/* 362 */
=======
/* 505 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 520 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(4);

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.S, 'Math', {log1p: __webpack_require__(204)});

/***/ },
/* 368 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
	$export($export.S, 'Math', {log1p: __webpack_require__(201)});

/***/ },
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 365 */
=======
/* 363 */
=======
	$export($export.S, 'Math', {log1p: __webpack_require__(196)});

/***/ },
/* 506 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
	$export($export.S, 'Math', {log1p: __webpack_require__(203)});

/***/ },
/* 521 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(4);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 369 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 366 */
=======
<<<<<<< HEAD
/* 364 */
=======
/* 507 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 522 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(4);

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.S, 'Math', {sign: __webpack_require__(131)});

/***/ },
/* 370 */
=======
<<<<<<< HEAD
	$export($export.S, 'Math', {sign: __webpack_require__(130)});
=======
	$export($export.S, 'Math', {sign: __webpack_require__(131)});
>>>>>>> regenerating bundle

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 367 */
=======
/* 365 */
=======
	$export($export.S, 'Math', {sign: __webpack_require__(127)});

/***/ },
/* 508 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , expm1   = __webpack_require__(130)
=======
<<<<<<< HEAD
	  , expm1   = __webpack_require__(129)
=======
	  , expm1   = __webpack_require__(126)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
=======
/* 523 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(4)
	  , expm1   = __webpack_require__(130)
>>>>>>> regenerating bundle
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 371 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 368 */
=======
<<<<<<< HEAD
/* 366 */
=======
/* 509 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , expm1   = __webpack_require__(130)
=======
<<<<<<< HEAD
	  , expm1   = __webpack_require__(129)
=======
	  , expm1   = __webpack_require__(126)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
=======
/* 524 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(4)
	  , expm1   = __webpack_require__(130)
>>>>>>> regenerating bundle
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 372 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 369 */
=======
<<<<<<< HEAD
/* 367 */
=======
/* 510 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 525 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(4);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 373 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 370 */
=======
<<<<<<< HEAD
/* 368 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(12)
	  , has               = __webpack_require__(28)
	  , cof               = __webpack_require__(59)
	  , inheritIfRequired = __webpack_require__(124)
	  , toPrimitive       = __webpack_require__(56)
	  , fails             = __webpack_require__(10)
	  , gOPN              = __webpack_require__(62).f
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , gOPD              = __webpack_require__(48).f
	  , dP                = __webpack_require__(17).f
	  , $trim             = __webpack_require__(100).trim
=======
	  , gOPD              = __webpack_require__(47).f
	  , dP                = __webpack_require__(16).f
	  , $trim             = __webpack_require__(99).trim
=======
/* 511 */
=======
/* 526 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(13)
	  , has               = __webpack_require__(29)
	  , cof               = __webpack_require__(61)
	  , inheritIfRequired = __webpack_require__(124)
	  , toPrimitive       = __webpack_require__(57)
	  , fails             = __webpack_require__(11)
	  , gOPN              = __webpack_require__(64).f
	  , gOPD              = __webpack_require__(49).f
	  , dP                = __webpack_require__(17).f
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	  , $trim             = __webpack_require__(97).trim
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , $trim             = __webpack_require__(100).trim
>>>>>>> regenerating bundle
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(63)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	  for(var keys = __webpack_require__(20) ? gOPN(Base) : (
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	  for(var keys = __webpack_require__(19) ? gOPN(Base) : (
=======
	  for(var keys = __webpack_require__(20) ? gOPN(Base) : (
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  __webpack_require__(32)(global, NUMBER, $Number);
	}

/***/ },
/* 374 */
=======
	  __webpack_require__(31)(global, NUMBER, $Number);
=======
	  __webpack_require__(32)(global, NUMBER, $Number);
>>>>>>> regenerating bundle
	}

/***/ },
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 371 */
=======
<<<<<<< HEAD
/* 369 */
=======
/* 512 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 527 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(4);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 375 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 372 */
=======
<<<<<<< HEAD
/* 370 */
=======
/* 513 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 528 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(4)
	  , _isFinite = __webpack_require__(13).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 376 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 373 */
=======
<<<<<<< HEAD
/* 371 */
=======
/* 514 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(3);

<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.S, 'Number', {isInteger: __webpack_require__(200)});

/***/ },
/* 377 */
=======
<<<<<<< HEAD
	$export($export.S, 'Number', {isInteger: __webpack_require__(197)});
=======
=======
/* 529 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(4);
>>>>>>> regenerating bundle

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
/***/ },
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 374 */
=======
/* 372 */
=======
	$export($export.S, 'Number', {isInteger: __webpack_require__(192)});

/***/ },
/* 515 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
	$export($export.S, 'Number', {isInteger: __webpack_require__(199)});

/***/ },
/* 530 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(4);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 378 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 375 */
=======
<<<<<<< HEAD
/* 373 */
=======
/* 516 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , isInteger = __webpack_require__(200)
=======
<<<<<<< HEAD
	  , isInteger = __webpack_require__(197)
=======
	  , isInteger = __webpack_require__(192)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
=======
/* 531 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(4)
	  , isInteger = __webpack_require__(199)
>>>>>>> regenerating bundle
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 379 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 376 */
=======
<<<<<<< HEAD
/* 374 */
=======
/* 517 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 532 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(4);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 380 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 377 */
=======
<<<<<<< HEAD
/* 375 */
=======
/* 518 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 533 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(4);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(3)
	  , $parseFloat = __webpack_require__(209);
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 378 */
=======
<<<<<<< HEAD
/* 376 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(3)
	  , $parseFloat = __webpack_require__(206);
=======
/* 519 */
=======
/* 534 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var $export     = __webpack_require__(3)
	  , $parseFloat = __webpack_require__(201);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $export     = __webpack_require__(4)
	  , $parseFloat = __webpack_require__(208);
>>>>>>> regenerating bundle
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(3)
	  , $parseInt = __webpack_require__(210);
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 379 */
=======
<<<<<<< HEAD
/* 377 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(3)
	  , $parseInt = __webpack_require__(207);
=======
/* 520 */
=======
/* 535 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var $export   = __webpack_require__(3)
	  , $parseInt = __webpack_require__(202);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $export   = __webpack_require__(4)
	  , $parseInt = __webpack_require__(209);
>>>>>>> regenerating bundle
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 383 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 380 */
=======
<<<<<<< HEAD
/* 378 */
=======
/* 521 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(3)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , toInteger    = __webpack_require__(55)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , aNumberValue = __webpack_require__(190)
	  , repeat       = __webpack_require__(214)
=======
=======
<<<<<<< HEAD
	  , toInteger    = __webpack_require__(54)
>>>>>>> adding chart.js
	  , aNumberValue = __webpack_require__(187)
	  , repeat       = __webpack_require__(211)
=======
	  , toInteger    = __webpack_require__(55)
	  , aNumberValue = __webpack_require__(182)
	  , repeat       = __webpack_require__(206)
>>>>>>> 024b7b6... adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 536 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(4)
	  , toInteger    = __webpack_require__(56)
	  , aNumberValue = __webpack_require__(189)
	  , repeat       = __webpack_require__(213)
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(11)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 384 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 381 */
=======
<<<<<<< HEAD
/* 379 */
=======
/* 522 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(3)
	  , $fails       = __webpack_require__(10)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , aNumberValue = __webpack_require__(190)
=======
<<<<<<< HEAD
	  , aNumberValue = __webpack_require__(187)
=======
	  , aNumberValue = __webpack_require__(182)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
=======
/* 537 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(4)
	  , $fails       = __webpack_require__(11)
	  , aNumberValue = __webpack_require__(189)
>>>>>>> regenerating bundle
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 385 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 382 */
=======
<<<<<<< HEAD
/* 380 */
=======
/* 523 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(3);

<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(205)});

/***/ },
/* 386 */
=======
<<<<<<< HEAD
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(202)});
=======
=======
/* 538 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(4);
>>>>>>> regenerating bundle

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
/***/ },
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 383 */
=======
/* 381 */
=======
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(197)});

/***/ },
/* 524 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(204)});

/***/ },
/* 539 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(63)});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 387 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 384 */
=======
<<<<<<< HEAD
/* 382 */
=======
/* 525 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 540 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperties: __webpack_require__(206)});

/***/ },
/* 388 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	$export($export.S + $export.F * !__webpack_require__(19), 'Object', {defineProperties: __webpack_require__(203)});

/***/ },
/* 385 */
=======
<<<<<<< HEAD
	$export($export.S + $export.F * !__webpack_require__(18), 'Object', {defineProperties: __webpack_require__(203)});

/***/ },
/* 383 */
=======
	$export($export.S + $export.F * !__webpack_require__(18), 'Object', {defineProperties: __webpack_require__(198)});

/***/ },
/* 526 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(3);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperty: __webpack_require__(17).f});

/***/ },
/* 389 */
=======
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	$export($export.S + $export.F * !__webpack_require__(19), 'Object', {defineProperty: __webpack_require__(17).f});
=======
<<<<<<< HEAD
	$export($export.S + $export.F * !__webpack_require__(18), 'Object', {defineProperty: __webpack_require__(16).f});
>>>>>>> adding chart.js

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(11)
	  , meta     = __webpack_require__(53).onFreeze;

	__webpack_require__(41)('freeze', function($freeze){
=======
	$export($export.S + $export.F * !__webpack_require__(18), 'Object', {defineProperty: __webpack_require__(17).f});
=======
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperties: __webpack_require__(205)});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
/* 527 */
>>>>>>> adding chart.js
=======
/* 541 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperty: __webpack_require__(17).f});
>>>>>>> regenerating bundle

/***/ },
/* 542 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(12)
	  , meta     = __webpack_require__(54).onFreeze;

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	__webpack_require__(42)('freeze', function($freeze){
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
=======
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(43)('freeze', function($freeze){
>>>>>>> regenerating bundle
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 390 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 387 */
=======
<<<<<<< HEAD
/* 385 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(37)
	  , $getOwnPropertyDescriptor = __webpack_require__(48).f;

<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(42)('getOwnPropertyDescriptor', function(){
=======
	__webpack_require__(41)('getOwnPropertyDescriptor', function(){
=======
/* 528 */
=======
/* 543 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(39)
	  , $getOwnPropertyDescriptor = __webpack_require__(49).f;

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	__webpack_require__(42)('getOwnPropertyDescriptor', function(){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(43)('getOwnPropertyDescriptor', function(){
>>>>>>> regenerating bundle
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 391 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 388 */
=======
<<<<<<< HEAD
/* 386 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(42)('getOwnPropertyNames', function(){
	  return __webpack_require__(207).f;
	});

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(35)
	  , $getPrototypeOf = __webpack_require__(41);

<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(42)('getPrototypeOf', function(){
=======
	__webpack_require__(41)('getPrototypeOf', function(){
=======
/* 529 */
=======
/* 544 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(43)('getOwnPropertyNames', function(){
	  return __webpack_require__(206).f;
	});

/***/ },
/* 545 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(36)
	  , $getPrototypeOf = __webpack_require__(42);

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	__webpack_require__(42)('getPrototypeOf', function(){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(43)('getPrototypeOf', function(){
>>>>>>> regenerating bundle
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 393 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 390 */
=======
<<<<<<< HEAD
/* 388 */
=======
/* 531 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 546 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(12);

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(42)('isExtensible', function($isExtensible){
=======
<<<<<<< HEAD
	__webpack_require__(41)('isExtensible', function($isExtensible){
=======
	__webpack_require__(42)('isExtensible', function($isExtensible){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(43)('isExtensible', function($isExtensible){
>>>>>>> regenerating bundle
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 394 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 391 */
=======
<<<<<<< HEAD
/* 389 */
=======
/* 532 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 547 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(12);

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(42)('isFrozen', function($isFrozen){
=======
<<<<<<< HEAD
	__webpack_require__(41)('isFrozen', function($isFrozen){
=======
	__webpack_require__(42)('isFrozen', function($isFrozen){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(43)('isFrozen', function($isFrozen){
>>>>>>> regenerating bundle
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 395 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 392 */
=======
<<<<<<< HEAD
/* 390 */
=======
/* 533 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 548 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(12);

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(42)('isSealed', function($isSealed){
=======
<<<<<<< HEAD
	__webpack_require__(41)('isSealed', function($isSealed){
=======
	__webpack_require__(42)('isSealed', function($isSealed){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(43)('isSealed', function($isSealed){
>>>>>>> regenerating bundle
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 396 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 393 */
=======
<<<<<<< HEAD
/* 391 */
=======
/* 534 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(3);
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.S, 'Object', {is: __webpack_require__(211)});
=======
<<<<<<< HEAD
	$export($export.S, 'Object', {is: __webpack_require__(208)});
>>>>>>> adding chart.js

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(35)
	  , $keys    = __webpack_require__(71);

<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(42)('keys', function(){
=======
	__webpack_require__(41)('keys', function(){
=======
	$export($export.S, 'Object', {is: __webpack_require__(203)});
=======
/* 549 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(4);
	$export($export.S, 'Object', {is: __webpack_require__(210)});
>>>>>>> regenerating bundle

/***/ },
/* 550 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(36)
	  , $keys    = __webpack_require__(73);

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	__webpack_require__(42)('keys', function(){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(43)('keys', function(){
>>>>>>> regenerating bundle
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 398 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 395 */
=======
<<<<<<< HEAD
/* 393 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(11)
	  , meta     = __webpack_require__(53).onFreeze;

<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(42)('preventExtensions', function($preventExtensions){
=======
	__webpack_require__(41)('preventExtensions', function($preventExtensions){
=======
/* 536 */
=======
/* 551 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(12)
	  , meta     = __webpack_require__(54).onFreeze;

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	__webpack_require__(42)('preventExtensions', function($preventExtensions){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(43)('preventExtensions', function($preventExtensions){
>>>>>>> regenerating bundle
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 399 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 396 */
=======
<<<<<<< HEAD
/* 394 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(11)
	  , meta     = __webpack_require__(53).onFreeze;

<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(42)('seal', function($seal){
=======
	__webpack_require__(41)('seal', function($seal){
=======
/* 537 */
=======
/* 552 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(12)
	  , meta     = __webpack_require__(54).onFreeze;

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	__webpack_require__(42)('seal', function($seal){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(43)('seal', function($seal){
>>>>>>> regenerating bundle
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 400 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 397 */
=======
<<<<<<< HEAD
/* 395 */
=======
/* 538 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(3);
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(132).set});
=======
<<<<<<< HEAD
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(131).set});
>>>>>>> adding chart.js

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $parseFloat = __webpack_require__(209);
=======
	  , $parseFloat = __webpack_require__(206);
=======
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(128).set});
=======
/* 553 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(4);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(132).set});
>>>>>>> regenerating bundle

/***/ },
/* 554 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var $export     = __webpack_require__(3)
	  , $parseFloat = __webpack_require__(201);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $export     = __webpack_require__(4)
	  , $parseFloat = __webpack_require__(208);
>>>>>>> regenerating bundle
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(3)
	  , $parseInt = __webpack_require__(210);
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 399 */
=======
<<<<<<< HEAD
/* 397 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(3)
	  , $parseInt = __webpack_require__(207);
=======
/* 540 */
=======
/* 555 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var $export   = __webpack_require__(3)
	  , $parseInt = __webpack_require__(202);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $export   = __webpack_require__(4)
	  , $parseInt = __webpack_require__(209);
>>>>>>> regenerating bundle
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 403 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 400 */
=======
<<<<<<< HEAD
/* 398 */
=======
/* 541 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(3)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , aFunction = __webpack_require__(52)
=======
<<<<<<< HEAD
	  , aFunction = __webpack_require__(51)
>>>>>>> adding chart.js
	  , anObject  = __webpack_require__(8)
	  , rApply    = (__webpack_require__(12).Reflect || {}).apply
=======
	  , aFunction = __webpack_require__(52)
=======
/* 556 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(4)
	  , aFunction = __webpack_require__(53)
>>>>>>> regenerating bundle
	  , anObject  = __webpack_require__(9)
	  , rApply    = (__webpack_require__(13).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(11)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 404 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 401 */
=======
<<<<<<< HEAD
/* 399 */
=======
/* 542 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(3)
<<<<<<< HEAD
	  , create     = __webpack_require__(61)
	  , aFunction  = __webpack_require__(52)
	  , anObject   = __webpack_require__(8)
	  , isObject   = __webpack_require__(11)
	  , fails      = __webpack_require__(10)
	  , bind       = __webpack_require__(193)
	  , rConstruct = (__webpack_require__(12).Reflect || {}).construct;
=======
=======
/* 557 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(4)
>>>>>>> regenerating bundle
	  , create     = __webpack_require__(63)
	  , aFunction  = __webpack_require__(53)
	  , anObject   = __webpack_require__(9)
	  , isObject   = __webpack_require__(12)
	  , fails      = __webpack_require__(11)
	  , bind       = __webpack_require__(192)
	  , rConstruct = (__webpack_require__(13).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 405 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 402 */
=======
<<<<<<< HEAD
/* 400 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(17)
	  , $export     = __webpack_require__(3)
	  , anObject    = __webpack_require__(8)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , toPrimitive = __webpack_require__(56);
=======
	  , toPrimitive = __webpack_require__(55);
=======
/* 543 */
=======
/* 558 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(17)
	  , $export     = __webpack_require__(4)
	  , anObject    = __webpack_require__(9)
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	  , toPrimitive = __webpack_require__(56);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , toPrimitive = __webpack_require__(57);
>>>>>>> regenerating bundle

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 406 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 403 */
=======
<<<<<<< HEAD
/* 401 */
=======
/* 544 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(3)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , gOPD     = __webpack_require__(48).f
=======
<<<<<<< HEAD
	  , gOPD     = __webpack_require__(47).f
>>>>>>> adding chart.js
	  , anObject = __webpack_require__(8);
=======
	  , gOPD     = __webpack_require__(48).f
=======
/* 559 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(4)
	  , gOPD     = __webpack_require__(49).f
>>>>>>> regenerating bundle
	  , anObject = __webpack_require__(9);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 407 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 404 */
=======
<<<<<<< HEAD
/* 402 */
=======
/* 545 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 560 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(4)
	  , anObject = __webpack_require__(9);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(202)(Enumerate, 'Object', function(){
=======
<<<<<<< HEAD
	__webpack_require__(199)(Enumerate, 'Object', function(){
=======
	__webpack_require__(194)(Enumerate, 'Object', function(){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(201)(Enumerate, 'Object', function(){
>>>>>>> regenerating bundle
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 408 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 405 */
=======
<<<<<<< HEAD
/* 403 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(48)
	  , $export  = __webpack_require__(3)
	  , anObject = __webpack_require__(8);
=======
/* 546 */
=======
/* 561 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(49)
	  , $export  = __webpack_require__(4)
	  , anObject = __webpack_require__(9);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 409 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 406 */
=======
<<<<<<< HEAD
/* 404 */
=======
/* 547 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , getProto = __webpack_require__(41)
=======
<<<<<<< HEAD
	  , getProto = __webpack_require__(40)
>>>>>>> adding chart.js
	  , anObject = __webpack_require__(8);
=======
	  , getProto = __webpack_require__(41)
=======
=======
/* 562 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(4)
	  , getProto = __webpack_require__(42)
>>>>>>> regenerating bundle
	  , anObject = __webpack_require__(9);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 410 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 407 */
=======
<<<<<<< HEAD
/* 405 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(48)
	  , getPrototypeOf = __webpack_require__(41)
	  , has            = __webpack_require__(28)
	  , $export        = __webpack_require__(3)
	  , isObject       = __webpack_require__(11)
	  , anObject       = __webpack_require__(8);
=======
/* 548 */
=======
/* 563 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(49)
	  , getPrototypeOf = __webpack_require__(42)
	  , has            = __webpack_require__(29)
	  , $export        = __webpack_require__(4)
	  , isObject       = __webpack_require__(12)
	  , anObject       = __webpack_require__(9);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 411 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 408 */
=======
<<<<<<< HEAD
/* 406 */
=======
/* 549 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 564 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(4);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 412 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 409 */
=======
<<<<<<< HEAD
/* 407 */
=======
/* 550 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 565 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(4)
	  , anObject      = __webpack_require__(9)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 413 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 410 */
=======
<<<<<<< HEAD
/* 408 */
=======
/* 551 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 566 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(4);

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(326)});

/***/ },
/* 414 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(323)});

/***/ },
/* 411 */
=======
<<<<<<< HEAD
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(321)});

/***/ },
/* 409 */
=======
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(464)});

/***/ },
/* 552 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(479)});

/***/ },
/* 567 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(4)
	  , anObject           = __webpack_require__(9)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 415 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 412 */
=======
<<<<<<< HEAD
/* 410 */
=======
/* 553 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , setProto = __webpack_require__(132);
=======
<<<<<<< HEAD
	  , setProto = __webpack_require__(131);
=======
	  , setProto = __webpack_require__(128);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
=======
/* 568 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(4)
	  , setProto = __webpack_require__(132);
>>>>>>> regenerating bundle

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 416 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 413 */
=======
<<<<<<< HEAD
/* 411 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(17)
	  , gOPD           = __webpack_require__(48)
	  , getPrototypeOf = __webpack_require__(41)
	  , has            = __webpack_require__(28)
	  , $export        = __webpack_require__(3)
	  , createDesc     = __webpack_require__(54)
	  , anObject       = __webpack_require__(8)
	  , isObject       = __webpack_require__(11);
=======
/* 554 */
=======
/* 569 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(17)
	  , gOPD           = __webpack_require__(49)
	  , getPrototypeOf = __webpack_require__(42)
	  , has            = __webpack_require__(29)
	  , $export        = __webpack_require__(4)
	  , createDesc     = __webpack_require__(55)
	  , anObject       = __webpack_require__(9)
	  , isObject       = __webpack_require__(12);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 417 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 414 */
=======
<<<<<<< HEAD
/* 412 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(12)
	  , inheritIfRequired = __webpack_require__(124)
	  , dP                = __webpack_require__(17).f
	  , gOPN              = __webpack_require__(62).f
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , isRegExp          = __webpack_require__(127)
	  , $flags            = __webpack_require__(123)
=======
	  , isRegExp          = __webpack_require__(126)
	  , $flags            = __webpack_require__(122)
=======
/* 555 */
=======
/* 570 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(13)
	  , inheritIfRequired = __webpack_require__(124)
	  , dP                = __webpack_require__(17).f
	  , gOPN              = __webpack_require__(64).f
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	  , isRegExp          = __webpack_require__(123)
	  , $flags            = __webpack_require__(119)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , isRegExp          = __webpack_require__(127)
	  , $flags            = __webpack_require__(123)
>>>>>>> regenerating bundle
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	if(__webpack_require__(20) && (!CORRECT_NEW || __webpack_require__(10)(function(){
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	if(__webpack_require__(19) && (!CORRECT_NEW || __webpack_require__(10)(function(){
=======
	if(__webpack_require__(18) && (!CORRECT_NEW || __webpack_require__(10)(function(){
<<<<<<< HEAD
>>>>>>> adding chart.js
>>>>>>> adding chart.js
	  re2[__webpack_require__(14)('match')] = false;
=======
=======
	if(__webpack_require__(20) && (!CORRECT_NEW || __webpack_require__(11)(function(){
>>>>>>> regenerating bundle
	  re2[__webpack_require__(15)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  __webpack_require__(32)(global, 'RegExp', $RegExp);
=======
	  __webpack_require__(31)(global, 'RegExp', $RegExp);
>>>>>>> adding chart.js
=======
	  __webpack_require__(32)(global, 'RegExp', $RegExp);
>>>>>>> regenerating bundle
	}

	__webpack_require__(82)('RegExp');

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 418 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 415 */
=======
<<<<<<< HEAD
/* 413 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(217);
	var anObject    = __webpack_require__(8)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $flags      = __webpack_require__(123)
	  , DESCRIPTORS = __webpack_require__(20)
=======
	  , $flags      = __webpack_require__(122)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , DESCRIPTORS = __webpack_require__(19)
=======
=======
/* 556 */
=======
/* 571 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(216);
	var anObject    = __webpack_require__(9)
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	  , $flags      = __webpack_require__(119)
>>>>>>> 024b7b6... adding chart.js
	  , DESCRIPTORS = __webpack_require__(18)
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
	  , $flags      = __webpack_require__(123)
	  , DESCRIPTORS = __webpack_require__(20)
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  __webpack_require__(32)(RegExp.prototype, TO_STRING, fn, true);
=======
	  __webpack_require__(31)(RegExp.prototype, TO_STRING, fn, true);
>>>>>>> adding chart.js
=======
	  __webpack_require__(32)(RegExp.prototype, TO_STRING, fn, true);
>>>>>>> regenerating bundle
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(11)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 419 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 416 */
=======
<<<<<<< HEAD
/* 414 */
=======
/* 557 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 572 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(33)('anchor', function(createHTML){
=======
	__webpack_require__(32)('anchor', function(createHTML){
>>>>>>> adding chart.js
=======
	__webpack_require__(33)('anchor', function(createHTML){
>>>>>>> regenerating bundle
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 420 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 417 */
=======
<<<<<<< HEAD
/* 415 */
=======
/* 558 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 573 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(33)('big', function(createHTML){
=======
	__webpack_require__(32)('big', function(createHTML){
>>>>>>> adding chart.js
=======
	__webpack_require__(33)('big', function(createHTML){
>>>>>>> regenerating bundle
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 421 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 418 */
=======
<<<<<<< HEAD
/* 416 */
=======
/* 559 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 574 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(33)('blink', function(createHTML){
=======
	__webpack_require__(32)('blink', function(createHTML){
>>>>>>> adding chart.js
=======
	__webpack_require__(33)('blink', function(createHTML){
>>>>>>> regenerating bundle
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 422 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 419 */
=======
<<<<<<< HEAD
/* 417 */
=======
/* 560 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 575 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(33)('bold', function(createHTML){
=======
	__webpack_require__(32)('bold', function(createHTML){
>>>>>>> adding chart.js
=======
	__webpack_require__(33)('bold', function(createHTML){
>>>>>>> regenerating bundle
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 423 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 420 */
=======
<<<<<<< HEAD
/* 418 */
=======
/* 561 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , $at     = __webpack_require__(213)(false);
=======
<<<<<<< HEAD
	  , $at     = __webpack_require__(210)(false);
=======
	  , $at     = __webpack_require__(205)(false);
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
=======
/* 576 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(4)
	  , $at     = __webpack_require__(212)(false);
>>>>>>> regenerating bundle
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 424 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 421 */
=======
<<<<<<< HEAD
/* 419 */
=======
/* 562 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 577 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var $export   = __webpack_require__(3)
	  , toLength  = __webpack_require__(25)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , context   = __webpack_require__(134)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(122)(ENDS_WITH), 'String', {
=======
<<<<<<< HEAD
	  , context   = __webpack_require__(133)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(121)(ENDS_WITH), 'String', {
=======
	  , context   = __webpack_require__(130)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(118)(ENDS_WITH), 'String', {
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $export   = __webpack_require__(4)
	  , toLength  = __webpack_require__(26)
	  , context   = __webpack_require__(134)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(122)(ENDS_WITH), 'String', {
>>>>>>> regenerating bundle
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 425 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 422 */
=======
<<<<<<< HEAD
/* 420 */
=======
/* 563 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 578 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(33)('fixed', function(createHTML){
=======
	__webpack_require__(32)('fixed', function(createHTML){
>>>>>>> adding chart.js
=======
	__webpack_require__(33)('fixed', function(createHTML){
>>>>>>> regenerating bundle
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 426 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 423 */
=======
<<<<<<< HEAD
/* 421 */
=======
/* 564 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 579 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(33)('fontcolor', function(createHTML){
=======
	__webpack_require__(32)('fontcolor', function(createHTML){
>>>>>>> adding chart.js
=======
	__webpack_require__(33)('fontcolor', function(createHTML){
>>>>>>> regenerating bundle
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 427 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 424 */
=======
<<<<<<< HEAD
/* 422 */
=======
/* 565 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 580 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(33)('fontsize', function(createHTML){
=======
	__webpack_require__(32)('fontsize', function(createHTML){
>>>>>>> adding chart.js
=======
	__webpack_require__(33)('fontsize', function(createHTML){
>>>>>>> regenerating bundle
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 428 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 425 */
=======
<<<<<<< HEAD
/* 423 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(3)
	  , toIndex        = __webpack_require__(63)
=======
/* 566 */
=======
/* 581 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(4)
	  , toIndex        = __webpack_require__(65)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 429 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 426 */
=======
<<<<<<< HEAD
/* 424 */
=======
/* 567 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 582 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var $export  = __webpack_require__(3)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , context  = __webpack_require__(134)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(122)(INCLUDES), 'String', {
=======
<<<<<<< HEAD
	  , context  = __webpack_require__(133)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(121)(INCLUDES), 'String', {
=======
	  , context  = __webpack_require__(130)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(118)(INCLUDES), 'String', {
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $export  = __webpack_require__(4)
	  , context  = __webpack_require__(134)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(122)(INCLUDES), 'String', {
>>>>>>> regenerating bundle
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 430 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 427 */
=======
<<<<<<< HEAD
/* 425 */
=======
/* 568 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 583 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(33)('italics', function(createHTML){
=======
	__webpack_require__(32)('italics', function(createHTML){
>>>>>>> adding chart.js
=======
	__webpack_require__(33)('italics', function(createHTML){
>>>>>>> regenerating bundle
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 431 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 428 */
=======
<<<<<<< HEAD
/* 426 */
=======
/* 569 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 584 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(33)('link', function(createHTML){
=======
	__webpack_require__(32)('link', function(createHTML){
>>>>>>> adding chart.js
=======
	__webpack_require__(33)('link', function(createHTML){
>>>>>>> regenerating bundle
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 432 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 429 */
=======
<<<<<<< HEAD
/* 427 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(3)
	  , toIObject = __webpack_require__(37)
=======
/* 570 */
=======
/* 585 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(4)
	  , toIObject = __webpack_require__(39)
	  , toLength  = __webpack_require__(26);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 433 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 430 */
=======
<<<<<<< HEAD
/* 428 */
=======
/* 571 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 586 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  repeat: __webpack_require__(214)
	});

/***/ },
/* 434 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< HEAD
	  repeat: __webpack_require__(211)
	});

/***/ },
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 431 */
=======
/* 429 */
=======
	  repeat: __webpack_require__(206)
	});

/***/ },
/* 572 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
	  repeat: __webpack_require__(213)
	});

/***/ },
/* 587 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(33)('small', function(createHTML){
=======
	__webpack_require__(32)('small', function(createHTML){
>>>>>>> adding chart.js
=======
	__webpack_require__(33)('small', function(createHTML){
>>>>>>> regenerating bundle
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 435 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 432 */
=======
<<<<<<< HEAD
/* 430 */
=======
/* 573 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 588 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	var $export     = __webpack_require__(3)
	  , toLength    = __webpack_require__(25)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , context     = __webpack_require__(134)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(122)(STARTS_WITH), 'String', {
=======
<<<<<<< HEAD
	  , context     = __webpack_require__(133)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(121)(STARTS_WITH), 'String', {
=======
	  , context     = __webpack_require__(130)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(118)(STARTS_WITH), 'String', {
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	var $export     = __webpack_require__(4)
	  , toLength    = __webpack_require__(26)
	  , context     = __webpack_require__(134)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(122)(STARTS_WITH), 'String', {
>>>>>>> regenerating bundle
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 436 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 433 */
=======
<<<<<<< HEAD
/* 431 */
=======
/* 574 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 589 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(33)('strike', function(createHTML){
=======
	__webpack_require__(32)('strike', function(createHTML){
>>>>>>> adding chart.js
=======
	__webpack_require__(33)('strike', function(createHTML){
>>>>>>> regenerating bundle
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 437 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 434 */
=======
<<<<<<< HEAD
/* 432 */
=======
/* 575 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 590 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(33)('sub', function(createHTML){
=======
	__webpack_require__(32)('sub', function(createHTML){
>>>>>>> adding chart.js
=======
	__webpack_require__(33)('sub', function(createHTML){
>>>>>>> regenerating bundle
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 438 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 435 */
=======
<<<<<<< HEAD
/* 433 */
=======
/* 576 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 591 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	__webpack_require__(33)('sup', function(createHTML){
=======
	__webpack_require__(32)('sup', function(createHTML){
>>>>>>> adding chart.js
=======
	__webpack_require__(33)('sup', function(createHTML){
>>>>>>> regenerating bundle
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 439 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 436 */
=======
<<<<<<< HEAD
/* 434 */
=======
/* 577 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 592 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	__webpack_require__(100)('trim', function($trim){
=======
<<<<<<< HEAD
	__webpack_require__(99)('trim', function($trim){
=======
	__webpack_require__(97)('trim', function($trim){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(100)('trim', function($trim){
>>>>>>> regenerating bundle
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 440 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 437 */
=======
<<<<<<< HEAD
/* 435 */
=======
/* 578 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(3)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , $typed       = __webpack_require__(101)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , buffer       = __webpack_require__(136)
=======
=======
<<<<<<< HEAD
	  , $typed       = __webpack_require__(100)
>>>>>>> adding chart.js
	  , buffer       = __webpack_require__(135)
>>>>>>> adding chart.js
	  , anObject     = __webpack_require__(8)
	  , toIndex      = __webpack_require__(63)
	  , toLength     = __webpack_require__(25)
	  , isObject     = __webpack_require__(11)
	  , ArrayBuffer  = __webpack_require__(12).ArrayBuffer
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , speciesConstructor = __webpack_require__(212)
=======
	  , speciesConstructor = __webpack_require__(209)
=======
	  , $typed       = __webpack_require__(98)
	  , buffer       = __webpack_require__(132)
=======
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(4)
	  , $typed       = __webpack_require__(101)
	  , buffer       = __webpack_require__(136)
>>>>>>> regenerating bundle
	  , anObject     = __webpack_require__(9)
	  , toIndex      = __webpack_require__(65)
	  , toLength     = __webpack_require__(26)
	  , isObject     = __webpack_require__(12)
	  , ArrayBuffer  = __webpack_require__(13).ArrayBuffer
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	  , speciesConstructor = __webpack_require__(204)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , speciesConstructor = __webpack_require__(211)
>>>>>>> regenerating bundle
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(11)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	__webpack_require__(81)(ARRAY_BUFFER);

/***/ },
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 441 */
=======
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 438 */
=======
<<<<<<< HEAD
/* 436 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(3);
	$export($export.G + $export.W + $export.F * !__webpack_require__(101).ABV, {
	  DataView: __webpack_require__(136).DataView
	});

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	__webpack_require__(49)('Float32', 4, function(init){
=======
	__webpack_require__(48)('Float32', 4, function(init){
=======
/* 579 */
=======
	__webpack_require__(82)(ARRAY_BUFFER);

/***/ },
/* 594 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	$export($export.G + $export.W + $export.F * !__webpack_require__(101).ABV, {
	  DataView: __webpack_require__(136).DataView
	});

/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	__webpack_require__(49)('Float32', 4, function(init){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(50)('Float32', 4, function(init){
>>>>>>> regenerating bundle
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 443 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 440 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Float64', 8, function(init){
=======
<<<<<<< HEAD
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48)('Float64', 8, function(init){
=======
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Float64', 8, function(init){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Float64', 8, function(init){
>>>>>>> regenerating bundle
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 444 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 441 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Int16', 2, function(init){
=======
<<<<<<< HEAD
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48)('Int16', 2, function(init){
=======
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Int16', 2, function(init){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Int16', 2, function(init){
>>>>>>> regenerating bundle
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 445 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 442 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Int32', 4, function(init){
=======
<<<<<<< HEAD
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48)('Int32', 4, function(init){
=======
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Int32', 4, function(init){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Int32', 4, function(init){
>>>>>>> regenerating bundle
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 446 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 443 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Int8', 1, function(init){
=======
<<<<<<< HEAD
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48)('Int8', 1, function(init){
=======
/* 584 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Int8', 1, function(init){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 599 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Int8', 1, function(init){
>>>>>>> regenerating bundle
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 447 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 444 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Uint16', 2, function(init){
=======
<<<<<<< HEAD
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48)('Uint16', 2, function(init){
=======
/* 585 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Uint16', 2, function(init){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Uint16', 2, function(init){
>>>>>>> regenerating bundle
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 448 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 445 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Uint32', 4, function(init){
=======
<<<<<<< HEAD
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48)('Uint32', 4, function(init){
=======
/* 586 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Uint32', 4, function(init){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 601 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Uint32', 4, function(init){
>>>>>>> regenerating bundle
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 449 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 446 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Uint8', 1, function(init){
=======
<<<<<<< HEAD
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48)('Uint8', 1, function(init){
=======
/* 587 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Uint8', 1, function(init){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 602 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Uint8', 1, function(init){
>>>>>>> regenerating bundle
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 450 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 447 */
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Uint8', 1, function(init){
=======
<<<<<<< HEAD
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48)('Uint8', 1, function(init){
=======
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Uint8', 1, function(init){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
/* 603 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Uint8', 1, function(init){
>>>>>>> regenerating bundle
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 451 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 448 */
=======
<<<<<<< HEAD
/* 446 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(195);

	// 23.4 WeakSet Objects
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	__webpack_require__(94)('WeakSet', function(get){
=======
	__webpack_require__(93)('WeakSet', function(get){
=======
/* 589 */
=======
/* 604 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(194);

	// 23.4 WeakSet Objects
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	__webpack_require__(91)('WeakSet', function(get){
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	__webpack_require__(94)('WeakSet', function(get){
>>>>>>> regenerating bundle
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 452 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 449 */
=======
<<<<<<< HEAD
/* 447 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(47)
	  , anObject                  = __webpack_require__(8)
=======
/* 590 */
=======
/* 605 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(48)
	  , anObject                  = __webpack_require__(9)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 453 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 450 */
=======
<<<<<<< HEAD
/* 448 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(47)
	  , anObject               = __webpack_require__(8)
=======
/* 591 */
=======
/* 606 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(48)
	  , anObject               = __webpack_require__(9)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 454 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 451 */
=======
<<<<<<< HEAD
/* 449 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(222)
	  , from                    = __webpack_require__(319)
	  , metadata                = __webpack_require__(47)
	  , anObject                = __webpack_require__(8)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , getPrototypeOf          = __webpack_require__(41)
=======
	  , getPrototypeOf          = __webpack_require__(40)
=======
/* 592 */
=======
/* 607 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(221)
	  , from                    = __webpack_require__(472)
	  , metadata                = __webpack_require__(48)
	  , anObject                = __webpack_require__(9)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	  , getPrototypeOf          = __webpack_require__(41)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , getPrototypeOf          = __webpack_require__(42)
>>>>>>> regenerating bundle
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 455 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 452 */
=======
<<<<<<< HEAD
/* 450 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(47)
	  , anObject               = __webpack_require__(8)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , getPrototypeOf         = __webpack_require__(41)
=======
	  , getPrototypeOf         = __webpack_require__(40)
=======
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(47)
=======
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(48)
>>>>>>> regenerating bundle
	  , anObject               = __webpack_require__(9)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	  , getPrototypeOf         = __webpack_require__(41)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , getPrototypeOf         = __webpack_require__(42)
>>>>>>> regenerating bundle
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 456 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 453 */
=======
<<<<<<< HEAD
/* 451 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(47)
	  , anObject                = __webpack_require__(8)
=======
/* 594 */
=======
/* 609 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(48)
	  , anObject                = __webpack_require__(9)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 457 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 454 */
=======
<<<<<<< HEAD
/* 452 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(47)
	  , anObject               = __webpack_require__(8)
=======
/* 595 */
=======
/* 610 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(48)
	  , anObject               = __webpack_require__(9)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 458 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 455 */
=======
<<<<<<< HEAD
/* 453 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(47)
	  , anObject               = __webpack_require__(8)
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	  , getPrototypeOf         = __webpack_require__(41)
=======
	  , getPrototypeOf         = __webpack_require__(40)
=======
/* 596 */
=======
/* 611 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(48)
	  , anObject               = __webpack_require__(9)
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
	  , getPrototypeOf         = __webpack_require__(41)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , getPrototypeOf         = __webpack_require__(42)
>>>>>>> regenerating bundle
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 459 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 456 */
=======
<<<<<<< HEAD
/* 454 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(47)
	  , anObject               = __webpack_require__(8)
=======
/* 597 */
=======
/* 612 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(48)
	  , anObject               = __webpack_require__(9)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 460 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 457 */
=======
<<<<<<< HEAD
/* 455 */
>>>>>>> adding chart.js
>>>>>>> adding chart.js
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(47)
	  , anObject                  = __webpack_require__(8)
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
	  , aFunction                 = __webpack_require__(52)
=======
	  , aFunction                 = __webpack_require__(51)
=======
/* 598 */
=======
/* 613 */
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(48)
	  , anObject                  = __webpack_require__(9)
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
	  , aFunction                 = __webpack_require__(52)
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	  , aFunction                 = __webpack_require__(53)
>>>>>>> regenerating bundle
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */
=======
<<<<<<< HEAD
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */
=======
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {// function.name (all IE)
	/*! @source http://stackoverflow.com/questions/6903762/function-name-not-supported-in-ie*/
	if (!Object.hasOwnProperty('name')) {
	  Object.defineProperty(Function.prototype, 'name', {
	    get: function() {
	      var matches = this.toString().match(/^\s*function\s*(\S*)\s*\(/);
	      var name = matches && matches.length > 1 ? matches[1] : "";
	      // For better performance only parse once, and then cache the
	      // result through a new accessor for repeated access.
	      Object.defineProperty(this, 'name', {value: name});
	      return name;
	    }
	  });
	}

	// URL polyfill for SystemJS (all IE)
	/*! @source https://github.com/ModuleLoader/es6-module-loader/blob/master/src/url-polyfill.js*/
	// from https://gist.github.com/Yaffle/1088850
	(function(global) {
	  function URLPolyfill(url, baseURL) {
	    if (typeof url != 'string') {
	      throw new TypeError('URL must be a string');
	    }
	    var m = String(url).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
	    if (!m) {
	      throw new RangeError();
	    }
	    var protocol = m[1] || "";
	    var username = m[2] || "";
	    var password = m[3] || "";
	    var host = m[4] || "";
	    var hostname = m[5] || "";
	    var port = m[6] || "";
	    var pathname = m[7] || "";
	    var search = m[8] || "";
	    var hash = m[9] || "";
	    if (baseURL !== undefined) {
	      var base = baseURL instanceof URLPolyfill ? baseURL : new URLPolyfill(baseURL);
	      var flag = protocol === "" && host === "" && username === "";
	      if (flag && pathname === "" && search === "") {
	        search = base.search;
	      }
	      if (flag && pathname.charAt(0) !== "/") {
	        pathname = (pathname !== "" ? (((base.host !== "" || base.username !== "") && base.pathname === "" ? "/" : "") + base.pathname.slice(0, base.pathname.lastIndexOf("/") + 1) + pathname) : base.pathname);
	      }
	      // dot segments removal
	      var output = [];
	      pathname.replace(/^(\.\.?(\/|$))+/, "")
	        .replace(/\/(\.(\/|$))+/g, "/")
	        .replace(/\/\.\.$/, "/../")
	        .replace(/\/?[^\/]*/g, function (p) {
	          if (p === "/..") {
	            output.pop();
	          } else {
	            output.push(p);
	          }
	        });
	      pathname = output.join("").replace(/^\//, pathname.charAt(0) === "/" ? "/" : "");
	      if (flag) {
	        port = base.port;
	        hostname = base.hostname;
	        host = base.host;
	        password = base.password;
	        username = base.username;
	      }
	      if (protocol === "") {
	        protocol = base.protocol;
	      }
	    }

	    // convert windows file URLs to use /
	    if (protocol == 'file:')
	      pathname = pathname.replace(/\\/g, '/');

	    this.origin = protocol + (protocol !== "" || host !== "" ? "//" : "") + host;
	    this.href = protocol + (protocol !== "" || host !== "" ? "//" : "") + (username !== "" ? username + (password !== "" ? ":" + password : "") + "@" : "") + host + pathname + search + hash;
	    this.protocol = protocol;
	    this.username = username;
	    this.password = password;
	    this.host = host;
	    this.hostname = hostname;
	    this.port = port;
	    this.pathname = pathname;
	    this.search = search;
	    this.hash = hash;
	  }
	global.URLPolyfill = URLPolyfill;
	})(typeof self != 'undefined' ? self : global);

	//classList (IE9)
	/*! @license please refer to http://unlicense.org/ */
	/*! @author Eli Grey */
	/*! @source https://github.com/eligrey/classList.js */
	;if("document" in self&&!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false;do{r=t[s]+"";var q=g(this,r);if(q!==-1){this.splice(q,1);o=true}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}return !o};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))};

	//console mock (IE9)
	if (!window.console) window.console = {};
	if (!window.console.log) window.console.log = function () { };
	if (!window.console.error) window.console.error = function () { };
	if (!window.console.warn) window.console.warn = function () { };
	if (!window.console.assert) window.console.assert = function () { };

	//RequestAnimationFrame (IE9, Android 4.1, 4.2, 4.3)
	/*! @author Paul Irish */
	/*! @source https://gist.github.com/paulirish/1579671 */
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

	// MIT license

	(function() {
	    var lastTime = 0;

	    if (!window.requestAnimationFrame)
	        window.requestAnimationFrame = function(callback, element) {
	            var currTime = Date.now();
	            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
	              timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };

	    if (!window.cancelAnimationFrame)
	        window.cancelAnimationFrame = function(id) {
	            clearTimeout(id);
	        };
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
=======
<<<<<<< HEAD
/* 460 */,
/* 461 */,
>>>>>>> adding chart.js
/* 462 */,
/* 463 */,
/* 464 */,
>>>>>>> adding chart.js
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
=======
>>>>>>> 024b7b6... adding chart.js
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
=======
>>>>>>> regenerating bundle
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 732 */,
/* 733 */,
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */
=======
/* 734 */
=======
<<<<<<< HEAD
/* 732 */
=======
=======
>>>>>>> regenerating bundle
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
/* 876 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	/**
	* @license
	* Copyright Google Inc. All Rights Reserved.
	*
	* Use of this source code is governed by an MIT-style license that can be
	* found in the LICENSE file at https://angular.io/license
	*/
	(function (global, factory) {
	     true ? factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (factory());
	}(this, (function () { 'use strict';

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var NEWLINE = '\n';
	var SEP = '  -------------  ';
	var IGNORE_FRAMES = [];
	var creationTrace = '__creationTrace__';
	var LongStackTrace = (function () {
	    function LongStackTrace() {
	        this.error = getStacktrace();
	        this.timestamp = new Date();
	    }
	    return LongStackTrace;
	}());
	function getStacktraceWithUncaughtError() {
	    return new Error('STACKTRACE TRACKING');
	}
	function getStacktraceWithCaughtError() {
	    try {
	        throw getStacktraceWithUncaughtError();
	    }
	    catch (e) {
	        return e;
	    }
	}
	// Some implementations of exception handling don't create a stack trace if the exception
	// isn't thrown, however it's faster not to actually throw the exception.
	var error = getStacktraceWithUncaughtError();
	var coughtError = getStacktraceWithCaughtError();
	var getStacktrace = error.stack ?
	    getStacktraceWithUncaughtError :
	    (coughtError.stack ? getStacktraceWithCaughtError : getStacktraceWithUncaughtError);
	function getFrames(error) {
	    return error.stack ? error.stack.split(NEWLINE) : [];
	}
	function addErrorStack(lines, error) {
	    var trace = getFrames(error);
	    for (var i = 0; i < trace.length; i++) {
	        var frame = trace[i];
	        // Filter out the Frames which are part of stack capturing.
	        if (!(i < IGNORE_FRAMES.length && IGNORE_FRAMES[i] === frame)) {
	            lines.push(trace[i]);
	        }
	    }
	}
	function renderLongStackTrace(frames, stack) {
	    var longTrace = [stack];
	    if (frames) {
	        var timestamp = new Date().getTime();
	        for (var i = 0; i < frames.length; i++) {
	            var traceFrames = frames[i];
	            var lastTime = traceFrames.timestamp;
	            longTrace.push(SEP + " Elapsed: " + (timestamp - lastTime.getTime()) + " ms; At: " + lastTime + " " + SEP);
	            addErrorStack(longTrace, traceFrames.error);
	            timestamp = lastTime.getTime();
	        }
	    }
	    return longTrace.join(NEWLINE);
	}
	Zone['longStackTraceZoneSpec'] = {
	    name: 'long-stack-trace',
	    longStackTraceLimit: 10,
	    onScheduleTask: function (parentZoneDelegate, currentZone, targetZone, task) {
	        var currentTask = Zone.currentTask;
	        var trace = currentTask && currentTask.data && currentTask.data[creationTrace] || [];
	        trace = [new LongStackTrace()].concat(trace);
	        if (trace.length > this.longStackTraceLimit) {
	            trace.length = this.longStackTraceLimit;
	        }
	        if (!task.data)
	            task.data = {};
	        task.data[creationTrace] = trace;
	        return parentZoneDelegate.scheduleTask(targetZone, task);
	    },
	    onHandleError: function (parentZoneDelegate, currentZone, targetZone, error) {
	        var parentTask = Zone.currentTask || error.task;
	        if (error instanceof Error && parentTask) {
	            var stackSetSucceded = null;
	            try {
	                var descriptor = Object.getOwnPropertyDescriptor(error, 'stack');
	                if (descriptor && descriptor.configurable) {
	                    var delegateGet_1 = descriptor.get;
	                    var value_1 = descriptor.value;
	                    descriptor = {
	                        get: function () {
	                            return renderLongStackTrace(parentTask.data && parentTask.data[creationTrace], delegateGet_1 ? delegateGet_1.apply(this) : value_1);
	                        }
	                    };
	                    Object.defineProperty(error, 'stack', descriptor);
	                    stackSetSucceded = true;
	                }
	            }
	            catch (e) {
	            }
	            var longStack = stackSetSucceded ?
	                null :
	                renderLongStackTrace(parentTask.data && parentTask.data[creationTrace], error.stack);
	            if (!stackSetSucceded) {
	                try {
	                    stackSetSucceded = error.stack = longStack;
	                }
	                catch (e) {
	                }
	            }
	            if (!stackSetSucceded) {
	                try {
	                    stackSetSucceded = error.longStack = longStack;
	                }
	                catch (e) {
	                }
	            }
	        }
	        return parentZoneDelegate.handleError(targetZone, error);
	    }
	};
	function captureStackTraces(stackTraces, count) {
	    if (count > 0) {
	        stackTraces.push(getFrames((new LongStackTrace()).error));
	        captureStackTraces(stackTraces, count - 1);
	    }
	}
	function computeIgnoreFrames() {
	    var frames = [];
	    captureStackTraces(frames, 2);
	    var frames1 = frames[0];
	    var frames2 = frames[1];
	    for (var i = 0; i < frames1.length; i++) {
	        var frame1 = frames1[i];
	        var frame2 = frames2[i];
	        if (frame1 === frame2) {
	            IGNORE_FRAMES.push(frame1);
	        }
	        else {
	            break;
	        }
	    }
	}
	computeIgnoreFrames();

	})));


/***/ },
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
/* 738 */
=======
=======
<<<<<<< ac1d271109bf3355decdc3e24fd2bc2d76be6891
>>>>>>> regenerating bundle
<<<<<<< e67539b00b2b5dc2c00d554c909268ae2ddc14ca
/* 735 */
=======
<<<<<<< HEAD
/* 733 */
=======
/* 877 */
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
>>>>>>> adding chart.js
=======
=======
/* 892 */
>>>>>>> regenerating bundle
>>>>>>> regenerating bundle
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	* @license
	* Copyright Google Inc. All Rights Reserved.
	*
	* Use of this source code is governed by an MIT-style license that can be
	* found in the LICENSE file at https://angular.io/license
	*/
	(function (global, factory) {
	     true ? factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (factory());
	}(this, (function () { 'use strict';

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */


	var Zone$1 = (function (global) {
	    if (global.Zone) {
	        throw new Error('Zone already loaded.');
	    }
	    var Zone = (function () {
	        function Zone(parent, zoneSpec) {
	            this._properties = null;
	            this._parent = parent;
	            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
	            this._properties = zoneSpec && zoneSpec.properties || {};
	            this._zoneDelegate =
	                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
	        }
	        Zone.assertZonePatched = function () {
	            if (global.Promise !== ZoneAwarePromise) {
	                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
	                    'has been overwritten.\n' +
	                    'Most likely cause is that a Promise polyfill has been loaded ' +
	                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
	                    'If you must load one, do so before loading zone.js.)');
	            }
	        };
	        Object.defineProperty(Zone, "current", {
	            get: function () {
	                return _currentZone;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Object.defineProperty(Zone, "currentTask", {
	            get: function () {
	                return _currentTask;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Object.defineProperty(Zone.prototype, "parent", {
	            get: function () {
	                return this._parent;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Object.defineProperty(Zone.prototype, "name", {
	            get: function () {
	                return this._name;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        
	        Zone.prototype.get = function (key) {
	            var zone = this.getZoneWith(key);
	            if (zone)
	                return zone._properties[key];
	        };
	        Zone.prototype.getZoneWith = function (key) {
	            var current = this;
	            while (current) {
	                if (current._properties.hasOwnProperty(key)) {
	                    return current;
	                }
	                current = current._parent;
	            }
	            return null;
	        };
	        Zone.prototype.fork = function (zoneSpec) {
	            if (!zoneSpec)
	                throw new Error('ZoneSpec required!');
	            return this._zoneDelegate.fork(this, zoneSpec);
	        };
	        Zone.prototype.wrap = function (callback, source) {
	            if (typeof callback !== 'function') {
	                throw new Error('Expecting function got: ' + callback);
	            }
	            var _callback = this._zoneDelegate.intercept(this, callback, source);
	            var zone = this;
	            return function () {
	                return zone.runGuarded(_callback, this, arguments, source);
	            };
	        };
	        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
	            if (applyThis === void 0) { applyThis = null; }
	            if (applyArgs === void 0) { applyArgs = null; }
	            if (source === void 0) { source = null; }
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	            }
	            finally {
	                _currentZone = oldZone;
	            }
	        };
	        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
	            if (applyThis === void 0) { applyThis = null; }
	            if (applyArgs === void 0) { applyArgs = null; }
	            if (source === void 0) { source = null; }
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                try {
	                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                _currentZone = oldZone;
	            }
	        };
	        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
	            task.runCount++;
	            if (task.zone != this)
	                throw new Error('A task can only be run in the zone which created it! (Creation: ' + task.zone.name +
	                    '; Execution: ' + this.name + ')');
	            var previousTask = _currentTask;
	            _currentTask = task;
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                if (task.type == 'macroTask' && task.data && !task.data.isPeriodic) {
	                    task.cancelFn = null;
	                }
	                try {
	                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                _currentZone = oldZone;
	                _currentTask = previousTask;
	            }
	        };
	        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('microTask', this, source, callback, data, customSchedule, null));
	        };
	        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('macroTask', this, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('eventTask', this, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.cancelTask = function (task) {
	            var value = this._zoneDelegate.cancelTask(this, task);
	            task.runCount = -1;
	            task.cancelFn = null;
	            return value;
	        };
	        Zone.__symbol__ = __symbol__;
	        return Zone;
	    }());
	    
	    var ZoneDelegate = (function () {
	        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
	            this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 };
	            this.zone = zone;
	            this._parentDelegate = parentDelegate;
	            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
	            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
	            this._interceptZS =
	                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
	            this._interceptDlgt =
	                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
	            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
	            this._invokeDlgt =
	                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
	            this._handleErrorZS =
	                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
	            this._handleErrorDlgt =
	                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
	            this._scheduleTaskZS =
	                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
	            this._scheduleTaskDlgt =
	                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
	            this._invokeTaskZS =
	                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
	            this._invokeTaskDlgt =
	                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
	            this._cancelTaskZS =
	                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
	            this._cancelTaskDlgt =
	                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
	            this._hasTaskZS = zoneSpec && (zoneSpec.onHasTask ? zoneSpec : parentDelegate._hasTaskZS);
	            this._hasTaskDlgt =
	                zoneSpec && (zoneSpec.onHasTask ? parentDelegate : parentDelegate._hasTaskDlgt);
	        }
	        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
	            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
	                new Zone(targetZone, zoneSpec);
	        };
	        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
	            return this._interceptZS ?
	                this._interceptZS.onIntercept(this._interceptDlgt, this.zone, targetZone, callback, source) :
	                callback;
	        };
	        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
	            return this._invokeZS ?
	                this._invokeZS.onInvoke(this._invokeDlgt, this.zone, targetZone, callback, applyThis, applyArgs, source) :
	                callback.apply(applyThis, applyArgs);
	        };
	        ZoneDelegate.prototype.handleError = function (targetZone, error) {
	            return this._handleErrorZS ?
	                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this.zone, targetZone, error) :
	                true;
	        };
	        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
	            try {
	                if (this._scheduleTaskZS) {
	                    return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this.zone, targetZone, task);
	                }
	                else if (task.scheduleFn) {
	                    task.scheduleFn(task);
	                }
	                else if (task.type == 'microTask') {
	                    scheduleMicroTask(task);
	                }
	                else {
	                    throw new Error('Task is missing scheduleFn.');
	                }
	                return task;
	            }
	            finally {
	                if (targetZone == this.zone) {
	                    this._updateTaskCount(task.type, 1);
	                }
	            }
	        };
	        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
	            try {
	                return this._invokeTaskZS ?
	                    this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this.zone, targetZone, task, applyThis, applyArgs) :
	                    task.callback.apply(applyThis, applyArgs);
	            }
	            finally {
	                if (targetZone == this.zone && (task.type != 'eventTask') &&
	                    !(task.data && task.data.isPeriodic)) {
	                    this._updateTaskCount(task.type, -1);
	                }
	            }
	        };
	        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
	            var value;
	            if (this._cancelTaskZS) {
	                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this.zone, targetZone, task);
	            }
	            else if (!task.cancelFn) {
	                throw new Error('Task does not support cancellation, or is already canceled.');
	            }
	            else {
	                value = task.cancelFn(task);
	            }
	            if (targetZone == this.zone) {
	                // this should not be in the finally block, because exceptions assume not canceled.
	                this._updateTaskCount(task.type, -1);
	            }
	            return value;
	        };
	        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
	            return this._hasTaskZS &&
	                this._hasTaskZS.onHasTask(this._hasTaskDlgt, this.zone, targetZone, isEmpty);
	        };
	        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
	            var counts = this._taskCounts;
	            var prev = counts[type];
	            var next = counts[type] = prev + count;
	            if (next < 0) {
	                throw new Error('More tasks executed then were scheduled.');
	            }
	            if (prev == 0 || next == 0) {
	                var isEmpty = {
	                    microTask: counts.microTask > 0,
	                    macroTask: counts.macroTask > 0,
	                    eventTask: counts.eventTask > 0,
	                    change: type
	                };
	                try {
	                    this.hasTask(this.zone, isEmpty);
	                }
	                finally {
	                    if (this._parentDelegate) {
	                        this._parentDelegate._updateTaskCount(type, count);
	                    }
	                }
	            }
	        };
	        return ZoneDelegate;
	    }());
	    var ZoneTask = (function () {
	        function ZoneTask(type, zone, source, callback, options, scheduleFn, cancelFn) {
	            this.runCount = 0;
	            this.type = type;
	            this.zone = zone;
	            this.source = source;
	            this.data = options;
	            this.scheduleFn = scheduleFn;
	            this.cancelFn = cancelFn;
	            this.callback = callback;
	            var self = this;
	            this.invoke = function () {
	                _numberOfNestedTaskFrames++;
	                try {
	                    return zone.runTask(self, this, arguments);
	                }
	                finally {
	                    if (_numberOfNestedTaskFrames == 1) {
	                        drainMicroTaskQueue();
	                    }
	                    _numberOfNestedTaskFrames--;
	                }
	            };
	        }
	        ZoneTask.prototype.toString = function () {
	            if (this.data && typeof this.data.handleId !== 'undefined') {
	                return this.data.handleId;
	            }
	            else {
	                return Object.prototype.toString.call(this);
	            }
	        };
	        return ZoneTask;
	    }());
	    function __symbol__(name) {
	        return '__zone_symbol__' + name;
	    }
	    
	    var symbolSetTimeout = __symbol__('setTimeout');
	    var symbolPromise = __symbol__('Promise');
	    var symbolThen = __symbol__('then');
	    var _currentZone = new Zone(null, null);
	    var _currentTask = null;
	    var _microTaskQueue = [];
	    var _isDrainingMicrotaskQueue = false;
	    var _uncaughtPromiseErrors = [];
	    var _numberOfNestedTaskFrames = 0;
	    function scheduleQueueDrain() {
	        // if we are not running in any task, and there has not been anything scheduled
	        // we must bootstrap the initial task creation by manually scheduling the drain
	        if (_numberOfNestedTaskFrames == 0 && _microTaskQueue.length == 0) {
	            // We are not running in Task, so we need to kickstart the microtask queue.
	            if (global[symbolPromise]) {
	                global[symbolPromise].resolve(0)[symbolThen](drainMicroTaskQueue);
	            }
	            else {
	                global[symbolSetTimeout](drainMicroTaskQueue, 0);
	            }
	        }
	    }
	    function scheduleMicroTask(task) {
	        scheduleQueueDrain();
	        _microTaskQueue.push(task);
	    }
	    function consoleError(e) {
	        var rejection = e && e.rejection;
	        if (rejection) {
	            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
	        }
	        console.error(e);
	    }
	    function drainMicroTaskQueue() {
	        if (!_isDrainingMicrotaskQueue) {
	            _isDrainingMicrotaskQueue = true;
	            while (_microTaskQueue.length) {
	                var queue = _microTaskQueue;
	                _microTaskQueue = [];
	                for (var i = 0; i < queue.length; i++) {
	                    var task = queue[i];
	                    try {
	                        task.zone.runTask(task, null, null);
	                    }
	                    catch (e) {
	                        consoleError(e);
	                    }
	                }
	            }
	            while (_uncaughtPromiseErrors.length) {
	                var _loop_1 = function() {
	                    var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
	                    try {
	                        uncaughtPromiseError.zone.runGuarded(function () {
	                            throw uncaughtPromiseError;
	                        });
	                    }
	                    catch (e) {
	                        consoleError(e);
	                    }
	                };
	                while (_uncaughtPromiseErrors.length) {
	                    _loop_1();
	                }
	            }
	            _isDrainingMicrotaskQueue = false;
	        }
	    }
	    function isThenable(value) {
	        return value && value.then;
	    }
	    function forwardResolution(value) {
	        return value;
	    }
	    function forwardRejection(rejection) {
	        return ZoneAwarePromise.reject(rejection);
	    }
	    var symbolState = __symbol__('state');
	    var symbolValue = __symbol__('value');
	    var source = 'Promise.then';
	    var UNRESOLVED = null;
	    var RESOLVED = true;
	    var REJECTED = false;
	    var REJECTED_NO_CATCH = 0;
	    function makeResolver(promise, state) {
	        return function (v) {
	            resolvePromise(promise, state, v);
	            // Do not return value or you will break the Promise spec.
	        };
	    }
	    function resolvePromise(promise, state, value) {
	        if (promise[symbolState] === UNRESOLVED) {
	            if (value instanceof ZoneAwarePromise && value[symbolState] !== UNRESOLVED) {
	                clearRejectedNoCatch(value);
	                resolvePromise(promise, value[symbolState], value[symbolValue]);
	            }
	            else if (isThenable(value)) {
	                value.then(makeResolver(promise, state), makeResolver(promise, false));
	            }
	            else {
	                promise[symbolState] = state;
	                var queue = promise[symbolValue];
	                promise[symbolValue] = value;
	                for (var i = 0; i < queue.length;) {
	                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
	                }
	                if (queue.length == 0 && state == REJECTED) {
	                    promise[symbolState] = REJECTED_NO_CATCH;
	                    try {
	                        throw new Error('Uncaught (in promise): ' + value +
	                            (value && value.stack ? '\n' + value.stack : ''));
	                    }
	                    catch (e) {
	                        var error_1 = e;
	                        error_1.rejection = value;
	                        error_1.promise = promise;
	                        error_1.zone = Zone.current;
	                        error_1.task = Zone.currentTask;
	                        _uncaughtPromiseErrors.push(error_1);
	                        scheduleQueueDrain();
	                    }
	                }
	            }
	        }
	        // Resolving an already resolved promise is a noop.
	        return promise;
	    }
	    function clearRejectedNoCatch(promise) {
	        if (promise[symbolState] === REJECTED_NO_CATCH) {
	            promise[symbolState] = REJECTED;
	            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
	                if (promise === _uncaughtPromiseErrors[i].promise) {
	                    _uncaughtPromiseErrors.splice(i, 1);
	                    break;
	                }
	            }
	        }
	    }
	    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
	        clearRejectedNoCatch(promise);
	        var delegate = promise[symbolState] ? onFulfilled || forwardResolution : onRejected || forwardRejection;
	        zone.scheduleMicroTask(source, function () {
	            try {
	                resolvePromise(chainPromise, true, zone.run(delegate, null, [promise[symbolValue]]));
	            }
	            catch (error) {
	                resolvePromise(chainPromise, false, error);
	            }
	        });
	    }
	    var ZoneAwarePromise = (function () {
	        function ZoneAwarePromise(executor) {
	            var promise = this;
	            if (!(promise instanceof ZoneAwarePromise)) {
	                throw new Error('Must be an instanceof Promise.');
	            }
	            promise[symbolState] = UNRESOLVED;
	            promise[symbolValue] = []; // queue;
	            try {
	                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
	            }
	            catch (e) {
	                resolvePromise(promise, false, e);
	            }
	        }
	        ZoneAwarePromise.resolve = function (value) {
	            return resolvePromise(new this(null), RESOLVED, value);
	        };
	        ZoneAwarePromise.reject = function (error) {
	            return resolvePromise(new this(null), REJECTED, error);
	        };
	        ZoneAwarePromise.race = function (values) {
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) {
	                _a = [res, rej], resolve = _a[0], reject = _a[1];
	                var _a;
	            });
	            function onResolve(value) {
	                promise && (promise = null || resolve(value));
	            }
	            function onReject(error) {
	                promise && (promise = null || reject(error));
	            }
	            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
	                var value = values_1[_i];
	                if (!isThenable(value)) {
	                    value = this.resolve(value);
	                }
	                value.then(onResolve, onReject);
	            }
	            return promise;
	        };
	        ZoneAwarePromise.all = function (values) {
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) {
	                resolve = res;
	                reject = rej;
	            });
	            var count = 0;
	            var resolvedValues = [];
	            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
	                var value = values_2[_i];
	                if (!isThenable(value)) {
	                    value = this.resolve(value);
	                }
	                value.then((function (index) { return function (value) {
	                    resolvedValues[index] = value;
	                    count--;
	                    if (!count) {
	                        resolve(resolvedValues);
	                    }
	                }; })(count), reject);
	                count++;
	            }
	            if (!count)
	                resolve(resolvedValues);
	            return promise;
	        };
	        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
	            var chainPromise = new this.constructor(null);
	            var zone = Zone.current;
	            if (this[symbolState] == UNRESOLVED) {
	                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
	            }
	            else {
	                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
	            }
	            return chainPromise;
	        };
	        ZoneAwarePromise.prototype.catch = function (onRejected) {
	            return this.then(null, onRejected);
	        };
	        return ZoneAwarePromise;
	    }());
	    // Protect against aggressive optimizers dropping seemingly unused properties.
	    // E.g. Closure Compiler in advanced mode.
	    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
	    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
	    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
	    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
	    var NativePromise = global[__symbol__('Promise')] = global.Promise;
	    global.Promise = ZoneAwarePromise;
	    function patchThen(NativePromise) {
	        var NativePromiseProtototype = NativePromise.prototype;
	        var NativePromiseThen = NativePromiseProtototype[__symbol__('then')] =
	            NativePromiseProtototype.then;
	        NativePromiseProtototype.then = function (onResolve, onReject) {
	            var nativePromise = this;
	            return new ZoneAwarePromise(function (resolve, reject) {
	                NativePromiseThen.call(nativePromise, resolve, reject);
	            })
	                .then(onResolve, onReject);
	        };
	    }
	    if (NativePromise) {
	        patchThen(NativePromise);
	        if (typeof global['fetch'] !== 'undefined') {
	            var fetchPromise = void 0;
	            try {
	                // In MS Edge this throws
	                fetchPromise = global['fetch']();
	            }
	            catch (e) {
	                // In Chrome this throws instead.
	                fetchPromise = global['fetch']('about:blank');
	            }
	            // ignore output to prevent error;
	            fetchPromise.then(function () { return null; }, function () { return null; });
	            if (fetchPromise.constructor != NativePromise &&
	                fetchPromise.constructor != ZoneAwarePromise) {
	                patchThen(fetchPromise.constructor);
	            }
	        }
	    }
	    // This is not part of public API, but it is usefull for tests, so we expose it.
	    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
	    return global.Zone = Zone;
	})(typeof window === 'object' && window || typeof self === 'object' && self || global);

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var zoneSymbol = Zone['__symbol__'];
	var _global$1 = typeof window === 'object' && window || typeof self === 'object' && self || global;
	function bindArguments(args, source) {
	    for (var i = args.length - 1; i >= 0; i--) {
	        if (typeof args[i] === 'function') {
	            args[i] = Zone.current.wrap(args[i], source + '_' + i);
	        }
	    }
	    return args;
	}

	function patchPrototype(prototype, fnNames) {
	    var source = prototype.constructor['name'];
	    var _loop_1 = function(i) {
	        var name_1 = fnNames[i];
	        var delegate = prototype[name_1];
	        if (delegate) {
	            prototype[name_1] = (function (delegate) {
	                return function () {
	                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
	                };
	            })(delegate);
	        }
	    };
	    for (var i = 0; i < fnNames.length; i++) {
	        _loop_1(i);
	    }
	}

	var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
	var isNode = (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]');
	var isBrowser = !isNode && !isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
	function patchProperty(obj, prop) {
	    var desc = Object.getOwnPropertyDescriptor(obj, prop) || { enumerable: true, configurable: true };
	    // A property descriptor cannot have getter/setter and be writable
	    // deleting the writable and value properties avoids this error:
	    //
	    // TypeError: property descriptors must not specify a value or be writable when a
	    // getter or setter has been specified
	    delete desc.writable;
	    delete desc.value;
	    // substr(2) cuz 'onclick' -> 'click', etc
	    var eventName = prop.substr(2);
	    var _prop = '_' + prop;
	    desc.set = function (fn) {
	        if (this[_prop]) {
	            this.removeEventListener(eventName, this[_prop]);
	        }
	        if (typeof fn === 'function') {
	            var wrapFn = function (event) {
	                var result;
	                result = fn.apply(this, arguments);
	                if (result != undefined && !result)
	                    event.preventDefault();
	            };
	            this[_prop] = wrapFn;
	            this.addEventListener(eventName, wrapFn, false);
	        }
	        else {
	            this[_prop] = null;
	        }
	    };
	    // The getter would return undefined for unassigned properties but the default value of an
	    // unassigned property is null
	    desc.get = function () {
	        return this[_prop] || null;
	    };
	    Object.defineProperty(obj, prop, desc);
	}

	function patchOnProperties(obj, properties) {
	    var onProperties = [];
	    for (var prop in obj) {
	        if (prop.substr(0, 2) == 'on') {
	            onProperties.push(prop);
	        }
	    }
	    for (var j = 0; j < onProperties.length; j++) {
	        patchProperty(obj, onProperties[j]);
	    }
	    if (properties) {
	        for (var i = 0; i < properties.length; i++) {
	            patchProperty(obj, 'on' + properties[i]);
	        }
	    }
	}

	var EVENT_TASKS = zoneSymbol('eventTasks');
	// For EventTarget
	var ADD_EVENT_LISTENER = 'addEventListener';
	var REMOVE_EVENT_LISTENER = 'removeEventListener';
	function findExistingRegisteredTask(target, handler, name, capture, remove) {
	    var eventTasks = target[EVENT_TASKS];
	    if (eventTasks) {
	        for (var i = 0; i < eventTasks.length; i++) {
	            var eventTask = eventTasks[i];
	            var data = eventTask.data;
	            if (data.handler === handler && data.useCapturing === capture && data.eventName === name) {
	                if (remove) {
	                    eventTasks.splice(i, 1);
	                }
	                return eventTask;
	            }
	        }
	    }
	    return null;
	}
	function attachRegisteredEvent(target, eventTask) {
	    var eventTasks = target[EVENT_TASKS];
	    if (!eventTasks) {
	        eventTasks = target[EVENT_TASKS] = [];
	    }
	    eventTasks.push(eventTask);
	}
	function makeZoneAwareAddListener(addFnName, removeFnName, useCapturingParam, allowDuplicates) {
	    if (useCapturingParam === void 0) { useCapturingParam = true; }
	    if (allowDuplicates === void 0) { allowDuplicates = false; }
	    var addFnSymbol = zoneSymbol(addFnName);
	    var removeFnSymbol = zoneSymbol(removeFnName);
	    var defaultUseCapturing = useCapturingParam ? false : undefined;
	    function scheduleEventListener(eventTask) {
	        var meta = eventTask.data;
	        attachRegisteredEvent(meta.target, eventTask);
	        return meta.target[addFnSymbol](meta.eventName, eventTask.invoke, meta.useCapturing);
	    }
	    function cancelEventListener(eventTask) {
	        var meta = eventTask.data;
	        findExistingRegisteredTask(meta.target, eventTask.invoke, meta.eventName, meta.useCapturing, true);
	        meta.target[removeFnSymbol](meta.eventName, eventTask.invoke, meta.useCapturing);
	    }
	    return function zoneAwareAddListener(self, args) {
	        var eventName = args[0];
	        var handler = args[1];
	        var useCapturing = args[2] || defaultUseCapturing;
	        // - Inside a Web Worker, `this` is undefined, the context is `global`
	        // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	        // see https://github.com/angular/zone.js/issues/190
	        var target = self || _global$1;
	        var delegate = null;
	        if (typeof handler == 'function') {
	            delegate = handler;
	        }
	        else if (handler && handler.handleEvent) {
	            delegate = function (event) { return handler.handleEvent(event); };
	        }
	        var validZoneHandler = false;
	        try {
	            // In cross site contexts (such as WebDriver frameworks like Selenium),
	            // accessing the handler object here will cause an exception to be thrown which
	            // will fail tests prematurely.
	            validZoneHandler = handler && handler.toString() === '[object FunctionWrapper]';
	        }
	        catch (e) {
	            // Returning nothing here is fine, because objects in a cross-site context are unusable
	            return;
	        }
	        // Ignore special listeners of IE11 & Edge dev tools, see
	        // https://github.com/angular/zone.js/issues/150
	        if (!delegate || validZoneHandler) {
	            return target[addFnSymbol](eventName, handler, useCapturing);
	        }
	        if (!allowDuplicates) {
	            var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, false);
	            if (eventTask) {
	                // we already registered, so this will have noop.
	                return target[addFnSymbol](eventName, eventTask.invoke, useCapturing);
	            }
	        }
	        var zone = Zone.current;
	        var source = target.constructor['name'] + '.' + addFnName + ':' + eventName;
	        var data = {
	            target: target,
	            eventName: eventName,
	            name: eventName,
	            useCapturing: useCapturing,
	            handler: handler
	        };
	        zone.scheduleEventTask(source, delegate, data, scheduleEventListener, cancelEventListener);
	    };
	}
	function makeZoneAwareRemoveListener(fnName, useCapturingParam) {
	    if (useCapturingParam === void 0) { useCapturingParam = true; }
	    var symbol = zoneSymbol(fnName);
	    var defaultUseCapturing = useCapturingParam ? false : undefined;
	    return function zoneAwareRemoveListener(self, args) {
	        var eventName = args[0];
	        var handler = args[1];
	        var useCapturing = args[2] || defaultUseCapturing;
	        // - Inside a Web Worker, `this` is undefined, the context is `global`
	        // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	        // see https://github.com/angular/zone.js/issues/190
	        var target = self || _global$1;
	        var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, true);
	        if (eventTask) {
	            eventTask.zone.cancelTask(eventTask);
	        }
	        else {
	            target[symbol](eventName, handler, useCapturing);
	        }
	    };
	}

	var zoneAwareAddEventListener = makeZoneAwareAddListener(ADD_EVENT_LISTENER, REMOVE_EVENT_LISTENER);
	var zoneAwareRemoveEventListener = makeZoneAwareRemoveListener(REMOVE_EVENT_LISTENER);
	function patchEventTargetMethods(obj) {
	    if (obj && obj.addEventListener) {
	        patchMethod(obj, ADD_EVENT_LISTENER, function () { return zoneAwareAddEventListener; });
	        patchMethod(obj, REMOVE_EVENT_LISTENER, function () { return zoneAwareRemoveEventListener; });
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	var originalInstanceKey = zoneSymbol('originalInstance');
	// wrap some native API on `window`
	function patchClass(className) {
	    var OriginalClass = _global$1[className];
	    if (!OriginalClass)
	        return;
	    _global$1[className] = function () {
	        var a = bindArguments(arguments, className);
	        switch (a.length) {
	            case 0:
	                this[originalInstanceKey] = new OriginalClass();
	                break;
	            case 1:
	                this[originalInstanceKey] = new OriginalClass(a[0]);
	                break;
	            case 2:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
	                break;
	            case 3:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
	                break;
	            case 4:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
	                break;
	            default:
	                throw new Error('Arg list too long.');
	        }
	    };
	    var instance = new OriginalClass(function () { });
	    var prop;
	    for (prop in instance) {
	        // https://bugs.webkit.org/show_bug.cgi?id=44721
	        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
	            continue;
	        (function (prop) {
	            if (typeof instance[prop] === 'function') {
	                _global$1[className].prototype[prop] = function () {
	                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
	                };
	            }
	            else {
	                Object.defineProperty(_global$1[className].prototype, prop, {
	                    set: function (fn) {
	                        if (typeof fn === 'function') {
	                            this[originalInstanceKey][prop] = Zone.current.wrap(fn, className + '.' + prop);
	                        }
	                        else {
	                            this[originalInstanceKey][prop] = fn;
	                        }
	                    },
	                    get: function () {
	                        return this[originalInstanceKey][prop];
	                    }
	                });
	            }
	        }(prop));
	    }
	    for (prop in OriginalClass) {
	        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
	            _global$1[className][prop] = OriginalClass[prop];
	        }
	    }
	}

	function createNamedFn(name, delegate) {
	    try {
	        return (Function('f', "return function " + name + "(){return f(this, arguments)}"))(delegate);
	    }
	    catch (e) {
	        // if we fail, we must be CSP, just return delegate.
	        return function () {
	            return delegate(this, arguments);
	        };
	    }
	}
	function patchMethod(target, name, patchFn) {
	    var proto = target;
	    while (proto && Object.getOwnPropertyNames(proto).indexOf(name) === -1) {
	        proto = Object.getPrototypeOf(proto);
	    }
	    if (!proto && target[name]) {
	        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
	        proto = target;
	    }
	    var delegateName = zoneSymbol(name);
	    var delegate;
	    if (proto && !(delegate = proto[delegateName])) {
	        delegate = proto[delegateName] = proto[name];
	        proto[name] = createNamedFn(name, patchFn(delegate, delegateName, name));
	    }
	    return delegate;
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	function patchTimer(window, setName, cancelName, nameSuffix) {
	    var setNative = null;
	    var clearNative = null;
	    setName += nameSuffix;
	    cancelName += nameSuffix;
	    var tasksByHandleId = {};
	    function scheduleTask(task) {
	        var data = task.data;
	        data.args[0] = function () {
	            task.invoke.apply(this, arguments);
	            delete tasksByHandleId[data.handleId];
	        };
	        data.handleId = setNative.apply(window, data.args);
	        tasksByHandleId[data.handleId] = task;
	        return task;
	    }
	    function clearTask(task) {
	        delete tasksByHandleId[task.data.handleId];
	        return clearNative(task.data.handleId);
	    }
	    setNative =
	        patchMethod(window, setName, function (delegate) { return function (self, args) {
	            if (typeof args[0] === 'function') {
	                var zone = Zone.current;
	                var options = {
	                    handleId: null,
	                    isPeriodic: nameSuffix === 'Interval',
	                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
	                    args: args
	                };
	                var task = zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
	                if (!task) {
	                    return task;
	                }
	                // Node.js must additionally support the ref and unref functions.
	                var handle = task.data.handleId;
	                if (handle.ref && handle.unref) {
	                    task.ref = handle.ref.bind(handle);
	                    task.unref = handle.unref.bind(handle);
	                }
	                return task;
	            }
	            else {
	                // cause an error by calling it directly.
	                return delegate.apply(window, args);
	            }
	        }; });
	    clearNative =
	        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
	            var task = typeof args[0] === 'number' ? tasksByHandleId[args[0]] : args[0];
	            if (task && typeof task.type === 'string') {
	                if (task.cancelFn && task.data.isPeriodic || task.runCount === 0) {
	                    // Do not cancel already canceled functions
	                    task.zone.cancelTask(task);
	                }
	            }
	            else {
	                // cause an error by calling it directly.
	                delegate.apply(window, args);
	            }
	        }; });
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/*
	 * This is necessary for Chrome and Chrome mobile, to enable
	 * things like redefining `createdCallback` on an element.
	 */
	var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
	var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
	    Object.getOwnPropertyDescriptor;
	var _create = Object.create;
	var unconfigurablesKey = zoneSymbol('unconfigurables');
	function propertyPatch() {
	    Object.defineProperty = function (obj, prop, desc) {
	        if (isUnconfigurable(obj, prop)) {
	            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
	        }
	        var originalConfigurableFlag = desc.configurable;
	        if (prop !== 'prototype') {
	            desc = rewriteDescriptor(obj, prop, desc);
	        }
	        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
	    };
	    Object.defineProperties = function (obj, props) {
	        Object.keys(props).forEach(function (prop) {
	            Object.defineProperty(obj, prop, props[prop]);
	        });
	        return obj;
	    };
	    Object.create = function (obj, proto) {
	        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
	            Object.keys(proto).forEach(function (prop) {
	                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
	            });
	        }
	        return _create(obj, proto);
	    };
	    Object.getOwnPropertyDescriptor = function (obj, prop) {
	        var desc = _getOwnPropertyDescriptor(obj, prop);
	        if (isUnconfigurable(obj, prop)) {
	            desc.configurable = false;
	        }
	        return desc;
	    };
	}

	function _redefineProperty(obj, prop, desc) {
	    var originalConfigurableFlag = desc.configurable;
	    desc = rewriteDescriptor(obj, prop, desc);
	    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
	}

	function isUnconfigurable(obj, prop) {
	    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
	}
	function rewriteDescriptor(obj, prop, desc) {
	    desc.configurable = true;
	    if (!desc.configurable) {
	        if (!obj[unconfigurablesKey]) {
	            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
	        }
	        obj[unconfigurablesKey][prop] = true;
	    }
	    return desc;
	}
	function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
	    try {
	        return _defineProperty(obj, prop, desc);
	    }
	    catch (e) {
	        if (desc.configurable) {
	            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
	            // retry with the original flag value
	            if (typeof originalConfigurableFlag == 'undefined') {
	                delete desc.configurable;
	            }
	            else {
	                desc.configurable = originalConfigurableFlag;
	            }
	            try {
	                return _defineProperty(obj, prop, desc);
	            }
	            catch (e) {
	                var descJson = null;
	                try {
	                    descJson = JSON.stringify(desc);
	                }
	                catch (e) {
	                    descJson = descJson.toString();
	                }
	                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + e);
	            }
	        }
	        else {
	            throw e;
	        }
	    }
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
	var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex'
	    .split(',');
	var EVENT_TARGET = 'EventTarget';
	function eventTargetPatch(_global) {
	    var apis = [];
	    var isWtf = _global['wtf'];
	    if (isWtf) {
	        // Workaround for: https://github.com/google/tracing-framework/issues/555
	        apis = WTF_ISSUE_555.split(',').map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
	    }
	    else if (_global[EVENT_TARGET]) {
	        apis.push(EVENT_TARGET);
	    }
	    else {
	        // Note: EventTarget is not available in all browsers,
	        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
	        apis = NO_EVENT_TARGET;
	    }
	    for (var i = 0; i < apis.length; i++) {
	        var type = _global[apis[i]];
	        patchEventTargetMethods(type && type.prototype);
	    }
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	// we have to patch the instance since the proto is non-configurable
	function apply(_global) {
	    var WS = _global.WebSocket;
	    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
	    // On older Chrome, no need since EventTarget was already patched
	    if (!_global.EventTarget) {
	        patchEventTargetMethods(WS.prototype);
	    }
	    _global.WebSocket = function (a, b) {
	        var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
	        var proxySocket;
	        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
	        var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
	        if (onmessageDesc && onmessageDesc.configurable === false) {
	            proxySocket = Object.create(socket);
	            ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function (propName) {
	                proxySocket[propName] = function () {
	                    return socket[propName].apply(socket, arguments);
	                };
	            });
	        }
	        else {
	            // we can patch the real socket
	            proxySocket = socket;
	        }
	        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open']);
	        return proxySocket;
	    };
	    for (var prop in WS) {
	        _global.WebSocket[prop] = WS[prop];
	    }
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'
	    .split(' ');
	function propertyDescriptorPatch(_global) {
	    if (isNode) {
	        return;
	    }
	    var supportsWebSocket = typeof WebSocket !== 'undefined';
	    if (canPatchViaPropertyDescriptor()) {
	        // for browsers that we can patch the descriptor:  Chrome & Firefox
	        if (isBrowser) {
	            patchOnProperties(HTMLElement.prototype, eventNames);
	        }
	        patchOnProperties(XMLHttpRequest.prototype, null);
	        if (typeof IDBIndex !== 'undefined') {
	            patchOnProperties(IDBIndex.prototype, null);
	            patchOnProperties(IDBRequest.prototype, null);
	            patchOnProperties(IDBOpenDBRequest.prototype, null);
	            patchOnProperties(IDBDatabase.prototype, null);
	            patchOnProperties(IDBTransaction.prototype, null);
	            patchOnProperties(IDBCursor.prototype, null);
	        }
	        if (supportsWebSocket) {
	            patchOnProperties(WebSocket.prototype, null);
	        }
	    }
	    else {
	        // Safari, Android browsers (Jelly Bean)
	        patchViaCapturingAllTheEvents();
	        patchClass('XMLHttpRequest');
	        if (supportsWebSocket) {
	            apply(_global);
	        }
	    }
	}
	function canPatchViaPropertyDescriptor() {
	    if (isBrowser && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
	        typeof Element !== 'undefined') {
	        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
	        // IDL interface attributes are not configurable
	        var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
	        if (desc && !desc.configurable)
	            return false;
	    }
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
	        get: function () {
	            return true;
	        }
	    });
	    var req = new XMLHttpRequest();
	    var result = !!req.onreadystatechange;
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {});
	    return result;
	}

	var unboundKey = zoneSymbol('unbound');
	// Whenever any eventListener fires, we check the eventListener target and all parents
	// for `onwhatever` properties and replace them with zone-bound functions
	// - Chrome (for now)
	function patchViaCapturingAllTheEvents() {
	    var _loop_1 = function(i) {
	        var property = eventNames[i];
	        var onproperty = 'on' + property;
	        self.addEventListener(property, function (event) {
	            var elt = event.target, bound, source;
	            if (elt) {
	                source = elt.constructor['name'] + '.' + onproperty;
	            }
	            else {
	                source = 'unknown.' + onproperty;
	            }
	            while (elt) {
	                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
	                    bound = Zone.current.wrap(elt[onproperty], source);
	                    bound[unboundKey] = elt[onproperty];
	                    elt[onproperty] = bound;
	                }
	                elt = elt.parentElement;
	            }
	        }, true);
	    };
	    for (var i = 0; i < eventNames.length; i++) {
	        _loop_1(i);
	    }
	    
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	function registerElementPatch(_global) {
	    if (!isBrowser || !('registerElement' in _global.document)) {
	        return;
	    }
	    var _registerElement = document.registerElement;
	    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
	    document.registerElement = function (name, opts) {
	        if (opts && opts.prototype) {
	            callbacks.forEach(function (callback) {
	                var source = 'Document.registerElement::' + callback;
	                if (opts.prototype.hasOwnProperty(callback)) {
	                    var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
	                    if (descriptor && descriptor.value) {
	                        descriptor.value = Zone.current.wrap(descriptor.value, source);
	                        _redefineProperty(opts.prototype, callback, descriptor);
	                    }
	                    else {
	                        opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
	                    }
	                }
	                else if (opts.prototype[callback]) {
	                    opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
	                }
	            });
	        }
	        return _registerElement.apply(document, [name, opts]);
	    };
	}

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var set = 'set';
	var clear = 'clear';
	var blockingMethods = ['alert', 'prompt', 'confirm'];
	var _global = typeof window === 'object' && window || typeof self === 'object' && self || global;
	patchTimer(_global, set, clear, 'Timeout');
	patchTimer(_global, set, clear, 'Interval');
	patchTimer(_global, set, clear, 'Immediate');
	patchTimer(_global, 'request', 'cancel', 'AnimationFrame');
	patchTimer(_global, 'mozRequest', 'mozCancel', 'AnimationFrame');
	patchTimer(_global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
	for (var i = 0; i < blockingMethods.length; i++) {
	    var name = blockingMethods[i];
	    patchMethod(_global, name, function (delegate, symbol, name) {
	        return function (s, args) {
	            return Zone.current.run(delegate, _global, args, name);
	        };
	    });
	}
	eventTargetPatch(_global);
	propertyDescriptorPatch(_global);
	patchClass('MutationObserver');
	patchClass('WebKitMutationObserver');
	patchClass('FileReader');
	propertyPatch();
	registerElementPatch(_global);
	// Treat XMLHTTPRequest as a macrotask.
	patchXHR(_global);
	var XHR_TASK = zoneSymbol('xhrTask');
	var XHR_SYNC = zoneSymbol('xhrSync');
	function patchXHR(window) {
	    function findPendingTask(target) {
	        var pendingTask = target[XHR_TASK];
	        return pendingTask;
	    }
	    function scheduleTask(task) {
	        var data = task.data;
	        data.target.addEventListener('readystatechange', function () {
	            if (data.target.readyState === data.target.DONE) {
	                if (!data.aborted) {
	                    task.invoke();
	                }
	            }
	        });
	        var storedTask = data.target[XHR_TASK];
	        if (!storedTask) {
	            data.target[XHR_TASK] = task;
	        }
	        sendNative.apply(data.target, data.args);
	        return task;
	    }
	    function placeholderCallback() { }
	    function clearTask(task) {
	        var data = task.data;
	        // Note - ideally, we would call data.target.removeEventListener here, but it's too late
	        // to prevent it from firing. So instead, we store info for the event listener.
	        data.aborted = true;
	        return abortNative.apply(data.target, data.args);
	    }
	    var openNative = patchMethod(window.XMLHttpRequest.prototype, 'open', function () { return function (self, args) {
	        self[XHR_SYNC] = args[2] == false;
	        return openNative.apply(self, args);
	    }; });
	    var sendNative = patchMethod(window.XMLHttpRequest.prototype, 'send', function () { return function (self, args) {
	        var zone = Zone.current;
	        if (self[XHR_SYNC]) {
	            // if the XHR is sync there is no task to schedule, just execute the code.
	            return sendNative.apply(self, args);
	        }
	        else {
	            var options = { target: self, isPeriodic: false, delay: null, args: args, aborted: false };
	            return zone.scheduleMacroTask('XMLHttpRequest.send', placeholderCallback, options, scheduleTask, clearTask);
	        }
	    }; });
	    var abortNative = patchMethod(window.XMLHttpRequest.prototype, 'abort', function (delegate) { return function (self, args) {
	        var task = findPendingTask(self);
	        if (task && typeof task.type == 'string') {
	            // If the XHR has already completed, do nothing.
	            if (task.cancelFn == null) {
	                return;
	            }
	            task.zone.cancelTask(task);
	        }
	        // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no task
	        // to cancel. Do nothing.
	    }; });
	}
	/// GEO_LOCATION
	if (_global['navigator'] && _global['navigator'].geolocation) {
	    patchPrototype(_global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
	}

	})));

<<<<<<< c9aa4e6e4c93ef4fe3f8f39017c5f0320f609601
<<<<<<< 54bf91b361958b377ebc548abd7768f8b92260f5
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(225)))
=======
<<<<<<< HEAD
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(222)))
=======
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(326)))
>>>>>>> 024b7b6... adding chart.js
>>>>>>> adding chart.js
=======
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(333)))
>>>>>>> regenerating bundle

/***/ }
/******/ ]);
//# sourceMappingURL=polyfills.map