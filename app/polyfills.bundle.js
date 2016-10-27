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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	__webpack_require__(463); // Internet Explorer 9 support
	// import 'core-js/es6';
	// Added parts of es6 which are necessary for your project or your browser support requirements.
	__webpack_require__(316);
	__webpack_require__(309);
	__webpack_require__(305);
	__webpack_require__(311);
	__webpack_require__(310);
	__webpack_require__(308);
	__webpack_require__(307);
	__webpack_require__(315);
	__webpack_require__(304);
	__webpack_require__(303);
	__webpack_require__(313);
	__webpack_require__(306);
	__webpack_require__(314);
	__webpack_require__(318);
	__webpack_require__(319);
	__webpack_require__(317);
	__webpack_require__(312);
	// see issue https://github.com/AngularClass/angular2-webpack-starter/issues/709
	// import 'core-js/es6/promise';
	__webpack_require__(320);
	__webpack_require__(736);
	__webpack_require__(735);
=======
	__webpack_require__(457); // Internet Explorer 9 support
=======
	__webpack_require__(467); // Internet Explorer 9 support
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	__webpack_require__(469); // Internet Explorer 9 support
>>>>>>> adding storage policy list - angular 2
=======
	__webpack_require__(471); // Internet Explorer 9 support
>>>>>>> organizationlist to angular 2
	// import 'core-js/es6';
	// Added parts of es6 which are necessary for your project or your browser support requirements.
	__webpack_require__(324);
	__webpack_require__(317);
	__webpack_require__(313);
	__webpack_require__(319);
	__webpack_require__(318);
	__webpack_require__(316);
	__webpack_require__(315);
	__webpack_require__(323);
	__webpack_require__(312);
	__webpack_require__(311);
	__webpack_require__(321);
	__webpack_require__(314);
	__webpack_require__(322);
	__webpack_require__(326);
	__webpack_require__(327);
	__webpack_require__(325);
	__webpack_require__(320);
	// see issue https://github.com/AngularClass/angular2-webpack-starter/issues/709
	// import 'core-js/es6/promise';
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	__webpack_require__(314);
	__webpack_require__(733);
	__webpack_require__(732);
>>>>>>> Table directive to angular 2
=======
	__webpack_require__(324);
	__webpack_require__(743);
	__webpack_require__(742);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	__webpack_require__(326);
	__webpack_require__(745);
	__webpack_require__(744);
>>>>>>> adding storage policy list - angular 2
=======
	__webpack_require__(328);
	__webpack_require__(746);
	__webpack_require__(745);
>>>>>>> organizationlist to angular 2
	

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(13)
	  , hide      = __webpack_require__(31)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , redefine  = __webpack_require__(28)
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , ctx       = __webpack_require__(59)
=======
	  , ctx       = __webpack_require__(58)
>>>>>>> Table directive to angular 2
=======
=======
	  , redefine  = __webpack_require__(29)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
>>>>>>> adding storage policy list - angular 2
	  , ctx       = __webpack_require__(62)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , ctx       = __webpack_require__(63)
>>>>>>> organizationlist to angular 2
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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	var store      = __webpack_require__(102)('wks')
	  , uid        = __webpack_require__(63)
=======
	var store      = __webpack_require__(100)('wks')
	  , uid        = __webpack_require__(62)
>>>>>>> Table directive to angular 2
=======
	var store      = __webpack_require__(107)('wks')
=======
	var store      = __webpack_require__(108)('wks')
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
>>>>>>> adding storage policy list - angular 2
	  , uid        = __webpack_require__(66)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , uid        = __webpack_require__(67)
>>>>>>> organizationlist to angular 2
	  , Symbol     = __webpack_require__(12).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(8)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , IE8_DOM_DEFINE = __webpack_require__(211)
	  , toPrimitive    = __webpack_require__(54)
=======
	  , IE8_DOM_DEFINE = __webpack_require__(208)
	  , toPrimitive    = __webpack_require__(52)
>>>>>>> Table directive to angular 2
=======
	  , IE8_DOM_DEFINE = __webpack_require__(216)
	  , toPrimitive    = __webpack_require__(56)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , IE8_DOM_DEFINE = __webpack_require__(217)
=======
	  , IE8_DOM_DEFINE = __webpack_require__(218)
>>>>>>> organizationlist to angular 2
	  , toPrimitive    = __webpack_require__(57)
>>>>>>> adding storage policy list - angular 2
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(20) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(10)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	var toInteger = __webpack_require__(53)
=======
	var toInteger = __webpack_require__(55)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	var toInteger = __webpack_require__(56)
>>>>>>> adding storage policy list - angular 2
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , hide      = __webpack_require__(31)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , has       = __webpack_require__(26)
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , SRC       = __webpack_require__(63)('src')
=======
	  , SRC       = __webpack_require__(62)('src')
>>>>>>> Table directive to angular 2
=======
	  , SRC       = __webpack_require__(66)('src')
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , has       = __webpack_require__(27)
	  , SRC       = __webpack_require__(67)('src')
>>>>>>> organizationlist to angular 2
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(13).inspectSource = function(it){
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(2)
	  , fails   = __webpack_require__(10)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , defined = __webpack_require__(43)
=======
	  , defined = __webpack_require__(44)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , defined = __webpack_require__(46)
>>>>>>> adding storage policy list - angular 2
=======
	  , defined = __webpack_require__(47)
>>>>>>> organizationlist to angular 2
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(17)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , createDesc = __webpack_require__(52);
=======
	  , createDesc = __webpack_require__(54);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , createDesc = __webpack_require__(55);
>>>>>>> adding storage policy list - angular 2
	module.exports = __webpack_require__(20) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	var defined = __webpack_require__(43);
=======
	var defined = __webpack_require__(44);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	var defined = __webpack_require__(46);
>>>>>>> adding storage policy list - angular 2
=======
	var defined = __webpack_require__(47);
>>>>>>> organizationlist to angular 2
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(10);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	var IObject = __webpack_require__(82)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , defined = __webpack_require__(43);
=======
	var IObject = __webpack_require__(77)
	  , defined = __webpack_require__(42);
>>>>>>> Table directive to angular 2
=======
	var IObject = __webpack_require__(82)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , defined = __webpack_require__(44);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , defined = __webpack_require__(46);
>>>>>>> adding storage policy list - angular 2
=======
	  , defined = __webpack_require__(47);
>>>>>>> organizationlist to angular 2
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 34 */,
=======
>>>>>>> converting volumelist, servicelist ctrl to ang2
/* 35 */,
=======
>>>>>>> organizationlist to angular 2
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	var ctx      = __webpack_require__(59)
	  , IObject  = __webpack_require__(82)
	  , toObject = __webpack_require__(31)
	  , toLength = __webpack_require__(24)
	  , asc      = __webpack_require__(323);
=======
	var ctx      = __webpack_require__(58)
	  , IObject  = __webpack_require__(77)
	  , toObject = __webpack_require__(31)
	  , toLength = __webpack_require__(24)
	  , asc      = __webpack_require__(317);
>>>>>>> Table directive to angular 2
=======
	var ctx      = __webpack_require__(62)
	  , IObject  = __webpack_require__(82)
	  , toObject = __webpack_require__(32)
	  , toLength = __webpack_require__(24)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , asc      = __webpack_require__(327);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , asc      = __webpack_require__(329);
>>>>>>> adding storage policy list - angular 2
=======
	var ctx      = __webpack_require__(63)
	  , IObject  = __webpack_require__(82)
	  , toObject = __webpack_require__(32)
	  , toLength = __webpack_require__(24)
	  , asc      = __webpack_require__(331);
>>>>>>> organizationlist to angular 2
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	var has         = __webpack_require__(26)
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , toObject    = __webpack_require__(31)
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , IE_PROTO    = __webpack_require__(149)('IE_PROTO')
=======
	  , IE_PROTO    = __webpack_require__(148)('IE_PROTO')
>>>>>>> Table directive to angular 2
=======
	  , toObject    = __webpack_require__(32)
	  , IE_PROTO    = __webpack_require__(152)('IE_PROTO')
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	var has         = __webpack_require__(27)
	  , toObject    = __webpack_require__(32)
	  , IE_PROTO    = __webpack_require__(153)('IE_PROTO')
>>>>>>> organizationlist to angular 2
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(2)
	  , core    = __webpack_require__(13)
	  , fails   = __webpack_require__(10);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 42 */,
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 43 */
=======
/* 43 */,
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
/* 44 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 44 */,
/* 45 */,
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
/* 46 */
>>>>>>> adding storage policy list - angular 2
=======
/* 46 */,
/* 47 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 44 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	var Map     = __webpack_require__(228)
	  , $export = __webpack_require__(2)
	  , shared  = __webpack_require__(102)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(236)));
=======
	var Map     = __webpack_require__(225)
	  , $export = __webpack_require__(2)
	  , shared  = __webpack_require__(100)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(233)));
>>>>>>> Table directive to angular 2
=======
/* 45 */
=======
/* 47 */
>>>>>>> adding storage policy list - angular 2
=======
/* 48 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(235)
	  , $export = __webpack_require__(2)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , shared  = __webpack_require__(107)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(241)));
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , shared  = __webpack_require__(108)('metadata')
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , store   = shared.store || (shared.store = new (__webpack_require__(242)));
>>>>>>> adding storage policy list - angular 2
=======
	  , store   = shared.store || (shared.store = new (__webpack_require__(243)));
>>>>>>> organizationlist to angular 2

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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 45 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	var pIE            = __webpack_require__(101)
	  , createDesc     = __webpack_require__(52)
=======
	var pIE            = __webpack_require__(99)
	  , createDesc     = __webpack_require__(50)
>>>>>>> Table directive to angular 2
	  , toIObject      = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(54)
	  , has            = __webpack_require__(26)
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , IE8_DOM_DEFINE = __webpack_require__(211)
=======
	  , IE8_DOM_DEFINE = __webpack_require__(208)
>>>>>>> Table directive to angular 2
=======
/* 46 */
=======
/* 48 */
>>>>>>> adding storage policy list - angular 2
=======
/* 49 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(107)
	  , createDesc     = __webpack_require__(55)
	  , toIObject      = __webpack_require__(35)
	  , toPrimitive    = __webpack_require__(57)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , has            = __webpack_require__(26)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , IE8_DOM_DEFINE = __webpack_require__(216)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , IE8_DOM_DEFINE = __webpack_require__(217)
>>>>>>> adding storage policy list - angular 2
=======
	  , has            = __webpack_require__(27)
	  , IE8_DOM_DEFINE = __webpack_require__(218)
>>>>>>> organizationlist to angular 2
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(20) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 46 */
=======
/* 47 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 49 */
>>>>>>> adding storage policy list - angular 2
=======
/* 50 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(20)){
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  var LIBRARY             = __webpack_require__(83)
	    , global              = __webpack_require__(12)
	    , fails               = __webpack_require__(10)
	    , $export             = __webpack_require__(2)
	    , $typed              = __webpack_require__(104)
	    , $buffer             = __webpack_require__(152)
	    , ctx                 = __webpack_require__(59)
	    , anInstance          = __webpack_require__(81)
	    , propertyDesc        = __webpack_require__(52)
	    , hide                = __webpack_require__(30)
	    , redefineAll         = __webpack_require__(84)
	    , toInteger           = __webpack_require__(53)
	    , toLength            = __webpack_require__(24)
	    , toIndex             = __webpack_require__(62)
	    , toPrimitive         = __webpack_require__(54)
	    , has                 = __webpack_require__(26)
	    , same                = __webpack_require__(223)
	    , classof             = __webpack_require__(136)
	    , isObject            = __webpack_require__(11)
	    , toObject            = __webpack_require__(31)
	    , isArrayIter         = __webpack_require__(141)
	    , create              = __webpack_require__(60)
	    , getPrototypeOf      = __webpack_require__(37)
	    , gOPN                = __webpack_require__(61).f
	    , getIterFn           = __webpack_require__(153)
	    , uid                 = __webpack_require__(63)
	    , wks                 = __webpack_require__(14)
	    , createArrayMethod   = __webpack_require__(36)
	    , createArrayIncludes = __webpack_require__(135)
	    , speciesConstructor  = __webpack_require__(224)
	    , ArrayIterators      = __webpack_require__(105)
	    , Iterators           = __webpack_require__(72)
	    , $iterDetect         = __webpack_require__(145)
	    , setSpecies          = __webpack_require__(85)
	    , arrayFill           = __webpack_require__(134)
	    , arrayCopyWithin     = __webpack_require__(203)
=======
	  var LIBRARY             = __webpack_require__(78)
=======
	  var LIBRARY             = __webpack_require__(83)
>>>>>>> converting volumelist, servicelist ctrl to ang2
	    , global              = __webpack_require__(12)
	    , fails               = __webpack_require__(10)
	    , $export             = __webpack_require__(2)
	    , $typed              = __webpack_require__(110)
	    , $buffer             = __webpack_require__(156)
	    , ctx                 = __webpack_require__(63)
	    , anInstance          = __webpack_require__(81)
	    , propertyDesc        = __webpack_require__(55)
	    , hide                = __webpack_require__(31)
	    , redefineAll         = __webpack_require__(84)
	    , toInteger           = __webpack_require__(56)
	    , toLength            = __webpack_require__(24)
	    , toIndex             = __webpack_require__(66)
	    , toPrimitive         = __webpack_require__(57)
	    , has                 = __webpack_require__(27)
	    , same                = __webpack_require__(230)
	    , classof             = __webpack_require__(140)
	    , isObject            = __webpack_require__(11)
	    , toObject            = __webpack_require__(32)
	    , isArrayIter         = __webpack_require__(145)
	    , create              = __webpack_require__(64)
	    , getPrototypeOf      = __webpack_require__(40)
	    , gOPN                = __webpack_require__(65).f
	    , getIterFn           = __webpack_require__(157)
	    , uid                 = __webpack_require__(67)
	    , wks                 = __webpack_require__(14)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	    , createArrayMethod   = __webpack_require__(35)
	    , createArrayIncludes = __webpack_require__(134)
	    , speciesConstructor  = __webpack_require__(221)
	    , ArrayIterators      = __webpack_require__(103)
	    , Iterators           = __webpack_require__(68)
	    , $iterDetect         = __webpack_require__(144)
	    , setSpecies          = __webpack_require__(80)
	    , arrayFill           = __webpack_require__(133)
	    , arrayCopyWithin     = __webpack_require__(200)
>>>>>>> Table directive to angular 2
	    , $DP                 = __webpack_require__(17)
	    , $GOPD               = __webpack_require__(45)
=======
	    , createArrayMethod   = __webpack_require__(36)
=======
	    , createArrayMethod   = __webpack_require__(37)
>>>>>>> adding storage policy list - angular 2
	    , createArrayIncludes = __webpack_require__(138)
	    , speciesConstructor  = __webpack_require__(230)
=======
	    , createArrayMethod   = __webpack_require__(39)
	    , createArrayIncludes = __webpack_require__(139)
	    , speciesConstructor  = __webpack_require__(231)
>>>>>>> organizationlist to angular 2
	    , ArrayIterators      = __webpack_require__(111)
	    , Iterators           = __webpack_require__(72)
	    , $iterDetect         = __webpack_require__(149)
	    , setSpecies          = __webpack_require__(85)
	    , arrayFill           = __webpack_require__(138)
	    , arrayCopyWithin     = __webpack_require__(210)
	    , $DP                 = __webpack_require__(17)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	    , $GOPD               = __webpack_require__(46)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	    , $GOPD               = __webpack_require__(48)
>>>>>>> adding storage policy list - angular 2
=======
	    , $GOPD               = __webpack_require__(49)
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
=======
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 50 */,
=======
>>>>>>> organizationlist to angular 2
/* 51 */,
/* 52 */,
/* 53 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 51 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	var META     = __webpack_require__(63)('meta')
=======
	var META     = __webpack_require__(62)('meta')
>>>>>>> Table directive to angular 2
=======
/* 53 */
=======
/* 54 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	var META     = __webpack_require__(66)('meta')
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	var META     = __webpack_require__(67)('meta')
>>>>>>> organizationlist to angular 2
	  , isObject = __webpack_require__(11)
	  , has      = __webpack_require__(27)
	  , setDesc  = __webpack_require__(17).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(10)(function(){
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
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 52 */
=======
/* 54 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 55 */
>>>>>>> adding storage policy list - angular 2
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
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 53 */
=======
/* 55 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 56 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 54 */
=======
/* 56 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 57 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(11);
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
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 55 */,
/* 56 */,
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 57 */,
/* 58 */
=======
/* 57 */
>>>>>>> Table directive to angular 2
=======
/* 57 */,
=======
>>>>>>> adding storage policy list - angular 2
/* 58 */,
/* 59 */,
/* 60 */,
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
/* 61 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 61 */,
/* 62 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 59 */
=======
/* 58 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(50);
=======
/* 62 */
=======
/* 63 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	var aFunction = __webpack_require__(52);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	var aFunction = __webpack_require__(53);
>>>>>>> adding storage policy list - angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 60 */
=======
/* 59 */
>>>>>>> Table directive to angular 2
=======
/* 63 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 64 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(8)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , dPs         = __webpack_require__(218)
	  , enumBugKeys = __webpack_require__(137)
	  , IE_PROTO    = __webpack_require__(149)('IE_PROTO')
=======
	  , dPs         = __webpack_require__(215)
	  , enumBugKeys = __webpack_require__(136)
	  , IE_PROTO    = __webpack_require__(148)('IE_PROTO')
>>>>>>> Table directive to angular 2
=======
	  , dPs         = __webpack_require__(223)
=======
	  , dPs         = __webpack_require__(224)
>>>>>>> adding storage policy list - angular 2
	  , enumBugKeys = __webpack_require__(140)
	  , IE_PROTO    = __webpack_require__(152)('IE_PROTO')
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , dPs         = __webpack_require__(225)
	  , enumBugKeys = __webpack_require__(141)
	  , IE_PROTO    = __webpack_require__(153)('IE_PROTO')
>>>>>>> organizationlist to angular 2
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  var iframe = __webpack_require__(209)('iframe')
=======
	  var iframe = __webpack_require__(206)('iframe')
>>>>>>> Table directive to angular 2
=======
	  var iframe = __webpack_require__(214)('iframe')
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  var iframe = __webpack_require__(215)('iframe')
>>>>>>> adding storage policy list - angular 2
=======
	  var iframe = __webpack_require__(216)('iframe')
>>>>>>> organizationlist to angular 2
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  __webpack_require__(210).appendChild(iframe);
=======
	  __webpack_require__(207).appendChild(iframe);
>>>>>>> Table directive to angular 2
=======
	  __webpack_require__(215).appendChild(iframe);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  __webpack_require__(216).appendChild(iframe);
>>>>>>> adding storage policy list - angular 2
=======
	  __webpack_require__(217).appendChild(iframe);
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(220)
	  , hiddenKeys = __webpack_require__(137).concat('length', 'prototype');
=======
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(217)
	  , hiddenKeys = __webpack_require__(136).concat('length', 'prototype');
>>>>>>> Table directive to angular 2
=======
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(226)
	  , hiddenKeys = __webpack_require__(140).concat('length', 'prototype');
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(227)
	  , hiddenKeys = __webpack_require__(141).concat('length', 'prototype');
>>>>>>> organizationlist to angular 2

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 62 */
=======
/* 61 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(53)
=======
/* 65 */
=======
/* 66 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	var toInteger = __webpack_require__(55)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	var toInteger = __webpack_require__(56)
>>>>>>> adding storage policy list - angular 2
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 63 */
=======
/* 62 */
>>>>>>> Table directive to angular 2
=======
/* 66 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 67 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 64 */
=======
/* 63 */
>>>>>>> Table directive to angular 2
=======
/* 67 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 68 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	var classof = __webpack_require__(136)
=======
	var classof = __webpack_require__(135)
>>>>>>> Table directive to angular 2
=======
	var classof = __webpack_require__(139)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	var classof = __webpack_require__(140)
>>>>>>> organizationlist to angular 2
	  , test    = {};
	test[__webpack_require__(14)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(29)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
=======
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
>>>>>>> Table directive to angular 2
=======
/* 68 */,
=======
>>>>>>> organizationlist to angular 2
/* 69 */,
/* 70 */,
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
/* 71 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 71 */,
/* 72 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports) {

	module.exports = {};

/***/ },
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(220)
	  , enumBugKeys = __webpack_require__(137);
=======
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(217)
	  , enumBugKeys = __webpack_require__(136);
>>>>>>> Table directive to angular 2
=======
/* 72 */
=======
/* 73 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	var $keys       = __webpack_require__(226)
	  , enumBugKeys = __webpack_require__(140);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	var $keys       = __webpack_require__(227)
	  , enumBugKeys = __webpack_require__(141);
>>>>>>> organizationlist to angular 2

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
=======
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
>>>>>>> Table directive to angular 2
=======
/* 73 */,
=======
>>>>>>> adding storage policy list - angular 2
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(14)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(31)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 81 */
=======
/* 76 */
>>>>>>> Table directive to angular 2
=======
/* 81 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(58);
=======
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(57);
>>>>>>> Table directive to angular 2
=======
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	var cof = __webpack_require__(61);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	var cof = __webpack_require__(62);
>>>>>>> organizationlist to angular 2
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 83 */
=======
/* 78 */
>>>>>>> Table directive to angular 2
=======
/* 83 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
/***/ function(module, exports) {

	module.exports = false;

/***/ },
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 84 */
=======
/* 79 */
>>>>>>> Table directive to angular 2
=======
/* 84 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(29);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 85 */
=======
/* 80 */
>>>>>>> Table directive to angular 2
=======
/* 85 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(12)
	  , dP          = __webpack_require__(17)
	  , DESCRIPTORS = __webpack_require__(20)
	  , SPECIES     = __webpack_require__(14)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 86 */
=======
/* 81 */
>>>>>>> Table directive to angular 2
=======
/* 86 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(17).f
	  , has = __webpack_require__(27)
	  , TAG = __webpack_require__(14)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
=======
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
>>>>>>> Table directive to angular 2
=======
>>>>>>> converting volumelist, servicelist ctrl to ang2
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 95 */,
/* 96 */,
/* 97 */
=======
/* 95 */
>>>>>>> Table directive to angular 2
=======
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
/* 102 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 102 */,
/* 103 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(12)
	  , $export           = __webpack_require__(2)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , redefine          = __webpack_require__(28)
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , redefineAll       = __webpack_require__(84)
	  , meta              = __webpack_require__(51)
	  , forOf             = __webpack_require__(99)
	  , anInstance        = __webpack_require__(81)
	  , isObject          = __webpack_require__(11)
	  , fails             = __webpack_require__(10)
	  , $iterDetect       = __webpack_require__(145)
	  , setToStringTag    = __webpack_require__(86)
	  , inheritIfRequired = __webpack_require__(140);
=======
	  , redefineAll       = __webpack_require__(79)
	  , meta              = __webpack_require__(49)
	  , forOf             = __webpack_require__(97)
	  , anInstance        = __webpack_require__(76)
	  , isObject          = __webpack_require__(11)
	  , fails             = __webpack_require__(10)
	  , $iterDetect       = __webpack_require__(144)
	  , setToStringTag    = __webpack_require__(81)
	  , inheritIfRequired = __webpack_require__(139);
>>>>>>> Table directive to angular 2
=======
=======
	  , redefine          = __webpack_require__(29)
>>>>>>> adding storage policy list - angular 2
	  , redefineAll       = __webpack_require__(84)
	  , meta              = __webpack_require__(54)
	  , forOf             = __webpack_require__(105)
	  , anInstance        = __webpack_require__(81)
	  , isObject          = __webpack_require__(11)
	  , fails             = __webpack_require__(10)
	  , $iterDetect       = __webpack_require__(149)
	  , setToStringTag    = __webpack_require__(86)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , inheritIfRequired = __webpack_require__(143);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , inheritIfRequired = __webpack_require__(144);
>>>>>>> organizationlist to angular 2

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
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 98 */
=======
/* 96 */
>>>>>>> Table directive to angular 2
=======
/* 103 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 104 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(31)
	  , redefine = __webpack_require__(29)
	  , fails    = __webpack_require__(10)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , defined  = __webpack_require__(43)
=======
	  , defined  = __webpack_require__(44)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , defined  = __webpack_require__(46)
>>>>>>> adding storage policy list - angular 2
=======
	  , defined  = __webpack_require__(47)
>>>>>>> organizationlist to angular 2
	  , wks      = __webpack_require__(14);

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
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(59)
	  , call        = __webpack_require__(213)
	  , isArrayIter = __webpack_require__(141)
	  , anObject    = __webpack_require__(8)
	  , toLength    = __webpack_require__(24)
	  , getIterFn   = __webpack_require__(153)
=======
/* 97 */
=======
/* 104 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 105 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(63)
	  , call        = __webpack_require__(220)
	  , isArrayIter = __webpack_require__(145)
	  , anObject    = __webpack_require__(8)
	  , toLength    = __webpack_require__(24)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , getIterFn   = __webpack_require__(152)
>>>>>>> Table directive to angular 2
=======
	  , getIterFn   = __webpack_require__(156)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , getIterFn   = __webpack_require__(157)
>>>>>>> organizationlist to angular 2
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
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 100 */
=======
/* 98 */
>>>>>>> Table directive to angular 2
=======
/* 105 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 106 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 101 */
=======
/* 99 */
>>>>>>> Table directive to angular 2
=======
/* 106 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 107 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 102 */
=======
/* 100 */
>>>>>>> Table directive to angular 2
=======
/* 107 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 108 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 103 */
=======
/* 101 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(2)
	  , defined = __webpack_require__(43)
	  , fails   = __webpack_require__(10)
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , spaces  = __webpack_require__(151)
=======
	  , spaces  = __webpack_require__(150)
>>>>>>> Table directive to angular 2
=======
/* 108 */
=======
/* 109 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(2)
	  , defined = __webpack_require__(47)
	  , fails   = __webpack_require__(10)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , spaces  = __webpack_require__(154)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , spaces  = __webpack_require__(155)
>>>>>>> organizationlist to angular 2
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
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 104 */
=======
/* 102 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12)
	  , hide   = __webpack_require__(30)
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , uid    = __webpack_require__(63)
=======
	  , uid    = __webpack_require__(62)
>>>>>>> Table directive to angular 2
=======
/* 109 */
=======
/* 110 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12)
	  , hide   = __webpack_require__(31)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , uid    = __webpack_require__(66)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , uid    = __webpack_require__(67)
>>>>>>> organizationlist to angular 2
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
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(80)
	  , step             = __webpack_require__(215)
	  , Iterators        = __webpack_require__(72)
=======
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(75)
	  , step             = __webpack_require__(212)
	  , Iterators        = __webpack_require__(68)
>>>>>>> Table directive to angular 2
	  , toIObject        = __webpack_require__(33);
=======
/* 110 */
=======
/* 111 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(80)
	  , step             = __webpack_require__(222)
	  , Iterators        = __webpack_require__(72)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , toIObject        = __webpack_require__(34);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , toIObject        = __webpack_require__(35);
>>>>>>> organizationlist to angular 2

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	module.exports = __webpack_require__(144)(Array, 'Array', function(iterated, kind){
=======
	module.exports = __webpack_require__(143)(Array, 'Array', function(iterated, kind){
>>>>>>> Table directive to angular 2
=======
	module.exports = __webpack_require__(147)(Array, 'Array', function(iterated, kind){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	module.exports = __webpack_require__(148)(Array, 'Array', function(iterated, kind){
>>>>>>> organizationlist to angular 2
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
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(225)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(144)(String, 'String', function(iterated){
=======
/* 104 */
=======
/* 111 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 112 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(232)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	__webpack_require__(143)(String, 'String', function(iterated){
>>>>>>> Table directive to angular 2
=======
	__webpack_require__(147)(String, 'String', function(iterated){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	__webpack_require__(148)(String, 'String', function(iterated){
>>>>>>> organizationlist to angular 2
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
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
=======
/* 105 */,
/* 106 */,
>>>>>>> Table directive to angular 2
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
=======
>>>>>>> converting volumelist, servicelist ctrl to ang2
/* 112 */,
=======
>>>>>>> adding storage policy list - angular 2
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 133 */,
/* 134 */
=======
/* 133 */
>>>>>>> Table directive to angular 2
=======
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
/* 137 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 137 */,
/* 138 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	var toObject = __webpack_require__(31)
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , toIndex  = __webpack_require__(62)
=======
	  , toIndex  = __webpack_require__(61)
>>>>>>> Table directive to angular 2
=======
	var toObject = __webpack_require__(32)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , toIndex  = __webpack_require__(65)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , toIndex  = __webpack_require__(66)
>>>>>>> organizationlist to angular 2
	  , toLength = __webpack_require__(24);
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 135 */
=======
/* 134 */
>>>>>>> Table directive to angular 2
=======
/* 138 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 139 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(35)
	  , toLength  = __webpack_require__(24)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , toIndex   = __webpack_require__(62);
=======
	  , toIndex   = __webpack_require__(61);
>>>>>>> Table directive to angular 2
=======
	  , toIndex   = __webpack_require__(65);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , toIndex   = __webpack_require__(66);
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(58)
=======
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(57)
>>>>>>> Table directive to angular 2
=======
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(61)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(62)
>>>>>>> organizationlist to angular 2
	  , TAG = __webpack_require__(14)('toStringTag')
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 137 */
=======
/* 136 */
>>>>>>> Table directive to angular 2
=======
/* 140 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 141 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 138 */
=======
/* 137 */
>>>>>>> Table directive to angular 2
=======
/* 141 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 142 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(14)('match');
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 139 */
=======
/* 138 */
>>>>>>> Table directive to angular 2
=======
/* 142 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 143 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(8);
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(11)
	  , setPrototypeOf = __webpack_require__(148).set;
=======
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(11)
	  , setPrototypeOf = __webpack_require__(147).set;
>>>>>>> Table directive to angular 2
=======
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(11)
	  , setPrototypeOf = __webpack_require__(151).set;
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(11)
	  , setPrototypeOf = __webpack_require__(152).set;
>>>>>>> organizationlist to angular 2
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(72)
=======
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(68)
>>>>>>> Table directive to angular 2
=======
/* 144 */
=======
/* 145 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	var Iterators  = __webpack_require__(71)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	var Iterators  = __webpack_require__(72)
>>>>>>> adding storage policy list - angular 2
	  , ITERATOR   = __webpack_require__(14)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(58);
=======
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(57);
>>>>>>> Table directive to angular 2
=======
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(61);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(62);
>>>>>>> organizationlist to angular 2
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 143 */
=======
/* 142 */
>>>>>>> Table directive to angular 2
=======
/* 146 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 147 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(11)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , cof      = __webpack_require__(58)
=======
	  , cof      = __webpack_require__(57)
>>>>>>> Table directive to angular 2
=======
	  , cof      = __webpack_require__(61)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , cof      = __webpack_require__(62)
>>>>>>> organizationlist to angular 2
	  , MATCH    = __webpack_require__(14)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(83)
=======
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(78)
>>>>>>> Table directive to angular 2
=======
/* 147 */
=======
/* 148 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(83)
>>>>>>> converting volumelist, servicelist ctrl to ang2
	  , $export        = __webpack_require__(2)
	  , redefine       = __webpack_require__(29)
	  , hide           = __webpack_require__(31)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , has            = __webpack_require__(26)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , Iterators      = __webpack_require__(72)
	  , $iterCreate    = __webpack_require__(214)
	  , setToStringTag = __webpack_require__(86)
	  , getPrototypeOf = __webpack_require__(37)
=======
	  , Iterators      = __webpack_require__(68)
	  , $iterCreate    = __webpack_require__(211)
	  , setToStringTag = __webpack_require__(81)
	  , getPrototypeOf = __webpack_require__(36)
>>>>>>> Table directive to angular 2
=======
	  , Iterators      = __webpack_require__(71)
	  , $iterCreate    = __webpack_require__(219)
	  , setToStringTag = __webpack_require__(86)
	  , getPrototypeOf = __webpack_require__(37)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
=======
	  , has            = __webpack_require__(27)
>>>>>>> organizationlist to angular 2
	  , Iterators      = __webpack_require__(72)
	  , $iterCreate    = __webpack_require__(221)
	  , setToStringTag = __webpack_require__(86)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , getPrototypeOf = __webpack_require__(38)
>>>>>>> adding storage policy list - angular 2
=======
	  , getPrototypeOf = __webpack_require__(40)
>>>>>>> organizationlist to angular 2
	  , ITERATOR       = __webpack_require__(14)('iterator')
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 145 */
=======
/* 144 */
>>>>>>> Table directive to angular 2
=======
/* 148 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 149 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(14)('iterator')
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 146 */
=======
/* 145 */
>>>>>>> Table directive to angular 2
=======
/* 149 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 150 */
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 147 */
=======
/* 146 */
>>>>>>> Table directive to angular 2
=======
/* 150 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 151 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 148 */
=======
/* 147 */
>>>>>>> Table directive to angular 2
=======
/* 151 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 152 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(11)
	  , anObject = __webpack_require__(8);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	        set = __webpack_require__(59)(Function.call, __webpack_require__(45).f(Object.prototype, '__proto__').set, 2);
=======
	        set = __webpack_require__(58)(Function.call, __webpack_require__(44).f(Object.prototype, '__proto__').set, 2);
>>>>>>> Table directive to angular 2
=======
	        set = __webpack_require__(62)(Function.call, __webpack_require__(46).f(Object.prototype, '__proto__').set, 2);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	        set = __webpack_require__(62)(Function.call, __webpack_require__(48).f(Object.prototype, '__proto__').set, 2);
>>>>>>> adding storage policy list - angular 2
=======
	        set = __webpack_require__(63)(Function.call, __webpack_require__(49).f(Object.prototype, '__proto__').set, 2);
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(102)('keys')
	  , uid    = __webpack_require__(63);
=======
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(100)('keys')
	  , uid    = __webpack_require__(62);
>>>>>>> Table directive to angular 2
=======
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(108)('keys')
	  , uid    = __webpack_require__(66);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(108)('keys')
	  , uid    = __webpack_require__(67);
>>>>>>> organizationlist to angular 2
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(143)
	  , defined  = __webpack_require__(43);
=======
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(142)
	  , defined  = __webpack_require__(42);
>>>>>>> Table directive to angular 2
=======
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(146)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , defined  = __webpack_require__(44);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , defined  = __webpack_require__(46);
>>>>>>> adding storage policy list - angular 2
=======
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(147)
	  , defined  = __webpack_require__(47);
>>>>>>> organizationlist to angular 2

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 151 */
=======
/* 150 */
>>>>>>> Table directive to angular 2
=======
/* 154 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 155 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 152 */
=======
/* 151 */
>>>>>>> Table directive to angular 2
=======
/* 155 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 156 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(12)
	  , DESCRIPTORS    = __webpack_require__(20)
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , LIBRARY        = __webpack_require__(83)
	  , $typed         = __webpack_require__(104)
	  , hide           = __webpack_require__(30)
	  , redefineAll    = __webpack_require__(84)
	  , fails          = __webpack_require__(10)
	  , anInstance     = __webpack_require__(81)
	  , toInteger      = __webpack_require__(53)
	  , toLength       = __webpack_require__(24)
	  , gOPN           = __webpack_require__(61).f
	  , dP             = __webpack_require__(17).f
	  , arrayFill      = __webpack_require__(134)
	  , setToStringTag = __webpack_require__(86)
=======
	  , LIBRARY        = __webpack_require__(78)
	  , $typed         = __webpack_require__(102)
	  , hide           = __webpack_require__(30)
	  , redefineAll    = __webpack_require__(79)
=======
	  , LIBRARY        = __webpack_require__(83)
	  , $typed         = __webpack_require__(110)
	  , hide           = __webpack_require__(31)
	  , redefineAll    = __webpack_require__(84)
>>>>>>> converting volumelist, servicelist ctrl to ang2
	  , fails          = __webpack_require__(10)
	  , anInstance     = __webpack_require__(81)
	  , toInteger      = __webpack_require__(56)
	  , toLength       = __webpack_require__(24)
	  , gOPN           = __webpack_require__(65).f
	  , dP             = __webpack_require__(17).f
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , arrayFill      = __webpack_require__(133)
	  , setToStringTag = __webpack_require__(81)
>>>>>>> Table directive to angular 2
=======
	  , arrayFill      = __webpack_require__(137)
=======
	  , arrayFill      = __webpack_require__(138)
>>>>>>> organizationlist to angular 2
	  , setToStringTag = __webpack_require__(86)
>>>>>>> converting volumelist, servicelist ctrl to ang2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(136)
	  , ITERATOR  = __webpack_require__(14)('iterator')
	  , Iterators = __webpack_require__(72);
=======
/* 152 */
=======
/* 156 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 157 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(140)
	  , ITERATOR  = __webpack_require__(14)('iterator')
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , Iterators = __webpack_require__(68);
>>>>>>> Table directive to angular 2
=======
	  , Iterators = __webpack_require__(71);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , Iterators = __webpack_require__(72);
>>>>>>> adding storage policy list - angular 2
	module.exports = __webpack_require__(13).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(105)
	  , redefine      = __webpack_require__(28)
	  , global        = __webpack_require__(12)
	  , hide          = __webpack_require__(30)
	  , Iterators     = __webpack_require__(72)
=======
/* 153 */
=======
/* 157 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 158 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(111)
	  , redefine      = __webpack_require__(29)
	  , global        = __webpack_require__(12)
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , hide          = __webpack_require__(30)
	  , Iterators     = __webpack_require__(68)
>>>>>>> Table directive to angular 2
=======
	  , hide          = __webpack_require__(31)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , Iterators     = __webpack_require__(71)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , Iterators     = __webpack_require__(72)
>>>>>>> adding storage policy list - angular 2
	  , wks           = __webpack_require__(14)
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
=======
/* 154 */,
>>>>>>> Table directive to angular 2
/* 155 */,
/* 156 */,
/* 157 */,
=======
>>>>>>> converting volumelist, servicelist ctrl to ang2
/* 158 */,
=======
>>>>>>> organizationlist to angular 2
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
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(58);
=======
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(57);
>>>>>>> Table directive to angular 2
=======
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	var cof = __webpack_require__(61);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	var cof = __webpack_require__(62);
>>>>>>> organizationlist to angular 2
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 203 */
=======
/* 200 */
>>>>>>> Table directive to angular 2
=======
/* 208 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 209 */
>>>>>>> adding storage policy list - angular 2
=======
/* 210 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	var toObject = __webpack_require__(31)
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , toIndex  = __webpack_require__(62)
=======
	  , toIndex  = __webpack_require__(61)
>>>>>>> Table directive to angular 2
=======
	var toObject = __webpack_require__(32)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , toIndex  = __webpack_require__(65)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , toIndex  = __webpack_require__(66)
>>>>>>> organizationlist to angular 2
	  , toLength = __webpack_require__(24);

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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 204 */
=======
/* 201 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(50)
	  , toObject  = __webpack_require__(31)
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , IObject   = __webpack_require__(82)
=======
	  , IObject   = __webpack_require__(77)
>>>>>>> Table directive to angular 2
=======
/* 209 */
=======
/* 210 */
>>>>>>> adding storage policy list - angular 2
=======
/* 211 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(53)
	  , toObject  = __webpack_require__(32)
	  , IObject   = __webpack_require__(82)
>>>>>>> converting volumelist, servicelist ctrl to ang2
	  , toLength  = __webpack_require__(24);

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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 205 */
=======
/* 202 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(50)
	  , isObject   = __webpack_require__(11)
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , invoke     = __webpack_require__(326)
=======
	  , invoke     = __webpack_require__(320)
>>>>>>> Table directive to angular 2
=======
/* 210 */
=======
/* 211 */
>>>>>>> adding storage policy list - angular 2
=======
/* 212 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(53)
	  , isObject   = __webpack_require__(11)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , invoke     = __webpack_require__(330)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , invoke     = __webpack_require__(332)
>>>>>>> adding storage policy list - angular 2
=======
	  , invoke     = __webpack_require__(334)
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 206 */
=======
/* 203 */
>>>>>>> Table directive to angular 2
=======
/* 211 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 212 */
>>>>>>> adding storage policy list - angular 2
=======
/* 213 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(17).f
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , create      = __webpack_require__(60)
	  , redefineAll = __webpack_require__(84)
	  , ctx         = __webpack_require__(59)
	  , anInstance  = __webpack_require__(81)
	  , defined     = __webpack_require__(43)
	  , forOf       = __webpack_require__(99)
	  , $iterDefine = __webpack_require__(144)
	  , step        = __webpack_require__(215)
	  , setSpecies  = __webpack_require__(85)
=======
	  , create      = __webpack_require__(59)
	  , redefineAll = __webpack_require__(79)
	  , ctx         = __webpack_require__(58)
	  , anInstance  = __webpack_require__(76)
	  , defined     = __webpack_require__(42)
	  , forOf       = __webpack_require__(97)
	  , $iterDefine = __webpack_require__(143)
	  , step        = __webpack_require__(212)
	  , setSpecies  = __webpack_require__(80)
>>>>>>> Table directive to angular 2
	  , DESCRIPTORS = __webpack_require__(20)
	  , fastKey     = __webpack_require__(51).fastKey
=======
	  , create      = __webpack_require__(63)
=======
	  , create      = __webpack_require__(64)
>>>>>>> organizationlist to angular 2
	  , redefineAll = __webpack_require__(84)
	  , ctx         = __webpack_require__(63)
	  , anInstance  = __webpack_require__(81)
	  , defined     = __webpack_require__(47)
	  , forOf       = __webpack_require__(105)
	  , $iterDefine = __webpack_require__(148)
	  , step        = __webpack_require__(222)
	  , setSpecies  = __webpack_require__(85)
	  , DESCRIPTORS = __webpack_require__(20)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , fastKey     = __webpack_require__(53).fastKey
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , fastKey     = __webpack_require__(54).fastKey
>>>>>>> adding storage policy list - angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(84)
	  , getWeak           = __webpack_require__(51).getWeak
	  , anObject          = __webpack_require__(8)
	  , isObject          = __webpack_require__(11)
	  , anInstance        = __webpack_require__(81)
	  , forOf             = __webpack_require__(99)
	  , createArrayMethod = __webpack_require__(36)
=======
/* 204 */
=======
/* 212 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 213 */
>>>>>>> adding storage policy list - angular 2
=======
/* 214 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(84)
	  , getWeak           = __webpack_require__(54).getWeak
	  , anObject          = __webpack_require__(8)
	  , isObject          = __webpack_require__(11)
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , anInstance        = __webpack_require__(76)
	  , forOf             = __webpack_require__(97)
	  , createArrayMethod = __webpack_require__(35)
>>>>>>> Table directive to angular 2
=======
	  , anInstance        = __webpack_require__(81)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , forOf             = __webpack_require__(104)
	  , createArrayMethod = __webpack_require__(36)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , forOf             = __webpack_require__(105)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , createArrayMethod = __webpack_require__(37)
>>>>>>> adding storage policy list - angular 2
	  , $has              = __webpack_require__(26)
=======
	  , createArrayMethod = __webpack_require__(39)
	  , $has              = __webpack_require__(27)
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 208 */
=======
/* 205 */
>>>>>>> Table directive to angular 2
=======
/* 213 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 214 */
>>>>>>> adding storage policy list - angular 2
=======
/* 215 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(17)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , createDesc      = __webpack_require__(52);
=======
	  , createDesc      = __webpack_require__(54);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , createDesc      = __webpack_require__(55);
>>>>>>> adding storage policy list - angular 2

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 209 */
=======
/* 206 */
>>>>>>> Table directive to angular 2
=======
/* 214 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 215 */
>>>>>>> adding storage policy list - angular 2
=======
/* 216 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11)
	  , document = __webpack_require__(12).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 210 */
=======
/* 207 */
>>>>>>> Table directive to angular 2
=======
/* 215 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 216 */
>>>>>>> adding storage policy list - angular 2
=======
/* 217 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12).document && document.documentElement;

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(20) && !__webpack_require__(10)(function(){
	  return Object.defineProperty(__webpack_require__(209)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 212 */
=======
/* 208 */
=======
/* 216 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 217 */
>>>>>>> adding storage policy list - angular 2
=======
/* 218 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(20) && !__webpack_require__(10)(function(){
	  return Object.defineProperty(__webpack_require__(216)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 209 */
>>>>>>> Table directive to angular 2
=======
/* 217 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 218 */
>>>>>>> adding storage policy list - angular 2
=======
/* 219 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(11)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 213 */
=======
/* 210 */
>>>>>>> Table directive to angular 2
=======
/* 218 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 219 */
>>>>>>> adding storage policy list - angular 2
=======
/* 220 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(8);
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(60)
	  , descriptor     = __webpack_require__(52)
	  , setToStringTag = __webpack_require__(86)
=======
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(59)
	  , descriptor     = __webpack_require__(50)
	  , setToStringTag = __webpack_require__(81)
>>>>>>> Table directive to angular 2
=======
/* 219 */
=======
/* 220 */
>>>>>>> adding storage policy list - angular 2
=======
/* 221 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(64)
	  , descriptor     = __webpack_require__(55)
	  , setToStringTag = __webpack_require__(86)
>>>>>>> converting volumelist, servicelist ctrl to ang2
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(31)(IteratorPrototype, __webpack_require__(14)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 215 */
=======
/* 212 */
>>>>>>> Table directive to angular 2
=======
/* 220 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 221 */
>>>>>>> adding storage policy list - angular 2
=======
/* 222 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 216 */
=======
/* 213 */
>>>>>>> Table directive to angular 2
=======
/* 221 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 222 */
>>>>>>> adding storage policy list - angular 2
=======
/* 223 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 217 */
=======
/* 214 */
>>>>>>> Table directive to angular 2
=======
/* 222 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 223 */
>>>>>>> adding storage policy list - angular 2
=======
/* 224 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	var getKeys  = __webpack_require__(73)
	  , gOPS     = __webpack_require__(100)
	  , pIE      = __webpack_require__(101)
	  , toObject = __webpack_require__(31)
	  , IObject  = __webpack_require__(82)
=======
	var getKeys  = __webpack_require__(69)
	  , gOPS     = __webpack_require__(98)
	  , pIE      = __webpack_require__(99)
	  , toObject = __webpack_require__(31)
	  , IObject  = __webpack_require__(77)
>>>>>>> Table directive to angular 2
=======
	var getKeys  = __webpack_require__(72)
	  , gOPS     = __webpack_require__(105)
	  , pIE      = __webpack_require__(106)
=======
	var getKeys  = __webpack_require__(73)
	  , gOPS     = __webpack_require__(106)
	  , pIE      = __webpack_require__(107)
>>>>>>> adding storage policy list - angular 2
	  , toObject = __webpack_require__(32)
	  , IObject  = __webpack_require__(82)
>>>>>>> converting volumelist, servicelist ctrl to ang2
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(10)(function(){
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 218 */
=======
/* 215 */
>>>>>>> Table directive to angular 2
=======
/* 223 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 224 */
>>>>>>> adding storage policy list - angular 2
=======
/* 225 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(17)
	  , anObject = __webpack_require__(8)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , getKeys  = __webpack_require__(73);
=======
	  , getKeys  = __webpack_require__(69);
>>>>>>> Table directive to angular 2
=======
	  , getKeys  = __webpack_require__(72);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , getKeys  = __webpack_require__(73);
>>>>>>> adding storage policy list - angular 2

	module.exports = __webpack_require__(20) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 219 */
=======
/* 216 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(33)
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , gOPN      = __webpack_require__(61).f
=======
	  , gOPN      = __webpack_require__(60).f
>>>>>>> Table directive to angular 2
=======
/* 224 */
=======
/* 225 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(34)
	  , gOPN      = __webpack_require__(64).f
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(35)
	  , gOPN      = __webpack_require__(65).f
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 220 */
=======
/* 217 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(26)
	  , toIObject    = __webpack_require__(33)
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , arrayIndexOf = __webpack_require__(135)(false)
	  , IE_PROTO     = __webpack_require__(149)('IE_PROTO');
=======
	  , arrayIndexOf = __webpack_require__(134)(false)
	  , IE_PROTO     = __webpack_require__(148)('IE_PROTO');
>>>>>>> Table directive to angular 2
=======
/* 225 */
=======
/* 226 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(26)
	  , toIObject    = __webpack_require__(34)
	  , arrayIndexOf = __webpack_require__(138)(false)
	  , IE_PROTO     = __webpack_require__(152)('IE_PROTO');
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(27)
	  , toIObject    = __webpack_require__(35)
	  , arrayIndexOf = __webpack_require__(139)(false)
	  , IE_PROTO     = __webpack_require__(153)('IE_PROTO');
>>>>>>> organizationlist to angular 2

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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(12).parseFloat
	  , $trim       = __webpack_require__(103).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(151) + '-0') !== -Infinity ? function parseFloat(str){
=======
/* 218 */
=======
/* 226 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 227 */
>>>>>>> adding storage policy list - angular 2
=======
/* 228 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(12).parseFloat
	  , $trim       = __webpack_require__(109).trim;

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	module.exports = 1 / $parseFloat(__webpack_require__(150) + '-0') !== -Infinity ? function parseFloat(str){
>>>>>>> Table directive to angular 2
=======
	module.exports = 1 / $parseFloat(__webpack_require__(154) + '-0') !== -Infinity ? function parseFloat(str){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	module.exports = 1 / $parseFloat(__webpack_require__(155) + '-0') !== -Infinity ? function parseFloat(str){
>>>>>>> organizationlist to angular 2
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(12).parseInt
	  , $trim     = __webpack_require__(103).trim
	  , ws        = __webpack_require__(151)
=======
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(12).parseInt
	  , $trim     = __webpack_require__(101).trim
	  , ws        = __webpack_require__(150)
>>>>>>> Table directive to angular 2
=======
/* 227 */
=======
/* 228 */
>>>>>>> adding storage policy list - angular 2
=======
/* 229 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(12).parseInt
	  , $trim     = __webpack_require__(109).trim
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , ws        = __webpack_require__(154)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , ws        = __webpack_require__(155)
>>>>>>> organizationlist to angular 2
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 223 */
=======
/* 220 */
>>>>>>> Table directive to angular 2
=======
/* 228 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 229 */
>>>>>>> adding storage policy list - angular 2
=======
/* 230 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 224 */
=======
/* 221 */
>>>>>>> Table directive to angular 2
=======
/* 229 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 230 */
>>>>>>> adding storage policy list - angular 2
=======
/* 231 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(8)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , aFunction = __webpack_require__(50)
=======
	  , aFunction = __webpack_require__(48)
>>>>>>> Table directive to angular 2
=======
	  , aFunction = __webpack_require__(52)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , aFunction = __webpack_require__(53)
>>>>>>> adding storage policy list - angular 2
	  , SPECIES   = __webpack_require__(14)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 225 */
=======
/* 222 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(53)
	  , defined   = __webpack_require__(43);
=======
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(55)
	  , defined   = __webpack_require__(44);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(56)
	  , defined   = __webpack_require__(46);
>>>>>>> adding storage policy list - angular 2
=======
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(56)
	  , defined   = __webpack_require__(47);
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 226 */
=======
/* 223 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(53)
	  , defined   = __webpack_require__(43);
=======
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(55)
	  , defined   = __webpack_require__(44);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 232 */
=======
/* 233 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(56)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , defined   = __webpack_require__(46);
>>>>>>> adding storage policy list - angular 2
=======
	  , defined   = __webpack_require__(47);
>>>>>>> organizationlist to angular 2

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 227 */
=======
/* 224 */
>>>>>>> Table directive to angular 2
=======
/* 232 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 233 */
>>>>>>> adding storage policy list - angular 2
=======
/* 234 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(14);

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(206);

	// 23.1 Map Objects
	module.exports = __webpack_require__(97)('Map', function(get){
=======
/* 225 */
=======
/* 233 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 234 */
>>>>>>> adding storage policy list - angular 2
=======
/* 235 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(213);

	// 23.1 Map Objects
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	module.exports = __webpack_require__(95)('Map', function(get){
>>>>>>> Table directive to angular 2
=======
	module.exports = __webpack_require__(102)('Map', function(get){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	module.exports = __webpack_require__(103)('Map', function(get){
>>>>>>> adding storage policy list - angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 229 */
=======
/* 226 */
>>>>>>> Table directive to angular 2
=======
/* 234 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 235 */
>>>>>>> adding storage policy list - angular 2
=======
/* 236 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(20) && /./g.flags != 'g')__webpack_require__(17).f(RegExp.prototype, 'flags', {
	  configurable: true,
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  get: __webpack_require__(139)
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(98)('match', 1, function(defined, MATCH, $match){
=======
	  get: __webpack_require__(138)
=======
	  get: __webpack_require__(142)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  get: __webpack_require__(143)
>>>>>>> organizationlist to angular 2
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	__webpack_require__(96)('match', 1, function(defined, MATCH, $match){
>>>>>>> Table directive to angular 2
=======
	__webpack_require__(103)('match', 1, function(defined, MATCH, $match){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	__webpack_require__(104)('match', 1, function(defined, MATCH, $match){
>>>>>>> adding storage policy list - angular 2
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(98)('replace', 2, function(defined, REPLACE, $replace){
=======
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(96)('replace', 2, function(defined, REPLACE, $replace){
>>>>>>> Table directive to angular 2
=======
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(103)('replace', 2, function(defined, REPLACE, $replace){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 237 */
=======
/* 238 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(104)('replace', 2, function(defined, REPLACE, $replace){
>>>>>>> adding storage policy list - angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(98)('search', 1, function(defined, SEARCH, $search){
=======
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(96)('search', 1, function(defined, SEARCH, $search){
>>>>>>> Table directive to angular 2
=======
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(103)('search', 1, function(defined, SEARCH, $search){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 238 */
=======
/* 239 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(104)('search', 1, function(defined, SEARCH, $search){
>>>>>>> adding storage policy list - angular 2
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(98)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(143)
=======
/* 230 */
=======
/* 238 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 239 */
>>>>>>> adding storage policy list - angular 2
=======
/* 240 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(104)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  var isRegExp   = __webpack_require__(142)
>>>>>>> Table directive to angular 2
=======
	  var isRegExp   = __webpack_require__(146)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  var isRegExp   = __webpack_require__(147)
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(206);

	// 23.2 Set Objects
	module.exports = __webpack_require__(97)('Set', function(get){
=======
/* 231 */
=======
/* 239 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 240 */
>>>>>>> adding storage policy list - angular 2
=======
/* 241 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(213);

	// 23.2 Set Objects
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	module.exports = __webpack_require__(95)('Set', function(get){
>>>>>>> Table directive to angular 2
=======
	module.exports = __webpack_require__(102)('Set', function(get){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	module.exports = __webpack_require__(103)('Set', function(get){
>>>>>>> adding storage policy list - angular 2
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 235 */
=======
/* 232 */
>>>>>>> Table directive to angular 2
=======
/* 240 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 241 */
>>>>>>> adding storage policy list - angular 2
=======
/* 242 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(12)
	  , has            = __webpack_require__(27)
	  , DESCRIPTORS    = __webpack_require__(20)
	  , $export        = __webpack_require__(2)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , redefine       = __webpack_require__(28)
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , META           = __webpack_require__(51).KEY
	  , $fails         = __webpack_require__(10)
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , shared         = __webpack_require__(102)
	  , setToStringTag = __webpack_require__(86)
	  , uid            = __webpack_require__(63)
	  , wks            = __webpack_require__(14)
	  , wksExt         = __webpack_require__(227)
	  , wksDefine      = __webpack_require__(329)
	  , keyOf          = __webpack_require__(327)
	  , enumKeys       = __webpack_require__(325)
	  , isArray        = __webpack_require__(142)
	  , anObject       = __webpack_require__(8)
	  , toIObject      = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(54)
	  , createDesc     = __webpack_require__(52)
	  , _create        = __webpack_require__(60)
	  , gOPNExt        = __webpack_require__(219)
	  , $GOPD          = __webpack_require__(45)
	  , $DP            = __webpack_require__(17)
	  , $keys          = __webpack_require__(73)
=======
	  , shared         = __webpack_require__(100)
	  , setToStringTag = __webpack_require__(81)
	  , uid            = __webpack_require__(62)
=======
	  , META           = __webpack_require__(53).KEY
=======
	  , redefine       = __webpack_require__(29)
	  , META           = __webpack_require__(54).KEY
>>>>>>> adding storage policy list - angular 2
	  , $fails         = __webpack_require__(10)
	  , shared         = __webpack_require__(108)
	  , setToStringTag = __webpack_require__(86)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , uid            = __webpack_require__(66)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , uid            = __webpack_require__(67)
>>>>>>> organizationlist to angular 2
	  , wks            = __webpack_require__(14)
	  , wksExt         = __webpack_require__(234)
	  , wksDefine      = __webpack_require__(337)
	  , keyOf          = __webpack_require__(335)
	  , enumKeys       = __webpack_require__(333)
	  , isArray        = __webpack_require__(146)
	  , anObject       = __webpack_require__(8)
	  , toIObject      = __webpack_require__(35)
	  , toPrimitive    = __webpack_require__(57)
	  , createDesc     = __webpack_require__(55)
	  , _create        = __webpack_require__(64)
	  , gOPNExt        = __webpack_require__(226)
	  , $GOPD          = __webpack_require__(49)
	  , $DP            = __webpack_require__(17)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , $keys          = __webpack_require__(69)
>>>>>>> Table directive to angular 2
=======
	  , $keys          = __webpack_require__(72)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , $keys          = __webpack_require__(73)
>>>>>>> adding storage policy list - angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  __webpack_require__(61).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(101).f  = $propertyIsEnumerable;
	  __webpack_require__(100).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(83)){
=======
	  __webpack_require__(60).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(99).f  = $propertyIsEnumerable;
	  __webpack_require__(98).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(78)){
>>>>>>> Table directive to angular 2
=======
	  __webpack_require__(64).f = gOPNExt.f = $getOwnPropertyNames;
=======
	  __webpack_require__(65).f = gOPNExt.f = $getOwnPropertyNames;
>>>>>>> organizationlist to angular 2
	  __webpack_require__(107).f  = $propertyIsEnumerable;
	  __webpack_require__(106).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(83)){
>>>>>>> converting volumelist, servicelist ctrl to ang2
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(31)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 236 */
=======
/* 233 */
>>>>>>> Table directive to angular 2
=======
/* 241 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(36)(0)
	  , redefine     = __webpack_require__(28)
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , meta         = __webpack_require__(51)
	  , assign       = __webpack_require__(217)
	  , weak         = __webpack_require__(207)
=======
	  , meta         = __webpack_require__(49)
	  , assign       = __webpack_require__(214)
	  , weak         = __webpack_require__(204)
>>>>>>> Table directive to angular 2
=======
	  , meta         = __webpack_require__(53)
	  , assign       = __webpack_require__(222)
	  , weak         = __webpack_require__(212)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 242 */
=======
/* 243 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(39)(0)
	  , redefine     = __webpack_require__(29)
	  , meta         = __webpack_require__(54)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , assign       = __webpack_require__(223)
	  , weak         = __webpack_require__(213)
>>>>>>> adding storage policy list - angular 2
=======
	  , assign       = __webpack_require__(224)
	  , weak         = __webpack_require__(214)
>>>>>>> organizationlist to angular 2
	  , isObject     = __webpack_require__(11)
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
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	var $WeakMap = module.exports = __webpack_require__(97)('WeakMap', wrapper, methods, weak, true, true);
=======
	var $WeakMap = module.exports = __webpack_require__(95)('WeakMap', wrapper, methods, weak, true, true);
>>>>>>> Table directive to angular 2
=======
	var $WeakMap = module.exports = __webpack_require__(102)('WeakMap', wrapper, methods, weak, true, true);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	var $WeakMap = module.exports = __webpack_require__(103)('WeakMap', wrapper, methods, weak, true, true);
>>>>>>> adding storage policy list - angular 2

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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
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
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(106);
	__webpack_require__(339);
	__webpack_require__(337);
	__webpack_require__(343);
	__webpack_require__(340);
	__webpack_require__(346);
	__webpack_require__(348);
	__webpack_require__(336);
	__webpack_require__(342);
	__webpack_require__(333);
	__webpack_require__(347);
	__webpack_require__(331);
	__webpack_require__(345);
	__webpack_require__(344);
	__webpack_require__(338);
	__webpack_require__(341);
	__webpack_require__(330);
	__webpack_require__(332);
	__webpack_require__(335);
	__webpack_require__(334);
	__webpack_require__(349);
	__webpack_require__(105);
	module.exports = __webpack_require__(13).Array;

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(350);
	__webpack_require__(352);
	__webpack_require__(351);
	__webpack_require__(354);
	__webpack_require__(353);
	module.exports = Date;

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(355);
	__webpack_require__(357);
	__webpack_require__(356);
	module.exports = __webpack_require__(13).Function;

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64);
	__webpack_require__(106);
	__webpack_require__(154);
	__webpack_require__(228);
	module.exports = __webpack_require__(13).Map;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

=======
/* 234 */
=======
/* 242 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 243 */
>>>>>>> adding storage policy list - angular 2
=======
/* 244 */
>>>>>>> organizationlist to angular 2
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
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(112);
	__webpack_require__(347);
	__webpack_require__(345);
	__webpack_require__(351);
	__webpack_require__(348);
	__webpack_require__(354);
	__webpack_require__(356);
	__webpack_require__(344);
	__webpack_require__(350);
	__webpack_require__(341);
	__webpack_require__(355);
	__webpack_require__(339);
	__webpack_require__(353);
	__webpack_require__(352);
	__webpack_require__(346);
	__webpack_require__(349);
	__webpack_require__(338);
	__webpack_require__(340);
	__webpack_require__(343);
	__webpack_require__(342);
	__webpack_require__(357);
	__webpack_require__(111);
	module.exports = __webpack_require__(13).Array;

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(358);
	__webpack_require__(360);
	__webpack_require__(359);
	__webpack_require__(362);
	__webpack_require__(361);
	module.exports = Date;

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(363);
	__webpack_require__(365);
	__webpack_require__(364);
	module.exports = __webpack_require__(13).Function;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68);
	__webpack_require__(112);
	__webpack_require__(158);
	__webpack_require__(235);
	module.exports = __webpack_require__(13).Map;

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	__webpack_require__(352);
	__webpack_require__(353);
	__webpack_require__(354);
	__webpack_require__(355);
	__webpack_require__(356);
	__webpack_require__(357);
>>>>>>> Table directive to angular 2
	__webpack_require__(358);
	__webpack_require__(359);
	__webpack_require__(360);
	__webpack_require__(361);
=======
>>>>>>> converting volumelist, servicelist ctrl to ang2
	__webpack_require__(362);
	__webpack_require__(363);
=======
>>>>>>> adding storage policy list - angular 2
	__webpack_require__(364);
	__webpack_require__(365);
=======
>>>>>>> organizationlist to angular 2
	__webpack_require__(366);
	__webpack_require__(367);
	__webpack_require__(368);
	__webpack_require__(369);
	__webpack_require__(370);
	__webpack_require__(371);
	__webpack_require__(372);
	__webpack_require__(373);
	__webpack_require__(374);
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	module.exports = __webpack_require__(13).Math;

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(375);
	__webpack_require__(385);
	__webpack_require__(386);
	__webpack_require__(376);
	__webpack_require__(377);
	__webpack_require__(378);
	__webpack_require__(379);
	__webpack_require__(380);
	__webpack_require__(381);
	__webpack_require__(382);
	__webpack_require__(383);
	__webpack_require__(384);
	module.exports = __webpack_require__(13).Number;

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(235);
	__webpack_require__(388);
	__webpack_require__(390);
	__webpack_require__(389);
	__webpack_require__(392);
	__webpack_require__(394);
	__webpack_require__(399);
	__webpack_require__(393);
	__webpack_require__(391);
=======
	__webpack_require__(375);
	__webpack_require__(376);
	__webpack_require__(377);
	__webpack_require__(378);
	__webpack_require__(379);
	__webpack_require__(380);
	__webpack_require__(381);
	__webpack_require__(382);
	module.exports = __webpack_require__(13).Math;

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(383);
	__webpack_require__(393);
	__webpack_require__(394);
	__webpack_require__(384);
	__webpack_require__(385);
	__webpack_require__(386);
	__webpack_require__(387);
	__webpack_require__(388);
	__webpack_require__(389);
	__webpack_require__(390);
	__webpack_require__(391);
	__webpack_require__(392);
	module.exports = __webpack_require__(13).Number;

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(242);
	__webpack_require__(396);
	__webpack_require__(398);
	__webpack_require__(397);
	__webpack_require__(400);
	__webpack_require__(402);
	__webpack_require__(407);
	__webpack_require__(401);
	__webpack_require__(399);
	__webpack_require__(409);
	__webpack_require__(408);
	__webpack_require__(404);
	__webpack_require__(405);
	__webpack_require__(403);
	__webpack_require__(395);
	__webpack_require__(406);
	__webpack_require__(410);
	__webpack_require__(68);

	module.exports = __webpack_require__(13).Object;

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(411);
	module.exports = __webpack_require__(13).parseFloat;

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(412);
	module.exports = __webpack_require__(13).parseInt;

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	__webpack_require__(399);
	__webpack_require__(400);
>>>>>>> Table directive to angular 2
	__webpack_require__(401);
	__webpack_require__(400);
	__webpack_require__(396);
	__webpack_require__(397);
	__webpack_require__(395);
	__webpack_require__(387);
	__webpack_require__(398);
	__webpack_require__(402);
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	__webpack_require__(64);

	module.exports = __webpack_require__(13).Object;

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(403);
	module.exports = __webpack_require__(13).parseFloat;

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(404);
	module.exports = __webpack_require__(13).parseInt;

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(405);
	__webpack_require__(406);
	__webpack_require__(407);
	__webpack_require__(408);
	__webpack_require__(409);
	__webpack_require__(412);
	__webpack_require__(410);
	__webpack_require__(411);
	__webpack_require__(413);
	__webpack_require__(414);
	__webpack_require__(415);
	__webpack_require__(416);
	__webpack_require__(418);
	__webpack_require__(417);
	module.exports = __webpack_require__(13).Reflect;

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(419);
	__webpack_require__(420);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	module.exports = __webpack_require__(13).RegExp;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64);
	__webpack_require__(106);
	__webpack_require__(154);
	__webpack_require__(234);
	module.exports = __webpack_require__(13).Set;

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(430);
	__webpack_require__(434);
	__webpack_require__(441);
	__webpack_require__(106);
=======
	__webpack_require__(403);
	__webpack_require__(406);
	__webpack_require__(404);
	__webpack_require__(405);
	__webpack_require__(407);
	__webpack_require__(408);
=======
>>>>>>> converting volumelist, servicelist ctrl to ang2
	__webpack_require__(409);
	__webpack_require__(410);
=======
>>>>>>> adding storage policy list - angular 2
	__webpack_require__(411);
	__webpack_require__(412);
=======
>>>>>>> organizationlist to angular 2
	__webpack_require__(413);
	__webpack_require__(414);
	__webpack_require__(415);
	__webpack_require__(416);
	__webpack_require__(417);
	__webpack_require__(420);
	__webpack_require__(418);
	__webpack_require__(419);
	__webpack_require__(421);
	__webpack_require__(422);
	__webpack_require__(423);
	__webpack_require__(424);
	__webpack_require__(426);
	__webpack_require__(425);
	module.exports = __webpack_require__(13).Reflect;

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(425);
	__webpack_require__(426);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	module.exports = __webpack_require__(13).RegExp;

/***/ },
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63);
	__webpack_require__(104);
	__webpack_require__(153);
	__webpack_require__(231);
	module.exports = __webpack_require__(13).Set;

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(424);
	__webpack_require__(428);
	__webpack_require__(435);
	__webpack_require__(104);
	__webpack_require__(419);
	__webpack_require__(420);
>>>>>>> Table directive to angular 2
	__webpack_require__(425);
	__webpack_require__(429);
	__webpack_require__(431);
	__webpack_require__(415);
	__webpack_require__(416);
	__webpack_require__(417);
	__webpack_require__(418);
	__webpack_require__(421);
	__webpack_require__(422);
	__webpack_require__(423);
	__webpack_require__(426);
	__webpack_require__(431);
	__webpack_require__(435);
	__webpack_require__(437);
	__webpack_require__(421);
	__webpack_require__(422);
	__webpack_require__(423);
	__webpack_require__(424);
	__webpack_require__(427);
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	__webpack_require__(428);
	__webpack_require__(429);
	__webpack_require__(432);
	__webpack_require__(433);
	__webpack_require__(436);
	__webpack_require__(438);
	__webpack_require__(439);
	__webpack_require__(440);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	module.exports = __webpack_require__(13).String;

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(235);
	__webpack_require__(64);
	module.exports = __webpack_require__(13).Symbol;

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(442);
	__webpack_require__(443);
	__webpack_require__(448);
	__webpack_require__(451);
	__webpack_require__(452);
	__webpack_require__(446);
	__webpack_require__(449);
	__webpack_require__(447);
	__webpack_require__(450);
	__webpack_require__(444);
	__webpack_require__(445);
	__webpack_require__(64);
	module.exports = __webpack_require__(13);

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64);
	__webpack_require__(105);
	__webpack_require__(236);
	module.exports = __webpack_require__(13).WeakMap;
=======
/* 318 */
=======
/* 320 */
>>>>>>> adding storage policy list - angular 2
=======
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(427);
	__webpack_require__(428);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	module.exports = __webpack_require__(13).RegExp;

/***/ },
/* 322 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68);
	__webpack_require__(112);
	__webpack_require__(158);
	__webpack_require__(241);
	module.exports = __webpack_require__(13).Set;
>>>>>>> converting volumelist, servicelist ctrl to ang2

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	__webpack_require__(64);
	__webpack_require__(154);
	__webpack_require__(453);
	module.exports = __webpack_require__(13).WeakSet;

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(454);
	__webpack_require__(455);
	__webpack_require__(457);
	__webpack_require__(456);
	__webpack_require__(459);
	__webpack_require__(458);
	__webpack_require__(460);
	__webpack_require__(461);
	__webpack_require__(462);
=======
	__webpack_require__(430);
=======
	__webpack_require__(434);
	__webpack_require__(438);
	__webpack_require__(445);
	__webpack_require__(111);
	__webpack_require__(429);
	__webpack_require__(430);
	__webpack_require__(435);
	__webpack_require__(439);
=======
	__webpack_require__(436);
	__webpack_require__(440);
	__webpack_require__(447);
	__webpack_require__(112);
	__webpack_require__(431);
	__webpack_require__(432);
	__webpack_require__(437);
>>>>>>> adding storage policy list - angular 2
	__webpack_require__(441);
	__webpack_require__(443);
	__webpack_require__(427);
	__webpack_require__(428);
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	__webpack_require__(431);
>>>>>>> converting volumelist, servicelist ctrl to ang2
	__webpack_require__(432);
=======
	__webpack_require__(429);
	__webpack_require__(430);
>>>>>>> adding storage policy list - angular 2
	__webpack_require__(433);
	__webpack_require__(434);
=======
	__webpack_require__(438);
	__webpack_require__(442);
	__webpack_require__(449);
	__webpack_require__(112);
	__webpack_require__(433);
	__webpack_require__(434);
	__webpack_require__(439);
	__webpack_require__(443);
	__webpack_require__(445);
	__webpack_require__(429);
	__webpack_require__(430);
	__webpack_require__(431);
	__webpack_require__(432);
>>>>>>> organizationlist to angular 2
	__webpack_require__(435);
	__webpack_require__(436);
	__webpack_require__(437);
	__webpack_require__(440);
	__webpack_require__(441);
	__webpack_require__(444);
	__webpack_require__(446);
	__webpack_require__(447);
	__webpack_require__(448);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	module.exports = __webpack_require__(13).String;

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(242);
	__webpack_require__(68);
	module.exports = __webpack_require__(13).Symbol;

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(450);
	__webpack_require__(451);
	__webpack_require__(456);
	__webpack_require__(459);
	__webpack_require__(460);
	__webpack_require__(454);
	__webpack_require__(457);
	__webpack_require__(455);
	__webpack_require__(458);
	__webpack_require__(452);
	__webpack_require__(453);
	__webpack_require__(68);
	module.exports = __webpack_require__(13);

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68);
	__webpack_require__(111);
	__webpack_require__(243);
	module.exports = __webpack_require__(13).WeakMap;

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68);
	__webpack_require__(158);
	__webpack_require__(461);
	module.exports = __webpack_require__(13).WeakSet;

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	__webpack_require__(448);
	__webpack_require__(449);
	__webpack_require__(451);
	__webpack_require__(450);
	__webpack_require__(453);
	__webpack_require__(452);
	__webpack_require__(454);
	__webpack_require__(455);
	__webpack_require__(456);
>>>>>>> Table directive to angular 2
=======
	__webpack_require__(458);
	__webpack_require__(459);
	__webpack_require__(461);
=======
>>>>>>> adding storage policy list - angular 2
	__webpack_require__(460);
	__webpack_require__(461);
	__webpack_require__(463);
=======
>>>>>>> organizationlist to angular 2
	__webpack_require__(462);
	__webpack_require__(463);
	__webpack_require__(465);
	__webpack_require__(464);
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	__webpack_require__(466);
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
=======
>>>>>>> organizationlist to angular 2
	__webpack_require__(467);
	__webpack_require__(466);
	__webpack_require__(468);
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
>>>>>>> adding storage policy list - angular 2
=======
	__webpack_require__(469);
	__webpack_require__(470);
>>>>>>> organizationlist to angular 2
	module.exports = __webpack_require__(13).Reflect;


/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(99);
=======
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(97);
>>>>>>> Table directive to angular 2
=======
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(104);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 327 */
=======
/* 329 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(105);
>>>>>>> adding storage policy list - angular 2

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11)
	  , isArray  = __webpack_require__(142)
=======
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11)
	  , isArray  = __webpack_require__(141)
>>>>>>> Table directive to angular 2
=======
/* 326 */
=======
/* 328 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11)
	  , isArray  = __webpack_require__(145)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11)
	  , isArray  = __webpack_require__(146)
>>>>>>> organizationlist to angular 2
	  , SPECIES  = __webpack_require__(14)('species');

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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(322);
=======
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(316);
>>>>>>> Table directive to angular 2
=======
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(326);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(328);
>>>>>>> adding storage policy list - angular 2
=======
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(330);
>>>>>>> organizationlist to angular 2

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 324 */
=======
/* 318 */
>>>>>>> Table directive to angular 2
=======
/* 328 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 330 */
>>>>>>> adding storage policy list - angular 2
=======
/* 332 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(8)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , toPrimitive = __webpack_require__(54)
=======
	  , toPrimitive = __webpack_require__(52)
>>>>>>> Table directive to angular 2
=======
	  , toPrimitive = __webpack_require__(56)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , toPrimitive = __webpack_require__(57)
>>>>>>> adding storage policy list - angular 2
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(73)
	  , gOPS    = __webpack_require__(100)
	  , pIE     = __webpack_require__(101);
=======
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(69)
	  , gOPS    = __webpack_require__(98)
	  , pIE     = __webpack_require__(99);
>>>>>>> Table directive to angular 2
=======
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(72)
	  , gOPS    = __webpack_require__(105)
	  , pIE     = __webpack_require__(106);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 331 */
=======
/* 333 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(73)
	  , gOPS    = __webpack_require__(106)
	  , pIE     = __webpack_require__(107);
>>>>>>> adding storage policy list - angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 326 */
=======
/* 320 */
>>>>>>> Table directive to angular 2
=======
/* 330 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 332 */
>>>>>>> adding storage policy list - angular 2
=======
/* 334 */
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(73)
=======
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(69)
>>>>>>> Table directive to angular 2
	  , toIObject = __webpack_require__(33);
=======
/* 331 */
=======
/* 333 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(73)
	  , toIObject = __webpack_require__(34);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(73)
	  , toIObject = __webpack_require__(35);
>>>>>>> organizationlist to angular 2
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(61)
	  , gOPS     = __webpack_require__(100)
=======
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(60)
	  , gOPS     = __webpack_require__(98)
>>>>>>> Table directive to angular 2
=======
/* 332 */
=======
/* 334 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(64)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , gOPS     = __webpack_require__(105)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
=======
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(65)
>>>>>>> organizationlist to angular 2
	  , gOPS     = __webpack_require__(106)
>>>>>>> adding storage policy list - angular 2
	  , anObject = __webpack_require__(8)
	  , Reflect  = __webpack_require__(12).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 329 */
=======
/* 323 */
>>>>>>> Table directive to angular 2
=======
/* 333 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 335 */
>>>>>>> adding storage policy list - angular 2
=======
/* 337 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(12)
	  , core           = __webpack_require__(13)
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , LIBRARY        = __webpack_require__(83)
	  , wksExt         = __webpack_require__(227)
=======
	  , LIBRARY        = __webpack_require__(78)
	  , wksExt         = __webpack_require__(224)
>>>>>>> Table directive to angular 2
=======
	  , LIBRARY        = __webpack_require__(83)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , wksExt         = __webpack_require__(232)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , wksExt         = __webpack_require__(233)
>>>>>>> adding storage policy list - angular 2
=======
	  , wksExt         = __webpack_require__(234)
>>>>>>> organizationlist to angular 2
	  , defineProperty = __webpack_require__(17).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 330 */
=======
/* 324 */
>>>>>>> Table directive to angular 2
=======
/* 334 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 336 */
>>>>>>> adding storage policy list - angular 2
=======
/* 338 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(2);

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.P, 'Array', {copyWithin: __webpack_require__(203)});

	__webpack_require__(80)('copyWithin');

/***/ },
/* 331 */
=======
	$export($export.P, 'Array', {copyWithin: __webpack_require__(200)});
=======
	$export($export.P, 'Array', {copyWithin: __webpack_require__(208)});
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	$export($export.P, 'Array', {copyWithin: __webpack_require__(209)});
>>>>>>> adding storage policy list - angular 2
=======
	$export($export.P, 'Array', {copyWithin: __webpack_require__(210)});
>>>>>>> organizationlist to angular 2

	__webpack_require__(80)('copyWithin');

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 325 */
>>>>>>> Table directive to angular 2
=======
/* 335 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 337 */
>>>>>>> adding storage policy list - angular 2
=======
/* 339 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(2)
	  , $every  = __webpack_require__(39)(4);

	$export($export.P + $export.F * !__webpack_require__(34)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 332 */
=======
/* 326 */
>>>>>>> Table directive to angular 2
=======
/* 336 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 338 */
>>>>>>> adding storage policy list - angular 2
=======
/* 340 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(2);

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.P, 'Array', {fill: __webpack_require__(134)});

	__webpack_require__(80)('fill');

/***/ },
/* 333 */
=======
	$export($export.P, 'Array', {fill: __webpack_require__(133)});
=======
	$export($export.P, 'Array', {fill: __webpack_require__(137)});
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	$export($export.P, 'Array', {fill: __webpack_require__(138)});
>>>>>>> organizationlist to angular 2

	__webpack_require__(80)('fill');

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 327 */
>>>>>>> Table directive to angular 2
=======
/* 337 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 339 */
>>>>>>> adding storage policy list - angular 2
=======
/* 341 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(2)
	  , $filter = __webpack_require__(39)(2);

	$export($export.P + $export.F * !__webpack_require__(34)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 334 */
=======
/* 328 */
>>>>>>> Table directive to angular 2
=======
/* 338 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 340 */
>>>>>>> adding storage policy list - angular 2
=======
/* 342 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(2)
	  , $find   = __webpack_require__(39)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	__webpack_require__(80)(KEY);

/***/ },
/* 335 */
=======
	__webpack_require__(75)(KEY);

/***/ },
/* 329 */
>>>>>>> Table directive to angular 2
=======
	__webpack_require__(80)(KEY);

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
/* 339 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 341 */
>>>>>>> adding storage policy list - angular 2
=======
/* 343 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(2)
	  , $find   = __webpack_require__(39)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	__webpack_require__(80)(KEY);

/***/ },
/* 336 */
=======
	__webpack_require__(75)(KEY);

/***/ },
/* 330 */
>>>>>>> Table directive to angular 2
=======
	__webpack_require__(80)(KEY);

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
/* 340 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 342 */
>>>>>>> adding storage policy list - angular 2
=======
/* 344 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , $forEach = __webpack_require__(36)(0)
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , STRICT   = __webpack_require__(32)([].forEach, true);
=======
=======
	  , $forEach = __webpack_require__(37)(0)
>>>>>>> adding storage policy list - angular 2
	  , STRICT   = __webpack_require__(33)([].forEach, true);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , $forEach = __webpack_require__(39)(0)
	  , STRICT   = __webpack_require__(34)([].forEach, true);
>>>>>>> organizationlist to angular 2

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(59)
	  , $export        = __webpack_require__(2)
	  , toObject       = __webpack_require__(31)
	  , call           = __webpack_require__(213)
	  , isArrayIter    = __webpack_require__(141)
	  , toLength       = __webpack_require__(24)
	  , createProperty = __webpack_require__(208)
	  , getIterFn      = __webpack_require__(153);

	$export($export.S + $export.F * !__webpack_require__(145)(function(iter){ Array.from(iter); }), 'Array', {
=======
/* 331 */
=======
/* 341 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 343 */
>>>>>>> adding storage policy list - angular 2
=======
/* 345 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(63)
	  , $export        = __webpack_require__(2)
	  , toObject       = __webpack_require__(32)
	  , call           = __webpack_require__(220)
	  , isArrayIter    = __webpack_require__(145)
	  , toLength       = __webpack_require__(24)
	  , createProperty = __webpack_require__(215)
	  , getIterFn      = __webpack_require__(157);

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	$export($export.S + $export.F * !__webpack_require__(144)(function(iter){ Array.from(iter); }), 'Array', {
>>>>>>> Table directive to angular 2
=======
	$export($export.S + $export.F * !__webpack_require__(148)(function(iter){ Array.from(iter); }), 'Array', {
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	$export($export.S + $export.F * !__webpack_require__(149)(function(iter){ Array.from(iter); }), 'Array', {
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 338 */
=======
/* 332 */
>>>>>>> Table directive to angular 2
=======
/* 342 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 344 */
>>>>>>> adding storage policy list - angular 2
=======
/* 346 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , $indexOf      = __webpack_require__(135)(false)
=======
	  , $indexOf      = __webpack_require__(134)(false)
>>>>>>> Table directive to angular 2
=======
	  , $indexOf      = __webpack_require__(138)(false)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , $indexOf      = __webpack_require__(139)(false)
>>>>>>> organizationlist to angular 2
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(34)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 339 */
=======
/* 333 */
>>>>>>> Table directive to angular 2
=======
/* 343 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 345 */
>>>>>>> adding storage policy list - angular 2
=======
/* 347 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(2);

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.S, 'Array', {isArray: __webpack_require__(142)});

/***/ },
/* 340 */
=======
	$export($export.S, 'Array', {isArray: __webpack_require__(141)});

/***/ },
/* 334 */
>>>>>>> Table directive to angular 2
=======
	$export($export.S, 'Array', {isArray: __webpack_require__(145)});

/***/ },
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
/* 344 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 346 */
>>>>>>> adding storage policy list - angular 2
=======
	$export($export.S, 'Array', {isArray: __webpack_require__(146)});

/***/ },
/* 348 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(2)
	  , toIObject = __webpack_require__(35)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.P + $export.F * (__webpack_require__(82) != Object || !__webpack_require__(32)(arrayJoin)), 'Array', {
=======
	$export($export.P + $export.F * (__webpack_require__(77) != Object || !__webpack_require__(32)(arrayJoin)), 'Array', {
>>>>>>> Table directive to angular 2
=======
	$export($export.P + $export.F * (__webpack_require__(82) != Object || !__webpack_require__(33)(arrayJoin)), 'Array', {
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	$export($export.P + $export.F * (__webpack_require__(82) != Object || !__webpack_require__(34)(arrayJoin)), 'Array', {
>>>>>>> organizationlist to angular 2
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 341 */
=======
/* 335 */
>>>>>>> Table directive to angular 2
=======
/* 345 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 347 */
>>>>>>> adding storage policy list - angular 2
=======
/* 349 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , toIObject     = __webpack_require__(33)
	  , toInteger     = __webpack_require__(53)
=======
	  , toIObject     = __webpack_require__(34)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , toInteger     = __webpack_require__(55)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
=======
	  , toIObject     = __webpack_require__(35)
>>>>>>> organizationlist to angular 2
	  , toInteger     = __webpack_require__(56)
>>>>>>> adding storage policy list - angular 2
	  , toLength      = __webpack_require__(24)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(34)($native)), 'Array', {
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 342 */
=======
/* 336 */
>>>>>>> Table directive to angular 2
=======
/* 346 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 348 */
>>>>>>> adding storage policy list - angular 2
=======
/* 350 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(2)
	  , $map    = __webpack_require__(39)(1);

	$export($export.P + $export.F * !__webpack_require__(34)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 343 */
=======
/* 337 */
>>>>>>> Table directive to angular 2
=======
/* 347 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 349 */
>>>>>>> adding storage policy list - angular 2
=======
/* 351 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , createProperty = __webpack_require__(208);
=======
	  , createProperty = __webpack_require__(205);
>>>>>>> Table directive to angular 2
=======
	  , createProperty = __webpack_require__(213);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , createProperty = __webpack_require__(214);
>>>>>>> adding storage policy list - angular 2
=======
	  , createProperty = __webpack_require__(215);
>>>>>>> organizationlist to angular 2

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(10)(function(){
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 344 */
=======
/* 338 */
>>>>>>> Table directive to angular 2
=======
/* 348 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 350 */
>>>>>>> adding storage policy list - angular 2
=======
/* 352 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , $reduce = __webpack_require__(204);
=======
	  , $reduce = __webpack_require__(201);
>>>>>>> Table directive to angular 2
=======
	  , $reduce = __webpack_require__(209);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , $reduce = __webpack_require__(210);
>>>>>>> adding storage policy list - angular 2
=======
	  , $reduce = __webpack_require__(211);
>>>>>>> organizationlist to angular 2

	$export($export.P + $export.F * !__webpack_require__(34)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 345 */
=======
/* 339 */
>>>>>>> Table directive to angular 2
=======
/* 349 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 351 */
>>>>>>> adding storage policy list - angular 2
=======
/* 353 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , $reduce = __webpack_require__(204);
=======
	  , $reduce = __webpack_require__(201);
>>>>>>> Table directive to angular 2
=======
	  , $reduce = __webpack_require__(209);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , $reduce = __webpack_require__(210);
>>>>>>> adding storage policy list - angular 2
=======
	  , $reduce = __webpack_require__(211);
>>>>>>> organizationlist to angular 2

	$export($export.P + $export.F * !__webpack_require__(34)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 346 */
=======
/* 340 */
>>>>>>> Table directive to angular 2
=======
/* 350 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 352 */
>>>>>>> adding storage policy list - angular 2
=======
/* 354 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , html       = __webpack_require__(210)
	  , cof        = __webpack_require__(58)
	  , toIndex    = __webpack_require__(62)
=======
	  , html       = __webpack_require__(207)
	  , cof        = __webpack_require__(57)
	  , toIndex    = __webpack_require__(61)
>>>>>>> Table directive to angular 2
=======
	  , html       = __webpack_require__(215)
=======
	  , html       = __webpack_require__(216)
>>>>>>> adding storage policy list - angular 2
	  , cof        = __webpack_require__(61)
	  , toIndex    = __webpack_require__(65)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , html       = __webpack_require__(217)
	  , cof        = __webpack_require__(62)
	  , toIndex    = __webpack_require__(66)
>>>>>>> organizationlist to angular 2
	  , toLength   = __webpack_require__(24)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(10)(function(){
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 347 */
=======
/* 341 */
>>>>>>> Table directive to angular 2
=======
/* 351 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 353 */
>>>>>>> adding storage policy list - angular 2
=======
/* 355 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(2)
	  , $some   = __webpack_require__(39)(3);

	$export($export.P + $export.F * !__webpack_require__(34)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 348 */
=======
/* 342 */
>>>>>>> Table directive to angular 2
=======
/* 352 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 354 */
>>>>>>> adding storage policy list - angular 2
=======
/* 356 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(2)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , aFunction = __webpack_require__(50)
	  , toObject  = __webpack_require__(31)
=======
	  , aFunction = __webpack_require__(52)
=======
	  , aFunction = __webpack_require__(53)
>>>>>>> adding storage policy list - angular 2
	  , toObject  = __webpack_require__(32)
>>>>>>> converting volumelist, servicelist ctrl to ang2
	  , fails     = __webpack_require__(10)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(34)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85)('Array');

/***/ },
/* 350 */
=======
/* 343 */
=======
/* 353 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 355 */
>>>>>>> adding storage policy list - angular 2
=======
/* 357 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85)('Array');

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 344 */
>>>>>>> Table directive to angular 2
=======
/* 354 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 356 */
>>>>>>> adding storage policy list - angular 2
=======
/* 358 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(2);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 351 */
=======
/* 345 */
>>>>>>> Table directive to angular 2
=======
/* 355 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 357 */
>>>>>>> adding storage policy list - angular 2
=======
/* 359 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(2)
	  , fails   = __webpack_require__(10)
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 352 */
=======
/* 346 */
>>>>>>> Table directive to angular 2
=======
/* 356 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 358 */
>>>>>>> adding storage policy list - angular 2
=======
/* 360 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(2)
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , toObject    = __webpack_require__(31)
	  , toPrimitive = __webpack_require__(54);
=======
	  , toObject    = __webpack_require__(32)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , toPrimitive = __webpack_require__(56);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , toPrimitive = __webpack_require__(57);
>>>>>>> adding storage policy list - angular 2

	$export($export.P + $export.F * __webpack_require__(10)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 353 */
=======
/* 347 */
>>>>>>> Table directive to angular 2
=======
/* 357 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 359 */
>>>>>>> adding storage policy list - angular 2
=======
/* 361 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(14)('toPrimitive')
	  , proto        = Date.prototype;

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	if(!(TO_PRIMITIVE in proto))__webpack_require__(30)(proto, TO_PRIMITIVE, __webpack_require__(324));

/***/ },
/* 354 */
=======
	if(!(TO_PRIMITIVE in proto))__webpack_require__(30)(proto, TO_PRIMITIVE, __webpack_require__(318));

/***/ },
/* 348 */
>>>>>>> Table directive to angular 2
=======
	if(!(TO_PRIMITIVE in proto))__webpack_require__(31)(proto, TO_PRIMITIVE, __webpack_require__(328));

/***/ },
/* 358 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	if(!(TO_PRIMITIVE in proto))__webpack_require__(31)(proto, TO_PRIMITIVE, __webpack_require__(330));

/***/ },
/* 360 */
>>>>>>> adding storage policy list - angular 2
=======
	if(!(TO_PRIMITIVE in proto))__webpack_require__(31)(proto, TO_PRIMITIVE, __webpack_require__(332));

/***/ },
/* 362 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(29)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 355 */
=======
/* 349 */
>>>>>>> Table directive to angular 2
=======
/* 359 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 361 */
>>>>>>> adding storage policy list - angular 2
=======
/* 363 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(2);

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.P, 'Function', {bind: __webpack_require__(205)});

/***/ },
/* 356 */
=======
	$export($export.P, 'Function', {bind: __webpack_require__(202)});

/***/ },
/* 350 */
>>>>>>> Table directive to angular 2
=======
	$export($export.P, 'Function', {bind: __webpack_require__(210)});

/***/ },
/* 360 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	$export($export.P, 'Function', {bind: __webpack_require__(211)});

/***/ },
/* 362 */
>>>>>>> adding storage policy list - angular 2
=======
	$export($export.P, 'Function', {bind: __webpack_require__(212)});

/***/ },
/* 364 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(11)
	  , getPrototypeOf = __webpack_require__(40)
	  , HAS_INSTANCE   = __webpack_require__(14)('hasInstance')
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 357 */
=======
/* 351 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(17).f
	  , createDesc = __webpack_require__(52)
=======
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(17).f
	  , createDesc = __webpack_require__(54)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 363 */
=======
/* 365 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(17).f
	  , createDesc = __webpack_require__(55)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
>>>>>>> adding storage policy list - angular 2
	  , has        = __webpack_require__(26)
=======
	  , has        = __webpack_require__(27)
>>>>>>> organizationlist to angular 2
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(20) && dP(FProto, NAME, {
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 358 */
=======
/* 352 */
>>>>>>> Table directive to angular 2
=======
/* 362 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 364 */
>>>>>>> adding storage policy list - angular 2
=======
/* 366 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , log1p   = __webpack_require__(216)
=======
	  , log1p   = __webpack_require__(213)
>>>>>>> Table directive to angular 2
=======
	  , log1p   = __webpack_require__(221)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , log1p   = __webpack_require__(222)
>>>>>>> adding storage policy list - angular 2
=======
	  , log1p   = __webpack_require__(223)
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 359 */
=======
/* 353 */
>>>>>>> Table directive to angular 2
=======
/* 363 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 365 */
>>>>>>> adding storage policy list - angular 2
=======
/* 367 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(2)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 360 */
=======
/* 354 */
>>>>>>> Table directive to angular 2
=======
/* 364 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 366 */
>>>>>>> adding storage policy list - angular 2
=======
/* 368 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(2)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 361 */
=======
/* 355 */
>>>>>>> Table directive to angular 2
=======
/* 365 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 367 */
>>>>>>> adding storage policy list - angular 2
=======
/* 369 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , sign    = __webpack_require__(147);
=======
	  , sign    = __webpack_require__(146);
>>>>>>> Table directive to angular 2
=======
	  , sign    = __webpack_require__(150);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , sign    = __webpack_require__(151);
>>>>>>> organizationlist to angular 2

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 362 */
=======
/* 356 */
>>>>>>> Table directive to angular 2
=======
/* 366 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 368 */
>>>>>>> adding storage policy list - angular 2
=======
/* 370 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(2);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 363 */
=======
/* 357 */
>>>>>>> Table directive to angular 2
=======
/* 367 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 369 */
>>>>>>> adding storage policy list - angular 2
=======
/* 371 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(2)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 364 */
=======
/* 358 */
>>>>>>> Table directive to angular 2
=======
/* 368 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 370 */
>>>>>>> adding storage policy list - angular 2
=======
/* 372 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , $expm1  = __webpack_require__(146);
=======
	  , $expm1  = __webpack_require__(145);
>>>>>>> Table directive to angular 2
=======
	  , $expm1  = __webpack_require__(149);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , $expm1  = __webpack_require__(150);
>>>>>>> organizationlist to angular 2

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 365 */
=======
/* 359 */
>>>>>>> Table directive to angular 2
=======
/* 369 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 371 */
>>>>>>> adding storage policy list - angular 2
=======
/* 373 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , sign      = __webpack_require__(147)
=======
	  , sign      = __webpack_require__(146)
>>>>>>> Table directive to angular 2
=======
	  , sign      = __webpack_require__(150)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , sign      = __webpack_require__(151)
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 366 */
=======
/* 360 */
>>>>>>> Table directive to angular 2
=======
/* 370 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 372 */
>>>>>>> adding storage policy list - angular 2
=======
/* 374 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(2)
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 367 */
=======
/* 361 */
>>>>>>> Table directive to angular 2
=======
/* 371 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 373 */
>>>>>>> adding storage policy list - angular 2
=======
/* 375 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(2)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(10)(function(){
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 368 */
=======
/* 362 */
>>>>>>> Table directive to angular 2
=======
/* 372 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 374 */
>>>>>>> adding storage policy list - angular 2
=======
/* 376 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(2);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 369 */
=======
/* 363 */
>>>>>>> Table directive to angular 2
=======
/* 373 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 375 */
>>>>>>> adding storage policy list - angular 2
=======
/* 377 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(2);

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.S, 'Math', {log1p: __webpack_require__(216)});

/***/ },
/* 370 */
=======
	$export($export.S, 'Math', {log1p: __webpack_require__(213)});

/***/ },
/* 364 */
>>>>>>> Table directive to angular 2
=======
	$export($export.S, 'Math', {log1p: __webpack_require__(221)});

/***/ },
/* 374 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	$export($export.S, 'Math', {log1p: __webpack_require__(222)});

/***/ },
/* 376 */
>>>>>>> adding storage policy list - angular 2
=======
	$export($export.S, 'Math', {log1p: __webpack_require__(223)});

/***/ },
/* 378 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(2);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 371 */
=======
/* 365 */
>>>>>>> Table directive to angular 2
=======
/* 375 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 377 */
>>>>>>> adding storage policy list - angular 2
=======
/* 379 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(2);

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.S, 'Math', {sign: __webpack_require__(147)});

/***/ },
/* 372 */
=======
	$export($export.S, 'Math', {sign: __webpack_require__(146)});

/***/ },
/* 366 */
>>>>>>> Table directive to angular 2
=======
	$export($export.S, 'Math', {sign: __webpack_require__(150)});

/***/ },
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
/* 376 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 378 */
>>>>>>> adding storage policy list - angular 2
=======
	$export($export.S, 'Math', {sign: __webpack_require__(151)});

/***/ },
/* 380 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , expm1   = __webpack_require__(146)
=======
	  , expm1   = __webpack_require__(145)
>>>>>>> Table directive to angular 2
=======
	  , expm1   = __webpack_require__(149)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , expm1   = __webpack_require__(150)
>>>>>>> organizationlist to angular 2
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(10)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 373 */
=======
/* 367 */
>>>>>>> Table directive to angular 2
=======
/* 377 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 379 */
>>>>>>> adding storage policy list - angular 2
=======
/* 381 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , expm1   = __webpack_require__(146)
=======
	  , expm1   = __webpack_require__(145)
>>>>>>> Table directive to angular 2
=======
	  , expm1   = __webpack_require__(149)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , expm1   = __webpack_require__(150)
>>>>>>> organizationlist to angular 2
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 374 */
=======
/* 368 */
>>>>>>> Table directive to angular 2
=======
/* 378 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 380 */
>>>>>>> adding storage policy list - angular 2
=======
/* 382 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(2);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 375 */
=======
/* 369 */
>>>>>>> Table directive to angular 2
=======
/* 379 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 381 */
>>>>>>> adding storage policy list - angular 2
=======
/* 383 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(12)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , has               = __webpack_require__(26)
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , cof               = __webpack_require__(58)
	  , inheritIfRequired = __webpack_require__(140)
	  , toPrimitive       = __webpack_require__(54)
	  , fails             = __webpack_require__(10)
	  , gOPN              = __webpack_require__(61).f
	  , gOPD              = __webpack_require__(45).f
	  , dP                = __webpack_require__(17).f
	  , $trim             = __webpack_require__(103).trim
=======
	  , cof               = __webpack_require__(57)
	  , inheritIfRequired = __webpack_require__(139)
	  , toPrimitive       = __webpack_require__(52)
=======
	  , cof               = __webpack_require__(61)
	  , inheritIfRequired = __webpack_require__(143)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , toPrimitive       = __webpack_require__(56)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
=======
	  , has               = __webpack_require__(27)
	  , cof               = __webpack_require__(62)
	  , inheritIfRequired = __webpack_require__(144)
>>>>>>> organizationlist to angular 2
	  , toPrimitive       = __webpack_require__(57)
>>>>>>> adding storage policy list - angular 2
	  , fails             = __webpack_require__(10)
	  , gOPN              = __webpack_require__(65).f
	  , gOPD              = __webpack_require__(49).f
	  , dP                = __webpack_require__(17).f
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , $trim             = __webpack_require__(101).trim
>>>>>>> Table directive to angular 2
=======
	  , $trim             = __webpack_require__(108).trim
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , $trim             = __webpack_require__(109).trim
>>>>>>> adding storage policy list - angular 2
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , BROKEN_COF        = cof(__webpack_require__(60)(proto)) == NUMBER
=======
	  , BROKEN_COF        = cof(__webpack_require__(59)(proto)) == NUMBER
>>>>>>> Table directive to angular 2
=======
	  , BROKEN_COF        = cof(__webpack_require__(63)(proto)) == NUMBER
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , BROKEN_COF        = cof(__webpack_require__(64)(proto)) == NUMBER
>>>>>>> organizationlist to angular 2
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
	  for(var keys = __webpack_require__(20) ? gOPN(Base) : (
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
	  __webpack_require__(29)(global, NUMBER, $Number);
	}

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 376 */
=======
/* 370 */
>>>>>>> Table directive to angular 2
=======
/* 380 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 382 */
>>>>>>> adding storage policy list - angular 2
=======
/* 384 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(2);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 377 */
=======
/* 371 */
>>>>>>> Table directive to angular 2
=======
/* 381 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 383 */
>>>>>>> adding storage policy list - angular 2
=======
/* 385 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(2)
	  , _isFinite = __webpack_require__(12).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 378 */
=======
/* 372 */
>>>>>>> Table directive to angular 2
=======
/* 382 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 384 */
>>>>>>> adding storage policy list - angular 2
=======
/* 386 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(2);

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.S, 'Number', {isInteger: __webpack_require__(212)});

/***/ },
/* 379 */
=======
	$export($export.S, 'Number', {isInteger: __webpack_require__(209)});

/***/ },
/* 373 */
>>>>>>> Table directive to angular 2
=======
	$export($export.S, 'Number', {isInteger: __webpack_require__(217)});

/***/ },
/* 383 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	$export($export.S, 'Number', {isInteger: __webpack_require__(218)});

/***/ },
/* 385 */
>>>>>>> adding storage policy list - angular 2
=======
	$export($export.S, 'Number', {isInteger: __webpack_require__(219)});

/***/ },
/* 387 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(2);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 380 */
=======
/* 374 */
>>>>>>> Table directive to angular 2
=======
/* 384 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 386 */
>>>>>>> adding storage policy list - angular 2
=======
/* 388 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , isInteger = __webpack_require__(212)
=======
	  , isInteger = __webpack_require__(209)
>>>>>>> Table directive to angular 2
=======
	  , isInteger = __webpack_require__(217)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , isInteger = __webpack_require__(218)
>>>>>>> adding storage policy list - angular 2
=======
	  , isInteger = __webpack_require__(219)
>>>>>>> organizationlist to angular 2
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 381 */
=======
/* 375 */
>>>>>>> Table directive to angular 2
=======
/* 385 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 387 */
>>>>>>> adding storage policy list - angular 2
=======
/* 389 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(2);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 382 */
=======
/* 376 */
>>>>>>> Table directive to angular 2
=======
/* 386 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 388 */
>>>>>>> adding storage policy list - angular 2
=======
/* 390 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(2);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(2)
	  , $parseFloat = __webpack_require__(221);
=======
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(2)
	  , $parseFloat = __webpack_require__(218);
>>>>>>> Table directive to angular 2
=======
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(2)
	  , $parseFloat = __webpack_require__(226);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(2)
	  , $parseFloat = __webpack_require__(227);
>>>>>>> adding storage policy list - angular 2
=======
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(2)
	  , $parseFloat = __webpack_require__(228);
>>>>>>> organizationlist to angular 2
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(2)
	  , $parseInt = __webpack_require__(222);
=======
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(2)
	  , $parseInt = __webpack_require__(219);
>>>>>>> Table directive to angular 2
=======
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(2)
	  , $parseInt = __webpack_require__(227);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(2)
	  , $parseInt = __webpack_require__(228);
>>>>>>> adding storage policy list - angular 2
=======
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(2)
	  , $parseInt = __webpack_require__(229);
>>>>>>> organizationlist to angular 2
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 385 */
=======
/* 379 */
>>>>>>> Table directive to angular 2
=======
/* 389 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 391 */
>>>>>>> adding storage policy list - angular 2
=======
/* 393 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(2)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , toInteger    = __webpack_require__(53)
	  , aNumberValue = __webpack_require__(202)
	  , repeat       = __webpack_require__(226)
=======
	  , toInteger    = __webpack_require__(51)
	  , aNumberValue = __webpack_require__(199)
	  , repeat       = __webpack_require__(223)
>>>>>>> Table directive to angular 2
=======
	  , toInteger    = __webpack_require__(55)
	  , aNumberValue = __webpack_require__(207)
	  , repeat       = __webpack_require__(231)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , toInteger    = __webpack_require__(56)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
	  , aNumberValue = __webpack_require__(208)
	  , repeat       = __webpack_require__(232)
>>>>>>> adding storage policy list - angular 2
=======
	  , aNumberValue = __webpack_require__(209)
	  , repeat       = __webpack_require__(233)
>>>>>>> organizationlist to angular 2
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
	) || !__webpack_require__(10)(function(){
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 386 */
=======
/* 380 */
>>>>>>> Table directive to angular 2
=======
/* 390 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 392 */
>>>>>>> adding storage policy list - angular 2
=======
/* 394 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(2)
	  , $fails       = __webpack_require__(10)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , aNumberValue = __webpack_require__(202)
=======
	  , aNumberValue = __webpack_require__(199)
>>>>>>> Table directive to angular 2
=======
	  , aNumberValue = __webpack_require__(207)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , aNumberValue = __webpack_require__(208)
>>>>>>> adding storage policy list - angular 2
=======
	  , aNumberValue = __webpack_require__(209)
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 387 */
=======
/* 381 */
>>>>>>> Table directive to angular 2
=======
/* 391 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 393 */
>>>>>>> adding storage policy list - angular 2
=======
/* 395 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(2);

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(217)});

/***/ },
/* 388 */
=======
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(214)});

/***/ },
/* 382 */
>>>>>>> Table directive to angular 2
=======
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(222)});

/***/ },
/* 392 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(223)});

/***/ },
/* 394 */
>>>>>>> adding storage policy list - angular 2
=======
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(224)});

/***/ },
/* 396 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(2)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.S, 'Object', {create: __webpack_require__(60)});

/***/ },
/* 389 */
=======
	$export($export.S, 'Object', {create: __webpack_require__(59)});

/***/ },
/* 383 */
>>>>>>> Table directive to angular 2
=======
	$export($export.S, 'Object', {create: __webpack_require__(63)});

/***/ },
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
/* 393 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 395 */
>>>>>>> adding storage policy list - angular 2
=======
	$export($export.S, 'Object', {create: __webpack_require__(64)});

/***/ },
/* 397 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(2);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperties: __webpack_require__(218)});

/***/ },
/* 390 */
=======
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperties: __webpack_require__(215)});

/***/ },
/* 384 */
>>>>>>> Table directive to angular 2
=======
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperties: __webpack_require__(223)});

/***/ },
/* 394 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperties: __webpack_require__(224)});

/***/ },
/* 396 */
>>>>>>> adding storage policy list - angular 2
=======
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperties: __webpack_require__(225)});

/***/ },
/* 398 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(2);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperty: __webpack_require__(17).f});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 391 */
=======
/* 385 */
>>>>>>> Table directive to angular 2
=======
/* 395 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 397 */
>>>>>>> adding storage policy list - angular 2
=======
/* 399 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(11)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , meta     = __webpack_require__(51).onFreeze;
=======
	  , meta     = __webpack_require__(53).onFreeze;
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , meta     = __webpack_require__(54).onFreeze;
>>>>>>> adding storage policy list - angular 2

	__webpack_require__(41)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 392 */
=======
/* 386 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(33)
	  , $getOwnPropertyDescriptor = __webpack_require__(45).f;
=======
/* 396 */
=======
/* 398 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(34)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , $getOwnPropertyDescriptor = __webpack_require__(46).f;
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , $getOwnPropertyDescriptor = __webpack_require__(48).f;
>>>>>>> adding storage policy list - angular 2
=======
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(35)
	  , $getOwnPropertyDescriptor = __webpack_require__(49).f;
>>>>>>> organizationlist to angular 2

	__webpack_require__(41)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(38)('getOwnPropertyNames', function(){
	  return __webpack_require__(219).f;
	});

/***/ },
/* 394 */
=======
/* 387 */
=======
/* 397 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 399 */
>>>>>>> adding storage policy list - angular 2
=======
/* 401 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(41)('getOwnPropertyNames', function(){
	  return __webpack_require__(226).f;
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 388 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(31)
=======
/* 398 */
=======
/* 400 */
>>>>>>> adding storage policy list - angular 2
=======
/* 402 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(32)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
>>>>>>> converting volumelist, servicelist ctrl to ang2
	  , $getPrototypeOf = __webpack_require__(37);
=======
	  , $getPrototypeOf = __webpack_require__(38);
>>>>>>> adding storage policy list - angular 2
=======
	  , $getPrototypeOf = __webpack_require__(40);
>>>>>>> organizationlist to angular 2

	__webpack_require__(41)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 395 */
=======
/* 389 */
>>>>>>> Table directive to angular 2
=======
/* 399 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 401 */
>>>>>>> adding storage policy list - angular 2
=======
/* 403 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(11);

	__webpack_require__(41)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 396 */
=======
/* 390 */
>>>>>>> Table directive to angular 2
=======
/* 400 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 402 */
>>>>>>> adding storage policy list - angular 2
=======
/* 404 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(11);

	__webpack_require__(41)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 397 */
=======
/* 391 */
>>>>>>> Table directive to angular 2
=======
/* 401 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 403 */
>>>>>>> adding storage policy list - angular 2
=======
/* 405 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(11);

	__webpack_require__(41)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 398 */
=======
/* 392 */
>>>>>>> Table directive to angular 2
=======
/* 402 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 404 */
>>>>>>> adding storage policy list - angular 2
=======
/* 406 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(2);
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.S, 'Object', {is: __webpack_require__(223)});

/***/ },
/* 399 */
=======
	$export($export.S, 'Object', {is: __webpack_require__(220)});

/***/ },
/* 393 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(31)
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , $keys    = __webpack_require__(73);
=======
	  , $keys    = __webpack_require__(69);
>>>>>>> Table directive to angular 2
=======
	$export($export.S, 'Object', {is: __webpack_require__(228)});
=======
	$export($export.S, 'Object', {is: __webpack_require__(229)});
>>>>>>> adding storage policy list - angular 2
=======
	$export($export.S, 'Object', {is: __webpack_require__(230)});
>>>>>>> organizationlist to angular 2

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(32)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , $keys    = __webpack_require__(72);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , $keys    = __webpack_require__(73);
>>>>>>> adding storage policy list - angular 2

	__webpack_require__(41)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 400 */
=======
/* 394 */
>>>>>>> Table directive to angular 2
=======
/* 404 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 406 */
>>>>>>> adding storage policy list - angular 2
=======
/* 408 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(11)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , meta     = __webpack_require__(51).onFreeze;
=======
	  , meta     = __webpack_require__(53).onFreeze;
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , meta     = __webpack_require__(54).onFreeze;
>>>>>>> adding storage policy list - angular 2

	__webpack_require__(41)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 401 */
=======
/* 395 */
>>>>>>> Table directive to angular 2
=======
/* 405 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 407 */
>>>>>>> adding storage policy list - angular 2
=======
/* 409 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(11)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , meta     = __webpack_require__(51).onFreeze;
=======
	  , meta     = __webpack_require__(53).onFreeze;
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , meta     = __webpack_require__(54).onFreeze;
>>>>>>> adding storage policy list - angular 2

	__webpack_require__(41)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 402 */
=======
/* 396 */
>>>>>>> Table directive to angular 2
=======
/* 406 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 408 */
>>>>>>> adding storage policy list - angular 2
=======
/* 410 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(2);
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(148).set});

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(2)
	  , $parseFloat = __webpack_require__(221);
=======
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(147).set});
=======
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(151).set});
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(152).set});
>>>>>>> organizationlist to angular 2

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , $parseFloat = __webpack_require__(218);
>>>>>>> Table directive to angular 2
=======
	  , $parseFloat = __webpack_require__(226);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , $parseFloat = __webpack_require__(227);
>>>>>>> adding storage policy list - angular 2
=======
	  , $parseFloat = __webpack_require__(228);
>>>>>>> organizationlist to angular 2
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(2)
	  , $parseInt = __webpack_require__(222);
=======
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(2)
	  , $parseInt = __webpack_require__(219);
>>>>>>> Table directive to angular 2
=======
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(2)
	  , $parseInt = __webpack_require__(227);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(2)
	  , $parseInt = __webpack_require__(228);
>>>>>>> adding storage policy list - angular 2
=======
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(2)
	  , $parseInt = __webpack_require__(229);
>>>>>>> organizationlist to angular 2
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 405 */
=======
/* 399 */
>>>>>>> Table directive to angular 2
=======
/* 409 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 411 */
>>>>>>> adding storage policy list - angular 2
=======
/* 413 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(2)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , aFunction = __webpack_require__(50)
=======
	  , aFunction = __webpack_require__(48)
>>>>>>> Table directive to angular 2
=======
	  , aFunction = __webpack_require__(52)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , aFunction = __webpack_require__(53)
>>>>>>> adding storage policy list - angular 2
	  , anObject  = __webpack_require__(8)
	  , rApply    = (__webpack_require__(12).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(10)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 406 */
=======
/* 400 */
>>>>>>> Table directive to angular 2
=======
/* 410 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 412 */
>>>>>>> adding storage policy list - angular 2
=======
/* 414 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , create     = __webpack_require__(60)
	  , aFunction  = __webpack_require__(50)
	  , anObject   = __webpack_require__(8)
	  , isObject   = __webpack_require__(11)
	  , fails      = __webpack_require__(10)
	  , bind       = __webpack_require__(205)
=======
	  , create     = __webpack_require__(59)
	  , aFunction  = __webpack_require__(48)
	  , anObject   = __webpack_require__(8)
	  , isObject   = __webpack_require__(11)
	  , fails      = __webpack_require__(10)
	  , bind       = __webpack_require__(202)
>>>>>>> Table directive to angular 2
=======
	  , create     = __webpack_require__(63)
=======
	  , create     = __webpack_require__(64)
>>>>>>> organizationlist to angular 2
	  , aFunction  = __webpack_require__(53)
	  , anObject   = __webpack_require__(8)
	  , isObject   = __webpack_require__(11)
	  , fails      = __webpack_require__(10)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
	  , bind       = __webpack_require__(210)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , bind       = __webpack_require__(211)
>>>>>>> adding storage policy list - angular 2
=======
	  , bind       = __webpack_require__(212)
>>>>>>> organizationlist to angular 2
	  , rConstruct = (__webpack_require__(12).Reflect || {}).construct;

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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 407 */
=======
/* 401 */
>>>>>>> Table directive to angular 2
=======
/* 411 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 413 */
>>>>>>> adding storage policy list - angular 2
=======
/* 415 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(17)
	  , $export     = __webpack_require__(2)
	  , anObject    = __webpack_require__(8)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , toPrimitive = __webpack_require__(54);
=======
	  , toPrimitive = __webpack_require__(52);
>>>>>>> Table directive to angular 2
=======
	  , toPrimitive = __webpack_require__(56);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , toPrimitive = __webpack_require__(57);
>>>>>>> adding storage policy list - angular 2

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(10)(function(){
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 408 */
=======
/* 402 */
>>>>>>> Table directive to angular 2
=======
/* 412 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 414 */
>>>>>>> adding storage policy list - angular 2
=======
/* 416 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , gOPD     = __webpack_require__(45).f
=======
	  , gOPD     = __webpack_require__(44).f
>>>>>>> Table directive to angular 2
=======
	  , gOPD     = __webpack_require__(46).f
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , gOPD     = __webpack_require__(48).f
>>>>>>> adding storage policy list - angular 2
=======
	  , gOPD     = __webpack_require__(49).f
>>>>>>> organizationlist to angular 2
	  , anObject = __webpack_require__(8);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 409 */
=======
/* 403 */
>>>>>>> Table directive to angular 2
=======
/* 413 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 415 */
>>>>>>> adding storage policy list - angular 2
=======
/* 417 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(2)
	  , anObject = __webpack_require__(8);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	__webpack_require__(214)(Enumerate, 'Object', function(){
=======
	__webpack_require__(211)(Enumerate, 'Object', function(){
>>>>>>> Table directive to angular 2
=======
	__webpack_require__(219)(Enumerate, 'Object', function(){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	__webpack_require__(220)(Enumerate, 'Object', function(){
>>>>>>> adding storage policy list - angular 2
=======
	__webpack_require__(221)(Enumerate, 'Object', function(){
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 410 */
=======
/* 404 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(45)
=======
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(46)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(48)
>>>>>>> adding storage policy list - angular 2
=======
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(49)
>>>>>>> organizationlist to angular 2
	  , $export  = __webpack_require__(2)
	  , anObject = __webpack_require__(8);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 411 */
=======
/* 405 */
>>>>>>> Table directive to angular 2
=======
/* 415 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 417 */
>>>>>>> adding storage policy list - angular 2
=======
/* 419 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , getProto = __webpack_require__(37)
=======
	  , getProto = __webpack_require__(36)
>>>>>>> Table directive to angular 2
=======
	  , getProto = __webpack_require__(37)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , getProto = __webpack_require__(38)
>>>>>>> adding storage policy list - angular 2
=======
	  , getProto = __webpack_require__(40)
>>>>>>> organizationlist to angular 2
	  , anObject = __webpack_require__(8);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 412 */
=======
/* 406 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(45)
=======
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(46)
>>>>>>> converting volumelist, servicelist ctrl to ang2
	  , getPrototypeOf = __webpack_require__(37)
=======
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(48)
	  , getPrototypeOf = __webpack_require__(38)
>>>>>>> adding storage policy list - angular 2
	  , has            = __webpack_require__(26)
=======
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(49)
	  , getPrototypeOf = __webpack_require__(40)
	  , has            = __webpack_require__(27)
>>>>>>> organizationlist to angular 2
	  , $export        = __webpack_require__(2)
	  , isObject       = __webpack_require__(11)
	  , anObject       = __webpack_require__(8);

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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 413 */
=======
/* 407 */
>>>>>>> Table directive to angular 2
=======
/* 417 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 419 */
>>>>>>> adding storage policy list - angular 2
=======
/* 421 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(2);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 414 */
=======
/* 408 */
>>>>>>> Table directive to angular 2
=======
/* 418 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 420 */
>>>>>>> adding storage policy list - angular 2
=======
/* 422 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(2)
	  , anObject      = __webpack_require__(8)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 415 */
=======
/* 409 */
>>>>>>> Table directive to angular 2
=======
/* 419 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 421 */
>>>>>>> adding storage policy list - angular 2
=======
/* 423 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(2);

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(328)});

/***/ },
/* 416 */
=======
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(322)});

/***/ },
/* 410 */
>>>>>>> Table directive to angular 2
=======
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(332)});

/***/ },
/* 420 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(334)});

/***/ },
/* 422 */
>>>>>>> adding storage policy list - angular 2
=======
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(336)});

/***/ },
/* 424 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(2)
	  , anObject           = __webpack_require__(8)
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 417 */
=======
/* 411 */
>>>>>>> Table directive to angular 2
=======
/* 421 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 423 */
>>>>>>> adding storage policy list - angular 2
=======
/* 425 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , setProto = __webpack_require__(148);
=======
	  , setProto = __webpack_require__(147);
>>>>>>> Table directive to angular 2
=======
	  , setProto = __webpack_require__(151);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , setProto = __webpack_require__(152);
>>>>>>> organizationlist to angular 2

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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 418 */
=======
/* 412 */
>>>>>>> Table directive to angular 2
=======
/* 422 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 424 */
>>>>>>> adding storage policy list - angular 2
=======
/* 426 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(17)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , gOPD           = __webpack_require__(45)
	  , getPrototypeOf = __webpack_require__(37)
	  , has            = __webpack_require__(26)
	  , $export        = __webpack_require__(2)
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , createDesc     = __webpack_require__(52)
=======
	  , createDesc     = __webpack_require__(50)
>>>>>>> Table directive to angular 2
=======
	  , gOPD           = __webpack_require__(46)
	  , getPrototypeOf = __webpack_require__(37)
	  , has            = __webpack_require__(26)
	  , $export        = __webpack_require__(2)
	  , createDesc     = __webpack_require__(54)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , gOPD           = __webpack_require__(48)
	  , getPrototypeOf = __webpack_require__(38)
	  , has            = __webpack_require__(26)
=======
	  , gOPD           = __webpack_require__(49)
	  , getPrototypeOf = __webpack_require__(40)
	  , has            = __webpack_require__(27)
>>>>>>> organizationlist to angular 2
	  , $export        = __webpack_require__(2)
	  , createDesc     = __webpack_require__(55)
>>>>>>> adding storage policy list - angular 2
	  , anObject       = __webpack_require__(8)
	  , isObject       = __webpack_require__(11);

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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(12)
	  , inheritIfRequired = __webpack_require__(140)
	  , dP                = __webpack_require__(17).f
	  , gOPN              = __webpack_require__(61).f
	  , isRegExp          = __webpack_require__(143)
	  , $flags            = __webpack_require__(139)
=======
/* 413 */
=======
/* 423 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 425 */
>>>>>>> adding storage policy list - angular 2
=======
/* 427 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(12)
	  , inheritIfRequired = __webpack_require__(144)
	  , dP                = __webpack_require__(17).f
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , gOPN              = __webpack_require__(60).f
	  , isRegExp          = __webpack_require__(142)
	  , $flags            = __webpack_require__(138)
>>>>>>> Table directive to angular 2
=======
	  , gOPN              = __webpack_require__(64).f
	  , isRegExp          = __webpack_require__(146)
	  , $flags            = __webpack_require__(142)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , gOPN              = __webpack_require__(65).f
	  , isRegExp          = __webpack_require__(147)
	  , $flags            = __webpack_require__(143)
>>>>>>> organizationlist to angular 2
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(20) && (!CORRECT_NEW || __webpack_require__(10)(function(){
	  re2[__webpack_require__(14)('match')] = false;
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
	  __webpack_require__(29)(global, 'RegExp', $RegExp);
	}

<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	__webpack_require__(85)('RegExp');

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(229);
	var anObject    = __webpack_require__(8)
	  , $flags      = __webpack_require__(139)
=======
	__webpack_require__(80)('RegExp');
=======
	__webpack_require__(85)('RegExp');
>>>>>>> converting volumelist, servicelist ctrl to ang2

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(236);
	var anObject    = __webpack_require__(8)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , $flags      = __webpack_require__(138)
>>>>>>> Table directive to angular 2
=======
	  , $flags      = __webpack_require__(142)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , $flags      = __webpack_require__(143)
>>>>>>> organizationlist to angular 2
	  , DESCRIPTORS = __webpack_require__(20)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(29)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(10)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 421 */
=======
/* 415 */
>>>>>>> Table directive to angular 2
=======
/* 425 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 427 */
>>>>>>> adding storage policy list - angular 2
=======
/* 429 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(30)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 422 */
=======
/* 416 */
>>>>>>> Table directive to angular 2
=======
/* 426 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 428 */
>>>>>>> adding storage policy list - angular 2
=======
/* 430 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(30)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 423 */
=======
/* 417 */
>>>>>>> Table directive to angular 2
=======
/* 427 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 429 */
>>>>>>> adding storage policy list - angular 2
=======
/* 431 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(30)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 424 */
=======
/* 418 */
>>>>>>> Table directive to angular 2
=======
/* 428 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 430 */
>>>>>>> adding storage policy list - angular 2
=======
/* 432 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(30)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 425 */
=======
/* 419 */
>>>>>>> Table directive to angular 2
=======
/* 429 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 431 */
>>>>>>> adding storage policy list - angular 2
=======
/* 433 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , $at     = __webpack_require__(225)(false);
=======
	  , $at     = __webpack_require__(222)(false);
>>>>>>> Table directive to angular 2
=======
	  , $at     = __webpack_require__(230)(false);
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , $at     = __webpack_require__(231)(false);
>>>>>>> adding storage policy list - angular 2
=======
	  , $at     = __webpack_require__(232)(false);
>>>>>>> organizationlist to angular 2
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 426 */
=======
/* 420 */
>>>>>>> Table directive to angular 2
=======
/* 430 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 432 */
>>>>>>> adding storage policy list - angular 2
=======
/* 434 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(2)
	  , toLength  = __webpack_require__(24)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , context   = __webpack_require__(150)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(138)(ENDS_WITH), 'String', {
=======
	  , context   = __webpack_require__(149)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(137)(ENDS_WITH), 'String', {
>>>>>>> Table directive to angular 2
=======
	  , context   = __webpack_require__(153)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(141)(ENDS_WITH), 'String', {
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , context   = __webpack_require__(154)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(142)(ENDS_WITH), 'String', {
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 427 */
=======
/* 421 */
>>>>>>> Table directive to angular 2
=======
/* 431 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 433 */
>>>>>>> adding storage policy list - angular 2
=======
/* 435 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(30)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 428 */
=======
/* 422 */
>>>>>>> Table directive to angular 2
=======
/* 432 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 434 */
>>>>>>> adding storage policy list - angular 2
=======
/* 436 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(30)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 429 */
=======
/* 423 */
>>>>>>> Table directive to angular 2
=======
/* 433 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 435 */
>>>>>>> adding storage policy list - angular 2
=======
/* 437 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(30)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(2)
	  , toIndex        = __webpack_require__(62)
=======
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(2)
	  , toIndex        = __webpack_require__(61)
>>>>>>> Table directive to angular 2
=======
/* 434 */
=======
/* 436 */
>>>>>>> adding storage policy list - angular 2
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(2)
	  , toIndex        = __webpack_require__(65)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(2)
	  , toIndex        = __webpack_require__(66)
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 431 */
=======
/* 425 */
>>>>>>> Table directive to angular 2
=======
/* 435 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 437 */
>>>>>>> adding storage policy list - angular 2
=======
/* 439 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(2)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , context  = __webpack_require__(150)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(138)(INCLUDES), 'String', {
=======
	  , context  = __webpack_require__(149)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(137)(INCLUDES), 'String', {
>>>>>>> Table directive to angular 2
=======
	  , context  = __webpack_require__(153)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(141)(INCLUDES), 'String', {
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , context  = __webpack_require__(154)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(142)(INCLUDES), 'String', {
>>>>>>> organizationlist to angular 2
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 432 */
=======
/* 426 */
>>>>>>> Table directive to angular 2
=======
/* 436 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 438 */
>>>>>>> adding storage policy list - angular 2
=======
/* 440 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(30)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 433 */
=======
/* 427 */
>>>>>>> Table directive to angular 2
=======
/* 437 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 439 */
>>>>>>> adding storage policy list - angular 2
=======
/* 441 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(30)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 434 */
=======
/* 428 */
>>>>>>> Table directive to angular 2
=======
/* 438 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 440 */
>>>>>>> adding storage policy list - angular 2
=======
/* 442 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(2)
	  , toIObject = __webpack_require__(35)
	  , toLength  = __webpack_require__(24);

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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 435 */
=======
/* 429 */
>>>>>>> Table directive to angular 2
=======
/* 439 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 441 */
>>>>>>> adding storage policy list - angular 2
=======
/* 443 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(2);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  repeat: __webpack_require__(226)
	});

/***/ },
/* 436 */
=======
	  repeat: __webpack_require__(223)
	});

/***/ },
/* 430 */
>>>>>>> Table directive to angular 2
=======
	  repeat: __webpack_require__(231)
	});

/***/ },
/* 440 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  repeat: __webpack_require__(232)
	});

/***/ },
/* 442 */
>>>>>>> adding storage policy list - angular 2
=======
	  repeat: __webpack_require__(233)
	});

/***/ },
/* 444 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(30)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 437 */
=======
/* 431 */
>>>>>>> Table directive to angular 2
=======
/* 441 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 443 */
>>>>>>> adding storage policy list - angular 2
=======
/* 445 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(2)
	  , toLength    = __webpack_require__(24)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , context     = __webpack_require__(150)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(138)(STARTS_WITH), 'String', {
=======
	  , context     = __webpack_require__(149)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(137)(STARTS_WITH), 'String', {
>>>>>>> Table directive to angular 2
=======
	  , context     = __webpack_require__(153)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(141)(STARTS_WITH), 'String', {
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , context     = __webpack_require__(154)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(142)(STARTS_WITH), 'String', {
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 438 */
=======
/* 432 */
>>>>>>> Table directive to angular 2
=======
/* 442 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 444 */
>>>>>>> adding storage policy list - angular 2
=======
/* 446 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(30)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 439 */
=======
/* 433 */
>>>>>>> Table directive to angular 2
=======
/* 443 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 445 */
>>>>>>> adding storage policy list - angular 2
=======
/* 447 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(30)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 440 */
=======
/* 434 */
>>>>>>> Table directive to angular 2
=======
/* 444 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 446 */
>>>>>>> adding storage policy list - angular 2
=======
/* 448 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(30)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 441 */
=======
/* 435 */
>>>>>>> Table directive to angular 2
=======
/* 445 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 447 */
>>>>>>> adding storage policy list - angular 2
=======
/* 449 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	__webpack_require__(103)('trim', function($trim){
=======
	__webpack_require__(101)('trim', function($trim){
>>>>>>> Table directive to angular 2
=======
	__webpack_require__(108)('trim', function($trim){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	__webpack_require__(109)('trim', function($trim){
>>>>>>> adding storage policy list - angular 2
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 442 */
=======
/* 436 */
>>>>>>> Table directive to angular 2
=======
/* 446 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 448 */
>>>>>>> adding storage policy list - angular 2
=======
/* 450 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(2)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	  , $typed       = __webpack_require__(104)
	  , buffer       = __webpack_require__(152)
	  , anObject     = __webpack_require__(8)
	  , toIndex      = __webpack_require__(62)
	  , toLength     = __webpack_require__(24)
	  , isObject     = __webpack_require__(11)
	  , ArrayBuffer  = __webpack_require__(12).ArrayBuffer
	  , speciesConstructor = __webpack_require__(224)
=======
	  , $typed       = __webpack_require__(102)
	  , buffer       = __webpack_require__(151)
=======
	  , $typed       = __webpack_require__(109)
=======
	  , $typed       = __webpack_require__(110)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
>>>>>>> adding storage policy list - angular 2
	  , buffer       = __webpack_require__(155)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , buffer       = __webpack_require__(156)
>>>>>>> organizationlist to angular 2
	  , anObject     = __webpack_require__(8)
	  , toIndex      = __webpack_require__(66)
	  , toLength     = __webpack_require__(24)
	  , isObject     = __webpack_require__(11)
	  , ArrayBuffer  = __webpack_require__(12).ArrayBuffer
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , speciesConstructor = __webpack_require__(221)
>>>>>>> Table directive to angular 2
=======
	  , speciesConstructor = __webpack_require__(229)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , speciesConstructor = __webpack_require__(230)
>>>>>>> adding storage policy list - angular 2
=======
	  , speciesConstructor = __webpack_require__(231)
>>>>>>> organizationlist to angular 2
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

	$export($export.P + $export.U + $export.F * __webpack_require__(10)(function(){
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

<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	__webpack_require__(85)(ARRAY_BUFFER);

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(2);
	$export($export.G + $export.W + $export.F * !__webpack_require__(104).ABV, {
	  DataView: __webpack_require__(152).DataView
	});

/***/ },
/* 444 */
=======
	__webpack_require__(80)(ARRAY_BUFFER);
=======
	__webpack_require__(85)(ARRAY_BUFFER);
>>>>>>> converting volumelist, servicelist ctrl to ang2

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(2);
	$export($export.G + $export.W + $export.F * !__webpack_require__(110).ABV, {
	  DataView: __webpack_require__(156).DataView
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
/* 438 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Float32', 4, function(init){
=======
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47)('Float32', 4, function(init){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Float32', 4, function(init){
>>>>>>> adding storage policy list - angular 2
=======
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Float32', 4, function(init){
>>>>>>> organizationlist to angular 2
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 445 */
=======
/* 439 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Float64', 8, function(init){
=======
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47)('Float64', 8, function(init){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Float64', 8, function(init){
>>>>>>> adding storage policy list - angular 2
=======
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Float64', 8, function(init){
>>>>>>> organizationlist to angular 2
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 446 */
=======
/* 440 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Int16', 2, function(init){
=======
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47)('Int16', 2, function(init){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Int16', 2, function(init){
>>>>>>> adding storage policy list - angular 2
=======
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Int16', 2, function(init){
>>>>>>> organizationlist to angular 2
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 447 */
=======
/* 441 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Int32', 4, function(init){
=======
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47)('Int32', 4, function(init){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Int32', 4, function(init){
>>>>>>> adding storage policy list - angular 2
=======
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Int32', 4, function(init){
>>>>>>> organizationlist to angular 2
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 448 */
=======
/* 442 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Int8', 1, function(init){
=======
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47)('Int8', 1, function(init){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Int8', 1, function(init){
>>>>>>> adding storage policy list - angular 2
=======
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Int8', 1, function(init){
>>>>>>> organizationlist to angular 2
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 449 */
=======
/* 443 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Uint16', 2, function(init){
=======
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47)('Uint16', 2, function(init){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Uint16', 2, function(init){
>>>>>>> adding storage policy list - angular 2
=======
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Uint16', 2, function(init){
>>>>>>> organizationlist to angular 2
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 450 */
=======
/* 444 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Uint32', 4, function(init){
=======
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47)('Uint32', 4, function(init){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Uint32', 4, function(init){
>>>>>>> adding storage policy list - angular 2
=======
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Uint32', 4, function(init){
>>>>>>> organizationlist to angular 2
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 451 */
=======
/* 445 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Uint8', 1, function(init){
=======
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47)('Uint8', 1, function(init){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Uint8', 1, function(init){
>>>>>>> adding storage policy list - angular 2
=======
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Uint8', 1, function(init){
>>>>>>> organizationlist to angular 2
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 452 */
=======
/* 446 */
>>>>>>> Table directive to angular 2
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Uint8', 1, function(init){
=======
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47)('Uint8', 1, function(init){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49)('Uint8', 1, function(init){
>>>>>>> adding storage policy list - angular 2
=======
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('Uint8', 1, function(init){
>>>>>>> organizationlist to angular 2
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(207);

	// 23.4 WeakSet Objects
	__webpack_require__(97)('WeakSet', function(get){
=======
/* 447 */
=======
/* 457 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 459 */
>>>>>>> adding storage policy list - angular 2
=======
/* 461 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(214);

	// 23.4 WeakSet Objects
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	__webpack_require__(95)('WeakSet', function(get){
>>>>>>> Table directive to angular 2
=======
	__webpack_require__(102)('WeakSet', function(get){
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	__webpack_require__(103)('WeakSet', function(get){
>>>>>>> adding storage policy list - angular 2
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(44)
=======
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(43)
>>>>>>> Table directive to angular 2
=======
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(45)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(47)
>>>>>>> adding storage policy list - angular 2
=======
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(48)
>>>>>>> organizationlist to angular 2
	  , anObject                  = __webpack_require__(8)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(44)
=======
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(43)
>>>>>>> Table directive to angular 2
=======
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(45)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(47)
>>>>>>> adding storage policy list - angular 2
=======
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(48)
>>>>>>> organizationlist to angular 2
	  , anObject               = __webpack_require__(8)
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(234)
	  , from                    = __webpack_require__(321)
	  , metadata                = __webpack_require__(44)
	  , anObject                = __webpack_require__(8)
	  , getPrototypeOf          = __webpack_require__(37)
=======
/* 450 */
=======
/* 460 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 462 */
>>>>>>> adding storage policy list - angular 2
=======
/* 464 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(241)
	  , from                    = __webpack_require__(329)
	  , metadata                = __webpack_require__(48)
	  , anObject                = __webpack_require__(8)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , getPrototypeOf          = __webpack_require__(36)
>>>>>>> Table directive to angular 2
=======
	  , getPrototypeOf          = __webpack_require__(37)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , getPrototypeOf          = __webpack_require__(38)
>>>>>>> adding storage policy list - angular 2
=======
	  , getPrototypeOf          = __webpack_require__(40)
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(44)
	  , anObject               = __webpack_require__(8)
	  , getPrototypeOf         = __webpack_require__(37)
=======
/* 451 */
=======
/* 461 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 463 */
>>>>>>> adding storage policy list - angular 2
=======
/* 465 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(48)
	  , anObject               = __webpack_require__(8)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , getPrototypeOf         = __webpack_require__(36)
>>>>>>> Table directive to angular 2
=======
	  , getPrototypeOf         = __webpack_require__(37)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , getPrototypeOf         = __webpack_require__(38)
>>>>>>> adding storage policy list - angular 2
=======
	  , getPrototypeOf         = __webpack_require__(40)
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(44)
=======
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(43)
>>>>>>> Table directive to angular 2
=======
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(45)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(47)
>>>>>>> adding storage policy list - angular 2
=======
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(48)
>>>>>>> organizationlist to angular 2
	  , anObject                = __webpack_require__(8)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(44)
=======
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(43)
>>>>>>> Table directive to angular 2
=======
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(45)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(47)
>>>>>>> adding storage policy list - angular 2
=======
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(48)
>>>>>>> organizationlist to angular 2
	  , anObject               = __webpack_require__(8)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(44)
	  , anObject               = __webpack_require__(8)
	  , getPrototypeOf         = __webpack_require__(37)
=======
/* 454 */
=======
/* 464 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 466 */
>>>>>>> adding storage policy list - angular 2
=======
/* 468 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(48)
	  , anObject               = __webpack_require__(8)
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , getPrototypeOf         = __webpack_require__(36)
>>>>>>> Table directive to angular 2
=======
	  , getPrototypeOf         = __webpack_require__(37)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , getPrototypeOf         = __webpack_require__(38)
>>>>>>> adding storage policy list - angular 2
=======
	  , getPrototypeOf         = __webpack_require__(40)
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(44)
=======
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(43)
>>>>>>> Table directive to angular 2
=======
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(45)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(47)
>>>>>>> adding storage policy list - angular 2
=======
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(48)
>>>>>>> organizationlist to angular 2
	  , anObject               = __webpack_require__(8)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(44)
	  , anObject                  = __webpack_require__(8)
	  , aFunction                 = __webpack_require__(50)
=======
/* 456 */
=======
/* 466 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 468 */
>>>>>>> adding storage policy list - angular 2
=======
/* 470 */
>>>>>>> organizationlist to angular 2
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(48)
	  , anObject                  = __webpack_require__(8)
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
	  , aFunction                 = __webpack_require__(48)
>>>>>>> Table directive to angular 2
=======
	  , aFunction                 = __webpack_require__(52)
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	  , aFunction                 = __webpack_require__(53)
>>>>>>> adding storage policy list - angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 463 */
=======
/* 457 */
>>>>>>> Table directive to angular 2
=======
/* 467 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 469 */
>>>>>>> adding storage policy list - angular 2
=======
/* 471 */
>>>>>>> organizationlist to angular 2
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
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929

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
/* 464 */
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
=======
>>>>>>> Table directive to angular 2

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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
=======
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
>>>>>>> Table directive to angular 2
/* 465 */,
/* 466 */,
/* 467 */,
=======
>>>>>>> converting volumelist, servicelist ctrl to ang2
/* 468 */,
/* 469 */,
=======
>>>>>>> adding storage policy list - angular 2
/* 470 */,
/* 471 */,
=======
>>>>>>> organizationlist to angular 2
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
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */
=======
/* 732 */
>>>>>>> Table directive to angular 2
=======
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
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
/* 742 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 742 */,
/* 743 */,
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
/* 744 */
>>>>>>> adding storage policy list - angular 2
=======
/* 744 */,
/* 745 */
>>>>>>> organizationlist to angular 2
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
<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
/* 736 */
=======
/* 733 */
>>>>>>> Table directive to angular 2
=======
/* 743 */
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
/* 745 */
>>>>>>> adding storage policy list - angular 2
=======
/* 746 */
>>>>>>> organizationlist to angular 2
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

<<<<<<< f82eb548d8608d2f69b7337ad3ed28644a3fbd0e
<<<<<<< cd3977d9f9009e2cdbfd5b833ada19d6ed1fee40
<<<<<<< e835aaa173f4b1c8dc589209ad8e2f0097a61830
<<<<<<< 145a88c49ed1fc3a982d61cd09a96d3bf9f4a929
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(464)))
=======
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(234)))
>>>>>>> Table directive to angular 2
=======
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(242)))
>>>>>>> converting volumelist, servicelist ctrl to ang2
=======
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(243)))
>>>>>>> adding storage policy list - angular 2
=======
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(244)))
>>>>>>> organizationlist to angular 2

/***/ }
/******/ ]);
//# sourceMappingURL=polyfills.map