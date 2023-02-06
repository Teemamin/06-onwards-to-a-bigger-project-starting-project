"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const { title , image , address , description  } = data;\n        console.log(data);\n        const clinet = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://suri:suri@myfirstcluster.qycng.mongodb.net/meetups?retryWrites=true&w=majority\");\n        const db = clinet.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        clinet.close();\n        res.status(201).json({\n            message: \"meetup inserted successfully\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsVUFBVSxPQUFPQyxLQUFJQyxNQUFNO0lBQzdCLElBQUdELElBQUlFLE1BQU0sS0FBSyxRQUFPO1FBQ3JCLE1BQU1DLE9BQU9ILElBQUlJLElBQUk7UUFDckIsTUFBTSxFQUFDQyxNQUFLLEVBQUNDLE1BQUssRUFBQ0MsUUFBTyxFQUFDQyxZQUFXLEVBQUMsR0FBR0w7UUFDMUNNLFFBQVFDLEdBQUcsQ0FBQ1A7UUFFYixNQUFNUSxTQUFTLE1BQU1iLHdEQUFtQixDQUFDO1FBQ3pDLE1BQU1lLEtBQUtGLE9BQU9FLEVBQUU7UUFDcEIsTUFBTUMsb0JBQW9CRCxHQUFHRSxVQUFVLENBQUM7UUFDeEMsTUFBTUMsU0FBUyxNQUFNRixrQkFBa0JHLFNBQVMsQ0FBQ2Q7UUFDakRNLFFBQVFDLEdBQUcsQ0FBQ007UUFDWkwsT0FBT08sS0FBSztRQUVaakIsSUFBSWtCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBUztRQUE4QjtJQUNoRSxDQUFDO0FBR0w7QUFFQSxpRUFBZXRCLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJyl7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3Qge3RpdGxlLGltYWdlLGFkZHJlc3MsZGVzY3JpcHRpb259ID0gZGF0YVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgICAgY29uc3QgY2xpbmV0ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9zdXJpOnN1cmlAbXlmaXJzdGNsdXN0ZXIucXljbmcubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKVxyXG4gICAgICAgY29uc3QgZGIgPSBjbGluZXQuZGIoKSBcclxuICAgICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXHJcbiAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSlcclxuICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgIGNsaW5ldC5jbG9zZSgpXHJcblxyXG4gICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6ICdtZWV0dXAgaW5zZXJ0ZWQgc3VjY2Vzc2Z1bGx5J30pXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsImNsaW5ldCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();