/*! For license information please see plone-volto-components-manage-Widgets-DatetimeWidget.9183d748.js.LICENSE.txt */
(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["plone-volto-components-manage-Widgets-DatetimeWidget"],{"./node_modules/moment-timezone/data/packed/latest.json":function(module){eval('module.exports = JSON.parse("{\\"version\\":\\"2020a\\",\\"zones\\":[\\"Etc/UTC|UTC|0|0||\\",\\"CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|\\"],\\"links\\":[\\"Etc/UCT|UCT\\",\\"Etc/UTC|Etc/Universal\\",\\"Etc/UTC|UTC\\",\\"Etc/UTC|Universal\\"],\\"countries\\":[]}");\n\n//# sourceURL=webpack:///./node_modules/moment-timezone/data/packed/latest.json?')},"./node_modules/moment-timezone/node_modules/moment/locale sync recursive [/\\\\](de(\\.js)?|nl(\\.js)?|ro(\\.js)?|ja(\\.js)?|pt(\\.js)?|pt-br(\\.js)?|es(\\.js)?|it(\\.js)?)$":function(module,exports,__webpack_require__){eval('var map = {\n\t"./de": "./node_modules/moment-timezone/node_modules/moment/locale/de.js",\n\t"./de.js": "./node_modules/moment-timezone/node_modules/moment/locale/de.js",\n\t"./es": "./node_modules/moment-timezone/node_modules/moment/locale/es.js",\n\t"./es.js": "./node_modules/moment-timezone/node_modules/moment/locale/es.js",\n\t"./it": "./node_modules/moment-timezone/node_modules/moment/locale/it.js",\n\t"./it.js": "./node_modules/moment-timezone/node_modules/moment/locale/it.js",\n\t"./ja": "./node_modules/moment-timezone/node_modules/moment/locale/ja.js",\n\t"./ja.js": "./node_modules/moment-timezone/node_modules/moment/locale/ja.js",\n\t"./nl": "./node_modules/moment-timezone/node_modules/moment/locale/nl.js",\n\t"./nl.js": "./node_modules/moment-timezone/node_modules/moment/locale/nl.js",\n\t"./pt": "./node_modules/moment-timezone/node_modules/moment/locale/pt.js",\n\t"./pt-br": "./node_modules/moment-timezone/node_modules/moment/locale/pt-br.js",\n\t"./pt-br.js": "./node_modules/moment-timezone/node_modules/moment/locale/pt-br.js",\n\t"./pt.js": "./node_modules/moment-timezone/node_modules/moment/locale/pt.js",\n\t"./ro": "./node_modules/moment-timezone/node_modules/moment/locale/ro.js",\n\t"./ro.js": "./node_modules/moment-timezone/node_modules/moment/locale/ro.js"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error("Cannot find module \'" + req + "\'");\n\t\te.code = \'MODULE_NOT_FOUND\';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = "./node_modules/moment-timezone/node_modules/moment/locale sync recursive [/\\\\\\\\](de(\\\\.js)?|nl(\\\\.js)?|ro(\\\\.js)?|ja(\\\\.js)?|pt(\\\\.js)?|pt-br(\\\\.js)?|es(\\\\.js)?|it(\\\\.js)?)$";\n\n//# sourceURL=webpack:///./node_modules/moment-timezone/node_modules/moment/locale_sync_%5B/\\\\%5D(de(\\.js)?')},"./src/components/manage/Widgets/DatetimeWidget.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dates */ "./node_modules/react-dates/index.js");\n/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var rc_time_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rc-time-picker */ "./node_modules/rc-time-picker/es/index.js");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/components */ "./src/components/index.js");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../config */ "./src/config/index.js");\n/* harmony import */ var _plone_volto_icons_left_key_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @plone/volto/icons/left-key.svg */ "./src/icons/left-key.svg");\n/* harmony import */ var _plone_volto_icons_left_key_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_left_key_svg__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _plone_volto_icons_right_key_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @plone/volto/icons/right-key.svg */ "./src/icons/right-key.svg");\n/* harmony import */ var _plone_volto_icons_right_key_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_right_key_svg__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./src/icons/clear.svg");\n/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rc-time-picker/assets/index.css */ "./node_modules/rc-time-picker/assets/index.css");\n/* harmony import */ var rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-dates/initialize */ "./node_modules/react-dates/initialize.js");\n/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-dates/lib/css/_datepicker.css */ "./node_modules/react-dates/lib/css/_datepicker.css");\n/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_23__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = "/home/tibi/work/volto/src/components/manage/Widgets/DatetimeWidget.jsx";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/**\n * DatetimeWidget component.\n * @module components/manage/Widgets/DatetimeWidget\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_10__["defineMessages"])({\n  date: {\n    "id": "Date",\n    "defaultMessage": "Date"\n  },\n  time: {\n    "id": "Time",\n    "defaultMessage": "Time"\n  }\n});\n\nvar PrevIcon = function PrevIcon() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {\n    style: {\n      color: \'#000\',\n      left: \'22px\',\n      padding: \'5px\',\n      position: \'absolute\',\n      top: \'15px\'\n    } // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex\n    ,\n    tabIndex: "0",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_16__["Icon"], {\n    name: _plone_volto_icons_left_key_svg__WEBPACK_IMPORTED_MODULE_18___default.a,\n    size: "30px",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }));\n};\n\nvar NextIcon = function NextIcon() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {\n    style: {\n      color: \'#000\',\n      right: \'22px\',\n      padding: \'5px\',\n      position: \'absolute\',\n      top: \'15px\'\n    } // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex\n    ,\n    tabIndex: "0",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_16__["Icon"], {\n    name: _plone_volto_icons_right_key_svg__WEBPACK_IMPORTED_MODULE_19___default.a,\n    size: "30px",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }));\n};\n\nvar defaultTimeDateOnly = {\n  hour: 12,\n  minute: 0,\n  second: 0\n};\n/**\n * DatetimeWidget component class\n * @class DatetimeWidget\n * @extends Component\n */\n\nvar DatetimeWidget = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DatetimeWidget, _Component);\n\n  var _super = _createSuper(DatetimeWidget);\n\n  /**\n   * Constructor\n   * @method constructor\n   * @param {Object} props Component properties\n   * @constructs DatetimeWidget\n   */\n  function DatetimeWidget(props) {\n    var _datetime;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DatetimeWidget);\n\n    _this = _super.call(this, props); //  Used to set a server timezone or UTC as default\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onDateChange", function (date) {\n      if (date) _this.setState(function (prevState) {\n        return {\n          datetime: prevState.datetime ? prevState.datetime.set(_objectSpread({\n            year: date.year(),\n            month: date.month(),\n            date: date.date()\n          }, _this.state.dateOnly ? defaultTimeDateOnly : {})) : moment_timezone__WEBPACK_IMPORTED_MODULE_11___default.a.tz(date.toISOString(), _this.state.timezone).set(_objectSpread({\n            year: date.year(),\n            month: date.month(),\n            date: date.date()\n          }, _this.state.dateOnly ? defaultTimeDateOnly : {})),\n          isDefault: false\n        };\n      }, function () {\n        return _this.onDateTimeChange();\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onTimeChange", function (time) {\n      _this.setState(function (prevState) {\n        return {\n          datetime: prevState.datetime ? prevState.datetime.set({\n            hours: time.hours(),\n            minutes: time.minutes(),\n            seconds: 0\n          }) : moment_timezone__WEBPACK_IMPORTED_MODULE_11___default.a.tz(time.toISOString(), _this.state.timezone).set({\n            hours: time.hours(),\n            minutes: time.minutes(),\n            seconds: 0\n          }),\n          isDefault: false\n        };\n      }, function () {\n        return _this.onDateTimeChange();\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onDateTimeChange", function () {\n      var dateValue = _this.state.dateOnly ? _this.state.datetime.format(\'YYYY-MM-DD\') : _this.state.datetime.toISOString();\n\n      _this.props.onChange(_this.props.id, dateValue);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onResetDates", function () {\n      _this.setState(function (prevState) {\n        return {\n          datetime: null,\n          isDefault: false\n        };\n      }, _this.props.onChange(_this.props.id, null));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onFocusChange", function (_ref) {\n      var focused = _ref.focused;\n      return _this.setState({\n        focused: focused\n      });\n    });\n\n    moment_timezone__WEBPACK_IMPORTED_MODULE_11___default.a.defineLocale(_this.props.intl.locale, moment__WEBPACK_IMPORTED_MODULE_12___default.a.localeData(_this.props.intl.locale)._config); // copy locale to moment-timezone\n\n    var timezone = _config__WEBPACK_IMPORTED_MODULE_17__["settings"].timezone || \'UTC\';\n    var datetime = null;\n\n    if (_this.props.value) {\n      //  Since we set a default server timezone (UTC default), moment-timezone will transform\n      //  datetime to that specific timezone\n      datetime = moment_timezone__WEBPACK_IMPORTED_MODULE_11___default.a.tz(_this.props.value, timezone);\n    }\n\n    _this.state = {\n      focused: false,\n      isDefault: ((_datetime = datetime) === null || _datetime === void 0 ? void 0 : _datetime.toISOString()) === moment_timezone__WEBPACK_IMPORTED_MODULE_11___default()().utc().toISOString(),\n      datetime: datetime,\n      timezone: timezone,\n      dateOnly: _this.props.dateOnly || _this.props.widget === \'date\'\n    };\n    return _this;\n  }\n  /**\n   * Update date storage\n   * @method onDateChange\n   * @param {Object} date updated momentjs Object for date\n   * @returns {undefined}\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DatetimeWidget, [{\n    key: "render",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          id = _this$props.id,\n          noPastDates = _this$props.noPastDates,\n          intl = _this$props.intl;\n      var _this$state = this.state,\n          datetime = _this$state.datetime,\n          isDefault = _this$state.isDefault,\n          focused = _this$state.focused;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_16__["FormFieldWrapper"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 197,\n          columnNumber: 7\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {\n        className: "date-time-widget-wrapper",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 198,\n          columnNumber: 9\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()(\'ui input date-input\', {\n          \'default-date\': isDefault\n        }),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 199,\n          columnNumber: 11\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_13__["SingleDatePicker"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        date: datetime,\n        disabled: this.props.isDisabled,\n        onDateChange: this.onDateChange,\n        focused: focused,\n        numberOfMonths: 1\n      }, noPastDates ? {} : {\n        isOutsideRange: function isOutsideRange() {\n          return false;\n        }\n      }, {\n        onFocusChange: this.onFocusChange,\n        noBorder: true,\n        displayFormat: moment_timezone__WEBPACK_IMPORTED_MODULE_11___default.a.localeData(intl.locale).longDateFormat(\'L\'),\n        navPrev: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(PrevIcon, {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 214,\n            columnNumber: 24\n          }\n        }),\n        navNext: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(NextIcon, {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 215,\n            columnNumber: 24\n          }\n        }),\n        id: "".concat(id, "-date"),\n        placeholder: intl.formatMessage(messages.date),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 204,\n          columnNumber: 13\n        }\n      }))), !this.state.dateOnly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()(\'ui input time-input\', {\n          \'default-date\': isDefault\n        }),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 221,\n          columnNumber: 13\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(rc_time_picker__WEBPACK_IMPORTED_MODULE_14__["default"], {\n        disabled: this.props.isDisabled,\n        defaultValue: datetime,\n        value: datetime,\n        onChange: this.onTimeChange,\n        allowEmpty: false,\n        showSecond: false,\n        use12Hours: intl.locale === \'en\',\n        id: "".concat(id, "-time"),\n        format: moment_timezone__WEBPACK_IMPORTED_MODULE_11___default.a.localeData(intl.locale).longDateFormat(\'LT\'),\n        placeholder: intl.formatMessage(messages.time),\n        focusOnOpen: true,\n        placement: "bottomRight",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 226,\n          columnNumber: 15\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {\n        disabled: this.props.isDisabled || !datetime,\n        onClick: function onClick() {\n          return _this2.onResetDates();\n        },\n        className: "item ui noborder button",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 242,\n          columnNumber: 11\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_16__["Icon"], {\n        name: _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_20___default.a,\n        size: "24px",\n        className: "close",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 247,\n          columnNumber: 13\n        }\n      }))));\n    }\n  }]);\n\n  return DatetimeWidget;\n}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);\n/**\n * Property types.\n * @property {Object} propTypes Property types.\n * @static\n */\n\n\nDatetimeWidget.propTypes = {\n  id: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,\n  required: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,\n  error: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string),\n  dateOnly: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,\n  noPastDates: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,\n  value: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,\n  wrapped: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool\n};\n/**\n * Default properties.\n * @property {Object} defaultProps Default properties.\n * @static\n */\n\nDatetimeWidget.defaultProps = {\n  description: null,\n  required: false,\n  error: [],\n  dateOnly: false,\n  noPastDates: false,\n  value: null\n};\n/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_10__["injectIntl"])(DatetimeWidget));\n\n//# sourceURL=webpack:///./src/components/manage/Widgets/DatetimeWidget.jsx?')},3:function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///./util.inspect_(ignored)?")}}]);