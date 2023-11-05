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
exports.id = "pages/api/StaticData/GainerStatic";
exports.ids = ["pages/api/StaticData/GainerStatic"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/StaticData/GainerStatic.js":
/*!**********************************************!*\
  !*** ./pages/api/StaticData/GainerStatic.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction getData() {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"Gainers_data.json\");\n    const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath);\n    const data = JSON.parse(fileData);\n    return data;\n}\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        const data = getData();\n        res.status(200).json({\n            message: data\n        });\n    } else if (req.method === \"POST\") {\n        const { title , subtitle , description , image1  } = req.body;\n        const newSupplement = {\n            title,\n            subtitle,\n            description,\n            image1,\n            id: Date.now()\n        };\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"Gainers_data.json\");\n        const data = getData();\n        data.push(newSupplement);\n        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(data));\n        res.status(201).json({\n            message: \"Added\",\n            book: newSupplement\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvU3RhdGljRGF0YS9HYWluZXJTdGF0aWMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUV4QixTQUFTRSxVQUFVO0lBQ2pCLE1BQU1DLFdBQVdGLGdEQUFTLENBQUNJLFFBQVFDLEdBQUcsSUFBSSxRQUFRO0lBQ2xELE1BQU1DLFdBQVdQLHNEQUFlLENBQUNHO0lBQ2pDLE1BQU1NLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0o7SUFDeEIsT0FBT0U7QUFDVDtBQUVBLFNBQVNHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3pCLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU1OLE9BQU9QO1FBQ2JZLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBU1Q7UUFBSztJQUN2QyxPQUFPLElBQUlJLElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ2hDLE1BQU0sRUFBRUksTUFBSyxFQUFFQyxTQUFRLEVBQUVDLFlBQVcsRUFBRUMsT0FBTSxFQUFFLEdBQUdULElBQUlVLElBQUk7UUFDekQsTUFBTUMsZ0JBQWdCO1lBQ3BCTDtZQUNBQztZQUNBQztZQUNBQztZQUNBRyxJQUFJQyxLQUFLQyxHQUFHO1FBQ2Q7UUFFQSxNQUFNeEIsV0FBV0YsZ0RBQVMsQ0FBQ0ksUUFBUUMsR0FBRyxJQUFJLFFBQVE7UUFFbEQsTUFBTUcsT0FBT1A7UUFDYk8sS0FBS21CLElBQUksQ0FBQ0o7UUFDVnhCLHVEQUFnQixDQUFDRyxVQUFVTyxLQUFLb0IsU0FBUyxDQUFDckI7UUFDMUNLLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFTYSxNQUFNUDtRQUFjO0lBQy9ELENBQUM7QUFDSDtBQUVBLGlFQUFlWixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFpbHdpbmQvLi9wYWdlcy9hcGkvU3RhdGljRGF0YS9HYWluZXJTdGF0aWMuanM/MmFkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiZGF0YVwiLCBcIkdhaW5lcnNfZGF0YS5qc29uXCIpO1xyXG4gIGNvbnN0IGZpbGVEYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcclxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmaWxlRGF0YSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgY29uc3QgZGF0YSA9IGdldERhdGEoKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogZGF0YSB9KTtcclxuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBzdWJ0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlMSB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBuZXdTdXBwbGVtZW50ID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgc3VidGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBpbWFnZTEsXHJcbiAgICAgIGlkOiBEYXRlLm5vdygpLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRhdGFcIiwgXCJHYWluZXJzX2RhdGEuanNvblwiKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gZ2V0RGF0YSgpO1xyXG4gICAgZGF0YS5wdXNoKG5ld1N1cHBsZW1lbnQpO1xyXG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIkFkZGVkXCIsIGJvb2s6IG5ld1N1cHBsZW1lbnQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiZ2V0RGF0YSIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlRGF0YSIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZTEiLCJib2R5IiwibmV3U3VwcGxlbWVudCIsImlkIiwiRGF0ZSIsIm5vdyIsInB1c2giLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5IiwiYm9vayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/StaticData/GainerStatic.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/StaticData/GainerStatic.js"));
module.exports = __webpack_exports__;

})();