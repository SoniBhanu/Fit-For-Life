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
exports.id = "pages/api/StaticData/WellnessStatic";
exports.ids = ["pages/api/StaticData/WellnessStatic"];
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

/***/ "(api)/./pages/api/StaticData/WellnessStatic.js":
/*!************************************************!*\
  !*** ./pages/api/StaticData/WellnessStatic.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction getData() {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"Wellness_data.json\");\n    const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath);\n    const data = JSON.parse(fileData);\n    return data;\n}\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        const data = getData();\n        res.status(200).json({\n            message: data\n        });\n    } else if (req.method === \"POST\") {\n        const { title , subtitle , description , image1  } = req.body;\n        const newSupplement = {\n            title,\n            subtitle,\n            description,\n            image1,\n            id: Date.now()\n        };\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"Wellness_data.json\");\n        const data = getData();\n        data.push(newSupplement);\n        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(data));\n        res.status(201).json({\n            message: \"Added\",\n            book: newSupplement\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvU3RhdGljRGF0YS9XZWxsbmVzc1N0YXRpYy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQjtBQUNJO0FBRXhCLFNBQVNFLFVBQVU7SUFDakIsTUFBTUMsV0FBV0YsZ0RBQVMsQ0FBQ0ksUUFBUUMsR0FBRyxJQUFJLFFBQVE7SUFDbEQsTUFBTUMsV0FBV1Asc0RBQWUsQ0FBQ0c7SUFDakMsTUFBTU0sT0FBT0MsS0FBS0MsS0FBSyxDQUFDSjtJQUN4QixPQUFPRTtBQUNUO0FBRUEsU0FBU0csUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDekIsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTU4sT0FBT1A7UUFDYlksSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTVDtRQUFLO0lBQ3ZDLE9BQU8sSUFBSUksSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDaEMsTUFBTSxFQUFFSSxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsWUFBVyxFQUFFQyxPQUFNLEVBQUUsR0FBR1QsSUFBSVUsSUFBSTtRQUN6RCxNQUFNQyxnQkFBZ0I7WUFDcEJMO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FHLElBQUlDLEtBQUtDLEdBQUc7UUFDZDtRQUVBLE1BQU14QixXQUFXRixnREFBUyxDQUFDSSxRQUFRQyxHQUFHLElBQUksUUFBUTtRQUVsRCxNQUFNRyxPQUFPUDtRQUNiTyxLQUFLbUIsSUFBSSxDQUFDSjtRQUNWeEIsdURBQWdCLENBQUNHLFVBQVVPLEtBQUtvQixTQUFTLENBQUNyQjtRQUMxQ0ssSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQVNhLE1BQU1QO1FBQWM7SUFDL0QsQ0FBQztBQUNIO0FBRUEsaUVBQWVaLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZC8uL3BhZ2VzL2FwaS9TdGF0aWNEYXRhL1dlbGxuZXNzU3RhdGljLmpzPzZiOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRhdGFcIiwgXCJXZWxsbmVzc19kYXRhLmpzb25cIik7XHJcbiAgY29uc3QgZmlsZURhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xyXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZpbGVEYXRhKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICBjb25zdCBkYXRhID0gZ2V0RGF0YSgpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBkYXRhIH0pO1xyXG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIHN1YnRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UxIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IG5ld1N1cHBsZW1lbnQgPSB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBzdWJ0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGltYWdlMSxcclxuICAgICAgaWQ6IERhdGUubm93KCksXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiZGF0YVwiLCBcIldlbGxuZXNzX2RhdGEuanNvblwiKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gZ2V0RGF0YSgpO1xyXG4gICAgZGF0YS5wdXNoKG5ld1N1cHBsZW1lbnQpO1xyXG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIkFkZGVkXCIsIGJvb2s6IG5ld1N1cHBsZW1lbnQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiZ2V0RGF0YSIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlRGF0YSIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZTEiLCJib2R5IiwibmV3U3VwcGxlbWVudCIsImlkIiwiRGF0ZSIsIm5vdyIsInB1c2giLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5IiwiYm9vayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/StaticData/WellnessStatic.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/StaticData/WellnessStatic.js"));
module.exports = __webpack_exports__;

})();