(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\r\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r\n\t\tsans-serif;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\ncode {\r\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\r\n\t\tmonospace;\r\n}\r\n\r\n.Registration, .Login {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n.fields {\r\n\tmargin: 10px;\r\n}\r\n.buttons button {\r\n\tmargin: 10px;\r\n}\r\n.message {\r\n\tpadding: 5px;\r\n}\r\n.error {\r\n\tborder: solid #ec5555 2px;\r\n}\r\n\r\n.search-block {\r\n\tpadding: 20px 15px 15px;\r\n\tbackground: #f0f0f0;\r\n\twidth: 100%;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n.add-remove p {\r\n\tfont-size: 28px;\r\n\tfont-weight: bold;\r\n\tcolor: #069;\r\n\tcursor: pointer;\r\n}\r\n\r\n.radio-block {\r\n\tmargin-bottom: 25px !important;\r\n}\r\n\r\n.submit-block button {\r\n\tmargin-right: 15px;\r\n}\r\n\r\n.errors {\r\n\tcolor: #a94442;\r\n\tfont-weight: bold;\r\n    font-size: 13px;\r\n    margin-top: 5px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.in-sec {\r\n\tpadding-top: 7px;\r\n}\r\n\r\n.results-wrapper {\r\n\tpadding: 20px 15px 15px;\r\n}\r\n\r\n.article {\r\n\tpadding: 10px;\r\n\tbox-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n.dataTables_filter {\r\n\tfloat: right;\r\n}\r\n\r\n.dataTables_paginate .pagination {\r\n\tfloat: right;\r\n}\r\n\r\n.mg-rt-5 {\r\n\tmargin-right: 8px !important;\r\n    display: inline-block;\r\n}", ""]);



/***/ }),

/***/ "./src/MessageBundle.js":
/*!******************************!*\
  !*** ./src/MessageBundle.js ***!
  \******************************/
/*! exports provided: REGISTRATION_FIELDS, REGISTRATION_MESSAGE, ERROR_IN_REGISTRATION, LOGIN_MESSAGE, ERROR_IN_LOGIN, COMMON_FIELDS, LOGIN_FIELDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_FIELDS", function() { return REGISTRATION_FIELDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_MESSAGE", function() { return REGISTRATION_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_IN_REGISTRATION", function() { return ERROR_IN_REGISTRATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_MESSAGE", function() { return LOGIN_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_IN_LOGIN", function() { return ERROR_IN_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_FIELDS", function() { return COMMON_FIELDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FIELDS", function() { return LOGIN_FIELDS; });
const REGISTRATION_FIELDS = {
  FIRST_NAME: 'First Name',
  LAST_NAME: 'Last Name',
  REGISTER: 'Register',
  CANCEL: 'Cancel',
  REGISTRATION_HEADING: 'Sign Up'
};
const REGISTRATION_MESSAGE = 'Registered Successfully';
const ERROR_IN_REGISTRATION = 'Error in Registration';
const LOGIN_MESSAGE = 'Login Successful';
const ERROR_IN_LOGIN = 'Error in Login';
const COMMON_FIELDS = {
  USER_NAME: 'Username',
  PASSWORD: 'Password'
};
const LOGIN_FIELDS = {
  LOGIN: 'Login',
  LOGIN_HEADING: 'Login'
};

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./src/components/Login.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search */ "./src/components/Search.js");
/* harmony import */ var _Registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Registration */ "./src/components/Registration.js");
var _jsxFileName = "C:\\Users\\svsan\\Documents\\Learnings\\SDM\\SDM_Serler\\Serler_SDM\\src\\components\\App.js";






class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/register",
      component: _Registration__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/login",
      component: _Login__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/search",
      component: _Search__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      from: "/",
      to: "login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _services_LoginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/LoginService */ "./src/services/LoginService.js");
/* harmony import */ var _elements_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/Message */ "./src/elements/Message.js");
/* harmony import */ var _elements_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/Error */ "./src/elements/Error.js");
/* harmony import */ var _MessageBundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MessageBundle */ "./src/MessageBundle.js");
var _jsxFileName = "C:\\Users\\svsan\\Documents\\Learnings\\SDM\\SDM_Serler\\Serler_SDM\\src\\components\\Login.js";






class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleOnChangeUserName = e => {
      this.setState({
        user_name: e.target.value
      });
    };

    this.handleOnChangePassword = e => {
      this.setState({
        password: e.target.value
      });
    };

    this.onSubmit = async e => {
      const data = {
        user_name: this.state.user_name,
        password: this.state.password
      };
      const loginResult = await Object(_services_LoginService__WEBPACK_IMPORTED_MODULE_2__["default"])(data);

      if (loginResult !== 200) {
        this.props.history.push('/search');
        this.setState({
          error: true,
          loginSuccess: false
        });
      } else this.setState({
        loginSuccess: true,
        error: false
      });
    };

    this.state = {
      user_name: '',
      password: '',
      error: false,
      loginSuccess: false
    };
  }

  render() {
    const _this$state = this.state,
          loginSuccess = _this$state.loginSuccess,
          error = _this$state.error;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, _MessageBundle__WEBPACK_IMPORTED_MODULE_5__["LOGIN_FIELDS"].LOGIN_HEADING), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      className: " col-12 col-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fields form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, _MessageBundle__WEBPACK_IMPORTED_MODULE_5__["COMMON_FIELDS"].USER_NAME), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "Username",
      className: "form-control",
      onChange: this.handleOnChangeUserName,
      autoComplete: "Username",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fields form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, _MessageBundle__WEBPACK_IMPORTED_MODULE_5__["COMMON_FIELDS"].PASSWORD), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      name: "Password",
      className: "form-control",
      onChange: this.handleOnChangePassword,
      autoComplete: "Password",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "buttons form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: this.onSubmit,
      className: "btn btn-primary ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, _MessageBundle__WEBPACK_IMPORTED_MODULE_5__["LOGIN_FIELDS"].LOGIN), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/register",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, _MessageBundle__WEBPACK_IMPORTED_MODULE_5__["REGISTRATION_FIELDS"].REGISTER)))), loginSuccess && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Message__WEBPACK_IMPORTED_MODULE_3__["default"], {
      message: _MessageBundle__WEBPACK_IMPORTED_MODULE_5__["LOGIN_MESSAGE"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Error__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: _MessageBundle__WEBPACK_IMPORTED_MODULE_5__["ERROR_IN_LOGIN"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/components/Registration.js":
/*!****************************************!*\
  !*** ./src/components/Registration.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Registration; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_RegistrationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/RegistrationService */ "./src/services/RegistrationService.js");
/* harmony import */ var _elements_Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/Message */ "./src/elements/Message.js");
/* harmony import */ var _elements_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/Error */ "./src/elements/Error.js");
/* harmony import */ var _MessageBundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MessageBundle */ "./src/MessageBundle.js");
var _jsxFileName = "C:\\Users\\svsan\\Documents\\Learnings\\SDM\\SDM_Serler\\Serler_SDM\\src\\components\\Registration.js";







class Registration extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleOnChangeFirstName = e => {
      this.setState({
        first_name: e.target.value
      });
    };

    this.handleOnChangeLastName = e => {
      this.setState({
        last_name: e.target.value
      });
    };

    this.handleOnChangeUserName = e => {
      this.setState({
        user_name: e.target.value
      });
    };

    this.handleOnChangePassword = e => {
      this.setState({
        password: e.target.value
      });
    };

    this.handleOnBlur = async e => {
      this.setState({
        user_name: e.target.value
      });
      const data = {
        user_name: this.state.user_name
      };
      const isUsernameTaken = await Object(_services_RegistrationService__WEBPACK_IMPORTED_MODULE_3__["UsernameValidation"])(data);
      isUsernameTaken === 204 ? this.setState({
        user_name_taken: true
      }) : this.setState({
        user_name_taken: false
      });
    };

    this.onSubmit = async e => {
      e.preventDefault();
      const data = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        user_name: this.state.user_name,
        password: this.state.password
      };
      const registerStatus = await Object(_services_RegistrationService__WEBPACK_IMPORTED_MODULE_3__["UserRegistration"])(data);

      if (registerStatus === 200) {
        this.setState({
          first_name: '',
          last_name: '',
          user_name: '',
          password: '',
          register: true,
          error: false
        });
      } else this.setState({
        error: true,
        register: false
      });
    };

    this.state = {
      first_name: '',
      last_name: '',
      user_name: '',
      password: '',
      register: false,
      error: false
    };
  }

  render() {
    const _this$state = this.state,
          register = _this$state.register,
          error = _this$state.error,
          user_name_taken = _this$state.user_name_taken;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Registration",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, _MessageBundle__WEBPACK_IMPORTED_MODULE_6__["REGISTRATION_FIELDS"].REGISTRATION_HEADING), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      className: " col-12 col-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fields form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, _MessageBundle__WEBPACK_IMPORTED_MODULE_6__["REGISTRATION_FIELDS"].FIRST_NAME), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      value: this.state.first_name,
      className: "form-control",
      name: "FirstName",
      onChange: this.handleOnChangeFirstName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fields form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, _MessageBundle__WEBPACK_IMPORTED_MODULE_6__["REGISTRATION_FIELDS"].LAST_NAME), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      value: this.state.last_name,
      className: "form-control",
      name: "LastName",
      onChange: this.handleOnChangeLastName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fields form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, _MessageBundle__WEBPACK_IMPORTED_MODULE_6__["COMMON_FIELDS"].USER_NAME), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        'error': user_name_taken,
        "form-control": true
      }),
      value: this.state.user_name,
      name: "Username",
      onBlur: this.handleOnBlur,
      onChange: this.handleOnChangeUserName,
      autoComplete: "Username",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fields form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, _MessageBundle__WEBPACK_IMPORTED_MODULE_6__["COMMON_FIELDS"].PASSWORD), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      value: this.state.password,
      className: "form-control",
      name: "Password",
      onChange: this.handleOnChangePassword,
      autoComplete: "password",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "buttons form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      disabled: user_name_taken,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, _MessageBundle__WEBPACK_IMPORTED_MODULE_6__["REGISTRATION_FIELDS"].REGISTER), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, _MessageBundle__WEBPACK_IMPORTED_MODULE_6__["REGISTRATION_FIELDS"].CANCEL)))), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Error__WEBPACK_IMPORTED_MODULE_5__["default"], {
      message: _MessageBundle__WEBPACK_IMPORTED_MODULE_6__["ERROR_IN_REGISTRATION"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }), register && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Message__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: _MessageBundle__WEBPACK_IMPORTED_MODULE_6__["REGISTRATION_MESSAGE"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/components/Search.js":
/*!**********************************!*\
  !*** ./src/components/Search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var C_Users_svsan_Documents_Learnings_SDM_SDM_Serler_Serler_SDM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");

var _jsxFileName = "C:\\Users\\svsan\\Documents\\Learnings\\SDM\\SDM_Serler\\Serler_SDM\\src\\components\\Search.js";





class Search extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.fromYear = 0;
    this.state = {
      form: {
        searchTerm: "",
        category: "",
        composites: [],
        fromYear: "",
        toYear: "",
        interval: ""
      },
      articles: {
        columns: [{
          label: "Title",
          field: "title",
          sort: "asc"
        }, {
          label: "Year",
          field: "year",
          sort: "asc"
        }, {
          label: "Author",
          field: "author",
          sort: "asc"
        }, {
          label: "Volume",
          field: "volume"
        }, {
          label: "Month",
          field: "month"
        }, {
          label: "Number",
          field: "number"
        }, {
          label: "SE Method",
          field: "seMethod"
        }, {
          label: "External Link",
          field: "url"
        }, {
          label: "SE Methodology",
          field: "seMethodology"
        }, {
          label: "Research Question",
          field: "researchQuestion"
        }, {
          label: "Research Result",
          field: "researchResult"
        }],
        rows: []
      }
    };
  }

  getSearchResults(values) {
    console.info(values);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api/books', values).then(res => {
      console.log();
      let data = [];
      res.data.map(article => {
        data.push({
          title: article.title,
          year: article.year,
          author: article.author,
          volume: article.volume,
          month: article.month,
          number: article.number,
          seMethod: article.seMethod,
          url: article.url,
          seMethodology: article.seMethodology,
          researchQuestion: article.researchQuestion,
          researchResult: article.researchResult
        });
      });
      this.setState(prevState => ({
        articles: Object(C_Users_svsan_Documents_Learnings_SDM_SDM_Serler_Serler_SDM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.articles, {
          // keep all other key-value pairs
          rows: data // update the value of specific key

        })
      }));
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
      initialValues: this.state.form,
      validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
        searchTerm: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Required'),
        category: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required"),
        composites: yup__WEBPACK_IMPORTED_MODULE_3__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
          searchTerm: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Required'),
          category: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required"),
          operator: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required")
        })),
        fromYear: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().matches(/^[0-9]{4}$/, 'Must be a valid year'),
        toYear: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().matches(/^[0-9]{4}$/, 'Must be a valid year').when("fromYear", (fromYear, schema) => {
          this.fromYear = +fromYear;
          return schema;
        }).test("till-year", "Should not be less than From Year", value => {
          if (!value) {
            return true;
          }

          return +value >= this.fromYear;
        })
      }),
      onSubmit: values => {
        this.getSearchResults(values);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, ({
      values,
      isSubmitting
    }) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
      name: "composites",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, ({
      push,
      remove
    }) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Advanced Search"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "search-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "Enter keywords, select fields, and select operators")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-xs-12 col-md-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "searchTerm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, ({
      field,
      form
    }) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", Object.assign({}, field, {
      type: "text",
      placeholder: "Search Term",
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "searchTerm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, msg => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "errors",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, msg)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "media",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "media-left media-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "in-sec",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "In")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "category",
      component: "select",
      placeholder: "And",
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "Please select Search Field"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "keywords",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, "Keywords"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, "Document Title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "author",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, "Authors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "seMethod",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "SE Method"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "seMethodology",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "Methodlogy"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "researchQuestion",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "Research Question"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "researchResult",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, "Research Result")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, msg => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "errors",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, msg)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "media-right media-top add-remove",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "button",
      className: "btn btn-success",
      onClick: () => push({
        searchTerm: "",
        operator: "",
        category: ""
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "+"))))), values.composites.map((searchTerm, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-xs-12 col-md-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "composites[".concat(index, "].operator"),
      component: "select",
      placeholder: "And",
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "Please select filter type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "and",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, "And"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "or",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, "Or"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "not",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, "Not"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "composites[".concat(index, "].operator"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, msg => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "errors",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, msg))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "composites[".concat(index, "].searchTerm"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, ({
      field,
      form
    }) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", Object.assign({}, field, {
      type: "text",
      placeholder: "Search Term",
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "composites[".concat(index, "].searchTerm"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, msg => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "errors",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, msg)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "media",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "media-left media-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "in-sec",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, "In")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "composites[".concat(index, "].category"),
      component: "select",
      placeholder: "And",
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, "Please select Search Field"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "keywords",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, "Keywords"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, "Document Title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "author",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, "Authors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "seMethod",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, "SE Method"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "seMethodology",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, "Methodlogy"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "researchQuestion",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, "Research Question"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "researchResult",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, "Research Result")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "composites[".concat(index, "].category"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, msg => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "errors",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, msg)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "media-right media-top add-remove",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "button",
      className: "btn btn-success",
      onClick: () => push({
        searchTerm: "",
        operator: "",
        category: ""
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, "+")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "media-right media-top add-remove",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn btn-default",
      onClick: () => remove(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, "\xD7")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-xs-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, "Filter Year")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group col-xs-12 col-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "fromYear",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, ({
      field,
      form
    }) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", Object.assign({}, field, {
      type: "number",
      placeholder: "From",
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "fromYear",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, msg => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "errors",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, JSON.stringify(msg)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group col-xs-12 col-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "toYear",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, ({
      field,
      form
    }) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", Object.assign({}, field, {
      type: "number",
      placeholder: "Till",
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "toYear",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, msg => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "errors",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }, msg))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-xs-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "interval",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289
      },
      __self: this
    }, ({
      field,
      form
    }) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", Object.assign({}, field, {
      type: "radio",
      name: "interval",
      className: "mg-rt-5",
      placeholder: "Till",
      value: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    })), "Last Five Years articles"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-xs-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "interval",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, ({
      field,
      form
    }) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", Object.assign({}, field, {
      type: "radio",
      name: "interval",
      className: "mg-rt-5",
      placeholder: "Till",
      value: "10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    })), "Last Ten Years articles")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }, "Search"))))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "results-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-xs-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBDataTable"], {
      striped: true,
      bordered: true,
      hover: true,
      noBottomColumns: true,
      responsive: true,
      sortable: true,
      noRecordsFoundLabel: "No articles found",
      data: this.state.articles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }))))));
  }

}

/***/ }),

/***/ "./src/elements/Error.js":
/*!*******************************!*\
  !*** ./src/elements/Error.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\svsan\\Documents\\Learnings\\SDM\\SDM_Serler\\Serler_SDM\\src\\elements\\Error.js";


const Error = ({
  message
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "alert alert-danger",
  role: "alert",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "glyphicon glyphicon-thumbs-down",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "message",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, message)));

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./src/elements/Message.js":
/*!*********************************!*\
  !*** ./src/elements/Message.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\svsan\\Documents\\Learnings\\SDM\\SDM_Serler\\Serler_SDM\\src\\elements\\Message.js";


const Message = ({
  message
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "alert alert-success",
  role: "alert",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "glyphicon glyphicon-thumbs-up",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "message",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, message)));

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\svsan\\Documents\\Learnings\\SDM\\SDM_Serler\\Serler_SDM\\src\\index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/services/LoginService.js":
/*!**************************************!*\
  !*** ./src/services/LoginService.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const LoginService = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://localhost:3009/registration/login', data).then(res => res.status);

/* harmony default export */ __webpack_exports__["default"] = (LoginService);

/***/ }),

/***/ "./src/services/RegistrationService.js":
/*!*********************************************!*\
  !*** ./src/services/RegistrationService.js ***!
  \*********************************************/
/*! exports provided: UserRegistration, UsernameValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistration", function() { return UserRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidation", function() { return UsernameValidation; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "./node_modules/bcryptjs/dist/bcrypt.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);


const UserRegistration = data => {
  const password = data.password;
  const salt = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.genSaltSync(10);
  const hash = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hashSync(password, salt);
  data["password"] = hash;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://localhost:3009/registration/register', data).then(res => res.status);
};
const UsernameValidation = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://localhost:3009/registration/validateUsername', data).then(exist => exist.status);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\svsan\Documents\Learnings\SDM\SDM_Serler\Serler_SDM\src\index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map